
import { Button } from "@/components/ui/button";
import { Calendar, Clock, List, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Updated slider images
const images = [
  "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80", 
  "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
];

const Index = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isCursorVisible, setIsCursorVisible] = useState(false);

  const handleGetStarted = () => {
    navigate("/schedules");
    window.scrollTo(0, 0);
  };

  const handleLearnMore = () => {
    navigate("/learn-more");
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsCursorVisible(true);
    };

    const handleMouseLeave = () => {
      setIsCursorVisible(false);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="min-h-screen flex flex-col">
      {isCursorVisible && (
        <motion.div
          className="fixed w-12 h-12 rounded-full bg-purple-500 bg-opacity-20 mix-blend-difference pointer-events-none z-50 flex items-center justify-center"
          animate={{ 
            x: cursorPosition.x - 24, 
            y: cursorPosition.y - 24,
          }}
          transition={{ 
            x: { type: "spring", stiffness: 500, damping: 30 },
            y: { type: "spring", stiffness: 500, damping: 30 },
          }}
        >
          <div className="w-3 h-3 bg-white rounded-full" />
        </motion.div>
      )}

      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="md:w-1/2 text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Level Up
                </motion.span>{" "}
                <motion.span 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-yellow-300"
                >
                  Your Time Game
                </motion.span>
              </h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl mb-8"
              >
                The ultimate time management website created specifically for teens. Take control of your schedule, balance school and fun, and crush your goals with our easy-to-use tools.
              </motion.p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-700"
                  onClick={handleGetStarted}
                >
                  Get Started Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </motion.div>
            
            {/* Image Slider */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden md:block md:w-1/2 mt-8 md:mt-0 relative"
            >
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    src={images[currentImage]}
                    alt="Teen time management"
                    className="w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </AnimatePresence>
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full ${
                        currentImage === index ? "bg-white" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
                
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
                  onClick={prevImage}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white"
                  onClick={nextImage}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900">Why Clockify Stands Out</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Designed with modern teens in mind. Streamlined, effective, and actually fun to use.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Schedule Templates</h3>
              <p className="text-gray-600">
                Pre-designed for high school and college students. Just pick and customize.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
              <p className="text-gray-600">
                Adapt any schedule to match your personal style, priorities, and workflow.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research-Backed Methods</h3>
              <p className="text-gray-600">
                Using time management techniques proven to work with teen brains and busy schedules.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-4xl font-bold text-purple-600">3,500+</p>
              <p className="mt-2 text-lg text-gray-600">Teen Users</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <p className="text-4xl font-bold text-purple-600">80%</p>
              <p className="mt-2 text-lg text-gray-600">Report Better Grades</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <p className="text-4xl font-bold text-purple-600">65%</p>
              <p className="mt-2 text-lg text-gray-600">Less Procrastination</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <p className="text-4xl font-bold text-purple-600">50+</p>
              <p className="mt-2 text-lg text-gray-600">Schedule Templates</p>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl shadow-lg p-8 md:p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to take control of your time?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of other teens who are mastering time management with Clockify.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-700"
              onClick={handleGetStarted}
            >
              Get Started Today
            </Button>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
