import React, { useRef, useEffect, useState } from 'react';
import { Play, RotateCcw, Award, Globe, Star } from 'lucide-react';

export const MarbleGameSimulation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [reachedGoal, setReachedGoal] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  // Marble state
  const stateRef = useRef({
    x: 160,
    y: 260,
    vx: 0,
    vy: 0,
    radius: 12,
    goalX: 160,
    goalY: 40,
    goalRadius: 18,
    stars: [
      { x: 160, y: 190, collected: false },
      { x: 110, y: 130, collected: false },
      { x: 210, y: 90, collected: false },
    ],
    obstacles: [
      { x: 80, y: 160, w: 70, h: 12, speed: 1.2, dir: 1, minX: 40, maxX: 120 },
      { x: 170, y: 110, w: 70, h: 12, speed: 1.5, dir: -1, minX: 130, maxX: 210 },
    ],
    tiltX: 0,
    tiltY: 0,
  });

  const resetGame = () => {
    stateRef.current.x = 160;
    stateRef.current.y = 260;
    stateRef.current.vx = 0;
    stateRef.current.vy = 0;
    stateRef.current.stars.forEach((s) => (s.collected = false));
    setScore(0);
    setReachedGoal(false);
    setGameOver(false);
    setIsPlaying(true);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isPlaying) return;
      if (e.key === 'ArrowLeft' || e.key === 'a') stateRef.current.tiltX = -2.5;
      if (e.key === 'ArrowRight' || e.key === 'd') stateRef.current.tiltX = 2.5;
      if (e.key === 'ArrowUp' || e.key === 'w') stateRef.current.tiltY = -2.5;
      if (e.key === 'ArrowDown' || e.key === 's') stateRef.current.tiltY = 2.5;
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'ArrowRight', 'a', 'd'].includes(e.key)) stateRef.current.tiltX = 0;
      if (['ArrowUp', 'ArrowDown', 'w', 's'].includes(e.key)) stateRef.current.tiltY = 0;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Track platform background
      const grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
      grad.addColorStop(0, '#0f172a');
      grad.addColorStop(1, '#1e293b');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      for (let x = 0; x < canvas.width; x += 20) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = 0; y < canvas.height; y += 20) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Track boundaries
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = 3;
      ctx.strokeRect(30, 20, canvas.width - 60, canvas.height - 40);

      // Goal target
      const g = stateRef.current;
      ctx.beginPath();
      ctx.arc(g.goalX, g.goalY, g.goalRadius, 0, Math.PI * 2);
      ctx.fillStyle = '#10b981';
      ctx.fill();
      ctx.strokeStyle = '#6ee7b7';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.fillStyle = '#ffffff';
      ctx.font = '10px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('GOAL', g.goalX, g.goalY + 3);

      // Stars
      g.stars.forEach((star) => {
        if (!star.collected) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, 6, 0, Math.PI * 2);
          ctx.fillStyle = '#f59e0b';
          ctx.fill();
          ctx.strokeStyle = '#fef3c7';
          ctx.stroke();
        }
      });

      // Moving Obstacles
      ctx.fillStyle = '#f43f5e';
      g.obstacles.forEach((obs) => {
        if (isPlaying) {
          obs.x += obs.speed * obs.dir;
          if (obs.x < obs.minX || obs.x > obs.maxX) obs.dir *= -1;
        }
        ctx.beginPath();
        ctx.roundRect(obs.x, obs.y, obs.w, obs.h, 4);
        ctx.fill();
      });

      // Physics update if playing
      if (isPlaying && !reachedGoal && !gameOver) {
        // Friction and velocity
        g.vx += g.tiltX * 0.15;
        g.vy += g.tiltY * 0.15;
        g.vx *= 0.94;
        g.vy *= 0.94;

        g.x += g.vx;
        g.y += g.vy;

        // Wall collisions
        const minX = 30 + g.radius;
        const maxX = canvas.width - 30 - g.radius;
        const minY = 20 + g.radius;
        const maxY = canvas.height - 20 - g.radius;

        if (g.x < minX) {
          g.x = minX;
          g.vx *= -0.5;
        }
        if (g.x > maxX) {
          g.x = maxX;
          g.vx *= -0.5;
        }
        if (g.y < minY) {
          g.y = minY;
          g.vy *= -0.5;
        }
        if (g.y > maxY) {
          g.y = maxY;
          g.vy *= -0.5;
        }

        // Star collection
        g.stars.forEach((star) => {
          if (!star.collected) {
            const dist = Math.hypot(g.x - star.x, g.y - star.y);
            if (dist < g.radius + 6) {
              star.collected = true;
              setScore((s) => s + 100);
            }
          }
        });

        // Obstacle collisions
        g.obstacles.forEach((obs) => {
          if (
            g.x + g.radius > obs.x &&
            g.x - g.radius < obs.x + obs.w &&
            g.y + g.radius > obs.y &&
            g.y - g.radius < obs.y + obs.h
          ) {
            setGameOver(true);
            setIsPlaying(false);
          }
        });

        // Goal reached
        const goalDist = Math.hypot(g.x - g.goalX, g.y - g.goalY);
        if (goalDist < g.radius + g.goalRadius - 5) {
          setReachedGoal(true);
          setIsPlaying(false);
          setScore((s) => s + 500);
        }
      }

      // Draw Marble with 3D gradient reflection
      const marbleGrad = ctx.createRadialGradient(
        g.x - 3,
        g.y - 3,
        1,
        g.x,
        g.y,
        g.radius
      );
      marbleGrad.addColorStop(0, '#ffffff');
      marbleGrad.addColorStop(0.3, '#cbd5e1');
      marbleGrad.addColorStop(1, '#475569');

      ctx.save();
      ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
      ctx.shadowBlur = 6;
      ctx.shadowOffsetY = 3;
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.radius, 0, Math.PI * 2);
      ctx.fillStyle = marbleGrad;
      ctx.fill();
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, reachedGoal, gameOver]);

  return (
    <div className="bg-slate-950 text-white p-5 rounded-xl border border-slate-800 shadow-xl space-y-4">
      {/* Top Banner */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div>
          <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
            Solo Unity 3D Project
          </span>
          <h4 className="text-base font-bold text-white font-display">
            Roll to Goal: Play in Browser
          </h4>
        </div>
        <div className="flex items-center gap-2 text-xs font-mono">
          <span className="text-slate-400">Score:</span>
          <span className="font-bold text-amber-400 text-sm">{score}</span>
        </div>
      </div>

      {/* Canvas Area */}
      <div className="relative flex justify-center items-center bg-slate-900 rounded-lg overflow-hidden border border-slate-800">
        <canvas
          ref={canvasRef}
          width={320}
          height={300}
          className="touch-none select-none max-w-full"
          onPointerDown={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const clickY = e.clientY - rect.top;
            const dx = clickX - stateRef.current.x;
            const dy = clickY - stateRef.current.y;
            stateRef.current.tiltX = Math.sign(dx) * 2.5;
            stateRef.current.tiltY = Math.sign(dy) * 2.5;
          }}
          onPointerUp={() => {
            stateRef.current.tiltX = 0;
            stateRef.current.tiltY = 0;
          }}
        />

        {/* Overlay screens */}
        {!isPlaying && !reachedGoal && !gameOver && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center">
            <p className="text-xs text-slate-300 mb-2">
              Use arrow keys, WASD, or tap & drag to roll the marble into the Goal.
            </p>
            <button
              onClick={resetGame}
              className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Start Game</span>
            </button>
          </div>
        )}

        {reachedGoal && (
          <div className="absolute inset-0 bg-emerald-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center">
            <Award className="w-8 h-8 text-amber-400 mb-1" />
            <h5 className="text-base font-bold text-emerald-200">Goal Reached!</h5>
            <p className="text-xs text-emerald-300 mt-1 mb-3">
              Total Score: {score} pts
            </p>
            <button
              onClick={resetGame}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Play Again</span>
            </button>
          </div>
        )}

        {gameOver && (
          <div className="absolute inset-0 bg-rose-950/85 backdrop-blur-xs flex flex-col items-center justify-center p-4 text-center">
            <h5 className="text-base font-bold text-rose-200">Collision!</h5>
            <p className="text-xs text-rose-300 mt-1 mb-3">
              Obstacle hit. Try avoiding the red bars!
            </p>
            <button
              onClick={resetGame}
              className="px-3.5 py-1.5 text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 rounded-lg transition-colors inline-flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Retry</span>
            </button>
          </div>
        )}
      </div>

      {/* Real Store Verification Strip */}
      <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
          <div className="flex items-center justify-center gap-1 text-amber-400 font-bold">
            <Star className="w-3 h-3 fill-current" /> 4.9 / 5
          </div>
          <span className="text-[10px] text-slate-400">60+ Reviews</span>
        </div>

        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
          <div className="text-white font-bold">900+</div>
          <span className="text-[10px] text-slate-400">Downloads</span>
        </div>

        <div className="bg-slate-900/90 p-2 rounded-lg border border-slate-800">
          <div className="flex items-center justify-center gap-1 text-cyan-400 font-bold">
            <Globe className="w-3 h-3" /> 175+
          </div>
          <span className="text-[10px] text-slate-400">Countries</span>
        </div>
      </div>
    </div>
  );
};
