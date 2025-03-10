
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";
import { Clock, Calendar, List, Check, Timer } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Tips = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set isLoaded to true immediately
    setIsLoaded(true);
    
    // Setup intersection observer for each card
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animation class when card is visible
          entry.target.classList.add('animate-flip-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe each card
    cardRefs.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  const timeManagementTips = [
    {
      title: "The Pomodoro Technique",
      description: "Study for 25 minutes, then take a 5-minute break. After four sessions, take a longer break of 15-30 minutes. This helps maintain focus and prevents burnout.",
      icon: <Timer className="h-5 w-5 text-clockify-blue" />,
      color: "bg-clockify-blue"
    },
    {
      title: "Use a Planner",
      description: "Whether digital or physical, a planner helps you visualize your commitments and deadlines. Try color-coding for different subjects or activities.",
      icon: <Calendar className="h-5 w-5 text-green-500" />,
      color: "bg-green-500"
    },
    {
      title: "Set SMART Goals",
      description: "Create goals that are Specific, Measurable, Achievable, Relevant, and Time-bound. This framework makes your objectives clearer and more attainable.",
      icon: <Check className="h-5 w-5 text-purple-500" />,
      color: "bg-purple-500"
    },
    {
      title: "Prioritize with ABC Method",
      description: "Label tasks A (must do), B (should do), and C (nice to do). Focus on completing A tasks before moving to B and C tasks.",
      icon: <List className="h-5 w-5 text-yellow-500" />,
      color: "bg-yellow-500"
    },
    {
      title: "Eliminate Distractions",
      description: "Identify what distracts you most (social media, television, texting) and create a study environment that minimizes these distractions.",
      icon: <Clock className="h-5 w-5 text-red-500" />,
      color: "bg-red-500"
    },
    {
      title: "Two-Minute Rule",
      description: "If a task takes less than two minutes to complete, do it immediately. This prevents small tasks from piling up and becoming overwhelming.",
      icon: <Timer className="h-5 w-5 text-teal-500" />,
      color: "bg-teal-500"
    },
    {
      title: "Batch Similar Tasks",
      description: "Group similar activities together. For example, answer all emails at once or complete all math problems in one sitting to maximize efficiency.",
      icon: <List className="h-5 w-5 text-indigo-500" />,
      color: "bg-indigo-500"
    },
    {
      title: "Schedule Buffer Time",
      description: "Always plan for tasks to take longer than expected. Add buffer time between activities to account for overruns and unexpected events.",
      icon: <Calendar className="h-5 w-5 text-pink-500" />,
      color: "bg-pink-500"
    },
    {
      title: "Learn to Say No",
      description: "It's okay to decline additional commitments when your schedule is full. Prioritize your well-being and existing responsibilities.",
      icon: <Check className="h-5 w-5 text-orange-500" />,
      color: "bg-orange-500"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - 3D Flip Animation */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-16 text-white fill-current">
            <path d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 ${isLoaded ? 'animate-flip-in' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Time Management Tips for Teens
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover proven strategies to make the most of your time, boost productivity, and reduce stress.
          </p>
        </div>
      </section>
      
      {/* Tips Section - Staggered Flip Animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeManagementTips.map((tip, index) => (
              <div 
                key={index} 
                ref={el => cardRefs.current[index] = el}
                className="opacity-0 hover-card transform perspective-1000" 
              >
                <TipCard 
                  title={tip.title}
                  description={tip.description}
                  icon={tip.icon}
                  color={tip.color}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Resources */}
      <section className="py-12 bg-clockify-lightGray">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLoaded ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center">Additional Resources</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 transform transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4">Recommended Books</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="transform transition-all duration-500" style={{ transitionDelay: '100ms' }}>Atomic Habits by James Clear</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '200ms' }}>Deep Work by Cal Newport</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '300ms' }}>The 7 Habits of Highly Effective Teens by Sean Covey</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '400ms' }}>Getting Things Done for Teens by David Allen</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6 transform transition-all duration-500 hover:scale-[1.02]">
            <h3 className="text-xl font-semibold mb-4">Helpful Apps</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="transform transition-all duration-500" style={{ transitionDelay: '100ms' }}>Forest - Stay focused and plant virtual trees</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '200ms' }}>Notion - All-in-one workspace for notes and tasks</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '300ms' }}>Todoist - Simple and powerful task manager</li>
              <li className="transform transition-all duration-500" style={{ transitionDelay: '400ms' }}>Focus@Will - Music scientifically optimized for focus</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tips;
