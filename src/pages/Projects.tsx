import { Search, Heart, Ship, ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PageWrapper from "@/components/PageWrapper";

const Projects = () => {
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

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in-delay-1">
            A collection of data science projects showcasing my skills in machine learning, 
            data analysis, and visualization.
          </p>
          <div className="h-px w-20 bg-foreground/30 mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="max-w-5xl mx-auto grid gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`bg-card border-border box-glow-hover group animate-fade-in-delay-${index + 1}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-secondary rounded-lg group-hover:bg-accent transition-colors">
                      <project.icon className="h-6 w-6 text-foreground" />
                    </div>
                    <CardTitle className="text-2xl text-foreground">
                      {project.title}
                    </CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="bg-secondary text-secondary-foreground hover:bg-accent"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Highlights */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-wider">
                    Key Achievements
                  </h4>
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
      </div>
    </PageWrapper>
  );
};

export default Projects;
