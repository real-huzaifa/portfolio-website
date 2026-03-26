import { GraduationCap, BookOpen, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";

const About = () => {
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

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            About Me
          </h1>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        {/* Professional Summary */}
        <div className="max-w-4xl mx-auto mb-20 animate-fade-in-delay-1">
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
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-delay-2">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-foreground" />
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground">Education</h2>
          </div>
          
          <Card className="bg-card border-border box-glow-hover">
            <CardHeader>
              <CardTitle className="text-xl text-foreground">
                BS in Data Science
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground mb-2">
                Pak-Austria Fachhochschule: Institute of Applied Sciences and Technology
              </p>
              <p className="text-muted-foreground">
                Haripur, Pakistan | 2022 – 2026
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Coursework & Certifications Grid */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 animate-fade-in-delay-3">
          {/* Relevant Coursework */}
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

          {/* Certifications */}
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
      </div>
    </PageWrapper>
  );
};

export default About;
