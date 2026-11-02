import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Sparkles,
  FileText,
  Sliders,
  Gamepad2,
  X,
  CheckCircle2,
} from 'lucide-react';
import { PROJECTS, Project } from '../data/portfolioData';
import { AiCostSimulator } from './AiCostSimulator';
import { MarbleGameSimulation } from './MarbleGameSimulation';

interface ProjectsSectionProps {
  selectedPersona: 'all' | 'product' | 'strategy' | 'engineering';
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ selectedPersona }) => {
  const [filter, setFilter] = useState<string>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Sync with persona if set, or manual filter
  const currentCategory = filter === 'all' && selectedPersona !== 'all' ? selectedPersona : filter;

  const filteredProjects = PROJECTS.filter((p) => {
    if (currentCategory === 'all') return true;
    if (currentCategory === 'product') return p.category === 'product';
    if (currentCategory === 'strategy') return p.category === 'strategy';
    if (currentCategory === 'engineering') return p.category === 'engineering' || p.category === 'hardware';
    if (currentCategory === 'hardware') return p.category === 'hardware';
    return true;
  });

  return (
    <section id="projects" className="py-16 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold tracking-wide">
              <span>Selected Case Studies</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Zero-to-One Products & Strategy</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 dark:text-white mt-1 font-display">
              Projects & Engineering Builds
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
              Concrete evidence of solving real friction across AI SaaS unit economics, fintech credit risk,
              shipped customer products, and hardware prototyping.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-850 rounded-xl">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                currentCategory === 'all'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Projects ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('product')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                currentCategory === 'product'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Product & AI SaaS
            </button>
            <button
              onClick={() => setFilter('strategy')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                currentCategory === 'strategy'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Strategy & Ops
            </button>
            <button
              onClick={() => setFilter('engineering')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                currentCategory === 'engineering'
                  ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Engineering & Hardware
            </button>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between transition-all hover:border-slate-300 dark:hover:border-slate-700 shadow-xs ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              <div>
                {/* Unboxed Metadata Line with typographic separators */}
                <div className="flex items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400 pb-2">
                  <div className="flex items-center gap-1.5 uppercase tracking-wider font-mono text-[11px]">
                    <span className="font-semibold text-blue-600 dark:text-blue-400">
                      {project.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{project.subtitle.split('·')[0]}</span>
                  </div>

                  {project.interactiveType && (
                    <span className="inline-flex items-center gap-1 text-[11px] text-amber-600 dark:text-amber-400 font-medium">
                      <Sparkles className="w-3 h-3" /> Interactive Demo
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 font-display">
                  {project.title}
                </h3>

                {/* Impact Metric Hero Callout */}
                <div className="mt-3 py-2 px-3 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                      {project.impactMetric}
                    </span>
                    <span className="text-xs text-slate-600 dark:text-slate-300 ml-2">
                      {project.impactLabel}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4 leading-relaxed">
                  {project.summary}
                </p>

                {/* Key Outcomes */}
                <div className="mt-4 space-y-1.5">
                  {project.keyOutcomes.slice(0, 2).map((outcome, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                      <span className="leading-snug">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: Tech Stack + Action buttons */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-3">
                {/* Tech chips without pills, subtle unboxed styling */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-slate-700 dark:text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-1">
                  <button
                    onClick={() => setActiveProjectModal(project)}
                    className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Deep Dive & Specs</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Live Site / Play Store"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.docLink && (
                      <a
                        href={project.docLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                        title="Attached Document Proof"
                      >
                        <FileText className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Embedded Interactive Highlight Sandbox */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold mb-2">
              <Sliders className="w-4 h-4" />
              <span>Interactive Model Routing Demo</span>
            </div>
            <AiCostSimulator />
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
              <Gamepad2 className="w-4 h-4" />
              <span>Interactive Game Mechanics Demo</span>
            </div>
            <MarbleGameSimulation />
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      {activeProjectModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveProjectModal(null)}
        >
          <div
            className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-6 border-b border-slate-200 dark:border-slate-800">
              <div>
                <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-mono uppercase tracking-wider">
                  <span>{activeProjectModal.category}</span>
                  <span>·</span>
                  <span>{activeProjectModal.subtitle}</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-1 font-display">
                  {activeProjectModal.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="p-2 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-slate-600 dark:text-slate-300">
              {/* Highlight Metric */}
              <div className="p-4 bg-slate-50 dark:bg-slate-850 rounded-xl border border-slate-200 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-2xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums">
                    {activeProjectModal.impactMetric}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">
                    {activeProjectModal.impactLabel}
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-500 dark:text-slate-400 block">Lead / Scope:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200 text-xs">
                    Sachin Agarwal
                  </span>
                </div>
              </div>

              {/* Challenge */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  01. The Challenge & Core Friction
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeProjectModal.challenge}
                </p>
              </div>

              {/* Solution */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
                  02. Strategic Approach & Execution
                </h4>
                <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                  {activeProjectModal.solution}
                </p>
              </div>

              {/* Outcomes */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  03. Measurable Outcomes & Quantitative Lift
                </h4>
                <ul className="space-y-2">
                  {activeProjectModal.keyOutcomes.map((outcome, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-800 dark:text-slate-200 leading-snug">
                        {outcome}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
                  04. Tooling & Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Links */}
            <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-850 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                {activeProjectModal.liveLink && (
                  <a
                    href={activeProjectModal.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 rounded-lg inline-flex items-center gap-1.5 shadow-sm"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Launch Live Site</span>
                  </a>
                )}
                {activeProjectModal.githubLink && (
                  <a
                    href={activeProjectModal.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 inline-flex items-center gap-1.5"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>GitHub Code</span>
                  </a>
                )}
                {activeProjectModal.docLink && (
                  <a
                    href={activeProjectModal.docLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 inline-flex items-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>View Proof Document</span>
                  </a>
                )}
              </div>
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-3 py-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
