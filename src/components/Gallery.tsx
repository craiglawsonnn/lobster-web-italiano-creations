
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const Gallery = () => {
  // These would normally be your actual images
  const galleryImages = [
    {
      src: "/placeholder.svg",
      alt: "Restaurant interior",
      caption: "Our cozy dining area"
    },
    {
      src: "/placeholder.svg",
      alt: "Special event",
      caption: "Private events & celebrations"
    },
    {
      src: "/placeholder.svg",
      alt: "Food plating",
      caption: "Authentic Italian cuisine"
    },
    {
      src: "/placeholder.svg",
      alt: "Chef cooking",
      caption: "Crafted with passion"
    },
    {
      src: "/placeholder.svg",
      alt: "Outside seating",
      caption: "Summer terrace"
    },
    {
      src: "/placeholder.svg",
      alt: "Traditional pizza",
      caption: "Wood-fired pizza"
    }
  ];

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-restaurant-red text-center mb-12">
          Gallery
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card key={index} className={cn(
              "overflow-hidden hover:shadow-xl transition-shadow duration-300",
              index === 0 && "md:col-span-2 md:row-span-2"
            )}>
              <CardContent className="p-0 relative">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white font-medium">{image.caption}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
