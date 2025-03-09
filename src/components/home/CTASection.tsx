
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const navigate = useNavigate();

  const handleGetStarted = (e) => {
    e.preventDefault();
    navigate("/schedules");
    window.scrollTo(0, 0);
  };

  return (
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
  );
};

export default CTASection;
