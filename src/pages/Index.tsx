import { useEffect, useRef, useState } from "react";
import {
  GraduationCap, BookOpen, Award, Code, Brain, Users,
  MessageSquare, BarChart3, Briefcase, Calendar, MapPin,
  Search, Heart, Ship, Linkedin, Mail, Phone, ExternalLink,
} from "lucide-react";

/* ─── scroll reveal hook ──────────────────────────────────────── */
function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("p3r-in");
          io.unobserve(e.target);
        }
      }),
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" }
    );
    const el = ref.current;
    if (el) {
      el.querySelectorAll(".p3r-reveal, .p3r-reveal-up, .p3r-reveal-scale")
        .forEach(c => io.observe(c));
    }
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ─── Divider ─────────────────────────────────────────────────── */
const Divider = () => (
  <div className="p3r-divider px-12">
    <div className="p3r-divider-line" />
    <div className="p3r-divider-diamond" />
    <div className="p3r-divider-diamond" style={{ width: 5, height: 5 }} />
    <div className="p3r-divider-diamond" />
    <div className="p3r-divider-line" />
  </div>
);

/* ─── Section Header ──────────────────────────────────────────── */
const SH = ({ tag, title }: { tag: string; title: string }) => (
  <div className="text-center mb-16 p3r-reveal-up">
    <p className="p3r-section-tag mb-3">◆ {tag} ◆</p>
    <h2 className="p3r-section-title" style={{ fontSize: "clamp(2.8rem,8vw,6rem)" }}>
      {title}
    </h2>
    <div className="p3r-divider mt-4" style={{ maxWidth: 320, margin: "12px auto 0" }}>
      <div className="p3r-divider-line" />
      <div className="p3r-divider-diamond" />
      <div className="p3r-divider-line" />
    </div>
  </div>
);

/* ─── Panel card ──────────────────────────────────────────────── */
const Panel = ({
  children, className = "", reveal = "up", delay = 0,
}: {
  children: React.ReactNode; className?: string;
  reveal?: "up" | "left" | "scale"; delay?: number;
}) => {
  const cls = reveal === "up" ? "p3r-reveal-up" : reveal === "left" ? "p3r-reveal" : "p3r-reveal-scale";
  const dc  = delay ? `p3r-d${delay}` : "";
  return (
    <div className={`p3r-section-panel p-6 ${cls} ${dc} ${className}`}>
      {children}
    </div>
  );
};

