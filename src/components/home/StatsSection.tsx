
const StatsSection = () => {
  return (
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
  );
};

export default StatsSection;
