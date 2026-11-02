import React, { useState } from 'react';
import { DollarSign, TrendingDown, Users, ShieldCheck, RefreshCw } from 'lucide-react';

export const AiCostSimulator: React.FC = () => {
  const [users, setUsers] = useState<number>(110);
  const [tasksPerUserDay, setTasksPerUserDay] = useState<number>(24);
  const [policyEnabled, setPolicyEnabled] = useState<boolean>(true);

  // Baseline cost without governance: users defaulting to heavy flagship models (~$0.045 / task)
  const baselineCostPerTask = 0.045;
  // Governed cost with tiered routing: routing lightweight / boilerplate tasks to Haiku/Sonnet (~$0.0185 / task)
  const governedCostPerTask = 0.0185;

  const currentCostPerTask = policyEnabled ? governedCostPerTask : baselineCostPerTask;
  const dailySpend = users * tasksPerUserDay * currentCostPerTask;
  const monthlySpend = dailySpend * 22; // 22 working days
  const baselineMonthlySpend = users * tasksPerUserDay * baselineCostPerTask * 22;
  const monthlySavings = baselineMonthlySpend - monthlySpend;
  const percentageCut = baselineMonthlySpend > 0 ? (monthlySavings / baselineMonthlySpend) * 100 : 0;

  // $106,000 contract budget runway
  const contractBudget = 106000;
  const runwayMonths = monthlySpend > 0 ? (contractBudget / monthlySpend).toFixed(1) : '∞';

  return (
    <div className="bg-slate-900 text-white p-5 sm:p-6 rounded-xl border border-slate-800 shadow-xl space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
              Interactive Prototype
            </span>
            <span className="text-slate-500">·</span>
            <span className="text-xs text-slate-400">Enterprise AI Unit Economics</span>
          </div>
          <h4 className="text-base font-bold text-white mt-0.5 font-display">
            AiDash AI Tooling Governance Simulator
          </h4>
        </div>

        <button
          onClick={() => setPolicyEnabled(!policyEnabled)}
          className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap self-start sm:self-auto ${
            policyEnabled
              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 hover:bg-emerald-500/30'
              : 'bg-rose-500/20 text-rose-300 border border-rose-500/40 hover:bg-rose-500/30'
          }`}
        >
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>{policyEnabled ? 'Governance Policy: ACTIVE (-59%)' : 'Governance: UNRESTRICTED'}</span>
        </button>
      </div>

      {/* Sliders */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-blue-400" /> Active Tooling Seats
            </span>
            <span className="font-mono font-semibold text-white">{users} users</span>
          </div>
          <input
            type="range"
            min={20}
            max={250}
            step={5}
            value={users}
            onChange={(e) => setUsers(Number(e.target.value))}
            className="w-full accent-blue-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>20</span>
            <span>110 (Actual AiDash Baseline)</span>
            <span>250</span>
          </div>
        </div>

        <div className="space-y-1.5">
          <div className="flex justify-between text-slate-300">
            <span className="inline-flex items-center gap-1.5">
              <RefreshCw className="w-3.5 h-3.5 text-cyan-400" /> Prompts / Tasks Per User / Day
            </span>
            <span className="font-mono font-semibold text-white">{tasksPerUserDay} tasks</span>
          </div>
          <input
            type="range"
            min={10}
            max={60}
            step={2}
            value={tasksPerUserDay}
            onChange={(e) => setTasksPerUserDay(Number(e.target.value))}
            className="w-full accent-cyan-500 bg-slate-800 rounded-lg cursor-pointer h-1.5"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-mono">
            <span>10</span>
            <span>24 avg</span>
            <span>60</span>
          </div>
        </div>
      </div>

      {/* Real-time Math Output */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
          <p className="text-[11px] text-slate-400">Daily Spend</p>
          <p className="text-base font-bold text-white font-mono mt-0.5 tabular-nums">
            ${dailySpend.toFixed(2)}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            ${(currentCostPerTask * 100).toFixed(2)}¢ avg / task
          </p>
        </div>

        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
          <p className="text-[11px] text-slate-400">Monthly Run-Rate</p>
          <p className="text-base font-bold text-white font-mono mt-0.5 tabular-nums">
            ${monthlySpend.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">22 billable days</p>
        </div>

        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
          <p className="text-[11px] text-slate-400">Monthly Savings</p>
          <p className={`text-base font-bold font-mono mt-0.5 tabular-nums ${policyEnabled ? 'text-emerald-400' : 'text-slate-500'}`}>
            ${monthlySavings.toLocaleString(undefined, { maximumFractionDigits: 0 })}
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">
            {policyEnabled ? `${percentageCut.toFixed(0)}% budget reclaimed` : 'No savings'}
          </p>
        </div>

        <div className="bg-slate-800/80 p-3 rounded-lg border border-slate-700/60">
          <p className="text-[11px] text-slate-400">Contract Runway</p>
          <p className="text-base font-bold text-blue-400 font-mono mt-0.5 tabular-nums">
            {runwayMonths} mos
          </p>
          <p className="text-[10px] text-slate-400 mt-0.5">$106K total budget</p>
        </div>
      </div>

      <div className="text-xs text-slate-400 bg-slate-950/60 p-3 rounded-lg border border-slate-800 leading-relaxed">
        <span className="text-slate-200 font-medium">Model Access Policy Rule:</span> Routine syntax completion and boilerplate generation route through cost-optimized Claude 3.5 Sonnet / Haiku tiers, reserving heavy frontier models strictly for architectural queries. This extended AiDash’s contract runway from a critical 4-month burnout to a healthy 10+ months.
      </div>
    </div>
  );
};
