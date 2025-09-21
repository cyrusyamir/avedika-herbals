import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1494790108755-2616b75d4556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwaW5kaWFufGVufDF8fHx8MTc1ODM3NzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    product: "Ashwagandha Root Powder",
    testimonial: "I've been using the Ashwagandha powder for 3 months now, and the difference in my stress levels is remarkable. I sleep better, feel more energetic during the day, and my anxiety has significantly reduced. The quality is exceptional!",
    verified: true
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Delhi, India",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMG1hbiUyMGluZGlhbnxlbnwxfHx8fDE3NTgzNzc1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    product: "Turmeric Capsules",
    testimonial: "As someone with joint pain from years of sports, these turmeric capsules have been a game-changer. The inflammation has reduced significantly, and I can move more freely. The purity and potency are clearly superior to other brands I've tried.",
    verified: true
  },
  {
    id: 3,
    name: "Anita Verma",
    location: "Bangalore, India",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwc21pbGluZ3xlbnwxfHx8fDE3NTgzNzc1NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    product: "Brahmi Memory Enhancer",
    testimonial: "My memory and focus have improved dramatically since starting Brahmi tablets. As a working mother, I was struggling with mental fatigue, but now I feel sharp and alert throughout the day. Highly recommend!",
    verified: true
  },
  {
    id: 4,
    name: "Dr. Arjun Mehta",
    location: "Chennai, India",
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N0b3IlMjBpbmRpYW58ZW58MXx8fHwxNzU4Mzc3NTczfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    product: "Complete Immunity Kit",
    testimonial: "As an Ayurvedic practitioner, I'm impressed by the quality and authenticity of these formulations. The immunity kit is comprehensive and well-balanced. I recommend these products to my patients with complete confidence.",
    verified: true
  },
  {
    id: 5,
    name: "Meera Gupta",
    location: "Pune, India",
    image: "https://images.unsplash.com/photo-1494790108755-2616b75d4556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHdvbWFuJTIwaW5kaWFufGVufDF8fHx8MTc1ODM3NzU3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5,
    product: "Triphala Digestive Support",
    testimonial: "Triphala has completely transformed my digestive health. No more bloating or irregularity. The gentle cleansing effect is exactly what my body needed. The packaging and customer service are also excellent.",
    verified: true
  }
];

export function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-[#05392b]/5 to-[#ffd698]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#05392b] font-semibold text-lg">Customer Stories</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            What Our Customers
            <span className="text-[#05392b] block">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real experiences from real people who have transformed their health 
            with our authentic Ayurvedic formulations.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white">
            <CardContent className="p-12">
              <div className="text-center space-y-8">
                {/* Quote Icon */}
                <div className="flex justify-center">
                  <div className="bg-[#05392b]/10 p-4 rounded-full">
                    <Quote className="h-8 w-8 text-[#05392b]" />
                  </div>
                </div>

                {/* Stars */}
                <div className="flex justify-center space-x-1">
                  {[...Array(currentData.rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-xl text-gray-700 leading-relaxed font-medium italic">
                  "{currentData.testimonial}"
                </blockquote>

                {/* Product */}
                <div className="bg-[#ffd698]/20 px-4 py-2 rounded-full inline-block">
                  <span className="text-[#05392b] font-semibold">
                    Verified Purchase: {currentData.product}
                  </span>
                </div>

                {/* Customer Info */}
                <div className="flex items-center justify-center space-x-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={currentData.image} alt={currentData.name} />
                    <AvatarFallback className="bg-[#05392b] text-white">
                      {currentData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="text-left">
                    <h4 className="font-semibold text-gray-900">{currentData.name}</h4>
                    <p className="text-gray-600">{currentData.location}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="border-[#05392b]/20 hover:bg-[#05392b]/5"
            >
              <ChevronLeft className="h-5 w-5 text-[#05392b]" />
            </Button>

            {/* Dots */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial
                      ? "bg-[#05392b]"
                      : "bg-gray-300 hover:bg-[#05392b]/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="border-[#05392b]/20 hover:bg-[#05392b]/5"
            >
              <ChevronRight className="h-5 w-5 text-[#05392b]" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#05392b]">5000+</div>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#05392b]">4.9★</div>
            <p className="text-gray-600">Average Rating</p>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-[#05392b]">99%</div>
            <p className="text-gray-600">Would Recommend</p>
          </div>
        </div>
      </div>
    </section>
  );
}