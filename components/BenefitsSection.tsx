import { Heart, Leaf, Shield, Star, Zap, Moon } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const benefits = [
  {
    icon: Heart,
    title: "Holistic Wellness",
    description: "Complete mind-body balance through natural healing principles",
    color: "text-red-600",
    bgColor: "bg-red-50"
  },
  {
    icon: Leaf,
    title: "Natural Healing",
    description: "Pure plant-based remedies with no harmful side effects",
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    icon: Shield,
    title: "Immune Support",
    description: "Strengthen your body's natural defense mechanisms",
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  },
  {
    icon: Zap,
    title: "Energy & Vitality",
    description: "Restore natural energy levels and combat fatigue",
    color: "text-yellow-600",
    bgColor: "bg-yellow-50"
  },
  {
    icon: Moon,
    title: "Stress Relief",
    description: "Calm your mind and improve sleep quality naturally",
    color: "text-purple-600",
    bgColor: "bg-purple-50"
  },
  {
    icon: Star,
    title: "Time-Tested",
    description: "5000+ years of proven traditional medicine wisdom",
    color: "text-orange-600",
    bgColor: "bg-orange-50"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-[#05392b] font-semibold text-lg">Why Choose Ayurveda?</span>
              <h2 className="text-4xl font-bold text-gray-900 leading-tight">
                Experience the Power of 
                <span className="text-[#05392b] block">Ancient Healing</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Ayurveda offers a complete system of natural healing that addresses the root cause 
                of health issues, not just symptoms. Our authentic formulations work with your 
                body's natural intelligence to restore balance and vitality.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`${benefit.bgColor} p-3 rounded-lg flex-shrink-0`}>
                          <Icon className={`h-6 w-6 ${benefit.color}`} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                          <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1696410964766-2a7be36c160a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMGJlbmVmaXRzJTIwd2VsbG5lc3N8ZW58MXx8fHwxNzU4Mzc3NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Ayurveda wellness benefits"
                className="w-full rounded-2xl shadow-xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#ffd698]/30 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#05392b]/20 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}