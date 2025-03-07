
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Clock, Brain, Heart, Calendar, Zap } from "lucide-react";

const LearnMore = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Science Behind Time Management
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Discover how effective time management can transform your productivity, reduce stress, and help you achieve your goals.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Why Time Management Matters</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Research shows that effective time management is directly correlated with academic success, reduced stress levels, and increased satisfaction with life. For teenagers, developing these skills early creates lifelong habits that support success in college and careers.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2">
                  <BookOpen className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Teenage Brain and Time Management</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The teenage brain is still developing, particularly in the prefrontal cortex - the area responsible for planning, prioritization, and impulse control. Structured time management provides the external framework that helps compensate for these still-developing neural pathways.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Health and Well-being Benefits</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Proper time management ensures adequate time for sleep, physical activity, and relaxation - all crucial for teenage development. Studies show that teens who manage their time well report better sleep quality, reduced anxiety, and improved mood.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2">
                  <Calendar className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Balancing Academic and Social Life</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                One of the biggest challenges for teens is balancing school responsibilities with social activities. Our research-based schedules help create that balance, ensuring academic success while allowing time for the social interactions crucial for emotional development.
              </p>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="bg-clockify-blue rounded-full p-2">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Building Lifelong Skills</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                The time management skills developed during teenage years translate directly to success in college and career. By starting early, teens develop habits that will benefit them throughout their lives, from better study habits to increased productivity in their future careers.
              </p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="bg-clockify-lightGray p-8 rounded-xl shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to transform your time management?</h3>
              <p className="text-gray-700 mb-6">
                Start with our professionally designed schedules tailored specifically for teenagers' unique needs and challenges.
              </p>
              <Link to="/schedules">
                <Button size="lg" className="bg-clockify-blue hover:bg-clockify-darkBlue transition-all duration-300 transform hover:scale-105">
                  Browse Schedules
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMore;
