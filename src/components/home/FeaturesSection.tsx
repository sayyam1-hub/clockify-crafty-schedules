
import { Calendar, List, Check } from "lucide-react";

const FeaturesSection = () => {
  return (
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
  );
};

export default FeaturesSection;
