
import React, { useState, useEffect } from "react";
import { Menu, X, Facebook, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Menu", href: "#menu" },
    { name: "Gallery", href: "#gallery" },
    { name: "Book", href: "#booking" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled 
          ? "bg-white shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center z-50">
          <span className={cn(
            "font-playfair font-bold text-2xl md:text-3xl transition-colors duration-300",
            scrolled ? "text-restaurant-red" : "text-white"
          )}>
            Mr Lobster
          </span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "font-medium hover:text-restaurant-red transition-colors duration-300",
                scrolled ? "text-gray-800" : "text-white"
              )}
            >
              {item.name}
            </a>
          ))}
          
          <div className="flex items-center space-x-4">
            <a 
              href="https://www.facebook.com/p/Mr-Lobster-Italiano-01-100063553000119/?locale=pl_PL" 
              target="_blank" 
              rel="noopener noreferrer"
              className={scrolled ? "text-gray-800 hover:text-restaurant-red" : "text-white hover:text-restaurant-red"}
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a 
              href="https://www.instagram.com/mr___lobster/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={scrolled ? "text-gray-800 hover:text-restaurant-red" : "text-white hover:text-restaurant-red"}
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden z-50"
        >
          {isOpen ? (
            <X className={scrolled ? "text-gray-800" : "text-white"} />
          ) : (
            <Menu className={scrolled ? "text-gray-800" : "text-white"} />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-white z-40">
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-800 font-medium text-lg py-4 hover:text-restaurant-red transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center space-x-6 mt-6">
              <a 
                href="https://www.facebook.com/p/Mr-Lobster-Italiano-01-100063553000119/?locale=pl_PL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-restaurant-red"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/mr___lobster/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-restaurant-red"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