/* ─── Character SVG (P3R-inspired silhouette) ─────────────────── */
const CharacterArt = () => (
  <svg
    viewBox="0 0 340 600"
    xmlns="http://www.w3.org/2000/svg"
    style={{ width: "100%", height: "100%", objectFit: "contain" }}
    className="p3r-character-art"
  >
    {/* Body / torso - pale skin */}
    <ellipse cx="170" cy="340" rx="55" ry="100" fill="#d8eaf8" />
    {/* Neck */}
    <rect x="158" y="240" width="24" height="40" rx="8" fill="#dbeeff" />
    {/* Head */}
    <ellipse cx="170" cy="210" rx="52" ry="60" fill="#dbeeff" />

    {/* Hair - long dark blue/black flowing */}
    <path d="M120,165 Q100,120 118,70 Q135,30 170,20 Q205,30 222,70 Q240,120 220,165"
      fill="#1a2030" />
    {/* Hair sides flowing down */}
    <path d="M120,165 Q80,200 75,290 Q70,360 85,430 Q95,470 110,490"
      stroke="#1a2030" strokeWidth="22" fill="none" strokeLinecap="round" />
    <path d="M220,165 Q260,200 265,290 Q270,360 255,430 Q245,470 230,490"
      stroke="#1a2030" strokeWidth="22" fill="none" strokeLinecap="round" />
    {/* Hair highlight */}
    <path d="M145,40 Q160,25 175,22" stroke="#3a4870" strokeWidth="3" fill="none" opacity="0.6" />

    {/* Eyes */}
    <ellipse cx="152" cy="208" rx="9" ry="10" fill="#1a2a3a" />
    <ellipse cx="188" cy="208" rx="9" ry="10" fill="#1a2a3a" />
    {/* Eye shine */}
    <circle cx="155" cy="205" r="3" fill="white" opacity="0.8" />
    <circle cx="191" cy="205" r="3" fill="white" opacity="0.8" />
    {/* Eye color */}
    <ellipse cx="152" cy="209" rx="6" ry="7" fill="#4488cc" opacity="0.8" />
    <ellipse cx="188" cy="209" rx="6" ry="7" fill="#4488cc" opacity="0.8" />

    {/* Mouth - slight curve */}
    <path d="M162,235 Q170,241 178,235" stroke="#c0a0b0" strokeWidth="2" fill="none" />

    {/* Outfit - dark jacket */}
    <path d="M115,320 Q100,400 105,480 L170,500 L235,480 Q240,400 225,320 Q200,310 170,308 Q140,310 115,320Z"
      fill="#1a2230" />
    {/* Outfit collar / detail */}
    <path d="M155,308 L170,340 L185,308" fill="#223344" opacity="0.8" />
    {/* Outfit - white shirt visible */}
    <path d="M155,308 L148,340 L170,360 L192,340 L185,308 L170,330Z"
      fill="#e8f4ff" opacity="0.9" />

    {/* Arms */}
    <path d="M115,320 Q90,360 82,420 Q80,450 90,460"
      stroke="#1a2230" strokeWidth="32" fill="none" strokeLinecap="round" />
    <path d="M225,320 Q250,360 258,420 Q260,450 250,460"
      stroke="#1a2230" strokeWidth="32" fill="none" strokeLinecap="round" />
    {/* Hands */}
    <ellipse cx="91" cy="467" rx="16" ry="14" fill="#d0e4f5" />
    <ellipse cx="249" cy="467" rx="16" ry="14" fill="#d0e4f5" />

    {/* Legs */}
    <path d="M145,480 L138,580" stroke="#2a3545" strokeWidth="30" fill="none" strokeLinecap="round" />
    <path d="M195,480 L202,580" stroke="#2a3545" strokeWidth="30" fill="none" strokeLinecap="round" />

    {/* Ink splash shapes around character */}
    {/* Top-left splash */}
    <path d="M50,80 Q30,50 55,30 Q80,10 95,40 Q110,70 80,90 Q60,100 50,80Z"
      fill="#111820" opacity="0.85" />
    <path d="M30,60 Q15,30 40,20 Q55,15 60,35 Q45,45 30,60Z"
      fill="#111820" opacity="0.7" />

    {/* Top-right splash */}
    <path d="M265,50 Q290,20 310,45 Q325,65 305,80 Q280,95 260,70 Q255,60 265,50Z"
      fill="#111820" opacity="0.8" />

    {/* Left side streaks */}
    <path d="M40,180 Q20,200 35,220 Q50,235 65,215 Q75,200 55,185 Z"
      fill="#111820" opacity="0.75" />
    <path d="M25,250 Q5,265 18,280 Q30,292 48,278 Q55,265 38,255Z"
      fill="#111820" opacity="0.65" />

    {/* Right side drops */}
    <path d="M295,150 Q315,140 318,165 Q320,185 300,185 Q285,182 290,165Z"
      fill="#111820" opacity="0.8" />
    <path d="M310,220 Q328,212 332,235 Q334,252 316,254 Q300,252 305,235Z"
      fill="#111820" opacity="0.65" />

    {/* Bottom splatter */}
    <circle cx="80" cy="530" r="18" fill="#111820" opacity="0.7" />
    <circle cx="65" cy="548" r="10" fill="#111820" opacity="0.6" />
    <circle cx="260" cy="540" r="15" fill="#111820" opacity="0.7" />
    <circle cx="275" cy="560" r="8" fill="#111820" opacity="0.55" />

    {/* Flowing hair strands */}
    <path d="M78,290 Q60,310 65,340 Q70,365 80,380"
      stroke="#1a2030" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
    <path d="M262,290 Q278,315 274,345 Q270,370 260,385"
      stroke="#1a2030" strokeWidth="8" fill="none" strokeLinecap="round" opacity="0.9" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════ */
const Index = () => {
  const contentRef = useReveal();

  /* Menu state */
  const menuItems = [
    { label: "SKILL",       section: "skills",     desc: "Use a Skill" },
    { label: "ITEM",        section: "about",      desc: "View Items" },
    { label: "EQUIP",       section: "experience", desc: "Equipment" },
    { label: "PERSONA",     section: "about",      desc: "Your Persona" },
    { label: "STATS",       section: "skills",     desc: "Status Info" },
    { label: "QUEST",       section: "projects",   desc: "Active Quests" },
    { label: "SOCIAL LINK", section: "contact",    desc: "Social Links" },
    { label: "CALENDAR",    section: "experience", desc: "Calendar" },
    { label: "SYSTEM",      section: "about",      desc: "System Settings" },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  /* font sizes matching screenshot proportions */
  const getFontSize = (i: number) => {
    const dist = Math.abs(i - activeIdx);
    if (dist === 0) return "clamp(3.8rem, 7.5vw, 5.8rem)";
    if (dist === 1) return "clamp(2.6rem, 5vw,  3.9rem)";
    if (dist === 2) return "clamp(2.2rem, 4.3vw, 3.2rem)";
    return "clamp(1.9rem, 3.8vw, 2.8rem)";
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  /* ── Data ─────────────────────────────────────────────────── */
  const coursework   = ["Data Analysis", "Data Visualization", "Machine Learning", "Database Systems"];
  const certs        = ["Data Analyst In Python · DataCamp", "Work Smarter With Excel · Microsoft",
                        "Intro To Data Analytics · Meta", "Dashboards & Charts · IBM",
                        "SQL Fundamentals · DataCamp", "PowerBI Fundamentals · DataCamp"];
  const techSkills   = [["Python",90],["SQL",85],["Excel",80],["Power BI",75],["Tableau",70]] as [string,number][];
  const domain       = [
    ["Data Science",      "End-to-end pipelines from collection to deployment"],
    ["Machine Learning",  "Building and optimising predictive models"],
    ["Data Visualisation","Compelling visual stories from complex datasets"],
    ["EDA",               "Uncovering patterns through statistical analysis"],
    ["Model Training",    "Training, validating and fine-tuning ML models"],
    ["Feature Engineering","Creating meaningful features to improve performance"],
  ];
  const softSkills   = [
    ["Teamwork",     Users], ["Communication", MessageSquare],
    ["Problem Solving", Brain], ["Management", BarChart3],
  ] as [string, React.ComponentType<any>][];
  const experiences  = [
    { title:"Data Science Intern", company:"Digital Empowerment Network",
      period:"Jul 2025 – Sep 2025", location:"Remote",
      duties:["Conducted exploratory data analysis identifying key patterns in large datasets",
              "Developed machine learning models for predictive analytics",
              "Created interactive dashboards for stakeholder presentations",
              "Collaborated cross-functionally to deliver data-driven insights"] },
    { title:"Data Science Intern", company:"DevelopersHub Corporation",
      period:"Jan 2025 – Jun 2025", location:"Remote",
      duties:["Built and deployed ML models for classification and regression tasks",
              "Performed data cleaning, preprocessing, and feature engineering",
              "Developed automated data pipelines for efficient processing",
              "Documented processes and presented findings to senior stakeholders"] },
  ];
  const projects     = [
    { title:"Fraud Detection Model", Icon:Search,
      desc:"Built a machine learning model to detect fraudulent transactions with high accuracy.",
      techs:["Python","Scikit-learn","Pandas","EDA","Feature Engineering"],
      highlights:["95%+ detection accuracy","30% reduction in false positives","100K+ transactions processed"] },
    { title:"Heart Disease Prediction", Icon:Heart,
      desc:"Developed a predictive model to identify patients at risk using clinical data.",
      techs:["Python","Machine Learning","Classification","Data Preprocessing"],
      highlights:["92% ensemble model accuracy","Key risk factors identified","Interactive prediction interface"] },
    { title:"Titanic Dataset EDA", Icon:Ship,
      desc:"Comprehensive exploratory analysis uncovering survival patterns and demographics.",
      techs:["Python","Matplotlib","Seaborn","Statistical Analysis"],
      highlights:["Survival rate visualised","Key factors uncovered","Comprehensive analysis report"] },
  ];
  const contactInfo  = [
    { Icon:Mail,  label:"Email",    value:"ahmedhuzaifamalik@gmail.com", href:"mailto:ahmedhuzaifamalik@gmail.com" },
    { Icon:Phone, label:"Phone",    value:"(+92) 3175569176",            href:"tel:+923175569176" },
    { Icon:MapPin,label:"Location", value:"Mansehra, Pakistan",          href: null as string | null },
  ];

  return (
    <div style={{ background: "hsl(192,82%,50%)" }}>

      {/* ════════════════════════════════════════════════
          HERO — P3R MENU SCREEN
          ════════════════════════════════════════════════ */}
      <section
        id="home"
        className="relative flex overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: 56 }}
      >
        {/* ── Water background ── */}
        <div className="absolute inset-0 p3r-water-bg">
          <div className="p3r-caustics" />
          <div className="p3r-water-stripes" />
          {/* extra depth light at top-right */}
          <div style={{
            position: "absolute", top: 0, right: "10%", width: "55%", height: "70%",
            background: "radial-gradient(ellipse 70% 80% at 60% 10%, rgba(200,248,255,0.28) 0%, transparent 65%)",
            pointerEvents: "none",
          }} />
        </div>

        {/* ── Left: character panel ── */}
        <div
          className="p3r-char-panel relative z-10"
          style={{
            width: "clamp(220px, 36%, 440px)",
            minHeight: "100%",
            clipPath: "polygon(0 0, 88% 0, 100% 100%, 0 100%)",
          }}
        >
          {/* Wallet display */}
          <div className="p3r-wallet">
            <div className="p3r-wallet-amount">¥ 73,797</div>
            <div className="p3r-wallet-label">current wallet</div>
          </div>

          {/* Character artwork */}
          <div
            style={{
              position: "absolute", bottom: 0, left: "5%", right: "12%",
              height: "90%", display: "flex", alignItems: "flex-end",
            }}
          >
            <CharacterArt />
          </div>
        </div>

        {/* ── Right: menu items ── */}
        <div
          className="relative z-10 flex flex-col justify-center"
          style={{
            flex: 1,
            paddingLeft: "clamp(24px, 4vw, 64px)",
            paddingRight: "clamp(16px, 3vw, 48px)",
            paddingTop: 40,
            paddingBottom: 80,
          }}
        >
          <div className="p3r-menu-list">
            {menuItems.map((item, i) => {
              const isActive = activeIdx === i;
              return (
                <button
                  key={i}
                  className={`p3r-menu-entry rank-${i} ${isActive ? "is-active" : ""}`}
                  style={{
                    fontSize: getFontSize(i),
                    paddingTop:    isActive ? "2px"  : "1px",
                    paddingBottom: isActive ? "2px"  : "1px",
                    paddingLeft:   `${i * 6}px`,
                  }}
                  onClick={() => { setActiveIdx(i); scrollTo(item.section); }}
                  onMouseEnter={() => setActiveIdx(i)}
                >
                  <div className="p3r-slash" />
                  <span className="p3r-label">{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Controls hint (bottom-right) ── */}
        <div className="p3r-controls">
          <div className="p3r-controls-action">{menuItems[activeIdx].desc}</div>
          <div className="p3r-controls-label">Command</div>
          <div className="p3r-controls-buttons">
            <span className="p3r-controls-btn">
              <span className="p3r-btn-icon">□</span>Confirm
            </span>
            <span className="p3r-controls-btn">
              <span className="p3r-btn-icon" style={{ fontFamily: "monospace" }}>C</span>Close
            </span>
          </div>
        </div>
      </section>

      {/* All content sections wrapped for reveal hook */}
      <div ref={contentRef}>

        {/* ════════════════════════════════════════════════
            ABOUT
            ════════════════════════════════════════════════ */}
        <section id="about" className="p3r-section relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SH tag="PERSONA DATA" title="ABOUT ME" />

            <Panel reveal="up" className="mb-8">
              <p className="p3r-text-body text-lg mb-5">
                I am a passionate <span className="p3r-highlight">Data Analyst and Data Scientist</span> with
                a strong foundation in Data Analysis, Machine Learning, and Statistical Modeling. I specialise in
                extracting valuable insights from complex datasets, building predictive models, and creating
                compelling visualisations that drive business decisions.
              </p>
              <p className="p3r-text-body text-lg">
                With hands-on experience in Python, SQL, and various data science tools, I am committed to
                continuous learning and applying innovative techniques to solve real-world problems.
              </p>
            </Panel>

            {/* Education */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5 p3r-reveal">
                <GraduationCap size={20} color="white" />
                <h3 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                             fontSize:"1rem", letterSpacing:"0.2em", color:"white", textTransform:"uppercase" }}>
                  Education
                </h3>
              </div>
              <Panel reveal="left" delay={1}>
                <div className="flex items-center gap-5 flex-wrap">
                  <div style={{
                    width:48, height:48, flexShrink:0,
                    background:"rgba(255,255,255,0.15)",
                    clipPath:"polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                    display:"flex", alignItems:"center", justifyContent:"center",
                  }}>
                    <GraduationCap size={20} color="white" />
                  </div>
                  <div>
                    <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:800, fontStyle:"italic",
                                fontSize:"1.1rem", color:"white", textTransform:"uppercase",
                                letterSpacing:"0.05em" }}>
                      BS in Data Science
                    </p>
                    <p className="p3r-text-body text-sm">Pak-Austria Fachhochschule, Haripur, Pakistan</p>
                    <p className="p3r-section-tag" style={{ fontSize:"0.55rem" }}>2022 – 2026</p>
                  </div>
                </div>
              </Panel>
            </div>

            {/* Coursework + Certifications */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4 p3r-reveal">
                  <BookOpen size={16} color="white" />
                  <h4 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:800, fontStyle:"italic",
                               fontSize:"0.8rem", letterSpacing:"0.25em", color:"white",
                               textTransform:"uppercase" }}>Coursework</h4>
                </div>
                <div className="flex flex-col gap-2">
                  {coursework.map((c,i) => (
                    <Panel key={i} reveal="left" delay={(i+1) as any} className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p3r-divider-diamond" style={{width:6,height:6,flexShrink:0}} />
                        <span className="p3r-text-body text-sm font-semibold">{c}</span>
                      </div>
                    </Panel>
                  ))}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4 p3r-reveal">
                  <Award size={16} color="white" />
                  <h4 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:800, fontStyle:"italic",
                               fontSize:"0.8rem", letterSpacing:"0.25em", color:"white",
                               textTransform:"uppercase" }}>Certifications</h4>
                </div>
                <div className="flex flex-col gap-2">
                  {certs.map((c,i) => (
                    <Panel key={i} reveal="scale" delay={(i+1) as any} className="py-3 px-4">
                      <div className="flex items-center gap-3">
                        <div className="p3r-divider-diamond" style={{width:6,height:6,flexShrink:0,
                          background:"rgba(255,255,255,0.5)"}} />
                        <span className="p3r-text-body text-sm font-semibold">{c}</span>
                      </div>
                    </Panel>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════════════
            SKILLS
            ════════════════════════════════════════════════ */}
        <section id="skills" className="p3r-section relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SH tag="PERSONA STATS" title="SKILLS" />

            {/* Technical */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6 p3r-reveal">
                <Code size={20} color="white" />
                <h3 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                             fontSize:"1rem", letterSpacing:"0.2em", color:"white",
                             textTransform:"uppercase" }}>Technical Skills</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {techSkills.map(([name, level], i) => (
                  <Panel key={i} reveal="up" delay={(i+1) as any} className="py-4 px-5">
                    <div className="flex justify-between mb-3">
                      <span style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:800, fontStyle:"italic",
                                     fontSize:"0.9rem", letterSpacing:"0.1em", color:"white",
                                     textTransform:"uppercase" }}>{name}</span>
                      <span className="p3r-section-tag" style={{ fontSize:"0.7rem" }}>{level}%</span>
                    </div>
                    <div className="p3r-bar-track">
                      <div className="p3r-bar-fill" style={{ width:`${level}%` }} />
                    </div>
                  </Panel>
                ))}
              </div>
            </div>

            {/* Domain */}
            <div className="mb-14">
              <div className="flex items-center gap-3 mb-6 p3r-reveal">
                <Brain size={20} color="white" />
                <h3 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                             fontSize:"1rem", letterSpacing:"0.2em", color:"white",
                             textTransform:"uppercase" }}>Domain Expertise</h3>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {domain.map(([title, desc], i) => (
                  <Panel key={i} reveal="scale" delay={(i+1) as any} className="py-5 px-5">
                    <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:800, fontStyle:"italic",
                                fontSize:"0.85rem", letterSpacing:"0.08em", color:"white",
                                textTransform:"uppercase", marginBottom:6 }}>{title}</p>
                    <p className="p3r-text-body text-sm">{desc}</p>
                  </Panel>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <div className="flex items-center gap-3 mb-6 p3r-reveal">
                <Users size={20} color="white" />
                <h3 style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                             fontSize:"1rem", letterSpacing:"0.2em", color:"white",
                             textTransform:"uppercase" }}>Social Stats</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {softSkills.map(([name, Icon], i) => (
                  <Panel key={i} reveal="up" delay={(i+1) as any} className="py-6 text-center">
                    <Icon size={28} color="rgba(255,255,255,0.75)" style={{ margin:"0 auto 10px" }} />
                    <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:700, fontStyle:"italic",
                                fontSize:"0.75rem", letterSpacing:"0.1em", color:"rgba(255,255,255,0.85)",
                                textTransform:"uppercase" }}>{name}</p>
                  </Panel>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════════════
            EXPERIENCE
            ════════════════════════════════════════════════ */}
        <section id="experience" className="p3r-section relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SH tag="BATTLE RECORD" title="EXPERIENCE" />

            <div className="flex flex-col gap-10">
              {experiences.map((exp, i) => (
                <Panel key={i} reveal={i % 2 === 0 ? "left" : "scale"} delay={1} className="p-6 md:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                    <div>
                      <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                                  fontSize:"1.3rem", color:"white", textTransform:"uppercase",
                                  letterSpacing:"0.05em", marginBottom:4 }}>{exp.title}</p>
                      <div className="flex flex-wrap gap-4 items-center">
                        <span className="p3r-text-body text-sm flex items-center gap-1.5">
                          <Briefcase size={13} color="rgba(255,255,255,0.6)" />{exp.company}
                        </span>
                        <span className="p3r-text-body text-sm flex items-center gap-1.5">
                          <MapPin size={13} color="rgba(255,255,255,0.6)" />{exp.location}
                        </span>
                      </div>
                    </div>
                    <div style={{
                      padding:"4px 14px", background:"rgba(255,255,255,0.12)",
                      border:"1px solid rgba(255,255,255,0.25)",
                      fontFamily:"'Share Tech Mono',monospace", fontSize:"0.65rem",
                      color:"rgba(255,255,255,0.85)", letterSpacing:"0.1em",
                      display:"flex", alignItems:"center", gap:6, flexShrink:0,
                    }}>
                      <Calendar size={11} />{exp.period}
                    </div>
                  </div>
                  <div style={{height:1, background:"linear-gradient(90deg,rgba(255,255,255,0.3),transparent)", marginBottom:16}} />
                  <ul className="flex flex-col gap-2.5">
                    {exp.duties.map((d,j) => (
                      <li key={j} className="flex items-start gap-3">
                        <div style={{width:6,height:6,background:"rgba(255,255,255,0.6)",
                                     transform:"rotate(45deg)",flexShrink:0,marginTop:6}} />
                        <span className="p3r-text-body text-sm">{d}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════════════
            PROJECTS
            ════════════════════════════════════════════════ */}
        <section id="projects" className="p3r-section relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SH tag="SHADOW OPERATIONS" title="PROJECTS" />

            <div className="flex flex-col gap-8">
              {projects.map(({ title, Icon, desc, techs, highlights }, i) => (
                <Panel key={i} reveal="scale" delay={(i+1) as any} className="p-6 md:p-8">
                  <div className="flex items-start gap-5 mb-5">
                    <div style={{
                      width:52, height:52, flexShrink:0,
                      background:"rgba(255,255,255,0.12)",
                      clipPath:"polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))",
                      border:"1px solid rgba(255,255,255,0.2)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}>
                      <Icon size={22} color="white" />
                    </div>
                    <div>
                      <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                                  fontSize:"1.4rem", color:"white", textTransform:"uppercase",
                                  letterSpacing:"0.06em", marginBottom:4 }}>{title}</p>
                      <p className="p3r-text-body text-sm">{desc}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {techs.map((t,j) => <span key={j} className="p3r-badge">{t}</span>)}
                  </div>

                  <div style={{height:1, background:"linear-gradient(90deg,rgba(255,255,255,0.3),transparent)", marginBottom:14}} />
                  <p className="p3r-section-tag mb-3">◆ KEY ACHIEVEMENTS</p>
                  <ul className="flex flex-col gap-2">
                    {highlights.map((h,j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div style={{width:7,height:7,background:"rgba(255,255,255,0.65)",
                                     transform:"rotate(45deg)",flexShrink:0,
                                     boxShadow:"0 0 5px rgba(255,255,255,0.4)"}} />
                        <span className="p3r-text-body text-sm">{h}</span>
                      </li>
                    ))}
                  </ul>
                </Panel>
              ))}
            </div>
          </div>
        </section>

        <Divider />

        {/* ════════════════════════════════════════════════
            CONTACT
            ════════════════════════════════════════════════ */}
        <section id="contact" className="p3r-section relative py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <SH tag="LINK SYSTEM" title="CONTACT" />

            {/* LinkedIn card */}
            <div className="mb-10 p3r-reveal-up">
              <a href="https://www.linkedin.com/in/ahmed-huzaifa-malik/" target="_blank" rel="noopener noreferrer">
                <div className="p3r-section-panel p-8 md:p-10 group cursor-pointer" style={{ transition:"all 0.3s ease" }}>
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div style={{
                      width:96, height:96, flexShrink:0,
                      background:"rgba(255,255,255,0.12)",
                      clipPath:"polygon(50% 0%,100% 50%,50% 100%,0% 50%)",
                      border:"1px solid rgba(255,255,255,0.3)",
                      display:"flex", alignItems:"center", justifyContent:"center",
                    }}>
                      <span style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                                     fontSize:"1.5rem", color:"white" }}>AH</span>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <p style={{ fontFamily:"'Exo 2',sans-serif", fontWeight:900, fontStyle:"italic",
                                  fontSize:"1.6rem", color:"white", textTransform:"uppercase",
                                  letterSpacing:"0.06em", marginBottom:6 }}>Ahmed Huzaifa Malik</p>
                      <p className="p3r-text-body mb-5">Data Analyst · Data Scientist</p>
                      <div style={{
                        display:"inline-flex", alignItems:"center", gap:8,
                        padding:"6px 18px", background:"rgba(255,255,255,0.12)",
                        border:"1px solid rgba(255,255,255,0.3)",
                        fontFamily:"'Exo 2',sans-serif", fontWeight:700, fontStyle:"italic",
                        fontSize:"0.75rem", letterSpacing:"0.2em", color:"white",
                        textTransform:"uppercase",
                      }}>
                        <Linkedin size={14} />Connect on LinkedIn<ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            {/* Contact info grid */}
            <div className="grid md:grid-cols-3 gap-4">
              {contactInfo.map(({ Icon, label, value, href }, i) => (
                <Panel key={i} reveal="up" delay={(i+1) as any} className="p-6 text-center">
                  {href ? (
                    <a href={href} target={href.startsWith("mailto") ? undefined : "_blank"}
                       rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
                      <Icon size={26} color="rgba(255,255,255,0.7)" style={{ margin:"0 auto 10px" }} />
                      <p className="p3r-section-tag mb-1">{label}</p>
                      <p className="p3r-text-body text-sm font-semibold">{value}</p>
                    </a>
                  ) : (
                    <>
                      <Icon size={26} color="rgba(255,255,255,0.7)" style={{ margin:"0 auto 10px" }} />
                      <p className="p3r-section-tag mb-1">{label}</p>
                      <p className="p3r-text-body text-sm font-semibold">{value}</p>
                    </>
                  )}
                </Panel>
              ))}
            </div>

            {/* Footer */}
            <div className="text-center mt-20 p3r-reveal-up">
              <div className="p3r-divider" style={{ maxWidth:400, margin:"0 auto 14px" }}>
                <div className="p3r-divider-line" />
                <div className="p3r-divider-diamond" />
                <div className="p3r-divider-diamond" style={{width:5,height:5}} />
                <div className="p3r-divider-diamond" />
                <div className="p3r-divider-line" />
              </div>
              <p className="p3r-section-tag">// END TRANSMISSION · TARTARUS EXIT</p>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;
