
import { useState, useEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  age: number;
  avatar: string;
  rating: number;
  comment: string;
  date: string;
}

const Reviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const reviewCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // Set isLoaded immediately
    setIsLoaded(true);
    
    // Setup intersection observer for spotlight effect on review cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('review-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    // Observe each review card
    reviewCardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });
    
    return () => observer.disconnect();
  }, []);

  const reviews: Review[] = [
    {
      id: 1,
      name: "Alex Johnson",
      age: 16,
      avatar: "AJ",
      rating: 5,
      comment: "Clockify has been a game-changer for me! Before using it, I was constantly stressed about managing schoolwork with my sports practice. Now I have a clear routine that helps me stay on track without feeling overwhelmed.",
      date: "March 15, 2023"
    },
    {
      id: 2,
      name: "Maya Rodriguez",
      age: 17,
      avatar: "MR",
      rating: 4,
      comment: "I never thought I'd be someone who sticks to a schedule, but the templates here are actually fun to use. My grades have improved since I started planning my study time better.",
      date: "April 3, 2023"
    },
    {
      id: 3,
      name: "Jayden Smith",
      age: 15,
      avatar: "JS",
      rating: 5,
      comment: "The best part about Clockify is how easy it is to customize the schedules. I have ADHD and needed something that would work with my specific needs - this does the job perfectly!",
      date: "February 22, 2023"
    },
    {
      id: 4,
      name: "Olivia Chen",
      age: 18,
      avatar: "OC",
      rating: 5,
      comment: "As a senior juggling college applications, part-time work, and AP classes, I was drowning in responsibilities. The schedules here helped me find balance and actually get enough sleep for once!",
      date: "May 10, 2023"
    },
    {
      id: 5,
      name: "Ethan Williams",
      age: 14,
      avatar: "EW",
      rating: 4,
      comment: "Just started high school and was feeling pretty lost with managing my time. My parents recommended Clockify, and it's been super helpful for adjusting to the increased workload.",
      date: "August 30, 2023"
    },
    {
      id: 6,
      name: "Sofia Garcia",
      age: 16,
      avatar: "SG",
      rating: 5,
      comment: "I'm in three different clubs plus dance team, and was ready to drop something because I felt so stressed. With Clockify, I've found a way to organize everything and still have time for myself.",
      date: "October 12, 2023"
    },
    {
      id: 7,
      name: "Aiden Thompson",
      age: 15,
      avatar: "AT",
      rating: 3,
      comment: "Pretty good schedules overall, but I wish there were more options specifically for students who are also competitive athletes. Had to modify quite a bit.",
      date: "November 5, 2023"
    },
    {
      id: 8,
      name: "Emma Lewis",
      age: 17,
      avatar: "EL",
      rating: 5,
      comment: "The time management tips combined with the practical schedules have honestly changed how I approach school. I'm much more efficient and less stressed now!",
      date: "January 18, 2024"
    },
    {
      id: 9,
      name: "Lucas Kim",
      age: 16,
      avatar: "LK",
      rating: 4,
      comment: "Using the exam preparation schedule helped me ace my midterms! I appreciate how detailed the time blocks are while still including breaks.",
      date: "December 20, 2023"
    }
  ];

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
    ));
  };

  const calculateAverageRating = () => {
    const total = reviews.reduce((acc, review) => acc + review.rating, 0);
    return (total / reviews.length).toFixed(1);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section - Spotlight Effect */}
      <section className="bg-gradient-to-r from-clockify-blue to-clockify-lightBlue py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-spotlight opacity-20"></div>
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10 ${isLoaded ? 'animate-spotlight-reveal' : 'opacity-0'}`}>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            What Our Users Say
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            See how Clockify has helped teens just like you master time management and achieve their goals.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className="flex items-center">
              {renderStars(5)}
            </div>
            <p className="ml-2 text-xl font-semibold">{calculateAverageRating()} average rating</p>
          </div>
        </div>
      </section>
      
      {/* Reviews Section - Card Reveal Animation */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="review-card"
                ref={el => reviewCardsRef.current[index] = el}
              >
                <Card className="h-full hover:shadow-md transition-all duration-300 transform hover:-translate-y-1">
                  <CardContent className="pt-6">
                    <div className="flex items-start">
                      <Avatar className="h-12 w-12 border-2 border-clockify-blue">
                        <AvatarFallback className="bg-clockify-lightBlue text-white">
                          {review.avatar}
                        </AvatarFallback>
                      </Avatar>
                      <div className="ml-4">
                        <p className="font-semibold">{review.name}</p>
                        <p className="text-sm text-gray-500">Age: {review.age}</p>
                        <div className="flex mt-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700">{review.comment}</p>
                      <p className="mt-2 text-sm text-gray-500">{review.date}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Parent Testimonials - Rotation Animation */}
      <section className="py-12 bg-clockify-lightGray relative overflow-hidden">
        <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isLoaded ? 'animate-rotate-in' : 'opacity-0'}`}>
          <h2 className="text-2xl font-bold mb-8 text-center">From Parents</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="hover:shadow-md transition-all duration-500 transform hover:scale-[1.02]">
              <CardContent className="pt-6">
                <p className="italic text-gray-700">
                  "As a parent, I was looking for ways to help my daughter manage her time better without constantly nagging her. Clockify has been that solution. She's more independent and responsible now, and our relationship has improved without the constant stress over homework and deadlines."
                </p>
                <div className="mt-4 flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-clockify-blue text-white">JP</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-semibold">Jennifer Parker</p>
                    <p className="text-sm text-gray-500">Parent of 15-year-old</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md transition-all duration-500 transform hover:scale-[1.02]" style={{ animationDelay: '0.2s' }}>
              <CardContent className="pt-6">
                <p className="italic text-gray-700">
                  "My son has always struggled with organization, especially since starting high school. The structured schedules from Clockify have given him a framework that works. His grades have improved, and he even has more free time because he's working more efficiently."
                </p>
                <div className="mt-4 flex items-center">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-clockify-blue text-white">MJ</AvatarFallback>
                  </Avatar>
                  <div className="ml-3">
                    <p className="font-semibold">Michael Johnson</p>
                    <p className="text-sm text-gray-500">Parent of 16-year-old</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Reviews;
