
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleGetStarted = () => {
    navigate("/schedules");
    window.scrollTo(0, 0);
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div 
              onClick={() => handleNavigation("/")} 
              className="flex items-center cursor-pointer"
            >
              <Clock className="h-8 w-8 text-clockify-blue" />
              <span className="ml-2 text-xl font-bold text-clockify-darkBlue">
                Clockify
              </span>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              onClick={() => handleNavigation("/")} 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation("/tips")} 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700"
            >
              Tips
            </button>
            <button 
              onClick={() => handleNavigation("/schedules")} 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700"
            >
              Schedules
            </button>
            <button 
              onClick={() => handleNavigation("/reviews")} 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleNavigation("/faq")} 
              className="px-3 py-2 rounded-md text-sm font-medium text-gray-700"
            >
              FAQ
            </button>
            <Button 
              className="ml-4 bg-clockify-blue"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Icon when menu is closed */}
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                /* Icon when menu is open */
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button 
              onClick={() => handleNavigation("/")} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavigation("/tips")} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              Tips
            </button>
            <button 
              onClick={() => handleNavigation("/schedules")} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              Schedules
            </button>
            <button 
              onClick={() => handleNavigation("/reviews")} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              Reviews
            </button>
            <button 
              onClick={() => handleNavigation("/faq")} 
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700"
            >
              FAQ
            </button>
            <Button 
              className="w-full mt-4 bg-clockify-blue"
              onClick={handleGetStarted}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
