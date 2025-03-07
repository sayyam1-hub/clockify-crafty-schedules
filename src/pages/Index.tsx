
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, List, Check } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Master Your Time, <br />Master Your Life
              </h1>
              <p className="text-xl mb-8">
                Time management made easy for teens. Balance school, activities, and rest with smart scheduling.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-clockify-blue hover:bg-gray-100">
                  <Link to="/schedules">Browse Schedules</Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="hidden md:block md:w-1/2 mt-8 md:mt-0">
              <img
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
                alt="Teen using laptop for time management"
                className="rounded-lg shadow-xl max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Clockify?</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform is designed specifically for teenagers, helping you develop crucial time management skills.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-clockify-lightGray p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-clockify-blue rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Ready-Made Schedules</h3>
              <p className="text-gray-600">
                Choose from our collection of schedules tailored for students. No need to start from scratch.
              </p>
            </div>
            
            <div className="bg-clockify-lightGray p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-clockify-blue rounded-full flex items-center justify-center mb-4">
                <List className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
              <p className="text-gray-600">
                Adjust any schedule to fit your unique needs and preferences with our easy editor.
              </p>
            </div>
            
            <div className="bg-clockify-lightGray p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-clockify-blue rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Proven Techniques</h3>
              <p className="text-gray-600">
                Learn time management methods that are backed by research and proven to boost productivity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-clockify-lightGray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-clockify-blue">3,500+</p>
              <p className="mt-2 text-lg text-gray-600">Active Users</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-clockify-blue">80%</p>
              <p className="mt-2 text-lg text-gray-600">Report Better Grades</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-clockify-blue">65%</p>
              <p className="mt-2 text-lg text-gray-600">Less Procrastination</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-clockify-blue">50+</p>
              <p className="mt-2 text-lg text-gray-600">Schedule Templates</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-clockify-blue rounded-xl shadow-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to take control of your time?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Join thousands of students who are mastering time management and achieving their goals.
            </p>
            <Button size="lg" className="bg-white text-clockify-blue hover:bg-gray-100">
              <Link to="/schedules">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
