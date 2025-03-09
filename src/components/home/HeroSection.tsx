
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Slider images
const images = [
  "/lovable-uploads/3a02ab49-704f-43fa-b105-5e32fe6b9f51.png",
  "/lovable-uploads/409d0d71-ddc4-400e-913b-d6a50025d331.png",
  "/lovable-uploads/9e78f86f-20a5-4e1e-ade9-d48959426687.png"
];

const HeroSection = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/schedules");
    window.scrollTo(0, 0);
  };

  const handleLearnMore = (e) => {
    e.preventDefault();
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
    }, 100);

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
  );
};

export default HeroSection;
