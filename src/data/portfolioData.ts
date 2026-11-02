export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  category: 'product' | 'strategy' | 'engineering';
  highlight: string;
  bullets: string[];
  skills: string[];
  photo?: string;
  photoCaption?: string;
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'product' | 'strategy' | 'engineering' | 'hardware';
  featured: boolean;
  impactMetric: string;
  impactLabel: string;
  summary: string;
  challenge: string;
  solution: string;
  keyOutcomes: string[];
  techStack: string[];
  liveLink?: string;
  githubLink?: string;
  docLink?: string;
  photo?: string;
  photoCaption?: string;
  interactiveType?: 'ai-cost' | 'marble-game' | 'fraud-sim' | 'cad-viewer';
}

export interface CertificateDoc {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'academic' | 'internship' | 'leadership' | 'competition' | 'project';
  description: string;
  filePath: string;
  fileType: 'pdf' | 'image';
  credentialNumber?: string;
}

export const PERSONAL_INFO = {
  name: 'Sachin Agarwal',
  title: 'Product Management & AI SaaS Strategy',
  secondaryTitle: 'Ex-Indus Insights · IIT Kharagpur 2024 · Ex-AiDash (Schneider Electric)',
  email: 'mesachin486@gmail.com',
  altEmail: 'mesachin486@iitkgp.ac.in',
  phone: '+91-9982644919',
  location: 'Gurugram, India',
  linkedin: 'https://linkedin.com/in/sachin-agarwal-813220146/',
  github: 'https://github.com/mesachin486',
  avatarUrl: '/assets/aistudio/WhatsApp_Image_2026-10-28_at_12.26.28_AM_88c8d7fc.jpeg',
  westernCanadaPhoto: '/assets/aistudio/IMG20230801153112_37858682.jpg',
  skylinePhoto: '/assets/aistudio/WhatsApp_Image_2026-11-02_at_10.36.54_PM_6782aef8.jpeg',
  summary:
    'Product and strategy professional from IIT Kharagpur with 2.5+ years building across AI SaaS and fintech risk strategy. Experienced in AI unit economics, model governance, pricing strategy, A/B experimentation, and building customer-centric products from zero to one. Passionate about solving real-world friction—from hands-on scrap-motor hardware prototypes to enterprise data decisioning systems.',
};

export const HIGHLIGHT_METRICS = [
  {
    value: '59%',
    label: 'AI Spend Reduced',
    context: 'Via model governance across 110 enterprise seats',
  },
  {
    value: '$7.2M',
    label: 'Annual Revenue Impact',
    context: 'Fraud policy business case for $3.8B+ payments firm',
  },
  {
    value: '+300 bps',
    label: 'Approval Rate Lift',
    context: '15+ root cause analyses on 5,000+ transaction attributes',
  },
  {
    value: '8.55 / 10',
    label: 'IIT Kharagpur CGPA',
    context: 'Ranked Top 3 in Department across all 10 semesters',
  },
  {
    value: '900+',
    label: '3D Game Downloads',
    context: '4.9/5 rating across 175+ countries on Google Play',
  },
  {
    value: 'Top 0.7%',
    label: 'JEE Advanced Rank',
    context: 'Selected among 1.4 million national applicants',
  },
];

