
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      toast({
        title: "Reservation Request Sent",
        description: "We'll contact you shortly to confirm your reservation.",
        duration: 5000,
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        message: ""
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <section id="booking" className="section-padding bg-restaurant-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-restaurant-red text-center mb-6">
          Book a Table
        </h2>
        <p className="text-gray-700 text-center mb-12 max-w-2xl mx-auto">
          Reserve your table at Mr Lobster for an unforgettable Italian dining experience. We recommend booking in advance to secure your preferred date and time.
        </p>
        
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <Input 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                <Input 
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your email address"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <Input 
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Your phone number"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-1">Number of Guests *</label>
                <Input 
                  id="guests"
                  name="guests"
                  type="number"
                  min="1"
                  value={formData.guests}
                  onChange={handleChange}
                  placeholder="How many guests"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Date *</label>
                <Input 
                  id="date"
                  name="date"
                  type="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">Time *</label>
                <Input 
                  id="time"
                  name="time"
                  type="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                  className="w-full"
                />
              </div>
              
              <div className="md:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Special Requests</label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or dietary requirements?"
                  rows={4}
                  className="w-full"
                />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button 
                type="submit" 
                className="bg-restaurant-red hover:bg-restaurant-red/90 text-white py-6 px-10 text-lg"
                disabled={loading}
              >
                {loading ? "Sending..." : "Book Now"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
