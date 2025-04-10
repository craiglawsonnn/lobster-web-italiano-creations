
import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const ReviewsSection = () => {
  const reviews = [
    {
      name: "Marco P.",
      rating: 5,
      date: "March 2023",
      comment: "The most authentic Italian food I've had outside of Italy! The pasta was perfectly cooked and the service was excellent."
    },
    {
      name: "Sophie K.",
      rating: 5,
      date: "January 2023",
      comment: "Amazing atmosphere and delicious pizza. We tried the MISTER LOBSTER pizza and it was incredible. Will definitely be back!"
    },
    {
      name: "Jan W.",
      rating: 4,
      date: "February 2023",
      comment: "Great food, friendly staff, and reasonable prices. The tiramisu is a must-try!"
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-restaurant-red text-center mb-6">
          What Our Guests Say
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Don't just take our word for it. See what our valued customers have to say about their experience at Mr Lobster.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className={`h-5 w-5 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{review.comment}"</p>
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-gray-800">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.date}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.tripadvisor.com/Restaurant_Review-g274772-d17752150-Reviews-Mr_Lobster_Marco_Palama-Krakow_Lesser_Poland_Province_Southern_Poland.html" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-restaurant-green hover:text-restaurant-red transition-colors duration-300"
          >
            <span className="mr-2">View more reviews on TripAdvisor</span>
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M13.5 19.5h-6a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3h9a3 3 0 0 1 3 3v6"></path>
              <path d="m8.5 13.5 7-7M16.5 11v-4.5h-4.5M16 19.5h4.5V15"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
