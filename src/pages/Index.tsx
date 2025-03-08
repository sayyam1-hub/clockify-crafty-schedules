
import { Button } from "@/components/ui/button";
import { Calendar, Clock, List, Check, ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
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
  const [isLoaded, setIsLoaded] = useState(false);

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

    // Set isLoaded to true after a short delay to trigger animations
    setTimeout(() => {
      setIsLoaded(true);
    }, 300);

    return () => {
      clearInterval(interval);
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
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-500 py-16 md:py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className={`md:w-1/2 text-white ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                <span>Level Up</span>{" "}
                <span className="text-yellow-300">Your Time Game</span>
              </h1>
              <p className="text-xl mb-8">
                The ultimate time management website created specifically for teens. Take control of your schedule, balance school and fun, and crush your goals with our easy-to-use tools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-white text-purple-700 hover:bg-white/90 transition-all"
                  onClick={handleGetStarted}
                >
                  Get Started Now
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent text-white border-white hover:bg-white/10 transition-all"
                  onClick={handleLearnMore}
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            {/* Image Slider */}
            <div className={`hidden md:block md:w-1/2 mt-8 md:mt-0 relative ${isLoaded ? 'slide-in-right' : 'opacity-0'}`}>
              <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-xl">
                <img
                  key={currentImage}
                  src={images[currentImage]}
                  alt="Teen time management"
                  className="w-full h-full object-cover transition-opacity duration-500"
                  style={{ animation: 'fadeIn 0.5s ease-in' }}
                />
                
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        currentImage === index ? "bg-white scale-125" : "bg-white/40"
                      }`}
                      onClick={() => setCurrentImage(index)}
                    />
                  ))}
                </div>
                
                <button
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-all"
                  onClick={prevImage}
                >
                  <ChevronLeft size={20} />
                </button>
                
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 p-2 rounded-full text-white hover:bg-black/50 transition-all"
                  onClick={nextImage}
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 fade-in">Why Clockify Stands Out</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto fade-in" style={{ animationDelay: '0.2s' }}>
              Designed with modern teens in mind. Streamlined, effective, and actually fun to use.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover-card scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Schedule Templates</h3>
              <p className="text-gray-600">
                Pre-designed for high school and college students. Just pick and customize.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover-card scale-in" style={{ animationDelay: '0.4s' }}>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Experience</h3>
              <p className="text-gray-600">
                Adapt any schedule to match your personal style, priorities, and workflow.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-lg shadow-sm border border-gray-100 hover-card scale-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Research-Backed Methods</h3>
              <p className="text-gray-600">
                Using time management techniques proven to work with teen brains and busy schedules.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="slide-in-left" style={{ animationDelay: '0.1s' }}>
              <p className="text-4xl font-bold text-purple-600">3,500+</p>
              <p className="mt-2 text-lg text-gray-600">Teen Users</p>
            </div>
            <div className="slide-in-left" style={{ animationDelay: '0.3s' }}>
              <p className="text-4xl font-bold text-purple-600">80%</p>
              <p className="mt-2 text-lg text-gray-600">Report Better Grades</p>
            </div>
            <div className="slide-in-left" style={{ animationDelay: '0.5s' }}>
              <p className="text-4xl font-bold text-purple-600">65%</p>
              <p className="mt-2 text-lg text-gray-600">Less Procrastination</p>
            </div>
            <div className="slide-in-left" style={{ animationDelay: '0.7s' }}>
              <p className="text-4xl font-bold text-purple-600">50+</p>
              <p className="mt-2 text-lg text-gray-600">Schedule Templates</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-500 rounded-xl shadow-lg p-8 md:p-12 text-center scale-in">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to take control of your time?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of other teens who are mastering time management with Clockify.
            </p>
            <Button 
              size="lg" 
              className="bg-white text-purple-700 hover:bg-white/90 transition-all bounce"
              onClick={handleGetStarted}
            >
              Get Started Today
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
