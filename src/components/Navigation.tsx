import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-primary">
              Dawo
            </a>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#how-it-works" className="text-gray-600 hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#for-startups" className="text-gray-600 hover:text-primary transition-colors">
              For Startups
            </a>
            <a href="#for-investors" className="text-gray-600 hover:text-primary transition-colors">
              For Investors
            </a>
            <a href="#manifesto" className="text-gray-600 hover:text-primary transition-colors">
              Manifesto
            </a>
            <a href="#about-us" className="text-gray-600 hover:text-primary transition-colors">
              About Us
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-5 w-5" />
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Join Waitlist
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;