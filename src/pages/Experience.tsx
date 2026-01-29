import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import PageWrapper from "@/components/PageWrapper";

const Experience = () => {
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

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Work Experience
          </h1>
          <div className="h-px w-20 bg-foreground/30 mx-auto" />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />
            
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative mb-12 md:mb-16 animate-fade-in-delay-${index + 1}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 bg-foreground rounded-full -translate-x-1/2 hidden md:block box-glow" />
                
                {/* Card - alternating sides on desktop */}
                <div className={`md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <Card className="bg-card border-border box-glow-hover">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <CardTitle className="text-xl text-foreground">
                        {exp.title}
                      </CardTitle>
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
      </div>
    </PageWrapper>
  );
};

export default Experience;
