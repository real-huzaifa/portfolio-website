import { ArrowRight, ChevronDown, GraduationCap, BookOpen, Award, Code, Database, BarChart3, Brain, Users, MessageSquare, Briefcase, Calendar, MapPin, Search, Heart, Ship, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import FloatingParticles from "@/components/FloatingParticles";

const SectionHeader = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="max-w-3xl mx-auto text-center mb-16">
    <div className="inline-block relative">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4 tracking-wider text-glow">
        {title}
      </h2>
      <div className="p3r-divider w-full mt-2" />
    </div>
    {subtitle && <p className="text-lg text-muted-foreground mt-6 font-sans">{subtitle}</p>}
  </div>
);

const P3RCard = ({ children, className = "", hover = true }: { children: React.ReactNode; className?: string; hover?: boolean }) => (
  <div className={`relative bg-card border border-border clip-angular-sm ${hover ? 'box-glow-hover' : ''} transition-all duration-300 ${className}`}>
    {/* Corner accent */}
    <div className="absolute top-0 right-0 w-5 h-5">
      <div className="absolute top-0 right-0 w-full h-px bg-p3-blue/50" />
      <div className="absolute top-0 right-0 h-full w-px bg-p3-blue/50" />
    </div>
    <div className="absolute bottom-0 left-0 w-5 h-5">
      <div className="absolute bottom-0 left-0 w-full h-px bg-p3-blue/50" />
      <div className="absolute bottom-0 left-0 h-full w-px bg-p3-blue/50" />
    </div>
    {children}
  </div>
);

