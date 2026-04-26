import {
  ArrowRight,
  ChevronDown,
  GraduationCap,
  BookOpen,
  Award,
  Code,
  Brain,
  Users,
  MessageSquare,
  BarChart3,
  Briefcase,
  Calendar,
  MapPin,
  Search,
  Heart,
  Ship,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Database,
} from "lucide-react";
import FloatingParticles from "@/components/FloatingParticles";
import useP3ScrollReveal from "@/hooks/use-scroll-reveal";

/* ─── Reusable P3R Components ───────────────────────────────────── */

const P3Divider = () => (
  <div className="py-8 flex items-center justify-center gap-4">
    <div
      className="flex-1 h-px"
      style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 50% / 0.5))" }}
    />
    <div className="flex gap-2">
      <div className="p3-diamond" />
      <div className="p3-diamond-sm" />
      <div className="p3-diamond" />
    </div>
    <div
      className="flex-1 h-px"
      style={{ background: "linear-gradient(90deg, hsl(0 0% 50% / 0.5), transparent)" }}
    />
  </div>
);

interface SectionHeaderProps {
  tag: string;
  title: string;
  subtitle?: string;
}

const SectionHeader = ({ tag, title, subtitle }: SectionHeaderProps) => (
  <div className="text-center mb-16 p3-reveal-up">
    <p
      className="font-p3-mono text-xs mb-4"
      style={{ letterSpacing: "0.45em", color: "hsl(0 0% 55%)" }}
    >
      ◆ {tag} ◆
    </p>
    <h2
      className="p3-section-title p3-text-glow mb-4"
      style={{
        fontSize: "clamp(3rem, 8vw, 6rem)",
        color: "hsl(0 0% 97%)",
      }}
    >
      {title}
    </h2>
    <div className="flex items-center justify-center gap-3 mb-6">
      <div className="h-[2px] w-24" style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 50%))" }} />
      <div className="p3-diamond-sm" />
      <div className="h-[2px] w-24" style={{ background: "linear-gradient(90deg, hsl(0 0% 50%), transparent)" }} />
    </div>
    {subtitle && (
      <p
        className="font-p3-body text-lg max-w-xl mx-auto"
        style={{ color: "hsl(0 0% 58%)", lineHeight: 1.7 }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

interface P3PanelProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  revealDir?: "left" | "right" | "up" | "scale";
}

const P3Panel = ({ children, className = "", delay = 0, revealDir = "up" }: P3PanelProps) => {
  const revealClass = {
    left: "p3-reveal",
    right: "p3-reveal-right",
    up: "p3-reveal-up",
    scale: "p3-reveal-scale",
  }[revealDir];

  const delayClass = delay > 0 ? `p3-delay-${delay}` : "";

  return (
    <div className={`p3-panel ${revealClass} ${delayClass} ${className}`}>
      {children}
    </div>
  );
};

/* ─── Main Component ────────────────────────────────────────────── */

const Index = () => {
  const ref = useP3ScrollReveal();

  const coursework = [
    "Data Analysis",
    "Data Visualization",
    "Machine Learning",
    "Database Systems",
  ];

  const certifications = [
    "Data Analyst In Python · DataCamp",
    "Work Smarter With Excel · Microsoft",
    "Introduction To Data Analytics · Meta",
    "Dashboards and Charts · IBM",
    "SQL Fundamentals · DataCamp",
    "PowerBI Fundamentals · DataCamp",
  ];

  const technicalSkills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Excel", level: 80 },
    { name: "Power BI", level: 75 },
    { name: "Tableau", level: 70 },
  ];

  const domainExpertise = [
    { title: "Data Science", desc: "End-to-end pipelines from collection to deployment" },
    { title: "Machine Learning", desc: "Building and optimizing predictive models" },
    { title: "Data Visualization", desc: "Compelling visual stories from complex datasets" },
    { title: "Exploratory Analysis", desc: "Uncovering patterns through statistical analysis" },
    { title: "Model Training", desc: "Training, validating, and fine-tuning ML models" },
    { title: "Feature Engineering", desc: "Creating meaningful features to improve performance" },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Communication", icon: MessageSquare },
    { name: "Problem Solving", icon: Brain },
    { name: "Management", icon: BarChart3 },
  ];

  const experiences = [
    {
      title: "Data Science Intern",
      company: "Digital Empowerment Network",
      period: "Jul 2025 – Sep 2025",
      location: "Remote",
      duties: [
        "Conducted exploratory data analysis identifying key patterns in large datasets",
        "Developed machine learning models for predictive analytics",
        "Created interactive dashboards for stakeholder presentations",
        "Collaborated cross-functionally to deliver data-driven insights",
      ],
    },
    {
      title: "Data Science Intern",
      company: "DevelopersHub Corporation",
      period: "Jan 2025 – Jun 2025",
      location: "Remote",
      duties: [
        "Built and deployed ML models for classification and regression tasks",
        "Performed data cleaning, preprocessing, and feature engineering",
        "Developed automated data pipelines for efficient processing",
        "Documented processes and presented findings to senior stakeholders",
      ],
    },
  ];

  const projects = [
    {
      title: "Fraud Detection Model",
      icon: Search,
      desc: "Built a machine learning model to detect fraudulent transactions with high accuracy. Implemented various classification algorithms and compared their performance.",
      techs: ["Python", "Scikit-learn", "Pandas", "EDA", "Feature Engineering"],
      highlights: ["95%+ detection accuracy", "30% reduction in false positives", "100K+ transactions processed"],
    },
    {
      title: "Heart Disease Prediction",
      icon: Heart,
      desc: "Developed a predictive model to identify patients at risk using clinical data. Applied multiple classification algorithms with cross-validation.",
      techs: ["Python", "Machine Learning", "Classification", "Data Preprocessing"],
      highlights: ["92% ensemble model accuracy", "Key risk factors identified", "Interactive prediction interface"],
    },
    {
      title: "Titanic Dataset EDA",
      icon: Ship,
      desc: "Performed comprehensive exploratory data analysis on the Titanic dataset, uncovering survival patterns and demographic insights.",
      techs: ["Python", "Matplotlib", "Seaborn", "Statistical Analysis"],
      highlights: ["Survival rate visualization", "Key survival factors uncovered", "Comprehensive analysis report"],
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ahmedhuzaifamalik@gmail.com", href: "mailto:ahmedhuzaifamalik@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+92) 3175569176", href: "tel:+923175569176" },
    { icon: MapPin, label: "Location", value: "Mansehra, Pakistan", href: null as string | null },
  ];

  return (
    <div ref={ref} className="min-h-screen pt-16 overflow-x-hidden" style={{ background: "hsl(0 0% 5%)" }}>
      <FloatingParticles />

      {/* ================================================================
          HERO SECTION
          ================================================================ */}
      <section
        id="home"
        className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 overflow-hidden"
      >
        {/* Atmospheric background */}
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse 70% 60% at 50% 80%, hsl(0 0% 30% / 0.2) 0%, transparent 65%),
              radial-gradient(ellipse 50% 40% at 20% 30%, hsl(0 0% 40% / 0.1) 0%, transparent 60%),
              hsl(0 0% 5%)
            `,
          }}
        />

        {/* Large Tartarus-style concentric circles */}
        {[600, 480, 360, 240].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: size,
              height: size,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              border: `1px solid hsl(215 100% 55% / ${0.04 + i * 0.015})`,
              boxShadow: i === 0 ? "none" : `0 0 ${20 + i * 10}px hsl(215 100% 50% / ${0.03 + i * 0.01})`,
            }}
          />
        ))}

        {/* Grid lines */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(hsl(0 0% 55% / 0.04) 1px, transparent 1px),
              linear-gradient(90deg, hsl(0 0% 55% / 0.04) 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />

        {/* Corner accents */}
        {[
          { top: "10%", left: "5%", rot: 0 },
          { top: "10%", right: "5%", rot: 90 },
          { bottom: "15%", left: "5%", rot: 270 },
          { bottom: "15%", right: "5%", rot: 180 },
        ].map((pos, i) => (
          <div
            key={i}
            className="absolute pointer-events-none"
            style={{ ...pos, width: 40, height: 40 }}
          >
            <svg viewBox="0 0 40 40" fill="none" style={{ transform: `rotate(${pos.rot}deg)` }}>
              <path d="M0 0 L20 0 L0 20" stroke="hsl(0 0% 55% / 0.4)" strokeWidth="1" />
            </svg>
          </div>
        ))}

        {/* MAIN HERO CONTENT */}
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* System tag */}
          <div
            className="inline-flex items-center gap-3 mb-8"
            style={{ animation: "p3-fade-up 0.6s ease both" }}
          >
            <div className="p3-diamond-sm" />
            <span
              className="font-p3-mono text-xs"
              style={{ letterSpacing: "0.45em", color: "hsl(0 0% 60%)" }}
            >
              SYSTEM_INITIALIZE · TARTARUS_ENTRY
            </span>
            <div className="p3-diamond-sm" />
          </div>

          {/* Name */}
          <div
            className="mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 14vw, 9rem)",
              letterSpacing: "0.08em",
              lineHeight: 0.9,
              color: "white",
              textShadow: "0 0 60px hsl(0 0% 55% / 0.4), 0 0 120px hsl(0 0% 50% / 0.2)",
              animation: "p3-hero-title 1.2s cubic-bezier(0.23, 1, 0.32, 1) both",
            }}
          >
            AHMED
          </div>
          <div
            className="mb-2"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 12vw, 8rem)",
              letterSpacing: "0.1em",
              lineHeight: 0.9,
              background: "linear-gradient(135deg, hsl(0 0% 65%), hsl(0 0% 60%))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "p3-hero-title 1.2s 0.1s cubic-bezier(0.23, 1, 0.32, 1) both",
            }}
          >
            HUZAIFA MALIK
          </div>

          {/* Role tag */}
          <div
            className="flex items-center justify-center gap-4 my-8"
            style={{ animation: "p3-fade-up 0.7s 0.5s ease both", opacity: 0 }}
          >
            <div
              className="h-px flex-1 max-w-[100px]"
              style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 55% / 0.6))" }}
            />
            <div
              className="px-6 py-2 font-p3-ui font-bold text-sm"
              style={{
                letterSpacing: "0.35em",
                color: "hsl(0 0% 70%)",
                border: "1px solid hsl(0 0% 55% / 0.35)",
                background: "hsl(0 0% 50% / 0.08)",
                clipPath: "polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%)",
              }}
            >
              DATA ANALYST · DATA SCIENTIST
            </div>
            <div
              className="h-px flex-1 max-w-[100px]"
              style={{ background: "linear-gradient(90deg, hsl(0 0% 55% / 0.6), transparent)" }}
            />
          </div>

          {/* Subtitle */}
          <p
            className="font-p3-body text-lg max-w-xl mx-auto mb-12 leading-relaxed"
            style={{
              color: "hsl(0 0% 60%)",
              animation: "p3-fade-up 0.7s 0.7s ease both",
              opacity: 0,
            }}
          >
            Transforming raw data into actionable insights through Machine Learning,
            Statistical Modeling, and Data Visualization.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            style={{ animation: "p3-fade-up 0.7s 0.9s ease both", opacity: 0 }}
          >
            <button
              className="p3-btn-primary"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                View Projects
                <ArrowRight size={16} />
              </span>
            </button>
            <button
              className="p3-btn-outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            animation: "p3-fade-up 0.7s 1.4s ease both, p3-float 3s 2s ease-in-out infinite",
            opacity: 0,
          }}
        >
          <span
            className="font-p3-mono text-xs"
            style={{ letterSpacing: "0.4em", color: "hsl(0 0% 55% / 0.6)" }}
          >
            SCROLL
          </span>
          <div
            className="w-px h-12"
            style={{
              background: "linear-gradient(180deg, hsl(0 0% 55% / 0.6), transparent)",
            }}
          />
          <ChevronDown size={14} style={{ color: "hsl(0 0% 55% / 0.6)" }} />
        </div>
      </section>

      {/* ================================================================
          ABOUT SECTION
          ================================================================ */}
      <section id="about" className="relative py-28 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 0% 50%, hsl(0 0% 15% / 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader
            tag="PROFILE_DATA"
            title="ABOUT ME"
          />

          {/* Summary */}
          <P3Panel revealDir="up" className="mb-8">
            <div className="p-8 md:p-12">
              <p
                className="font-p3-body text-lg leading-relaxed mb-6"
                style={{ color: "hsl(0 0% 72%)" }}
              >
                I am a passionate{" "}
                <span
                  className="font-bold"
                  style={{ color: "hsl(0 0% 65%)", textShadow: "0 0 12px hsl(0 0% 55% / 0.4)" }}
                >
                  Data Analyst and Data Scientist
                </span>{" "}
                with a strong foundation in Data Analysis, Machine Learning, and Statistical Modeling.
                I specialize in extracting valuable insights from complex datasets, building predictive models,
                and creating compelling visualizations that drive business decisions.
              </p>
              <p
                className="font-p3-body text-lg leading-relaxed"
                style={{ color: "hsl(0 0% 62%)" }}
              >
                With hands-on experience in Python, SQL, and various data science tools,
                I am committed to continuous learning and applying innovative techniques to solve real-world problems.
              </p>
            </div>
          </P3Panel>

          {/* Education */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6 p3-reveal">
              <GraduationCap size={22} style={{ color: "hsl(0 0% 60%)" }} />
              <h3
                className="font-p3-ui font-bold text-xl"
                style={{ letterSpacing: "0.2em", color: "hsl(0 0% 90%)" }}
              >
                EDUCATION
              </h3>
            </div>
            <P3Panel revealDir="left" delay={200}>
              <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
                <div
                  className="w-14 h-14 flex items-center justify-center shrink-0"
                  style={{
                    background: "linear-gradient(135deg, hsl(0 0% 50% / 0.2), hsl(0 0% 55% / 0.1))",
                    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                    border: "1px solid hsl(0 0% 50% / 0.3)",
                  }}
                >
                  <GraduationCap size={22} style={{ color: "hsl(0 0% 65%)" }} />
                </div>
                <div>
                  <h4
                    className="font-p3-ui font-bold text-lg mb-1"
                    style={{ color: "hsl(0 0% 90%)", letterSpacing: "0.08em" }}
                  >
                    BS in Data Science
                  </h4>
                  <p className="font-p3-body text-base mb-1" style={{ color: "hsl(0 0% 65%)" }}>
                    Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology
                  </p>
                  <p
                    className="font-p3-mono text-xs"
                    style={{ color: "hsl(0 0% 55%)", letterSpacing: "0.2em" }}
                  >
                    HARIPUR, PAKISTAN · 2022 – 2026
                  </p>
                </div>
              </div>
            </P3Panel>
          </div>

          {/* Coursework + Certifications */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-5 p3-reveal">
                <BookOpen size={18} style={{ color: "hsl(0 0% 60%)" }} />
                <h3
                  className="font-p3-ui font-bold text-sm"
                  style={{ letterSpacing: "0.25em", color: "hsl(0 0% 90%)" }}
                >
                  COURSEWORK
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {coursework.map((c, i) => (
                  <P3Panel key={i} revealDir="left" delay={(i + 1) * 100} className="p3-panel-sm">
                    <div className="px-5 py-3 flex items-center gap-3">
                      <div className="p3-diamond-sm shrink-0" style={{ background: "hsl(0 0% 55%)" }} />
                      <span className="font-p3-body font-semibold text-sm" style={{ color: "hsl(0 0% 72%)" }}>
                        {c}
                      </span>
                    </div>
                  </P3Panel>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-5 p3-reveal">
                <Award size={18} style={{ color: "hsl(0 0% 55%)" }} />
                <h3
                  className="font-p3-ui font-bold text-sm"
                  style={{ letterSpacing: "0.25em", color: "hsl(0 0% 90%)" }}
                >
                  CERTIFICATIONS
                </h3>
              </div>
              <div className="flex flex-col gap-3">
                {certifications.map((cert, i) => (
                  <P3Panel key={i} revealDir="right" delay={(i + 1) * 100} className="p3-panel-sm">
                    <div className="px-5 py-3 flex items-center gap-3">
                      <div className="p3-diamond-sm shrink-0" style={{ background: "hsl(0 0% 55%)" }} />
                      <span className="font-p3-body font-semibold text-sm" style={{ color: "hsl(0 0% 72%)" }}>
                        {cert}
                      </span>
                    </div>
                  </P3Panel>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <P3Divider />

      {/* ================================================================
          SKILLS SECTION
          ================================================================ */}
      <section
        id="skills"
        className="relative py-28 px-6"
        style={{
          background: "linear-gradient(135deg, hsl(0 0% 7% / 0.8) 0%, hsl(0 0% 5%) 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 100% 30%, hsl(0 0% 20% / 0.25) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader tag="PERSONA_STATS" title="SKILLS" />

          {/* Technical Skills */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 p3-reveal">
              <Code size={22} style={{ color: "hsl(0 0% 60%)" }} />
              <h3 className="font-p3-ui font-bold text-lg" style={{ letterSpacing: "0.2em", color: "hsl(0 0% 90%)" }}>
                TECHNICAL SKILLS
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {technicalSkills.map((skill, i) => (
                <P3Panel key={i} revealDir="up" delay={i * 100} className="p3-panel-sm">
                  <div className="p-5">
                    <div className="flex justify-between items-center mb-3">
                      <span
                        className="font-p3-ui font-bold text-sm"
                        style={{ letterSpacing: "0.15em", color: "hsl(0 0% 90%)" }}
                      >
                        {skill.name}
                      </span>
                      <span
                        className="font-p3-mono text-xs"
                        style={{ color: "hsl(0 0% 55%)" }}
                      >
                        {skill.level}%
                      </span>
                    </div>
                    <div className="p3-stat-bar">
                      <div
                        className="p3-stat-fill"
                        style={{ width: `${skill.level}%`, transition: "width 1.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)" }}
                      />
                    </div>
                  </div>
                </P3Panel>
              ))}
            </div>
          </div>

          {/* Domain Expertise */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8 p3-reveal">
              <Brain size={22} style={{ color: "hsl(0 0% 55%)" }} />
              <h3 className="font-p3-ui font-bold text-lg" style={{ letterSpacing: "0.2em", color: "hsl(0 0% 90%)" }}>
                DOMAIN EXPERTISE
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {domainExpertise.map((d, i) => (
                <P3Panel key={i} revealDir="scale" delay={i * 100}>
                  <div className="p-6 group">
                    <div className="flex items-center gap-2 mb-3">
                      <div
                        className="w-6 h-6 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(135deg, hsl(0 0% 50% / 0.2), hsl(0 0% 55% / 0.1))",
                          clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        }}
                      />
                      <h4
                        className="font-p3-ui font-bold text-sm"
                        style={{ letterSpacing: "0.12em", color: "hsl(0 0% 90%)" }}
                      >
                        {d.title}
                      </h4>
                    </div>
                    <p className="font-p3-body text-sm leading-relaxed" style={{ color: "hsl(0 0% 58%)" }}>
                      {d.desc}
                    </p>
                  </div>
                </P3Panel>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div>
            <div className="flex items-center gap-3 mb-8 p3-reveal">
              <Users size={22} style={{ color: "hsl(0 0% 60%)" }} />
              <h3 className="font-p3-ui font-bold text-lg" style={{ letterSpacing: "0.2em", color: "hsl(0 0% 90%)" }}>
                SOCIAL STATS
              </h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {softSkills.map((s, i) => (
                <P3Panel key={i} revealDir="up" delay={i * 100}>
                  <div className="p-6 text-center group">
                    <s.icon
                      size={32}
                      className="mx-auto mb-3 transition-all duration-300"
                      style={{
                        color: "hsl(0 0% 55% / 0.5)",
                        filter: "drop-shadow(0 0 0px transparent)",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as SVGElement).style.color = "hsl(0 0% 65%)";
                        (e.target as SVGElement).style.filter = "drop-shadow(0 0 8px hsl(0 0% 55% / 0.6))";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as SVGElement).style.color = "hsl(0 0% 55% / 0.5)";
                        (e.target as SVGElement).style.filter = "drop-shadow(0 0 0px transparent)";
                      }}
                    />
                    <p
                      className="font-p3-ui font-semibold text-xs"
                      style={{ letterSpacing: "0.12em", color: "hsl(0 0% 72%)" }}
                    >
                      {s.name}
                    </p>
                  </div>
                </P3Panel>
              ))}
            </div>
          </div>
        </div>
      </section>

      <P3Divider />

      {/* ================================================================
          EXPERIENCE SECTION
          ================================================================ */}
      <section id="experience" className="relative py-28 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 70% 50% at 10% 60%, hsl(0 0% 15% / 0.2) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader tag="BATTLE_RECORD" title="EXPERIENCE" />

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px md:hidden"
              style={{
                background: "linear-gradient(180deg, transparent, hsl(0 0% 50% / 0.6) 15%, hsl(0 0% 55% / 0.4) 85%, transparent)",
                boxShadow: "0 0 6px hsl(0 0% 55% / 0.3)",
              }}
            />

            <div className="flex flex-col gap-12 md:gap-16">
              {experiences.map((exp, i) => (
                <div key={i} className="relative pl-12 md:pl-0">
                  {/* Mobile timeline dot */}
                  <div
                    className="absolute left-[9px] top-4 w-4 h-4 rotate-45 md:hidden"
                    style={{
                      background: "hsl(0 0% 55%)",
                      boxShadow: "0 0 10px hsl(0 0% 55% / 0.6)",
                    }}
                  />

                  <P3Panel revealDir={i % 2 === 0 ? "left" : "right"} delay={100}>
                    <div className="p-6 md:p-8">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                        <div>
                          <h4
                            className="font-p3-ui font-bold text-xl mb-1"
                            style={{ letterSpacing: "0.12em", color: "hsl(0 0% 70%)", textShadow: "0 0 15px hsl(0 0% 55% / 0.3)" }}
                          >
                            {exp.title}
                          </h4>
                          <div className="flex flex-wrap items-center gap-4">
                            <span className="flex items-center gap-1.5 font-p3-body text-sm" style={{ color: "hsl(0 0% 65%)" }}>
                              <Briefcase size={14} style={{ color: "hsl(0 0% 55% / 0.6)" }} />
                              {exp.company}
                            </span>
                            <span className="flex items-center gap-1.5 font-p3-body text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                              <MapPin size={14} style={{ color: "hsl(0 0% 55% / 0.5)" }} />
                              {exp.location}
                            </span>
                          </div>
                        </div>
                        <div
                          className="flex items-center gap-2 font-p3-mono text-xs px-4 py-2"
                          style={{
                            color: "hsl(0 0% 60%)",
                            background: "hsl(0 0% 55% / 0.08)",
                            border: "1px solid hsl(0 0% 55% / 0.25)",
                            clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                            letterSpacing: "0.1em",
                          }}
                        >
                          <Calendar size={12} />
                          {exp.period}
                        </div>
                      </div>

                      {/* Divider line */}
                      <div
                        className="h-px mb-5"
                        style={{ background: "linear-gradient(90deg, hsl(0 0% 50% / 0.4), transparent)" }}
                      />

                      {/* Duties */}
                      <ul className="flex flex-col gap-3">
                        {exp.duties.map((duty, j) => (
                          <li key={j} className="flex items-start gap-3">
                            <div
                              className="shrink-0 mt-1.5 w-1.5 h-1.5 rotate-45"
                              style={{ background: "hsl(0 0% 55% / 0.7)" }}
                            />
                            <span
                              className="font-p3-body text-sm leading-relaxed"
                              style={{ color: "hsl(0 0% 63%)" }}
                            >
                              {duty}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </P3Panel>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <P3Divider />

      {/* ================================================================
          PROJECTS SECTION
          ================================================================ */}
      <section
        id="projects"
        className="relative py-28 px-6"
        style={{
          background: "linear-gradient(180deg, hsl(0 0% 5%), hsl(0 0% 7% / 0.8) 50%, hsl(0 0% 5%))",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 80% 30%, hsl(0 0% 30% / 0.15) 0%, transparent 60%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader
            tag="SHADOW_OPERATIONS"
            title="PROJECTS"
            subtitle="A collection of data science operations showcasing skills in machine learning, analysis, and visualization."
          />

          <div className="flex flex-col gap-10">
            {projects.map((proj, i) => (
              <P3Panel key={i} revealDir="scale" delay={i * 150}>
                <div className="p-6 md:p-10">
                  {/* Card header */}
                  <div className="flex items-start gap-5 mb-6">
                    <div
                      className="w-14 h-14 flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(0 0% 50% / 0.15), hsl(0 0% 55% / 0.08))",
                        clipPath: "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                        border: "1px solid hsl(0 0% 50% / 0.3)",
                      }}
                    >
                      <proj.icon size={24} style={{ color: "hsl(0 0% 65%)" }} />
                    </div>
                    <div>
                      <h4
                        className="font-p3-ui font-black text-2xl mb-1"
                        style={{ letterSpacing: "0.1em", color: "hsl(0 0% 92%)" }}
                      >
                        {proj.title}
                      </h4>
                      <p className="font-p3-body text-sm" style={{ color: "hsl(0 0% 55%)" }}>
                        {proj.desc}
                      </p>
                    </div>
                  </div>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.techs.map((tech, j) => (
                      <span key={j} className="p3-tag">{tech}</span>
                    ))}
                  </div>

                  {/* Divider */}
                  <div
                    className="h-px mb-5"
                    style={{ background: "linear-gradient(90deg, hsl(0 0% 55% / 0.4), transparent)" }}
                  />

                  {/* Highlights */}
                  <div>
                    <p
                      className="font-p3-mono text-xs mb-3"
                      style={{ letterSpacing: "0.3em", color: "hsl(0 0% 55%)" }}
                    >
                      ◆ KEY_ACHIEVEMENTS
                    </p>
                    <ul className="flex flex-col gap-2">
                      {proj.highlights.map((h, j) => (
                        <li key={j} className="flex items-center gap-3">
                          <div
                            className="shrink-0 w-2 h-2 rotate-45"
                            style={{
                              background: "hsl(0 0% 55%)",
                              boxShadow: "0 0 6px hsl(0 0% 55% / 0.5)",
                            }}
                          />
                          <span className="font-p3-body text-sm" style={{ color: "hsl(0 0% 67%)" }}>
                            {h}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </P3Panel>
            ))}
          </div>
        </div>
      </section>

      <P3Divider />

      {/* ================================================================
          CONTACT SECTION
          ================================================================ */}
      <section id="contact" className="relative py-28 px-6">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 60% 60% at 50% 100%, hsl(0 0% 20% / 0.2) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-5xl mx-auto relative z-10">
          <SectionHeader
            tag="LINK_SYSTEM"
            title="CONTACT"
            subtitle="Always open to discussing opportunities, collaborations, or having a chat about data science."
          />

          {/* LinkedIn Feature Card */}
          <div className="mb-12 p3-reveal-scale">
            <a
              href="https://www.linkedin.com/in/ahmed-huzaifa-malik/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="p3-panel group cursor-pointer">
                <div className="p-8 md:p-12 relative overflow-hidden">
                  {/* Hover shimmer */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, hsl(0 0% 50% / 0.06) 0%, hsl(0 0% 55% / 0.04) 100%)",
                    }}
                  />

                  <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                    {/* Avatar diamond */}
                    <div
                      className="w-28 h-28 flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, hsl(0 0% 50% / 0.15), hsl(0 0% 55% / 0.08))",
                        clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                        border: "1px solid hsl(0 0% 50% / 0.3)",
                        boxShadow: "0 0 30px hsl(0 0% 50% / 0.15)",
                        transition: "all 0.4s ease",
                      }}
                    >
                      <span
                        className="font-p3-display text-2xl"
                        style={{ color: "hsl(0 0% 65%)", textShadow: "0 0 15px hsl(0 0% 55% / 0.5)" }}
                      >
                        AH
                      </span>
                    </div>

                    <div className="text-center md:text-left flex-1">
                      <h3
                        className="font-p3-ui font-black text-2xl md:text-3xl mb-2"
                        style={{ letterSpacing: "0.1em", color: "hsl(0 0% 95%)", textShadow: "0 0 20px hsl(0 0% 55% / 0.2)" }}
                      >
                        Ahmed Huzaifa Malik
                      </h3>
                      <p
                        className="font-p3-body text-base mb-5"
                        style={{ color: "hsl(0 0% 60%)" }}
                      >
                        Data Analyst
                        <span className="mx-3 inline-block w-2 h-2 rotate-45 bg-current opacity-50" />
                        Data Scientist
                      </p>
                      <div
                        className="inline-flex items-center gap-3 font-p3-ui font-bold text-xs px-5 py-2.5 transition-all duration-300 group-hover:shadow-[0_0_20px_hsl(190_100%_55%/0.3)]"
                        style={{
                          letterSpacing: "0.2em",
                          color: "hsl(0 0% 60%)",
                          border: "1px solid hsl(0 0% 55% / 0.4)",
                          background: "hsl(0 0% 55% / 0.08)",
                          clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)",
                        }}
                      >
                        <Linkedin size={14} />
                        CONNECT ON LINKEDIN
                        <ExternalLink size={12} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-5">
            {contactInfo.map((info, i) => (
              <P3Panel key={i} revealDir="up" delay={i * 150} className="p3-panel-sm">
                <div className="p-6 text-center">
                  {info.href ? (
                    <a
                      href={info.href}
                      target={info.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                      className="block group"
                    >
                      <info.icon
                        size={28}
                        className="mx-auto mb-4 transition-all duration-300"
                        style={{ color: "hsl(0 0% 55% / 0.55)" }}
                      />
                      <p
                        className="font-p3-mono text-xs mb-2"
                        style={{ letterSpacing: "0.3em", color: "hsl(0 0% 50%)" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="font-p3-body font-semibold text-sm"
                        style={{ color: "hsl(0 0% 75%)" }}
                      >
                        {info.value}
                      </p>
                    </a>
                  ) : (
                    <>
                      <info.icon
                        size={28}
                        className="mx-auto mb-4"
                        style={{ color: "hsl(0 0% 55% / 0.55)" }}
                      />
                      <p
                        className="font-p3-mono text-xs mb-2"
                        style={{ letterSpacing: "0.3em", color: "hsl(0 0% 50%)" }}
                      >
                        {info.label}
                      </p>
                      <p
                        className="font-p3-body font-semibold text-sm"
                        style={{ color: "hsl(0 0% 75%)" }}
                      >
                        {info.value}
                      </p>
                    </>
                  )}
                </div>
              </P3Panel>
            ))}
          </div>

          {/* Footer */}
          <div className="text-center mt-24 p3-reveal-up">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: "linear-gradient(90deg, transparent, hsl(0 0% 50% / 0.4))" }}
              />
              <div className="p3-diamond" />
              <div className="p3-diamond-sm" />
              <div className="p3-diamond" />
              <div
                className="h-px flex-1 max-w-[80px]"
                style={{ background: "linear-gradient(90deg, hsl(0 0% 50% / 0.4), transparent)" }}
              />
            </div>
            <p
              className="font-p3-mono text-xs"
              style={{ letterSpacing: "0.4em", color: "hsl(0 0% 55% / 0.4)" }}
            >
              // END_TRANSMISSION · TARTARUS_EXIT
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