export const RESUMES = [
  {
    id: 'product',
    label: 'Product Management CV',
    description: 'Focused on AI SaaS, PRDs, AI Unit Economics, GTM, and user-centric launches.',
    path: '/assets/aistudio/Sachin_Agarwal_CV_Product_486128c6.pdf',
    fileName: 'Sachin_Agarwal_CV_Product.pdf',
    targetRole: 'APM / PM / AI Product Manager',
  },
  {
    id: 'strategy',
    label: 'Strategy & Operations CV',
    description: 'Focused on SaaS governance, vendor negotiations, financial modeling, and risk strategy.',
    path: '/assets/aistudio/Sachin_Agarwal_Resume_5c9a919d.pdf',
    fileName: 'Sachin_Agarwal_Resume_Strategy_Ops.pdf',
    targetRole: 'Strategy & Ops / Chief of Staff / Consulting',
  },
  {
    id: 'shiprocket',
    label: 'APM Specialist CV',
    description: 'Tailored for high-growth tech firms with emphasis on product discovery and data analytics.',
    path: '/assets/aistudio/Sachin_Agarwal_Resume_Shiprocket_APM_94364809.pdf',
    fileName: 'Sachin_Agarwal_Resume_APM.pdf',
    targetRole: 'Associate Product Manager',
  },
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'AiDash (Schneider Electric)',
    role: 'Senior Analyst - Strategy & Ops (Product & Tech team)',
    location: 'Gurugram, India',
    period: 'Aug 2025 - Present',
    category: 'strategy',
    highlight: 'Governed 72 R&D SaaS tools ($22M/yr) and cut daily AI tooling costs by 59% for 110 engineers.',
    bullets: [
      'Drove AI tooling cost strategy for a $106K, 110-license contract via model governance, cutting daily spend by 59%.',
      'Built a usage forecasting model predicting AI tool budget run-out 3+ months ahead, informing renewal and ROI decisions.',
      'Governed 72 R&D SaaS tools ($22M/year in annual contracts), defining usage KPIs and biweekly executive renewal dashboards.',
      'Managed data supply & vendor strategy for 12 geospatial imagery vendors for core AI products, flagging 0-18% utilized commitments for renegotiation.',
      'Wrote PRDs and launched 4 regional market-specific demo scenarios with Product & Eng, expected to lift sales conversion by 300 bps.',
      'Standardized pricing inputs for 3 AI SaaS products, cutting quote friction and lifting conversion by 500 bps.',
      'Documented end-to-end SOPs for AI Data Ops procurement and processing, aligning 25+ stakeholders across 6 cross-functional teams.',
    ],
    skills: ['AI Unit Economics', 'Model Governance', 'SaaS Pricing', 'Predictive Forecasting', 'Vendor Strategy', 'PRDs'],
  },
  {
    company: 'Indus Insights & Analytics Pvt. Ltd.',
    role: 'Associate Consultant II',
    location: 'Gurugram, India',
    period: 'May 2024 - Aug 2025',
    category: 'strategy',
    highlight: 'Built $7.2M fraud policy business case and lifted approval rates 300 bps for a $3.8B+ US payments giant.',
    bullets: [
      'Partnered directly with the credit risk strategy team of a US-listed payments and spend management firm with $3.8B+ revenue.',
      'Built a business case for fraud policy changes projected to generate $7.2M annual revenue against $2.7M bad debt in Year 1.',
      'Improved approval rates by 300 bps through 15+ comprehensive root cause analyses across 5,000+ transaction attributes.',
      'Designed and executed A/B tests on decisioning flows, rigorously measuring approval and fraud rates in treatment vs control cohorts.',
      'Built a Python simulation of the Global Decisioning System (GDS) with 99.8% accuracy to validate policy logic prior to production release.',
      'Automated 9+ Alteryx data workflows, eliminating 90% manual effort and adding failure alerts that cut issue resolution time by 50%.',
      'Owned data quality checks for fraud model feeds to partner Ekata, ensuring clean downstream feature pipelines.',
    ],
    skills: ['Credit Risk Strategy', 'A/B Testing', 'Python Simulation', 'Alteryx ETL', 'SQL', 'Fraud Modeling'],
  },
  {
    company: 'Western University',
    role: 'Graduate Research Intern (MITACS Globalink Fellow)',
    location: 'Ontario, Canada',
    period: 'May 2023 - Jul 2023',
    category: 'engineering',
    highlight: 'Awarded competitive $10K+ MITACS Fellowship; built 92% accurate Random Forest mineral classification model.',
    bullets: [
      'Awarded prestigious competitive international fellowship with $10K+ stipend for exceptional academic research performance.',
      'Trained and evaluated a Random Forest machine learning model on large-scale labelled mineral micro-imagery data.',
      'Achieved 92% classification accuracy, cutting manual petrographic inspection time by 75%.',
    ],
    skills: ['Machine Learning', 'Random Forest', 'Python', 'Scikit-learn', 'Image Classification', 'Data Science'],
    photo: '/assets/aistudio/IMG20230801153112_37858682.jpg',
    photoCaption: 'Sachin outside University College at Western University, London, Ontario during the MITACS Globalink Research Fellowship.',
  },
  {
    company: 'School of Water Resources, IIT Kharagpur',
    role: 'Machine Learning Research Intern',
    location: 'Kharagpur, India',
    period: 'Dec 2021 - May 2022',
    category: 'engineering',
    highlight: 'Developed spectral deep learning algorithms for river water quality with Prof B. Sahoo & Debi Prasad Sahoo.',
    bullets: [
      'Collaborated on high-frequency discharge and river water quality estimation in scantily gauged river basins.',
      'Formulated spectral algorithms estimating optically active constituents: Suspended Solids, Turbidity, and Chlorophyll.',
      'Benchmarked individual ML/DL models against baseline hydrological measurements.',
    ],
    skills: ['Deep Learning', 'Spectral Algorithms', 'Hydrology Modeling', 'Python', 'NumPy'],
  },
  {
    company: 'Mobifly (BrainBox Network)',
    role: 'Software Developer Trainee Intern',
    location: 'Gurugram, India',
    period: 'Aug 2021 - Oct 2021',
    category: 'engineering',
    highlight: 'Shipped full-stack Django & Firebase CRUD web portal synchronized with mobile field agents.',
    bullets: [
      'Developed web application backend in Django framework to execute real-time C.R.U.D. operations on Firebase.',
      'Engineered responsive web interfaces using HTML5, CSS3, JavaScript, and Python.',
      'Synchronized web database with dynamic real-time telemetry generated from mobile Android devices.',
    ],
    skills: ['Django', 'Python', 'Firebase', 'JavaScript', 'REST APIs', 'CRUD Operations'],
  },
  {
    company: 'Surginatal',
    role: 'Technical Product Manager - Trainee',
    location: 'Jaipur, India',
    period: 'May 2021 - Jul 2021',
    category: 'product',
    highlight: 'Built SQL database of 800+ items, reducing stockouts by 20% and driving 15% increase in repeat orders.',
    bullets: [
      'Engineered structured SQL database of 800+ medical supplies and analyzed sales velocity patterns.',
      'Reduced stockouts by 20% through automated reorder levels and enhanced supply chain availability.',
      'Shipped data-driven product catalog enhancements that boosted repeat purchases by 15% and increased customer satisfaction.',
    ],
    skills: ['Product Discovery', 'SQL Database', 'Inventory Optimization', 'E-Commerce Analytics', 'User Experience'],
  },
  {
    company: 'Shastrarth',
    role: 'Data Analytics Intern',
    location: 'Remote',
    period: 'Dec 2020 - Jan 2021',
    category: 'product',
    highlight: 'Surveyed 50,000 users worldwide to analyze user behavior for early-stage digital social science platform.',
    bullets: [
      'Conducted exploratory data analysis on a global cohort of 50,000 respondents regarding digital relationship preferences.',
      'Drafted standard operating procedures (SOPs) and structured interview question banks for customer discovery.',
    ],
    skills: ['User Research', 'Survey Analysis', 'Customer Discovery', 'Data Analytics'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'aidash-governance',
    title: 'Enterprise AI Governance & Tooling Unit Economics',
    subtitle: 'Schneider Electric (AiDash Inc) · Aug 2025 - Present',
    category: 'product',
    featured: true,
    impactMetric: '-59%',
    impactLabel: 'Daily AI Tooling Spend',
    summary:
      'Engineered model access policies, tiered routing, and predictive spend forecasting for 110 software engineers and analysts, slashing AI burn without hurting developer throughput.',
    challenge:
      'Engineers were defaulting to high-cost LLMs (Opus / flagship models) for trivial tasks, risking a $106K tooling contract blowout in under 4 months with zero usage visibility.',
    solution:
      'Built a per-user usage tracking and forecasting model predicting budget run-out 3+ months ahead. Instituted tiered model access policy matching task complexity to cost-effective models (Claude 3.5 Sonnet / Haiku), paired with weekly executive ROI scorecards.',
    keyOutcomes: [
      'Cut daily AI spend by 59% within 3 weeks of policy deployment.',
      'Forecast model predicted renewal milestones within 4% accuracy margin.',
      'Governed 72 R&D tools ($22M annual spend) with biweekly executive review cadences.',
      'Standardized pricing & quote mechanics across 3 B2B products (projected +500 bps conversion).',
    ],
    techStack: ['AI Unit Economics', 'Usage-Based Pricing', 'Model Routing', 'Forecasting', 'Tableau', 'Executive Reporting'],
    interactiveType: 'ai-cost',
  },
  {
    id: 'ourguests-app',
    title: 'OurGuests (ourguests.in) - Rental Property SaaS',
    subtitle: 'Founder / Product Builder · Live in Production',
    category: 'product',
    featured: true,
    impactMetric: '20+ Landlords',
    impactLabel: 'User Research Cohort',
    summary:
      'Built and shipped a live zero-to-one rent-management web application with Claude Code. Conducted qualitative interviews with 20+ property owners to design intuitive tenant tracking.',
    challenge:
      'Independent landlords in urban India struggle with disparate WhatsApp messages, fragmented UPI payment screenshots, and lack of ledger history for security deposits.',
    solution:
      'Ran problem discovery across 20+ landlords. Scoped an MVP targeting automated payment reconciliation, tenant agreement tracking, and one-tap WhatsApp payment reminders. Prototyped and shipped end-to-end using Claude Code and modern React.',
    keyOutcomes: [
      'Live web app deployed at ourguests.in with zero server bloat.',
      'Streamlined onboarding flow from 12 steps down to under 2 minutes.',
      'Designed agentic workflows and Model Context Protocol (MCP) servers for tenant automation.',
    ],
    techStack: ['Claude Code', 'React', 'Agentic AI', 'MCP Servers', 'User Discovery', 'REST APIs', 'Full Lifecycle'],
    liveLink: 'https://ourguests.in',
  },
  {
    id: 'indus-credit-risk',
    title: 'Fintech Credit Risk & Decisioning Flow Simulation',
    subtitle: 'Indus Insights & Analytics · May 2024 - Aug 2025',
    category: 'strategy',
    featured: true,
    impactMetric: '$7.2M',
    impactLabel: 'Annual Revenue Projected',
    summary:
      'Formulated fraud policy changes and developed a 99.8% accurate Python simulation of the Global Decisioning System (GDS) for a $3.8B+ US payments enterprise.',
    challenge:
      'The client experienced elevated false positive declines in high-value business credit lines, losing legitimate revenue while fraud vectors evolved rapidly.',
    solution:
      'Executed 15+ root cause analyses across 5,000+ customer attributes. Designed treatment/control A/B test experiments. Replicated the production credit engine into an offline Python GDS simulation to stress-test policy parameters before live rollouts.',
    keyOutcomes: [
      'Lifted overall transaction approvals by 300 bps across business portfolio.',
      'Delivered business case yielding $7.2M revenue vs $2.7M bad debt allowance in Y1.',
      'Achieved 99.8% simulation alignment with live decisioning engine before launch.',
      'Optimized 9+ Alteryx pipelines, cutting processing effort by 90% with instant alerting.',
    ],
    techStack: ['Python GDS Simulation', 'Credit Policy', 'A/B Testing', 'Alteryx', 'SQL', 'Ekata API', 'Root Cause Analysis'],
    interactiveType: 'fraud-sim',
  },
  {
    id: 'roll-to-goal',
    title: 'Roll to Goal - 3D Mobile Arcade Game',
    subtitle: 'Solo Creator & Developer · Published on Google Play',
    category: 'engineering',
    featured: true,
    impactMetric: '900+ Downloads',
    impactLabel: '175+ Countries (4.9★)',
    summary:
      'Independently developed, tuned, and published a 3D physics-based arcade mobile game built in Unity and C#, scaling organically to 900+ players across 175+ countries with a 4.9/5 star rating.',
    challenge:
      'Mastering Unity 3D physics, real-time collision detection, mobile GPU performance optimization, and self-managed Google Play Store ASO from scratch.',
    solution:
      'Designed progressive difficulty level architecture, responsive accelerometer & touch controls, shader lighting, and published direct to Google Play Store. Iterated on 60+ user reviews.',
    keyOutcomes: [
      'Published live on Google Play Store with 4.9/5 stars from 60+ ratings.',
      'Organically attracted players from 175+ nations with zero paid marketing budget.',
      'Open sourced the codebase on GitHub for game development community.',
    ],
    techStack: ['Unity 3D', 'C#', 'Mobile Physics', 'Android SDK', 'Google Play ASO', 'Game Mechanics'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.DefaultCompany.RollToGoal',
    githubLink: 'https://github.com/mesachin486/Roll-To-Goal-Game',
    docLink: '/assets/aistudio/Roll_to_goal_5aea0057.pdf',
    interactiveType: 'marble-game',
  },
  {
    id: 'scrap-motor-origin',
    title: 'The Origin: Salvaged DC Motor RC Vehicles',
    subtitle: 'Hardware Prototyping & Mechanical Tinkering · Genesis Story',
    category: 'hardware',
    featured: true,
    impactMetric: '100% Scrap',
    impactLabel: 'Modular Engineering',
    summary:
      'How building remote control cars from scrap DC motors and recycled electronics ignited Sachin’s obsession with first-principles problem solving and technical product design.',
    challenge:
      'Zero commercial kits or premade RC components. Overcoming voltage drops, gear backlash, and chassis alignment using only discarded household electronics.',
    solution:
      'Disassembled broken CD players, toy cars, and old appliances to harvest miniature 6V DC motors, gears, and battery packs. Hand-crafted steering linkages, wired double-throw switches, and engineered working radio/wired remote chassis.',
    keyOutcomes: [
      'Instilled deep intuition for electromechanical systems, weight distribution, and torque conversion.',
      'Built the foundational curiosity that led to winning the School Physics Medal & 1st in Mathematics Olympiad.',
      'Transitioned hardware problem-solving directly into software architecture, game physics, and product analytics.',
    ],
    techStack: ['DC Motors', 'Electro-Mechanical Design', 'Scrap Prototyping', 'First Principles', 'Gear Ratios'],
  },
  {
    id: 'mitacs-western-ml',
    title: 'Mineral Petrology Image Machine Learning',
    subtitle: 'Western University (Ontario, Canada) · MITACS Globalink Fellow',
    category: 'engineering',
    featured: false,
    impactMetric: '92% Accuracy',
    impactLabel: '75% Faster Classification',
    summary:
      'Engineered a Random Forest classifier in Python on microscopic thin-section images to automate petrographic mineral identification with 92% precision.',
    challenge:
      'Manual geological mineral categorization requires hours of microscope inspection with substantial subjective variance between analysts.',
    solution:
      'Extracted optical color, texture, and pleochroism feature vectors from thin-section petrographic scans; tuned ensemble Random Forest classifiers to predict mineral species.',
    keyOutcomes: [
      'Achieved 92% out-of-fold accuracy on real sample dataset.',
      'Decreased identification cycle time by 75% compared to manual optical petrography.',
      'Funded by prestigious $10,000+ MITACS Globalink International Research Fellowship.',
    ],
    techStack: ['Python', 'Scikit-learn', 'Computer Vision', 'Random Forest', 'NumPy', 'Pandas'],
    docLink: '/assets/aistudio/Transcript_sem1-6_03aa5a2d.pdf',
    photo: '/assets/aistudio/IMG20230801153112_37858682.jpg',
    photoCaption: 'At Western University campus, London, Ontario, Canada during the research fellowship.',
  },
  {
    id: 'water-resources-dl',
    title: 'Deep Learning for River Basin Water Quality',
    subtitle: 'IIT Kharagpur School of Water Resources · Dec 2021 - May 2022',
    category: 'engineering',
    featured: false,
    impactMetric: '3 Parameters',
    impactLabel: 'Chlorophyll, Turbidity, TSS',
    summary:
      'Developed spectral algorithms utilizing deep neural networks to estimate water quality indices in scantily gauged river basins with Prof B. Sahoo.',
    challenge:
      'Scarcity of physical river sampling stations along vast Indian river stretches makes continuous pollution monitoring prohibitively expensive.',
    solution:
      'Synthesized multi-band spectral reflectance data with ground-truth water chemistry; trained deep neural regression models to predict turbidity, suspended solids, and chlorophyll.',
    keyOutcomes: [
      'Demonstrated high correlation between predicted spectral signatures and laboratory assay samples.',
      'Validated methodology with senior research scholars at IIT Kharagpur Water Resources Department.',
    ],
    techStack: ['Deep Learning', 'Spectral Remote Sensing', 'Python', 'Environmental ML', 'NumPy'],
    docLink: '/assets/aistudio/mlproject1_5b444194.png',
  },
  {
    id: 'icc-tesla-case',
    title: 'Tesla India Market-Entry Strategy (Indian Case Challenge 2022)',
    subtitle: 'Team Majestic Confetti · Kshitij, IIT Kharagpur',
    category: 'strategy',
    featured: false,
    impactMetric: '5th / 1,400+',
    impactLabel: 'Top IIT Team in India',
    summary:
      'Formulated an end-to-end commercial go-to-market, pricing, and infrastructure roadmap for Tesla’s proposed expansion into the Indian automotive and clean energy market.',
    challenge:
      'India’s 100% CBU import tariffs, charging infrastructure deficit, and price sensitivity made traditional luxury EV models commercially inviable.',
    solution:
      'Designed a multi-phase market penetration playbook: starting with localized Supercharger corridor pilot along golden quadrilateral, battery assembly partnerships, and targeted corporate fleet subscriptions.',
    keyOutcomes: [
      'Secured 5th position out of 1,400+ competitive teams across India.',
      'Ranked as the highest-placed team among all IITs nationwide.',
      'Awarded official Certificate of Appreciation at Kshitij 2022.',
    ],
    techStack: ['Market Entry Strategy', 'GTM Planning', 'Financial Modeling', 'Unit Economics', 'Tariff Analysis'],
    docLink: '/assets/aistudio/ICC_2022_certificate_983367a6.pdf',
  },
  {
    id: 'modular-tv-unit-cad',
    title: 'Precision Modular Furniture CAD Engineering',
    subtitle: 'Spatial & Mechanical Fabrication Specifications',
    category: 'hardware',
    featured: false,
    impactMetric: '1:1 Scale',
    impactLabel: 'Fabrication Elevation Specs',
    summary:
      'Detailed mechanical elevation, plan, and section drawings for modern floating interior cabinetry, calculating load-bearing anchors and material joinery tolerances.',
    challenge:
      'Ensuring cantilevered wall-mounted shelves withstand dynamic loads while maintaining clean concealed cabling and veneer alignment.',
    solution:
      'Drafted technical orthographic projections, cross-sections, and panel depth tolerances (9" depth, 5\'3" span, laminate specifications).',
    keyOutcomes: [
      'Delivered full blueprint for CNC cutting and edge-banding execution.',
      'Zero structural sag or conduit visibility in physical build.',
    ],
    techStack: ['CAD Drafting', 'Orthographic Projection', 'Spatial Tolerances', 'Material Spec'],
    docLink: '/assets/aistudio/T.v.unit_design_a1e2063e.pdf',
  },
];

export const CERTIFICATES: CertificateDoc[] = [
  {
    id: 'maths-olympiad',
    title: '1st Position in Inter-School Mathematics Olympiad',
    issuer: 'Jaipuria Vidyalaya · Smt. Pushpa Jaipuria Trophy',
    date: 'Jan 2018',
    category: 'competition',
    description:
      'Awarded 1st place trophy for excellence in mathematics across all senior secondary students; also secured highest marks in Physics in the high school graduating batch.',
    filePath: '/assets/aistudio/maths_olympiad_5e52a809.pdf',
    fileType: 'pdf',
  },
  {
    id: 'icc-2022',
    title: 'Indian Case Challenge 2022 - Top IIT Team (5th / 1,400+)',
    issuer: 'Kshitij, IIT Kharagpur',
    date: 'Feb 2022',
    category: 'competition',
    description:
      'Secured 5th position out of 1,400+ teams nationwide (highest ranked team among all IITs) with Tesla India market-entry strategy.',
    filePath: '/assets/aistudio/ICC_2022_certificate_983367a6.pdf',
    fileType: 'pdf',
  },
  {
    id: 'best-fresher-tech',
    title: 'Best Fresher (Tech) Award 2020-2021',
    issuer: 'Rajendra Prasad Hall of Residence · IIT Kharagpur',
    date: '2021',
    category: 'academic',
    description:
      'Awarded as the freshman student with the most outstanding technological and leadership contributions to the hall.',
    filePath: '/assets/aistudio/best_fresher_award_84f34049.pdf',
    fileType: 'pdf',
  },
  {
    id: 'opensoft-silver',
    title: 'Inter-Hall OpenSoft Event 2021-2022 - 2nd Position',
    issuer: 'Technology Students Gymkhana · IIT Kharagpur',
    date: 'Jun 2022',
    category: 'competition',
    description:
      'Official citation certifying 2nd position among competing halls of residence in the prestigious annual campus software competition.',
    filePath: '/assets/aistudio/inter_hall_opensoft_4a68fe70.jpeg',
    fileType: 'image',
  },
  {
    id: 'cgs-head',
    title: 'Public Relations Head - Computer Graphics Society',
    issuer: 'Technology Students Gymkhana · IIT Kharagpur',
    date: 'Jul 2022',
    category: 'leadership',
    description:
      'Elected PR Head for Computer Graphics Society (2021-2022), leading student game development outreach across multiple IIT campuses.',
    filePath: '/assets/aistudio/CGS_certificate_427a0474.pdf',
    fileType: 'pdf',
    credentialNumber: 'Tech-21-14',
  },
  {
    id: 'academic-transcript',
    title: 'Official Academic Performance Transcript (IIT Kharagpur)',
    issuer: 'Dean of Undergraduate Studies · IIT Kharagpur',
    date: 'Jul 2022',
    category: 'academic',
    description:
      'Certified academic performance details across semesters with Cumulative CGPA of 8.71, Grade EX in Earth Science, Structural Geology, Physics Lab.',
    filePath: '/assets/aistudio/Transcript_sem1-6_03aa5a2d.pdf',
    fileType: 'pdf',
    credentialNumber: 'Roll: 19GG20030',
  },
  {
    id: 'mobifly-internship',
    title: 'Software Developer Trainee Internship Certificate',
    issuer: 'Mobifly / BrainBox Network',
    date: 'Oct 2021',
    category: 'internship',
    description:
      'Certificate of internship completion for developing Django and Firebase web applications with real-time Android synchronization.',
    filePath: '/assets/aistudio/mobifly_certificate_8c39bbee.pdf',
    fileType: 'pdf',
  },
  {
    id: 'shastrath-certificate',
    title: 'Data Analyst Winter Project Certificate',
    issuer: 'Team Shastrarth',
    date: 'Jan 2021',
    category: 'internship',
    description:
      'Winter project certificate for structured user survey research and data analytics across 50,000 respondents worldwide.',
    filePath: '/assets/aistudio/shastrath_internship_1863dffc.pdf',
    fileType: 'pdf',
  },
  {
    id: 'hall-council-notice',
    title: 'General Secretary (Technology Affairs) Election Notice',
    issuer: 'Rajendra Prasad Hall Council · IIT Kharagpur',
    date: 'Sep 2021',
    category: 'leadership',
    description:
      'Official appointment by Hall Warden to the Hall Council, directing 23 technology student leaders and managing annual technology budget.',
    filePath: '/assets/aistudio/RPH_Notice_Adhoc_HC_3c2441d7.pdf',
    fileType: 'pdf',
  },
  {
    id: 'water-res-proof',
    title: 'IIT Kharagpur ML Research Appointment Letter',
    issuer: 'School of Water Resources · IIT Kharagpur',
    date: 'Dec 2021',
    category: 'academic',
    description:
      'Official communications and dataset handoff regarding Ensemble Machine Learning algorithms for high-frequency river basin water quality assessment.',
    filePath: '/assets/aistudio/mlproject1_5b444194.png',
    fileType: 'image',
  },
  {
    id: 'tv-cad-spec',
    title: 'Precision TV Unit CAD Blueprint & Sectional Elevation',
    issuer: 'Self-Engineered Technical Drawing',
    date: '2021',
    category: 'project',
    description:
      'Complete modular carpentry CAD drafting with orthographic views, drawer clearances, and wall anchor specifications.',
    filePath: '/assets/aistudio/T.v.unit_design_a1e2063e.pdf',
    fileType: 'pdf',
  },
  {
    id: 'roll-to-goal-doc',
    title: 'Roll to Goal Game Play Store & GitHub Proof',
    issuer: 'Google Play Store Release Documentation',
    date: 'Jul 2020',
    category: 'project',
    description:
      'Self-published 3D Android game asset documentation, GitHub repository proof, and Google Play Store verification.',
    filePath: '/assets/aistudio/Roll_to_goal_5aea0057.pdf',
    fileType: 'pdf',
  },
];

export const SKILLS_DATA = {
  product: [
    'Product Strategy & Vision',
    'Product Discovery & User Interviews',
    'PRDs & User Stories',
    'A/B Testing & Experimentation',
    'RICE Prioritization',
    'AI Unit Economics & Cost Policy',
    'Usage-Based Pricing',
    'Go-to-Market (GTM) Strategy',
    'Figma & Wireframing',
    'Sprint Planning & Agile',
  ],
  aiAndTech: [
    'LLMs & Prompt Engineering',
    'Agentic AI & Tool Calling',
    'Model Context Protocol (MCP)',
    'Claude Code & Codex Prototyping',
    'Python (Pandas, NumPy, Scikit-learn)',
    'SQL & Snowflake',
    'REST APIs',
    'Alteryx ETL Workflows',
    'Tableau & Data Visualization',
    'Unity 3D & C#',
  ],
  strategyAndOps: [
    'Credit & Fraud Risk Decisioning',
    'GDS Simulation Modeling',
    'Enterprise SaaS Governance',
    'Vendor Supply Contract Strategy',
    'Financial Modeling & Budget Forecasting',
    'Standard Operating Procedures (SOPs)',
    'Root Cause Analysis (RCA)',
    'Executive Communication & Dashboards',
  ],
  leadershipAndSports: [
    'Hall General Secretary (Technology) - Led 23 student leaders',
    'Best Fresher (Tech) Award 2020-21',
    'Public Relations Head (Computer Graphics Society, IIT KGP)',
    'Illumination Gold Medal (coordinated 500+ peers at IIT KGP)',
    'NCC B-Certificate (Camp Street Theatre Gold Medal)',
    'Cricket (High school & collegiate competitions)',
    'Badminton (Active competitive player)',
    'Volleyball (Inter-school tournament representative)',
    'Community Relief (Assisted 9,000+ people during COVID lockdowns)',
  ],
};
