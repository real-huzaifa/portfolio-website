import { ArrowRight, ChevronDown, GraduationCap, BookOpen, Award, Code, Database, BarChart3, Brain, Users, MessageSquare, Briefcase, Calendar, MapPin, Search, Heart, Ship, Linkedin, Mail, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import FloatingParticles from "@/components/FloatingParticles";

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
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up">Hello, I'm</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-delay-1 text-glow">
            Ahmed Huzaifa Malik
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in-delay-2">
            Data Analyst | Data Scientist
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-3 leading-relaxed">
            Transforming raw data into actionable insights through Machine Learning, 
            Statistical Modeling, and compelling Data Visualization.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 box-glow-hover px-8"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent box-glow-hover px-8"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Get in Touch
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <Card className="bg-card border-border box-glow-hover">
            <CardContent className="p-8 md:p-12">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                I am a passionate <span className="text-foreground font-medium">Data Analyst and Data Scientist</span> with 
                a strong foundation in Data Analysis, Machine Learning, and Statistical Modeling. 
                I specialize in extracting valuable insights from complex datasets, building 
                predictive models, and creating compelling data visualizations that drive 
                business decisions.
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
                With hands-on experience in Python, SQL, and various data science tools, 
                I am committed to continuous learning and applying innovative techniques 
                to solve real-world problems.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Education */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-foreground" />
            <h3 className="text-2xl md:text-3xl font-semibold text-foreground">Education</h3>
          </div>
          <Card className="bg-card border-border box-glow-hover">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">BS in Data Science</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-2">Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology</p>
              <p className="text-muted-foreground">Haripur, Pakistan | 2022 – 2026</p>
            </CardContent>
          </Card>
        </div>

        {/* Coursework & Certifications */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Relevant Coursework</h3>
            </div>
            <div className="grid gap-3">
              {coursework.map((course, index) => (
                <Card key={index} className="bg-card border-border box-glow-hover">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{course}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="h-5 w-5 text-foreground" />
              <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
            </div>
            <div className="grid gap-3">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-card border-border box-glow-hover">
                  <CardContent className="p-4">
                    <p className="text-muted-foreground">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SKILLS SECTION ===== */}
      <section id="skills" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Skills & Expertise</h2>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Code className="h-6 w-6" /> Technical Skills
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardContent className="p-6 text-center">
                  <p className="font-medium text-foreground">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Brain className="h-6 w-6" /> Domain Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainExpertise.map((domain, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground group-hover:text-glow transition-all">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Users className="h-6 w-6" /> Soft Skills
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {softSkills.map((skill, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardContent className="p-6 text-center">
                  <skill.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors mx-auto mb-3" />
                  <p className="text-sm font-medium text-foreground">{skill.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== EXPERIENCE SECTION ===== */}
      <section id="experience" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Work Experience</h2>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-12 md:mb-16">
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-foreground rounded-full -translate-x-1/2 hidden md:block box-glow" />
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-card border-border box-glow-hover">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <CardTitle className="text-xl text-foreground">{exp.title}</CardTitle>
                      <div className="flex items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Briefcase className="h-4 w-4" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        {exp.responsibilities.map((resp, respIndex) => (
                          <li key={respIndex} className="flex items-start gap-3 text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full mt-2 shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS SECTION ===== */}
      <section id="projects" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground">
            A collection of data science projects showcasing my skills in machine learning, data analysis, and visualization.
          </p>
          <div className="h-px w-20 bg-foreground/30 mx-auto mt-6" />
        </div>

        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-card border-border box-glow-hover group">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent transition-colors">
                      <project.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-accent">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">Key Achievements</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-foreground/50 rounded-full" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="container mx-auto px-6 py-20">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get in Touch</h2>
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data science.
          </p>
          <div className="h-px w-20 bg-foreground/30 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <div className="mb-12">
            <a href="https://www.linkedin.com/in/ahmed-huzaifa-malik/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="bg-card border-border box-glow-hover group cursor-pointer">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <Avatar className="w-32 h-32 border-2 border-border group-hover:border-foreground/50 transition-colors">
                      <AvatarFallback className="bg-secondary text-foreground text-3xl font-semibold">AH</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Ahmed Huzaifa Malik</h3>
                      <p className="text-lg text-muted-foreground mb-4">Data Analyst | Data Scientist</p>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground group-hover:text-foreground transition-colors">
                        <Linkedin className="h-5 w-5" />
                        <span>Connect on LinkedIn</span>
                        <ExternalLink className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>

          {/* Contact Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardContent className="p-6 text-center">
                  {info.href ? (
                    <a href={info.href} className="block" target={info.href.startsWith("mailto") ? undefined : "_blank"} rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}>
                      <info.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-glow transition-all">{info.value}</p>
                    </a>
                  ) : (
                    <>
                      <info.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium">{info.value}</p>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-muted-foreground">Looking forward to connecting with you!</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
