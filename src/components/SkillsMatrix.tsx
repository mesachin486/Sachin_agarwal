import React from 'react';
import {
  Compass,
  Cpu,
  TrendingUp,
  Award,
  Activity,
  CheckCircle2,
} from 'lucide-react';
import { SKILLS_DATA } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
            <span>Competencies & Extra-Curriculars</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>Multidisciplinary Skillset</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-display">
            Skills, Leadership & Athletics
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            A versatile toolkit spanning technical product execution, agentic AI workflows, rigorous
            consulting problem-solving, elected student governance, and competitive collegiate athletics.
          </p>
        </div>

        {/* 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {/* 1. Product Strategy & Execution */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                <Compass className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Product & Discovery
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                From customer empathy to PRDs and high-velocity launches.
              </p>

              <div className="mt-5 space-y-2">
                {SKILLS_DATA.product.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2. AI, LLMs & Modern Tech */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-900/60 flex items-center justify-center text-purple-600 dark:text-purple-400 mb-4">
                <Cpu className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                AI & Technical Stack
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Agentic workflows, model governance & data pipelines.
              </p>

              <div className="mt-5 space-y-2">
                {SKILLS_DATA.aiAndTech.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3. Strategy & Operations */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4">
                <TrendingUp className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Strategy & Operations
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Quantitative risk analytics, pricing and executive governance.
              </p>

              <div className="mt-5 space-y-2">
                {SKILLS_DATA.strategyAndOps.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Leadership & Competitive Athletics */}
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-9 h-9 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900/60 flex items-center justify-center text-amber-600 dark:text-amber-400 mb-4">
                <Activity className="w-5 h-5" />
              </div>

              <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                Leadership & Sports
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Elected student governance, community service & athletics.
              </p>

              <div className="mt-5 space-y-2">
                {SKILLS_DATA.leadershipAndSports.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
