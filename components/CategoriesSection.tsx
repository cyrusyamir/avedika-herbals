import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const categories = [
  {
    id: "immunity",
    name: "Immunity Boosters",
    description: "Strengthen your natural defenses",
    image: "https://images.unsplash.com/photo-1603790090292-ef562ccac38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBtZWRpY2luZSUyMGJvdHRsZXMlMjBoZXJic3xlbnwxfHx8fDE3NTgzNzY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 12,
    popular: true
  },
  {
    id: "stress-relief",
    name: "Stress & Anxiety",
    description: "Natural calm for mind & body",
    image: "https://images.unsplash.com/photo-1608629483046-50c4a693b37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMGhlcmIlMjBwb3dkZXJ8ZW58MXx8fHwxNzU4Mzc2NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 8,
    popular: false
  },
  {
    id: "digestive",
    name: "Digestive Health",
    description: "Support healthy digestion",
    image: "https://images.unsplash.com/photo-1593242523486-8d5aa22f3a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlwaGFsYSUyMHBvd2RlciUyMGF5dXJ2ZWRpY3xlbnwxfHx8fDE3NTgzNzY3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 15,
    popular: true
  },
  {
    id: "cognitive",
    name: "Brain & Memory",
    description: "Enhance mental clarity",
    image: "https://images.unsplash.com/photo-1699380551375-733084e3a437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFobWklMjBoZXJiJTIwbGVhdmVzfGVufDF8fHx8MTc1ODI2NjEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 6,
    popular: false
  },
  {
    id: "skin-health",
    name: "Skin & Beauty",
    description: "Natural glow from within",
    image: "https://images.unsplash.com/photo-1647135188462-666ff9e2cb09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWVtJTIwbGVhdmVzJTIwaGVyYmFsJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzU4Mzc2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 10,
    popular: false
  },
  {
    id: "inflammation",
    name: "Anti-Inflammatory",
    description: "Reduce inflammation naturally",
    image: "https://images.unsplash.com/photo-1614209014409-5186c1430d27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHR1cm1lcmljfGVufDF8fHx8MTc1ODM3NjcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    products: 9,
    popular: true
  }
];

interface CategoriesSectionProps {
  onExploreProducts: () => void;
}

export function CategoriesSection({ onExploreProducts }: CategoriesSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-[#ffd698]/10 to-[#05392b]/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#05392b] font-semibold text-lg">Shop by Category</span>
          <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
            Find the Perfect Herbs
            <span className="text-[#05392b] block">for Your Wellness Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our carefully curated collections of authentic Ayurvedic herbs, 
            each category designed to support specific aspects of your health and well-being.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card 
              key={category.id} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer transform hover:-translate-y-2"
              onClick={onExploreProducts}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <ImageWithFallback
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {category.popular && (
                  <Badge className="absolute top-3 right-3 bg-[#05392b] hover:bg-[#05392b]/90">
                    Popular
                  </Badge>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.description}</p>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">{category.products} products</span>
                  <span className="text-[#05392b] font-semibold group-hover:text-[#05392b]/80 transition-colors">
                    Explore →
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}