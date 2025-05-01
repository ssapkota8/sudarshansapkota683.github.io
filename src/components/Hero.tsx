import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroProps {
  className?: string;
}

const Hero = ({ className }: HeroProps) => {
  return (
    <section className={cn("relative py-20 md:py-32", className)}>
      <div className="container-custom">
        <div className="max-w-3xl animate-fade-in">
          <div className="mb-6">
            <p className="font-mono text-portfolio-accent mb-4">Hi, my name is</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Sudarshan Sapkota.
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-portfolio-muted">
              I build things for the web & cloud.
            </h2>
          </div>

          <p className="text-lg text-portfolio-muted mb-8 max-w-xl">
            I am a Computer Systems student at Seneca College, aspiring IT professional
            specializing in cloud computing, networking, and cybersecurity.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                View My Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
