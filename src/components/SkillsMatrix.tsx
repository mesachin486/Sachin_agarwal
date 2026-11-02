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

        {/* Global Exposure & Field Documentation Gallery */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
            <span>Global Exposure & Field Moments</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>International Research & Travel</span>
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white font-display mb-6">
            Research Fellowship & Global Perspective
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Western University Fellowship Photo */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs flex flex-col">
              <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src="/assets/aistudio/IMG20230801153112_37858682.jpg"
                  alt="Sachin at Western University, Ontario, Canada"
                  className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider">
                    <span>Ontario, Canada</span>
                    <span>·</span>
                    <span>MITACS Globalink Fellow</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mt-1">
                    Western University (University College)
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Awarded a competitive international fellowship ($10,000+ stipend) to conduct machine learning
                    research on petrographic image classification, reducing analysis time by 75%.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 font-mono">
                  London, Ontario · Summer Research Residency
                </div>
              </div>
            </div>

            {/* International Skyline & Travel Photo */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-xs flex flex-col">
              <div className="h-64 sm:h-72 overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                <img
                  src="/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.36.54_PM_6782aef8.jpeg"
                  alt="Sachin Agarwal during international visits"
                  className="w-full h-full object-cover object-center hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider">
                    <span>International Travel</span>
                    <span>·</span>
                    <span>Global Perspective</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white font-display mt-1">
                    Urban Exploration & Global Tech Mindset
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                    Engaging with international architectural hubs and multicultural environments, bringing a broad,
                    curious worldview to product thinking, team collaboration, and user empathy.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-500 font-mono">
                  Waterfront Skyline · North American Engagements
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
