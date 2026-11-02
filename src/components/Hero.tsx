import React, { useState } from 'react';
import {
  ArrowRight,
  FolderOpen,
  FileDown,
  Mail,
  Linkedin,
  Github,
  Phone,
  Sparkles,
  Layers,
  Cpu,
  BarChart3,
  CheckCircle2,
} from 'lucide-react';
import { PERSONAL_INFO, HIGHLIGHT_METRICS } from '../data/portfolioData';

interface HeroProps {
  onOpenResumeModal: () => void;
  onSelectPersona: (persona: 'all' | 'product' | 'strategy' | 'engineering') => void;
  selectedPersona: 'all' | 'product' | 'strategy' | 'engineering';
}

export const Hero: React.FC<HeroProps> = ({
  onOpenResumeModal,
  onSelectPersona,
  selectedPersona,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'product' | 'strategy' | 'engineering'>(
    selectedPersona
  );

  const handleTabChange = (tab: 'all' | 'product' | 'strategy' | 'engineering') => {
    setActiveTab(tab);
    onSelectPersona(tab);
  };

  const personaContent = {
    all: {
      tag: 'Executive Overview',
      headline: 'Product Builder & Strategy Partner',
      sub: 'Bridging engineering mechanics, machine learning algorithms, and high-impact commercial P&L outcomes.',
      highlights: [
        'Integrated M.Sc. Applied Geology from IIT Kharagpur (CGPA 8.55/10, Top 3 Rank).',
        'Senior Analyst at AiDash / Schneider: Cut AI spend by 59% & governed 72 R&D tools ($22M/yr).',
        'Associate Consultant at Indus Insights: Built $7.2M fraud business case for $3.8B+ payments firm.',
        'Solo creator of Roll to Goal (3D mobile game on Play Store: 900+ downloads, 4.9★ rating).',
      ],
      primaryRole: 'Product Management · AI SaaS · Strategy & Operations',
    },
    product: {
      tag: 'Product Management & AI SaaS',
      headline: '0-to-1 Builder with AI Unit Economics',
      sub: 'Designing customer journeys, writing technical PRDs, and optimizing AI token spend & usage-based pricing.',
      highlights: [
        'Built & launched OurGuests (ourguests.in) rent SaaS with Claude Code, interviewing 20+ landlords.',
        'Wrote requirements & acceptance criteria for 4 utility market launches at AiDash (lifted conversion 300 bps).',
        'Standardized 3 B2B AI SaaS pricing matrices, eliminating quote friction for sales teams.',
        'Expert in prompt engineering, context window design, LLM agents, and MCP servers.',
      ],
      primaryRole: 'Associate Product Manager (APM) / AI Product Manager',
    },
    strategy: {
      tag: 'Strategy & Operations / Consulting',
      headline: 'Data-Backed P&L & Risk Decisioning',
      sub: 'High-conviction financial modeling, executive dashboards, A/B experiments, and vendor contract negotiations.',
      highlights: [
        'Built Python simulation of Global Decisioning System with 99.8% accuracy for $3.8B+ firm.',
        'Improved approval rates by 300 bps across 5,000+ attributes via 15+ root cause analyses.',
        'Managed supply contracts from 12 geospatial imagery vendors, renegotiating 0-18% commitments.',
        '5th in India (Top IIT team) out of 1,400+ teams in Indian Case Challenge (Tesla India Strategy).',
      ],
      primaryRole: 'Strategy & Operations / Risk Strategy / Consulting',
    },
    engineering: {
      tag: 'Engineering, Research & Algorithms',
      headline: 'First-Principles Technical Problem Solver',
      sub: 'From assembling remote control cars from scrap DC motors to training Random Forest ML models in Canada.',
      highlights: [
        'Awarded competitive $10K+ MITACS Globalink Fellowship at Western University, Canada.',
        'Trained 92% accurate mineral classification Random Forest model, cutting manual inspection 75%.',
        'General Secretary of Technology Affairs (IIT KGP): Elected by 800+ peers, led 23 student leaders.',
        'Published 3D mobile game Roll to Goal in Unity/C# with organic reach across 175+ countries.',
      ],
      primaryRole: 'Technical Product Management / Quantitative Analytics',
    },
  };

  const currentPersona = personaContent[activeTab];

  return (
    <section id="overview" className="relative pt-12 pb-16 overflow-hidden">
      {/* Background glow subtle geometry */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-blue-500/5 via-indigo-500/5 to-transparent pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            {/* Unboxed Kicker with subtle separator */}
            <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-medium tracking-wide">
              <span>IIT Kharagpur Alumnus '24</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>2.5+ Years in AI SaaS & Fintech</span>
              <span aria-hidden="true" className="text-slate-300 dark:text-slate-600">·</span>
              <span>Gurugram, India</span>
            </div>

            {/* Headline with balanced wrap */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] font-display text-balance">
              From Scrap-Motor Tinkering to B2B AI SaaS & Enterprise Strategy.
            </h1>

            {/* Narrative Prose */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
              I started by salvaging scrap DC motors from discarded appliances to engineer working
              RC cars—sparking a lifelong obsession with first-principles problem solving. That same
              instinct led me through an Integrated M.Sc. at{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">IIT Kharagpur</strong>,
              optimizing fraud decisioning engines at{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Indus Insights</strong>{' '}
              for a $3.8B+ US client, and governing $22M SaaS portfolios while cutting AI tooling burn by
              59% at{' '}
              <strong className="text-slate-900 dark:text-white font-semibold">Schneider Electric / AiDash</strong>.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-500 rounded-lg transition-colors inline-flex items-center gap-2 shadow-sm whitespace-nowrap"
              >
                <span>Explore Case Studies</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#credentials"
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-850 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-750 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <FolderOpen className="w-4 h-4 text-blue-500" />
                <span>Google Drive Vault</span>
              </a>

              <button
                onClick={onOpenResumeModal}
                className="px-4 py-2.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors inline-flex items-center gap-2 whitespace-nowrap"
              >
                <FileDown className="w-4 h-4 text-slate-500" />
                <span>Download CV (4 Versions)</span>
              </button>
            </div>

            {/* Direct Contact Bar */}
            <div className="pt-2 border-t border-slate-200/80 dark:border-slate-800 flex flex-wrap items-center gap-y-2 gap-x-5 text-xs text-slate-500 dark:text-slate-400">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-blue-500" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
              <a
                href={`tel:${PERSONAL_INFO.phone}`}
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-500" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                <span>LinkedIn</span>
              </a>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-slate-700 dark:text-slate-300" />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Right Column: Recruiter Persona Switcher & Executive Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="h-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-semibold text-slate-900 dark:text-white font-display">
                      Recruiter Navigation Filter
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400">Select candidate perspective</span>
                </div>

                {/* Segmented Persona Buttons */}
                <div className="grid grid-cols-2 gap-1.5 p-1 bg-slate-200/70 dark:bg-slate-850 rounded-xl mt-4">
                  <button
                    onClick={() => handleTabChange('all')}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap text-center ${
                      activeTab === 'all'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Full Profile
                  </button>
                  <button
                    onClick={() => handleTabChange('product')}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap text-center ${
                      activeTab === 'product'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Product & AI SaaS
                  </button>
                  <button
                    onClick={() => handleTabChange('strategy')}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap text-center ${
                      activeTab === 'strategy'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Strategy & Ops
                  </button>
                  <button
                    onClick={() => handleTabChange('engineering')}
                    className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap text-center ${
                      activeTab === 'engineering'
                        ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-xs'
                        : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                    }`}
                  >
                    Engineering & ML
                  </button>
                </div>

                {/* Persona Body */}
                <div className="mt-5 space-y-3">
                  <div>
                    <span className="text-[11px] font-mono uppercase text-blue-600 dark:text-blue-400 font-semibold tracking-wider">
                      {currentPersona.tag}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white font-display mt-0.5">
                      {currentPersona.headline}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                      {currentPersona.sub}
                    </p>
                  </div>

                  <div className="space-y-2 pt-2">
                    {currentPersona.highlights.map((h, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="leading-snug">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Target Role Box */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs">
                <div>
                  <span className="text-[11px] text-slate-400 block">Best Suited Roles:</span>
                  <span className="font-semibold text-slate-800 dark:text-slate-200">
                    {currentPersona.primaryRole}
                  </span>
                </div>
                <a
                  href="#projects"
                  className="text-xs text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center gap-1"
                >
                  View Work <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Proof Metrics Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {HIGHLIGHT_METRICS.map((metric, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white font-mono tabular-nums tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-200">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {metric.context}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
