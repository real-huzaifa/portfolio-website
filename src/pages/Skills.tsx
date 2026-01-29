import { Code, Database, BarChart3, Brain, Users, MessageSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import PageWrapper from "@/components/PageWrapper";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", level: 90, icon: Code },
    { name: "SQL", level: 85, icon: Database },
    { name: "Excel", level: 80, icon: BarChart3 },
    { name: "Power BI", level: 75, icon: BarChart3 },
  ];

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

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Skills & Expertise
          </h1>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        {/* Technical Skills */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-delay-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Code className="h-6 w-6" />
            Technical Skills
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <skill.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-secondary"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Domain Expertise */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-delay-2">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Brain className="h-6 w-6" />
            Domain Expertise
          </h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {domainExpertise.map((domain, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-foreground group-hover:text-glow transition-all">
                    {domain.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {domain.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="max-w-4xl mx-auto animate-fade-in-delay-3">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Users className="h-6 w-6" />
            Soft Skills
          </h2>
          
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
      </div>
    </PageWrapper>
  );
};

export default Skills;
