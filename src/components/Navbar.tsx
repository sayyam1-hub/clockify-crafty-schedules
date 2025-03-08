
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

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
    if (location.pathname === path) {
      window.scrollTo(0, 0);
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div 
              onClick={() => handleNavigation("/")} 
              className="flex items-center cursor-pointer"
            >
              <motion.div>
                <Clock className="h-8 w-8 text-clockify-blue" />
              </motion.div>
              <motion.span 
                initial={{ opacity: 0, x: -5 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1, duration: 0.3 }}
                className="ml-2 text-xl font-bold text-clockify-darkBlue"
              >
                Clockify
              </motion.span>
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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500"
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
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden"
        >
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
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
