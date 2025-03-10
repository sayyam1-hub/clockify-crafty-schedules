
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Brain, Heart, Calendar, Zap } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const LearnMore = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set isLoaded to true immediately
    setIsLoaded(true);
    
    // Setup intersection observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    // Observe each section
    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Gradient Text Animation */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-darkBlue py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className={`text-center text-white relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLoaded ? 'animate-gradient-text' : 'opacity-0'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-clockify-accent animate-gradient-flow">
            The Science Behind Time Management
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.3s' }}>
            Discover how effective time management can transform your productivity, reduce stress, and help you achieve your goals.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 text-white fill-current">
            <path d="M0,288L40,272C80,256,160,224,240,213.3C320,203,400,213,480,218.7C560,224,640,224,720,213.3C800,203,880,181,960,186.7C1040,192,1120,224,1200,229.3C1280,235,1360,213,1400,202.7L1440,192L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Main Content - Staggered Reveal */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <div 
              ref={el => sectionRefs.current[0] = el}
              className="space-y-4 section-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2 animate-pulse-glow">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Why Time Management Matters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Research shows that effective time management is directly correlated with academic success, reduced stress levels, and increased satisfaction with life. For teenagers, developing these skills early creates lifelong habits that support success in college and careers.
              </p>
            </div>
            
            <div 
              ref={el => sectionRefs.current[1] = el}
              className="space-y-4 section-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2 animate-pulse-glow">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Teenage Brain and Time Management</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The teenage brain is still developing, particularly in the prefrontal cortex - the area responsible for planning, prioritization, and impulse control. Structured time management provides the external framework that helps compensate for these still-developing neural pathways.
              </p>
            </div>
            
            <div 
              ref={el => sectionRefs.current[2] = el}
              className="space-y-4 section-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2 animate-pulse-glow">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Health and Well-being Benefits</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Proper time management ensures adequate time for sleep, physical activity, and relaxation - all crucial for teenage development. Studies show that teens who manage their time well report better sleep quality, reduced anxiety, and improved mood.
              </p>
            </div>
            
            <div 
              ref={el => sectionRefs.current[3] = el}
              className="space-y-4 section-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2 animate-pulse-glow">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Balancing Academic and Social Life</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                One of the biggest challenges for teens is balancing school responsibilities with social activities. Our research-based schedules help create that balance, ensuring academic success while allowing time for the social interactions crucial for emotional development.
              </p>
            </div>
            
            <div 
              ref={el => sectionRefs.current[4] = el}
              className="space-y-4 section-hidden"
            >
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2 animate-pulse-glow">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Building Lifelong Skills</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The time management skills developed during teenage years translate directly to success in college and career. By starting early, teens develop habits that will benefit them throughout their lives, from better study habits to increased productivity in their future careers.
              </p>
            </div>
            
            <div 
              ref={el => sectionRefs.current[5] = el}
              className="bg-clockify-lightGray p-8 rounded-xl shadow-sm section-hidden transform transition-all duration-500 hover:scale-105"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to transform your time management?</h3>
              <p className="text-gray-700 mb-6">
                Start with our professionally designed schedules tailored specifically for teenagers' unique needs and challenges.
              </p>
              <Link to="/schedules">
                <Button size="lg" className="bg-clockify-blue hover:bg-clockify-darkBlue transition-all duration-300 pulse-glow">
                  Browse Schedules
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
