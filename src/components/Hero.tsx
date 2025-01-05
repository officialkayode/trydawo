import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="gradient-bg min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-text-heading">
            Empowering Startups, Empowering Communities
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-text-body">
            Create local angel investors by giving communities the chance to invest in Africa's future through its startups.
          </p>
          <div className="flex justify-center">
            <Button
              variant="secondary"
              className="cta-button bg-secondary text-secondary-foreground"
              onClick={() => document.getElementById("waitlist")?.scrollIntoView({ behavior: "smooth" })}
            >
              Join the Waitlist <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;