const Index = () => {
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
      highlights: [
        "Achieved 95%+ accuracy in fraud detection",
        "Reduced false positive rate by 30%",
        "Processed 100K+ transaction records",
      ],
    },
    {
      title: "Heart Disease Prediction",
      icon: Heart,
      description: "Developed a predictive model to identify patients at risk of heart disease using clinical data. Applied multiple classification algorithms with cross-validation.",
      technologies: ["Python", "Machine Learning", "Classification", "Data Preprocessing"],
      highlights: [
        "Built ensemble model with 92% accuracy",
        "Identified key risk factors through feature importance",
        "Created interactive prediction interface",
      ],
    },
    {
      title: "Titanic Dataset EDA",
      icon: Ship,
      description: "Performed comprehensive exploratory data analysis on the famous Titanic dataset, uncovering survival patterns and demographic insights.",
      technologies: ["Python", "Matplotlib", "Seaborn", "Statistical Analysis"],
      highlights: [
        "Visualized survival rates across demographics",
        "Identified key factors influencing survival",
        "Created comprehensive analysis report",
      ],
    },
  ];

  const contactInfo = [
    { icon: Mail, label: "Email", value: "ahmedhuzaifamalik@gmail.com", href: "mailto:ahmedhuzaifamalik@gmail.com" },
    { icon: Phone, label: "Phone", value: "(+92) 3175569176", href: "tel:+923175569176" },
    { icon: MapPin, label: "Location", value: "Mansehra, Pakistan", href: null as string | null },
  ];

  return (
    <div className="min-h-screen pt-16 overflow-y-auto">
      <FloatingParticles />

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
        {/* Geometric background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-40 h-40 border border-p3-blue/10 rotate-45" />
          <div className="absolute bottom-20 right-10 w-60 h-60 border border-p3-blue/5 rotate-12" />
          <div className="absolute top-1/2 left-5 w-px h-40 bg-gradient-to-b from-transparent via-p3-blue/20 to-transparent" />
          <div className="absolute top-1/3 right-5 w-px h-60 bg-gradient-to-b from-transparent via-p3-cyan/15 to-transparent" />
        </div>

        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-4 animate-fade-in-up">
            <span className="text-p3-blue text-sm font-display tracking-[0.3em] uppercase">// Initialize</span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-foreground mb-6 animate-fade-in-delay-1 text-glow">
            Ahmed Huzaifa
            <br />
            <span className="text-p3-blue">Malik</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-sans font-light mb-8 animate-fade-in-delay-2 tracking-wider">
            Data Analyst <span className="text-p3-blue">|</span> Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-3 leading-relaxed font-sans">
            Transforming raw data into actionable insights through Machine Learning, 
            Statistical Modeling, and compelling Data Visualization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
            <Button
              size="lg"
              className="bg-p3-blue text-primary-foreground hover:bg-p3-cyan clip-angular-sm font-display tracking-wider uppercase px-8 animate-pulse-glow"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-p3-blue/40 text-p3-blue hover:bg-p3-blue/10 hover:border-p3-blue clip-angular-sm font-display tracking-wider uppercase px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-p3-blue" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="container mx-auto px-6 py-20">
        <SectionHeader title="About Me" />

        <div className="max-w-4xl mx-auto mb-20">
          <P3RCard>
            <div className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-sans">
                I am a passionate <span className="text-p3-blue font-semibold">Data Analyst and Data Scientist</span> with 
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
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-p3-blue" />
            <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground tracking-wider">Education</h3>
          </div>
          <P3RCard>
            <div className="p-6 md:p-8">
              <h4 className="text-xl font-display font-semibold text-foreground mb-2 tracking-wide">BS in Data Science</h4>
              <p className="text-lg text-muted-foreground mb-2 font-sans">Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology</p>
              <p className="text-p3-blue font-sans">Haripur, Pakistan | 2022 – 2026</p>
            </div>
          </P3RCard>
        </div>

        {/* Coursework & Certifications */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-p3-blue" />
              <h3 className="text-xl font-display font-semibold text-foreground tracking-wider">Coursework</h3>
            </div>
            <div className="grid gap-3">
              {coursework.map((course, index) => (
                <P3RCard key={index}>
                  <div className="p-4">
                    <p className="text-muted-foreground font-sans flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-p3-blue rotate-45 shrink-0" />
                      {course}
                    </p>
                  </div>
                </P3RCard>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-5 w-5 text-p3-blue" />
              <h3 className="text-xl font-display font-semibold text-foreground tracking-wider">Certifications</h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((cert, index) => (
                <P3RCard key={index}>
                  <div className="p-4">
                    <p className="text-muted-foreground font-sans flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-p3-cyan rotate-45 shrink-0" />
                      {cert}
                    </p>
                  </div>
                </P3RCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <SectionHeader title="Skills & Expertise" />

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 flex items-center gap-3 tracking-wider">
            <Code className="h-6 w-6 text-p3-blue" /> Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {technicalSkills.map((skill, index) => (
              <P3RCard key={index}>
                <div className="p-6 text-center group">
                  <p className="font-display font-semibold text-foreground tracking-wider group-hover:text-p3-blue transition-colors">{skill}</p>
                </div>
              </P3RCard>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 flex items-center gap-3 tracking-wider">
            <Brain className="h-6 w-6 text-p3-blue" /> Domain Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainExpertise.map((domain, index) => (
              <P3RCard key={index}>
                <div className="p-6 group">
                  <h4 className="text-lg font-display font-semibold text-foreground mb-2 tracking-wide group-hover:text-p3-blue transition-colors">{domain.title}</h4>
                  <p className="text-sm text-muted-foreground font-sans">{domain.description}</p>
                </div>
              </P3RCard>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 flex items-center gap-3 tracking-wider">
            <Users className="h-6 w-6 text-p3-blue" /> Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <P3RCard key={index}>
                <div className="p-6 text-center group">
                  <skill.icon className="h-8 w-8 text-p3-blue/60 group-hover:text-p3-blue transition-colors mx-auto mb-3" />
                  <p className="text-sm font-display font-medium text-foreground tracking-wide">{skill.name}</p>
                </div>
              </P3RCard>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="container mx-auto px-6 py-20">
        <SectionHeader title="Experience" />

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-p3-blue/50 via-p3-cyan/30 to-transparent -translate-x-1/2 hidden md:block" />
            
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-p3-blue rotate-45 -translate-x-1/2 hidden md:block animate-pulse-glow" />
                
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <P3RCard>
                    <div className="p-6">
                      <div className="flex items-center gap-2 text-p3-blue text-sm mb-3 font-display tracking-wider">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <h4 className="text-xl font-display font-semibold text-foreground mb-2 tracking-wide">{exp.title}</h4>
                      <div className="flex items-center gap-4 text-muted-foreground mb-4 font-sans">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4 text-p3-blue/60" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-p3-blue/60" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3 text-muted-foreground font-sans">
                            <div className="w-1.5 h-1.5 bg-p3-blue/50 rotate-45 mt-2 shrink-0" />
                            <span>{resp}</span>
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
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <SectionHeader 
          title="Projects" 
          subtitle="A collection of data science projects showcasing my skills in machine learning, data analysis, and visualization."
        />

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <P3RCard key={index}>
              <div className="p-6 md:p-8 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-p3-blue/10 border border-p3-blue/30 clip-angular-sm group-hover:bg-p3-blue/20 transition-colors">
                      <project.icon className="h-6 w-6 text-p3-blue" />
                    </div>
                    <h4 className="text-2xl font-display font-semibold text-foreground tracking-wide group-hover:text-p3-blue transition-colors">{project.title}</h4>
                  </div>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-sans">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-display uppercase tracking-wider bg-p3-blue/10 text-p3-blue border border-p3-blue/20 clip-angular-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2">
                  <h5 className="text-sm font-display font-medium text-p3-blue uppercase tracking-[0.2em]">Key Achievements</h5>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-3 text-muted-foreground font-sans">
                        <div className="w-1.5 h-1.5 bg-p3-cyan rotate-45" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </P3RCard>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <SectionHeader 
          title="Contact"
          subtitle="I'm always open to discussing new opportunities, collaborations, or just having a chat about data science."
        />

        <div className="max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <div className="mb-12">
            <a href="https://www.linkedin.com/in/ahmed-huzaifa-malik/" target="_blank" rel="noopener noreferrer" className="block">
              <P3RCard>
                <div className="p-8 md:p-12 group">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="w-32 h-32 border-2 border-p3-blue/30 bg-p3-blue/5 clip-angular flex items-center justify-center group-hover:border-p3-blue/60 transition-colors">
                      <span className="text-3xl font-display font-bold text-p3-blue">AH</span>
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-2 tracking-wider">Ahmed Huzaifa Malik</h3>
                      <p className="text-lg text-muted-foreground mb-4 font-sans">Data Analyst <span className="text-p3-blue">|</span> Data Scientist</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-p3-blue group-hover:text-p3-cyan transition-colors font-display tracking-wider">
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
              <P3RCard key={index}>
                <div className="p-6 text-center group">
                  {info.href ? (
                    <a href={info.href} className="block" target={info.href.startsWith("mailto") ? undefined : "_blank"} rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
                      <info.icon className="h-8 w-8 text-p3-blue/60 group-hover:text-p3-blue transition-colors mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-1 font-display uppercase tracking-wider">{info.label}</p>
                      <p className="text-foreground font-sans font-medium group-hover:text-p3-blue transition-all">{info.value}</p>
                    </a>
                  ) : (
                    <>
                      <info.icon className="h-8 w-8 text-p3-blue/60 group-hover:text-p3-blue transition-colors mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-1 font-display uppercase tracking-wider">{info.label}</p>
                      <p className="text-foreground font-sans font-medium">{info.value}</p>
                    </>
                  )}
                </div>
              </P3RCard>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground font-sans">Looking forward to connecting with you!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
