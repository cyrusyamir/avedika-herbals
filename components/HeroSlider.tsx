import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Leaf, Shield, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

interface HeroSliderProps {
  onExploreProducts: () => void;
}

const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1654133536179-88066c7a16a0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMG5hdHVyYWwlMjBoZXJicyUyMGhlcm98ZW58MXx8fHwxNzU4Mzc2NzMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Ancient Wisdom for",
    subtitle: "Modern Wellness",
    description: "Discover the power of authentic Ayurvedic herbs, carefully sourced and traditionally prepared to support your journey to optimal health and vitality."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1677599082447-6549af4c5454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHNwaWNlcyUyMG5hdHVyYWx8ZW58MXx8fHwxNzU4Mzc3MTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Pure Herbal",
    subtitle: "Extracts & Powders",
    description: "Experience the healing power of nature with our premium collection of organic herbs, each carefully selected for maximum potency and therapeutic benefits."
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1737064731089-eb6f1c6c6a71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGhlcmJhbCUyMG1lZGljaW5lJTIwcHJlcGFyYXRpb258ZW58MXx8fHwxNzU4Mzc3MTc0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Traditional",
    subtitle: "Ayurvedic Medicine",
    description: "Embrace the time-tested wisdom of Ayurveda with our authentic formulations, prepared using traditional methods passed down through generations."
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1656850815262-2eed4ed82625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxtb3J0YXIlMjBwZXN0bGUlMjBoZXJicyUyMGdyaW5kaW5nfGVufDF8fHx8MTc1ODM3NzE3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    title: "Handcrafted",
    subtitle: "Natural Remedies",
    description: "Our herbs are carefully processed using traditional grinding methods to preserve their natural oils and active compounds for maximum effectiveness."
  }
];

export function HeroSlider({ onExploreProducts }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlideData = heroSlides[currentSlide];

  return (
    <div className="relative bg-gradient-to-br from-[#ffd698]/20 to-[#05392b]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                {currentSlideData.title}
                <span className="text-[#05392b] block">{currentSlideData.subtitle}</span>
              </h1>
              <p className="text-xl text-gray-700 leading-relaxed">
                {currentSlideData.description}
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center space-x-3">
                <div className="bg-[#ffd698]/30 p-2 rounded-lg">
                  <Leaf className="h-6 w-6 text-[#05392b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">100% Natural</h3>
                  <p className="text-sm text-gray-600">Pure herbal extracts</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#ffd698]/30 p-2 rounded-lg">
                  <Shield className="h-6 w-6 text-[#05392b]" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Lab Tested</h3>
                  <p className="text-sm text-gray-600">Quality assured</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-[#ffd698]/30 p-2 rounded-lg">
                  <Heart className="h-6 w-6 text-[#05392b]" />
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
                className="bg-[#05392b] hover:bg-[#05392b]/90 px-8 py-3 text-lg"
                onClick={onExploreProducts}
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-[#05392b] text-[#05392b] hover:bg-[#05392b]/5 px-8 py-3 text-lg"
              >
                Learn About Ayurveda
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#05392b] rounded-full"></div>
                <span>Free shipping over ₹999</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-[#05392b] rounded-full"></div>
                <span>30-day money back</span>
              </div>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide 
                      ? "bg-[#05392b]" 
                      : "bg-gray-300 hover:bg-[#05392b]/50"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right Image with Navigation */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src={currentSlideData.image}
                alt="Ayurvedic herbs and natural medicine"
                className="w-full rounded-2xl shadow-2xl transition-opacity duration-300"
              />
              
              {/* Navigation Buttons */}
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-[#05392b]/20 shadow-lg"
              >
                <ChevronLeft className="h-5 w-5 text-[#05392b]" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-[#05392b]/20 shadow-lg"
              >
                <ChevronRight className="h-5 w-5 text-[#05392b]" />
              </Button>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#ffd698]/60 rounded-full"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#05392b]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}