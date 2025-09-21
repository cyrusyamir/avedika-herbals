import { Button } from "./ui/button";
import { Leaf, Shield, Heart } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroProps {
  onExploreProducts: () => void;
}

export function Hero({ onExploreProducts }: HeroProps) {
  return (
    <div className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Ancient Wisdom for
                <span className="text-green-600 block">Modern Wellness</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                Discover the power of authentic Ayurvedic herbs, carefully sourced and 
                traditionally prepared to support your journey to optimal health and vitality.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Natural</h3>
                  <p className="text-sm text-gray-600">Pure herbal extracts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lab Tested</h3>
                  <p className="text-sm text-gray-600">Quality assured</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Trusted</h3>
                  <p className="text-sm text-gray-600">5000+ customers</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 px-8 py-3 text-lg"
                onClick={onExploreProducts}
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3 text-lg"
              >
                Learn About Ayurveda
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Free shipping over ₹999</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>30-day money back</span>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1654133536179-88066c7a16a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMG5hdHVyYWwlMjBoZXJicyUyMGhlcm98ZW58MXx8fHwxNzU4Mzc2NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ayurvedic herbs and natural medicine"
                className="w-full rounded-2xl shadow-2xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-green-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-200 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
    </div>
  );
}