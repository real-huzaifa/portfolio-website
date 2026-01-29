import { Linkedin, Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import PageWrapper from "@/components/PageWrapper";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ahmedhuzaifamalik@gmail.com",
      href: "mailto:ahmedhuzaifamalik@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "(+92) 3175569176",
      href: "tel:+923175569176",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mansehra, Pakistan",
      href: null,
    },
  ];

  return (
    <PageWrapper>
      <div className="container mx-auto px-6 py-20">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in-up">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground animate-fade-in-delay-1">
            I'm always open to discussing new opportunities, collaborations, 
            or just having a chat about data science.
          </p>
          <div className="h-px w-20 bg-foreground/30 mx-auto mt-6" />
        </div>

        <div className="max-w-4xl mx-auto">
          {/* LinkedIn Card */}
          <div className="mb-12 animate-fade-in-delay-2">
            <a
              href="https://www.linkedin.com/in/ahmed-huzaifa-malik/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border box-glow-hover group cursor-pointer">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Avatar */}
                    <Avatar className="w-32 h-32 border-2 border-border group-hover:border-foreground/50 transition-colors">
                      <AvatarFallback className="bg-secondary text-foreground text-3xl font-semibold">
                        AH
                      </AvatarFallback>
                    </Avatar>
                    
                    {/* Info */}
                    <div className="text-center md:text-left flex-1">
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                        Ahmed Huzaifa Malik
                      </h2>
                      <p className="text-lg text-muted-foreground mb-4">
                        Data Analyst | Data Scientist
                      </p>
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

          {/* Contact Information Grid */}
          <div className="grid md:grid-cols-3 gap-6 animate-fade-in-delay-3">
            {contactInfo.map((info, index) => (
              <Card key={index} className="bg-card border-border box-glow-hover group">
                <CardContent className="p-6 text-center">
                  {info.href ? (
                    <a
                      href={info.href}
                      className="block"
                      target={info.href.startsWith("mailto") ? undefined : "_blank"}
                      rel={info.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    >
                      <info.icon className="h-8 w-8 text-muted-foreground group-hover:text-foreground transition-colors mx-auto mb-4" />
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="text-foreground font-medium group-hover:text-glow transition-all">
                        {info.value}
                      </p>
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

          {/* Footer note */}
          <div className="text-center mt-16 animate-fade-in-delay-4">
            <p className="text-muted-foreground">
              Looking forward to connecting with you!
            </p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Contact;
