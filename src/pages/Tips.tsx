
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TipCard from "@/components/TipCard";
import { Clock, Calendar, List, Check, Timer } from "lucide-react";
import { useEffect, useState } from "react";

const Tips = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set isLoaded to true after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    return () => clearTimeout(timer);
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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-12">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white ${isLoaded ? 'fade-in' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bounce">
            Time Management Tips for Teens
          </h1>
          <p className="text-xl max-w-3xl mx-auto slide-in-left">
            Discover proven strategies to make the most of your time, boost productivity, and reduce stress.
          </p>
        </div>
      </section>
      
      {/* Tips Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeManagementTips.map((tip, index) => (
              <div 
                key={index} 
                className={`${isLoaded ? 'scale-in' : 'opacity-0'} hover-card`} 
                style={{ animationDelay: `${index * 0.1}s` }}
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
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLoaded ? 'slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h2 className="text-2xl font-bold mb-8 text-center bounce">Additional Resources</h2>
          <div className="bg-white rounded-lg shadow-sm p-6 scale-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="text-xl font-semibold mb-4">Recommended Books</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="fade-in" style={{ animationDelay: '0.7s' }}>Atomic Habits by James Clear</li>
              <li className="fade-in" style={{ animationDelay: '0.8s' }}>Deep Work by Cal Newport</li>
              <li className="fade-in" style={{ animationDelay: '0.9s' }}>The 7 Habits of Highly Effective Teens by Sean Covey</li>
              <li className="fade-in" style={{ animationDelay: '1.0s' }}>Getting Things Done for Teens by David Allen</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mt-6 scale-in" style={{ animationDelay: '0.8s' }}>
            <h3 className="text-xl font-semibold mb-4">Helpful Apps</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li className="fade-in" style={{ animationDelay: '0.9s' }}>Forest - Stay focused and plant virtual trees</li>
              <li className="fade-in" style={{ animationDelay: '1.0s' }}>Notion - All-in-one workspace for notes and tasks</li>
              <li className="fade-in" style={{ animationDelay: '1.1s' }}>Todoist - Simple and powerful task manager</li>
              <li className="fade-in" style={{ animationDelay: '1.2s' }}>Focus@Will - Music scientifically optimized for focus</li>
            </ul>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Tips;
