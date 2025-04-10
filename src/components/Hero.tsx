
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home"
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/placeholder.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Mr Lobster
        </h1>
        <p className="text-white text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Authentic Italian Cuisine & Family Tradition
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Button 
            className="bg-restaurant-red hover:bg-restaurant-red/90 text-white py-6 px-8 text-lg"
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Menu
          </Button>
          <Button 
            className="bg-transparent hover:bg-white/20 text-white border-2 border-white py-6 px-8 text-lg"
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Table
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
