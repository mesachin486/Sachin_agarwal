import React, { useState } from 'react';
import {
  Briefcase,
  GraduationCap,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Trophy,
} from 'lucide-react';
import { EXPERIENCES, Experience } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // First one expanded by default

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="experience" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="pb-8 border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
            <span>Career & Academic Journey</span>
            <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
            <span>2017 - Present</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-display">
            Work Experience & Education
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            A track record of translating complex technical systems into measurable business outcomes,
            combining elite engineering foundation from IIT Kharagpur with high-growth SaaS and fintech execution.
          </p>
        </div>

        {/* Experience List */}
        <div className="mt-8 space-y-4">
          {EXPERIENCES.map((exp, idx) => {
            const isExpanded = expandedIndex === idx;

            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 transition-all shadow-xs"
              >
                {/* Header Row */}
                <div
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer select-none"
                  onClick={() => toggleExpand(idx)}
                >
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                      <span className="font-semibold text-slate-900 dark:text-white text-base font-display">
                        {exp.company}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span className="inline-flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {exp.location}
                      </span>
                    </div>

                    <div className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                      {exp.role}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <button
                      aria-label="Toggle details"
                      className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-md transition-colors"
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Highlight Summary */}
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800/80 leading-relaxed font-medium">
                  {exp.highlight}
                </p>

                {/* Collapsible Detailed Bullets */}
                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800 space-y-2.5">
                    {exp.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}

                    {/* Skill tags */}
                    <div className="pt-3 flex flex-wrap gap-1.5">
                      {exp.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-2 py-0.5 text-[11px] font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Field & Campus Photo */}
                    {exp.photo && (
                      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-slate-50 dark:bg-slate-850 p-3.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
                        <img
                          src={exp.photo}
                          alt={exp.company}
                          className="w-full sm:w-44 h-48 sm:h-32 object-cover object-center rounded-lg border border-slate-200 dark:border-slate-700 shrink-0 shadow-xs"
                          referrerPolicy="no-referrer"
                        />
                        <div className="space-y-1">
                          <span className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
                            On-Campus & Research Documentation
                          </span>
                          <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                            {exp.photoCaption}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Education & Academic Rigor Section */}
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-3">
            <GraduationCap className="w-4 h-4" />
            <span>Academic Excellence & Foundation</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* IIT Kharagpur Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    Indian Institute of Technology (IIT) Kharagpur
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Integrated Master of Science in Applied Geology · 2019 - 2024
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-2.5 py-1 rounded-md border border-blue-200 dark:border-blue-900">
                  CGPA: 8.55 / 10
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>Ranked among Top 3 in Department of Geology & Geophysics across all 10 semesters.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Micro-Specialization in Innovation & Entrepreneurship.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Minor Coursework: Mathematics, Probability & Statistics, Operations Research.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>JEE Advanced & Mains 2019: Top 0.7% of 1.4 million candidates nationwide.</span>
                </div>
              </div>
            </div>

            {/* Jaipuria Vidyalaya Card */}
            <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 shadow-xs space-y-3">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white font-display">
                    Jaipuria Vidyalaya, Jaipur
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    Senior Secondary CBSE Board (Physics, Chemistry, Maths) · Class 12th
                  </p>
                </div>
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-md border border-emerald-200 dark:border-emerald-900">
                  Physics Topper
                </span>
              </div>

              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-center gap-2">
                  <Trophy className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span>1st Position in Mathematics Olympiad: Awarded Smt. Pushpa Jaipuria Trophy for Excellence.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Secured highest marks in Physics in high school graduating batch of 2018.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Athletics: Represented school in Inter-School Volleyball tournaments; active in Cricket and Badminton.</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                  <span>Silver Medalist in National Science & Math Olympiad Round 1 (ISO 2017).</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
