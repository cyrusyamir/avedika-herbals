import { Leaf, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-green-400 mr-2" />
              <span className="text-xl font-semibold">AyurVeda</span>
            </div>
            <p className="text-gray-400">
              Bringing you the finest Ayurvedic herbs and traditional remedies 
              for holistic wellness and natural healing.
            </p>
            <div className="flex space-x-4">
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="text-gray-400 hover:text-green-400">
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">All Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Ayurveda Guide</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Health Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Customer Reviews</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Returns & Refunds</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Track Your Order</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Connected</h3>
            <p className="text-gray-400">
              Subscribe to get wellness tips and special offers.
            </p>
            <div className="space-y-2">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Contact Info */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@ayurveda.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Mumbai, India</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-gray-400">
              © 2025 AyurVeda. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}