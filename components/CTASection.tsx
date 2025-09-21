import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Mail, Phone, MapPin, Clock, Gift } from "lucide-react";

interface CTASectionProps {
  onExploreProducts: () => void;
}

export function CTASection({ onExploreProducts }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#05392b] to-[#05392b]/80 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#ffd698]/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-[#ffd698]/10 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge className="bg-[#ffd698] text-[#05392b] hover:bg-[#ffd698]/90">
                Limited Time Offer
              </Badge>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Start Your Wellness Journey
                <span className="text-[#ffd698] block">Today!</span>
              </h2>
              <p className="text-xl text-green-100 leading-relaxed">
                Join thousands of satisfied customers who have transformed their health 
                with our authentic Ayurvedic formulations. Get 20% off your first order!
              </p>
            </div>

            {/* Special Offers */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Gift className="h-6 w-6 text-[#ffd698]" />
                <span className="text-lg">Free shipping on orders over ₹999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-6 w-6 text-[#ffd698]" />
                <span className="text-lg">30-day money-back guarantee</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-6 w-6 text-[#ffd698]" />
                <span className="text-lg">Free consultation with our Ayurvedic experts</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Get Wellness Tips & Exclusive Offers</h3>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder-white/70 focus:border-[#ffd698]"
                />
                <Button className="bg-[#ffd698] text-[#05392b] hover:bg-[#ffd698]/90 font-semibold px-8">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm text-green-100">
                Join 10,000+ subscribers and get weekly wellness tips, exclusive discounts, and early access to new products.
              </p>
            </div>
          </div>

          {/* Right Content - CTA Buttons */}
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Ready to Begin?</h3>
              
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-[#ffd698] text-[#05392b] hover:bg-[#ffd698]/90 text-lg py-6"
                  onClick={onExploreProducts}
                >
                  Shop All Products
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-white text-white hover:bg-white/10 text-lg py-6"
                >
                  Take Wellness Quiz
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full border-white text-white hover:bg-white/10 text-lg py-6"
                >
                  Book Free Consultation
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-8 pt-6 border-t border-white/20 space-y-3">
                <h4 className="font-semibold text-center mb-4">Need Help? Contact Us</h4>
                <div className="flex items-center space-x-3 text-sm">
                  <Phone className="h-4 w-4 text-[#ffd698]" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <Mail className="h-4 w-4 text-[#ffd698]" />
                  <span>support@ayurveda.com</span>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <MapPin className="h-4 w-4 text-[#ffd698]" />
                  <span>Mumbai, India</span>
                </div>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#ffd698]">100%</div>
                <div className="text-sm">Natural</div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <div className="text-2xl font-bold text-[#ffd698]">Lab</div>
                <div className="text-sm">Tested</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}