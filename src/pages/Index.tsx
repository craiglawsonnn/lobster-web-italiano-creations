
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import BookingForm from "../components/BookingForm";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Menu />
      <ReviewsSection />
      <Gallery />
      <BookingForm />
      <Footer />
    </div>
  );
};

export default Index;
