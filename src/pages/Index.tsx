import { ArrowRight, ChevronDown, GraduationCap, BookOpen, Award, Code, Brain, Users, MessageSquare, BarChart3, Briefcase, Calendar, MapPin, Search, Heart, Ship, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import FloatingParticles from "@/components/FloatingParticles";
import useScrollReveal from "@/hooks/use-scroll-reveal";

const SectionHeader = ({ title, subtitle, className = "" }: { title: string; subtitle?: string; className?: string }) => (
  <div className={`max-w-3xl mx-auto text-center mb-20 scroll-reveal ${className}`}>
    <div className="inline-block relative">
      <div className="text-xs font-display tracking-[0.5em] text-p3-cyan mb-4 uppercase">// {title}</div>
      <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-4 tracking-wider text-glow">
        {title}
      </h2>
      <div className="p3r-divider w-full mt-4" />
    </div>
    {subtitle && <p className="text-lg text-muted-foreground mt-8 font-sans max-w-xl mx-auto">{subtitle}</p>}
  </div>
);

const P3RCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <div
    className={`relative bg-card/80 backdrop-blur-sm border border-border clip-angular-sm box-glow-hover transition-all duration-500 scroll-reveal ${className}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-p3-blue/40 to-transparent" />
    <div className="absolute top-0 right-0 w-6 h-6">
      <div className="absolute top-0 right-0 w-full h-px bg-p3-blue/40" />
      <div className="absolute top-0 right-0 h-full w-px bg-p3-blue/40" />
    </div>
    <div className="absolute bottom-0 left-0 w-6 h-6">
      <div className="absolute bottom-0 left-0 w-full h-px bg-p3-blue/40" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-p3-blue/40" />
    </div>
    {children}
  </div>
);

const Index = () => {
  const scrollRef = useScrollReveal();

  const coursework = [
    "Data Analysis",
    "Data Visualization",
    "Machine Learning",
    "Database Systems",
  ];

  const certifications = [
    "Data Analyst In Python | DataCamp",
    "Work Smarter With Excel | Microsoft",
    "Introduction To Data Analytics | Meta",
    "Dashboards and Charts With Excel | IBM",
    "SQL Fundamentals | DataCamp",
    "PowerBi Fundamentals | DataCamp",
  ];

  const technicalSkills = ["Python", "SQL", "Excel", "Power BI", "Tableau"];

  const domainExpertise = [
    { title: "Data Science", description: "End-to-end data science projects from data collection to deployment" },
    { title: "Machine Learning", description: "Building and optimizing predictive models for various use cases" },
    { title: "Data Visualization", description: "Creating compelling visual stories from complex datasets" },
    { title: "Exploratory Data Analysis", description: "Uncovering patterns and insights through statistical analysis" },
    { title: "Model Training & Evaluation", description: "Training, validating, and fine-tuning ML models" },
    { title: "Feature Engineering", description: "Creating meaningful features to improve model performance" },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Communication (B2 English)", icon: MessageSquare },
    { name: "Problem Solving", icon: Brain },
    { name: "Project Management", icon: BarChart3 },
  ];

  const experiences = [
    {
      title: "Data Science Intern",
      company: "Digital Empowerment Network",
      location: "Remote",
      period: "July 2025 – September 2025",
      responsibilities: [
        "Conducted exploratory data analysis on large datasets to identify patterns and trends",
        "Developed machine learning models for predictive analytics",
        "Created interactive dashboards and visualizations for stakeholder presentations",
        "Collaborated with cross-functional teams to deliver data-driven insights",
      ],
    },
    {
      title: "Data Science Intern",
      company: "DevelopersHub Corporation",
      location: "Remote",
      period: "January 2025 – June 2025",
      responsibilities: [
        "Built and deployed machine learning models for classification and regression tasks",
        "Performed data cleaning, preprocessing, and feature engineering on complex datasets",
        "Developed automated data pipelines for efficient data processing",
        "Documented technical processes and presented findings to senior stakeholders",
      ],
    },
  ];

  const projects = [
    {
      title: "Fraud Detection Model",
      icon: Search,
      description: "Built a machine learning model to detect fraudulent transactions with high accuracy. Implemented various classification algorithms and compared their performance.",
      technologies: ["Python", "Scikit-learn", "Pandas", "EDA", "Feature Engineering"],
      highlights: ["Achieved 95%+ accuracy in fraud detection", "Reduced false positive rate by 30%", "Processed 100K+ transaction records"],
    },
    {
      title: "Heart Disease Prediction",
      icon: Heart,
      description: "Developed a predictive model to identify patients at risk of heart disease using clinical data. Applied multiple classification algorithms with cross-validation.",
      technologies: ["Python", "Machine Learning", "Classification", "Data Preprocessing"],
      highlights: ["Built ensemble model with 92% accuracy", "Identified key risk factors through feature importance", "Created interactive prediction interface"],
    },
    {
      title: "Titanic Dataset EDA",
      icon: Ship,
      description: "Performed comprehensive exploratory data analysis on the famous Titanic dataset, uncovering survival patterns and demographic insights.",
      technologies: ["Python", "Matplotlib", "Seaborn", "Statistical Analysis"],
      highlights: ["Visualized survival rates across demographics", "Identified key factors influencing survival", "Created comprehensive analysis report"],
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ahmedhuzaifamalik@gmail.com", href: "mailto:ahmedhuzaifamalik@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+92) 3175569176", href: "tel:+923175569176" },
    { icon: MapPin, label: "Location", value: "Mansehra, Pakistan", href: null as string | null },
  ];

  return (
    <div ref={scrollRef} className="min-h-screen pt-16 overflow-y-auto">
      <FloatingParticles />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6 p3r-gradient-hero">
        {/* Geometric background lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-8 w-60 h-60 border border-p3-blue/[0.07] rotate-45" />
          <div className="absolute bottom-16 right-8 w-80 h-80 border border-p3-blue/[0.05] rotate-12" />
          <div className="absolute top-1/4 left-0 w-px h-48 bg-gradient-to-b from-transparent via-p3-blue/25 to-transparent" />
          <div className="absolute top-1/3 right-0 w-px h-64 bg-gradient-to-b from-transparent via-p3-cyan/20 to-transparent" />
          <div className="absolute bottom-1/4 left-1/4 w-32 h-px bg-gradient-to-r from-transparent via-p3-blue/20 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-40 h-px bg-gradient-to-r from-transparent via-p3-cyan/15 to-transparent" />
          {/* Large decorative diamond */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-p3-blue/[0.04] rotate-45 animate-border-pulse" />
        </div>

        <div className="text-center max-w-5xl mx-auto relative z-10">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="text-p3-cyan text-sm font-display tracking-[0.4em] uppercase border border-p3-cyan/20 px-6 py-2 clip-angular-sm bg-p3-cyan/5">
              // System.Initialize
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-display font-black tracking-tight text-foreground mb-6 animate-fade-in-delay-1 leading-[1.1]">
            <span className="text-glow">Ahmed Huzaifa</span>
            <br />
            <span className="bg-gradient-to-r from-p3-blue via-p3-cyan to-p3-blue bg-clip-text text-transparent">
              Malik
            </span>
          </h1>
          <h2 className="text-2xl md:text-4xl text-muted-foreground font-display font-medium mb-10 animate-fade-in-delay-2 tracking-[0.15em]">
            Data Analyst <span className="text-p3-blue animate-pulse-glow inline-block w-3 h-3 bg-p3-blue rotate-45 mx-3 relative top-[-2px]" /> Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-14 animate-fade-in-delay-3 leading-relaxed font-sans font-light">
            Transforming raw data into actionable insights through Machine Learning, 
            Statistical Modeling, and compelling Data Visualization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-delay-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-p3-blue to-p3-cyan text-primary-foreground hover:from-p3-cyan hover:to-p3-blue clip-angular-sm font-display tracking-[0.15em] uppercase px-10 py-6 text-base animate-pulse-glow border-0"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-p3-blue/40 text-p3-blue hover:bg-p3-blue/10 hover:border-p3-blue clip-angular-sm font-display tracking-[0.15em] uppercase px-10 py-6 text-base"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs font-display tracking-[0.3em] text-p3-blue/60 uppercase">Scroll</span>
          <ChevronDown className="h-5 w-5 text-p3-blue/60" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 p3r-gradient-section pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader title="About Me" />

          <div className="max-w-4xl mx-auto mb-20">
            <P3RCard>
              <div className="p-8 md:p-12">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                  I am a passionate <span className="text-p3-blue font-bold">Data Analyst and Data Scientist</span> with 
                  a strong foundation in Data Analysis, Machine Learning, and Statistical Modeling. 
                  I specialize in extracting valuable insights from complex datasets, building 
                  predictive models, and creating compelling data visualizations that drive 
                  business decisions.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6 font-sans">
                  With hands-on experience in Python, SQL, and various data science tools, 
                  I am committed to continuous learning and applying innovative techniques 
                  to solve real-world problems.
                </p>
              </div>
            </P3RCard>
          </div>

          {/* Education */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-3 mb-8 scroll-reveal-left">
              <GraduationCap className="h-7 w-7 text-p3-blue" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wider">Education</h3>
            </div>
            <P3RCard>
              <div className="p-6 md:p-8">
                <h4 className="text-xl font-display font-bold text-foreground mb-2 tracking-wide text-glow">BS in Data Science</h4>
                <p className="text-lg text-muted-foreground mb-2 font-sans">Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology</p>
                <p className="text-p3-cyan font-display text-sm tracking-wider">Haripur, Pakistan | 2022 – 2026</p>
              </div>
            </P3RCard>
          </div>

          {/* Coursework & Certifications */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
            <div>
              <div className="flex items-center gap-3 mb-6 scroll-reveal-left">
                <BookOpen className="h-5 w-5 text-p3-blue" />
                <h3 className="text-xl font-display font-bold text-foreground tracking-wider">Coursework</h3>
              </div>
              <div className="grid gap-3">
                {coursework.map((course, index) => (
                  <P3RCard key={index} delay={index * 100}>
                    <div className="p-4 flex items-center gap-3">
                      <span className="w-2 h-2 bg-p3-blue rotate-45 shrink-0 shadow-[0_0_8px_hsl(215_100%_55%/0.5)]" />
                      <p className="text-muted-foreground font-sans font-medium">{course}</p>
                    </div>
                  </P3RCard>
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-6 scroll-reveal-right">
                <Award className="h-5 w-5 text-p3-cyan" />
                <h3 className="text-xl font-display font-bold text-foreground tracking-wider">Certifications</h3>
              </div>
              <div className="grid gap-3">
                {certifications.map((cert, index) => (
                  <P3RCard key={index} delay={index * 100}>
                    <div className="p-4 flex items-center gap-3">
                      <span className="w-2 h-2 bg-p3-cyan rotate-45 shrink-0 shadow-[0_0_8px_hsl(195_100%_55%/0.5)]" />
                      <p className="text-muted-foreground font-sans font-medium">{cert}</p>
                    </div>
                  </P3RCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 p3r-gradient-blue pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader title="Skills" />

          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex items-center gap-3 mb-10 scroll-reveal-left">
              <Code className="h-7 w-7 text-p3-blue" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wider">Technical Skills</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
              {technicalSkills.map((skill, index) => (
                <P3RCard key={index} delay={index * 80}>
                  <div className="p-6 text-center group cursor-default">
                    <div className="w-3 h-3 bg-p3-blue/30 rotate-45 mx-auto mb-4 group-hover:bg-p3-blue group-hover:shadow-[0_0_15px_hsl(215_100%_55%/0.6)] transition-all duration-300" />
                    <p className="font-display font-bold text-foreground tracking-wider text-sm group-hover:text-p3-blue transition-colors">{skill}</p>
                  </div>
                </P3RCard>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto mb-20">
            <div className="flex items-center gap-3 mb-10 scroll-reveal-left">
              <Brain className="h-7 w-7 text-p3-cyan" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wider">Domain Expertise</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {domainExpertise.map((domain, index) => (
                <P3RCard key={index} delay={index * 100}>
                  <div className="p-6 group cursor-default">
                    <h4 className="text-base font-display font-bold text-foreground mb-3 tracking-wide group-hover:text-p3-blue transition-colors">{domain.title}</h4>
                    <p className="text-sm text-muted-foreground font-sans leading-relaxed">{domain.description}</p>
                  </div>
                </P3RCard>
              ))}
            </div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-10 scroll-reveal-left">
              <Users className="h-7 w-7 text-p3-blue" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wider">Soft Skills</h3>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {softSkills.map((skill, index) => (
                <P3RCard key={index} delay={index * 100}>
                  <div className="p-6 text-center group cursor-default">
                    <skill.icon className="h-9 w-9 text-p3-blue/50 group-hover:text-p3-blue transition-all duration-300 mx-auto mb-4 group-hover:drop-shadow-[0_0_10px_hsl(215_100%_55%/0.5)]" />
                    <p className="text-sm font-display font-medium text-foreground tracking-wide">{skill.name}</p>
                  </div>
                </P3RCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 p3r-gradient-section pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader title="Experience" />

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line with glow */}
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden md:block"
                style={{ background: 'linear-gradient(to bottom, transparent, hsl(215 100% 55% / 0.5), hsl(195 100% 55% / 0.3), transparent)' }}
              />
              
              {experiences.map((exp, index) => (
                <div key={index} className="relative mb-12 md:mb-20">
                  {/* Timeline diamond */}
                  <div className="absolute left-0 md:left-1/2 top-4 w-4 h-4 bg-p3-blue rotate-45 -translate-x-1/2 hidden md:block animate-pulse-glow z-10" />
                  
                  <div className={`md:w-[calc(50%-2.5rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8 scroll-reveal-left' : 'md:ml-auto md:pl-8 scroll-reveal-right'}`}>
                    <P3RCard>
                      <div className="p-6 md:p-8">
                        <div className="flex items-center gap-2 text-p3-cyan text-sm mb-3 font-display tracking-[0.2em]">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <h4 className="text-xl font-display font-bold text-foreground mb-2 tracking-wide text-glow">{exp.title}</h4>
                        <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-5 font-sans">
                          <div className="flex items-center gap-1.5">
                            <Briefcase className="h-4 w-4 text-p3-blue/60" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <MapPin className="h-4 w-4 text-p3-blue/60" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <ul className="space-y-3">
                          {exp.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-3 text-muted-foreground font-sans">
                              <div className="w-1.5 h-1.5 bg-p3-blue/60 rotate-45 mt-2.5 shrink-0" />
                              <span className="leading-relaxed">{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </P3RCard>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 p3r-gradient-blue pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader 
            title="Projects" 
            subtitle="A collection of data science projects showcasing my skills in machine learning, data analysis, and visualization."
          />

          <div className="max-w-5xl mx-auto grid gap-10">
            {projects.map((project, index) => (
              <P3RCard key={index} delay={index * 150} className="scroll-reveal-scale">
                <div className="p-6 md:p-10 group">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-5">
                      <div className="p-4 bg-gradient-to-br from-p3-blue/20 to-p3-cyan/10 border border-p3-blue/30 clip-angular group-hover:from-p3-blue/30 group-hover:to-p3-cyan/20 transition-all duration-500">
                        <project.icon className="h-7 w-7 text-p3-blue" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-foreground tracking-wide group-hover:text-p3-blue transition-colors">{project.title}</h4>
                    </div>
                  </div>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-sans">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 text-xs font-display uppercase tracking-[0.15em] bg-p3-blue/10 text-p3-blue border border-p3-blue/25 clip-angular-sm hover:bg-p3-blue/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h5 className="text-xs font-display font-bold text-p3-cyan uppercase tracking-[0.3em]">Key Achievements</h5>
                    <ul className="space-y-2.5">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-center gap-3 text-muted-foreground font-sans">
                          <div className="w-2 h-2 bg-p3-cyan rotate-45 shadow-[0_0_6px_hsl(195_100%_55%/0.4)]" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </P3RCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="container mx-auto px-6 py-24 relative">
        <div className="absolute inset-0 p3r-gradient-section pointer-events-none" />
        <div className="relative z-10">
          <SectionHeader 
            title="Contact"
            subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about data science."
          />

          <div className="max-w-4xl mx-auto">
            {/* LinkedIn Card */}
            <div className="mb-14 scroll-reveal-scale">
              <a href="https://www.linkedin.com/in/ahmed-huzaifa-malik/" target="_blank" rel="noopener noreferrer" className="block">
                <P3RCard className="overflow-hidden">
                  <div className="p-8 md:p-12 group relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-p3-blue/5 to-p3-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                      <div className="w-32 h-32 border-2 border-p3-blue/30 bg-gradient-to-br from-p3-blue/10 to-p3-cyan/5 clip-angular flex items-center justify-center group-hover:border-p3-blue/60 transition-all duration-500 group-hover:shadow-[0_0_30px_hsl(215_100%_55%/0.3)]">
                        <span className="text-3xl font-display font-black text-p3-blue tracking-wider">AH</span>
                      </div>
                      <div className="text-center md:text-left flex-1">
                        <h3 className="text-2xl md:text-3xl font-display font-black text-foreground mb-2 tracking-wider text-glow">Ahmed Huzaifa Malik</h3>
                        <p className="text-lg text-muted-foreground mb-4 font-sans">
                          Data Analyst <span className="inline-block w-2 h-2 bg-p3-blue rotate-45 mx-2 relative top-[-1px]" /> Data Scientist
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-3 text-p3-blue group-hover:text-p3-cyan transition-colors font-display tracking-[0.15em] text-sm">
                          <Linkedin className="h-5 w-5" />
                          <span>Connect on LinkedIn</span>
                          <ExternalLink className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </P3RCard>
              </a>
            </div>

            {/* Contact Info Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <P3RCard key={index} delay={index * 100}>
                  <div className="p-6 text-center group cursor-default">
                    {info.href ? (
                      <a href={info.href} className="block" target={info.href.startsWith("mailto") ? undefined : "_blank"} rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
                        <info.icon className="h-8 w-8 text-p3-blue/50 group-hover:text-p3-blue transition-all duration-300 mx-auto mb-4 group-hover:drop-shadow-[0_0_10px_hsl(215_100%_55%/0.5)]" />
                        <p className="text-xs text-muted-foreground mb-2 font-display uppercase tracking-[0.2em]">{info.label}</p>
                        <p className="text-foreground font-sans font-semibold group-hover:text-p3-blue transition-all">{info.value}</p>
                      </a>
                    ) : (
                      <>
                        <info.icon className="h-8 w-8 text-p3-blue/50 group-hover:text-p3-blue transition-all duration-300 mx-auto mb-4 group-hover:drop-shadow-[0_0_10px_hsl(215_100%_55%/0.5)]" />
                        <p className="text-xs text-muted-foreground mb-2 font-display uppercase tracking-[0.2em]">{info.label}</p>
                        <p className="text-foreground font-sans font-semibold">{info.value}</p>
                      </>
                    )}
                  </div>
                </P3RCard>
              ))}
            </div>

            <div className="text-center mt-20 scroll-reveal">
              <p className="text-muted-foreground font-display tracking-[0.2em] text-sm uppercase">// End_Transmission</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
