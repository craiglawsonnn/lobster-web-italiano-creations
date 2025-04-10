
import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-restaurant-red text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-playfair font-bold text-2xl mb-4">Mr Lobster</h3>
            <p className="mb-4">Family owned authentic Italian cuisine in the heart of Krakow.</p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/p/Mr-Lobster-Italiano-01-100063553000119/?locale=pl_PL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-footer"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6 text-white hover:text-restaurant-cream transition-colors duration-300" />
              </a>
              <a 
                href="https://www.instagram.com/mr___lobster/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-footer"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white hover:text-restaurant-cream transition-colors duration-300" />
              </a>
              <a 
                href="https://www.tripadvisor.com/Restaurant_Review-g274772-d17752150-Reviews-Mr_Lobster_Marco_Palama-Krakow_Lesser_Poland_Province_Southern_Poland.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-icon-footer"
                aria-label="TripAdvisor"
              >
                <svg 
                  className="h-6 w-6 text-white hover:text-restaurant-cream transition-colors duration-300" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12.006 0C5.405.002.005 5.412 0 12.004c-.006 6.601 5.402 12.006 12.006 12C18.61 24.002 24 18.6 24 12.004 24.006 5.412 18.61.002 12.006 0zm-.03 4.818c.033-.015.068-.03.098-.044 0 0 1.33-.48 4.234-.437.658.01 1.006.137 1.006.137.45.152.7.407.764.85.066.451.155 1.604.155 1.604.03.577-.433.832-.432.832-.65 5.723-5.849 7.244-5.849 7.244.97-2.706.985-4.38.94-4.894-.016-.19.006-.426.058-.613a1.02 1.02 0 0 1 .205-.378c.135-.15.252-.237.445-.355.193-.119.292-.182.414-.242.244-.12.475-.122.709-.212.235-.09.302-.152.302-.152.137-.103.132-.342.132-.342 0-.234-.23-.43-.23-.43-.312-.21-.912-.266-.912-.266a6.638 6.638 0 0 0-1.048.008c-.229.018-.632.076-.8.151-.168.075-.318.152-.414.245-.097.094-.15.136-.15.136-.128.16-.144.398-.144.398-.026 6.242 4.432 9.383 4.432 9.383-1.917.182-3.155-.302-3.964-.623-.809-.32-.871-.497-.871-.497-.059-.17.059-.404.059-.404 1.019-1.95 5.037-2.367 5.037-2.367.608-.181.656-.32.656-.32.046-.227-.184-.368-.184-.368-1.423-.57-2.467-1.477-2.467-1.477-.16-.188-.403-.22-.403-.22-1.3.876-2.365.093-2.365.093-.245-.231.014-.524.014-.524.777-.53 1.968-.507 1.968-.507.373.008.546.207.546.207 1.918 1.297 3.5 1.067 3.5 1.067.185-.022.335-.244.335-.244.348-.604-.414-1.354-.414-1.354-.315-.249-.586-.172-.586-.172-3.457.322-5.516-1.72-5.516-1.72-.182-.264.105-.424.105-.424 3.257-2.355 2.855-4.965 2.855-4.965-.016-.227-.203-.35-.203-.35-.216-.127-.541-.081-.541-.081-1.703.328-2.765-.443-3.022-.628-.255-.184-.376-.327-.376-.327-.128-.24-.016-.467-.016-.467.248-.47.706-.665.706-.665zm.937 1.802c.15-.039.273.121.273.121.231.272.16.673.16.673-.209 1.449-1.856 1.905-1.856 1.905-.185.07-.343-.06-.343-.06-.118-.121-.06-.322-.06-.322.534-.704 1.581-2.198 1.826-2.317zm-3.39 1.834c.041-.137.158-.27.158-.27.593-.444 1.928-.137 1.928-.137.164.03.218.195.218.195.039.139-.06.25-.06.25-.699 1.03-2.382.262-2.382.262-.152-.09-.13-.289-.13-.289s.202-.025.268-.01zm1.914-.864c-.25-.159-.584-.11-.584-.11-.504.084-.78.359-.78.359-.063.066-.103.175-.103.175-.022.142.086.177.086.177.115.026 1.637-.368 1.637-.368.05-.26.032-.1.032-.1-.042-.09-.289-.133-.289-.133z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-xl mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1" />
                <p>Krakow, Lesser Poland Province, Southern Poland</p>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3" />
                <p>+48 123 456 789</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3" />
                <p>info@mrlobster.com</p>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-1" />
                <div>
                  <p>Monday - Friday: 12:00 - 22:00</p>
                  <p>Saturday - Sunday: 12:00 - 23:00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-playfair font-bold text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="hover:text-restaurant-cream transition-colors duration-300">Home</a>
              </li>
              <li>
                <a href="#menu" className="hover:text-restaurant-cream transition-colors duration-300">Menu</a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-restaurant-cream transition-colors duration-300">Gallery</a>
              </li>
              <li>
                <a href="#booking" className="hover:text-restaurant-cream transition-colors duration-300">Book a Table</a>
              </li>
              <li>
                <a 
                  href="https://www.tripadvisor.com/Restaurant_Review-g274772-d17752150-Reviews-Mr_Lobster_Marco_Palama-Krakow_Lesser_Poland_Province_Southern_Poland.html" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-restaurant-cream transition-colors duration-300"
                >
                  Reviews
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/30 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Mr Lobster. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
