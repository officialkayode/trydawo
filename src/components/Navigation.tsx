import { Button } from "@/components/ui/button";
import { Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-primary font-rockSalt">
              Dawo
            </Link>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/manifesto" className="text-gray-600 hover:text-primary transition-colors">
              Manifesto
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-primary transition-colors">
              FAQ
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-5 w-5" />
            </Button>
            <a 
              href="https://tally.so/r/wkOKa6" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="bg-primary text-white hover:bg-primary/90">
                Join Waitlist
              </Button>
            </a>
            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/manifesto" 
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Manifesto
              </Link>
              <Link 
                to="/faq" 
                className="text-gray-600 hover:text-primary transition-colors px-4 py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                FAQ
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;