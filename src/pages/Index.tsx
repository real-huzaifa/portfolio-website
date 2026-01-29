import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import FloatingParticles from "@/components/FloatingParticles";

const Index = () => {
  return (
    <PageWrapper>
      <FloatingParticles />
      
      <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-fade-in-up">
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-6 animate-fade-in-delay-1 text-glow">
            Ahmed Huzaifa Malik
          </h1>
          
          {/* Title */}
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light mb-8 animate-fade-in-delay-2">
            Data Analyst | Data Scientist
          </h2>
          
          {/* Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-delay-3 leading-relaxed">
            Transforming raw data into actionable insights through Machine Learning, 
            Statistical Modeling, and compelling Data Visualization.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-delay-4">
            <Button
              asChild
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 box-glow-hover px-8"
            >
              <Link to="/projects">
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-border hover:bg-accent box-glow-hover px-8"
            >
              <Link to="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-6 w-6 text-muted-foreground" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Index;
