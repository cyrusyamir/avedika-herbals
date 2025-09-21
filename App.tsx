import { useState } from "react";
import { Header } from "./components/Header";
import { HeroSlider } from "./components/HeroSlider";
import { BenefitsSection } from "./components/BenefitsSection";
import { CategoriesSection } from "./components/CategoriesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { CTASection } from "./components/CTASection";
import { ProductCard, Product } from "./components/ProductCard";
import { ProductDetail } from "./components/ProductDetail";
import { Footer } from "./components/Footer";
import { Button } from "./components/ui/button";
import { toast } from "sonner@2.0.3";

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Organic Turmeric Capsules",
    category: "Anti-inflammatory",
    price: 599,
    originalPrice: 799,
    rating: 4.8,
    reviews: 324,
    image: "https://images.unsplash.com/photo-1614209014409-5186c1430d27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHR1cm1lcmljfGVufDF8fHx8MTc1ODM3NjcxNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Reduces inflammation", "Boosts immunity", "Supports joint health", "Antioxidant properties"],
    description: "Premium organic turmeric capsules with 95% curcumin extract for maximum potency and bioavailability.",
    why: "Turmeric has been used for over 4,000 years in traditional Ayurvedic medicine. Our organic turmeric capsules contain the highest concentration of curcumin, the active compound responsible for turmeric's powerful anti-inflammatory and antioxidant properties. Unlike synthetic alternatives, our turmeric is organically grown and processed using traditional methods to preserve its natural potency.\n\nChoose our turmeric capsules because they offer superior bioavailability with black pepper extract, ensuring your body can effectively absorb and utilize the beneficial compounds. Each capsule delivers 500mg of pure turmeric extract standardized to 95% curcuminoids.",
    how: "Take 1-2 capsules daily with meals or as directed by your healthcare practitioner. For best results, take with a small amount of healthy fat (like coconut oil) to enhance absorption.\n\nFor acute inflammation: Take 2 capsules twice daily for 2-4 weeks.\nFor general wellness: Take 1 capsule daily as a maintenance dose.\n\nConsistency is key - take daily for at least 4-6 weeks to experience the full benefits.",
    what: "Each capsule contains 500mg of organic turmeric root extract (Curcuma longa) standardized to 95% curcuminoids. Our turmeric is sourced from certified organic farms in India where it has been traditionally cultivated for centuries.\n\nThe extraction process uses no harsh chemicals or solvents, maintaining the herb's natural integrity. We add a small amount of black pepper extract (Piperine) to enhance bioavailability by up to 2000%.",
    ingredients: [
      "Organic Turmeric Root Extract (500mg)",
      "Black Pepper Extract (Piperine 5mg)",
      "Vegetarian Capsule Shell",
      "Rice Flour (Natural filler)"
    ],
    dosage: "1-2 capsules daily with meals",
    warnings: [
      "Consult your doctor if pregnant or nursing",
      "May interact with blood-thinning medications",
      "Discontinue use if stomach upset occurs"
    ]
  },
  {
    id: "2",
    name: "Ashwagandha Root Powder",
    category: "Stress Relief",
    price: 899,
    originalPrice: 1199,
    rating: 4.9,
    reviews: 567,
    image: "https://images.unsplash.com/photo-1608629483046-50c4a693b37f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2h3YWdhbmRoYSUyMGhlcmIlMjBwb3dkZXJ8ZW58MXx8fHwxNzU4Mzc2NzE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Reduces stress & anxiety", "Improves sleep quality", "Boosts energy levels", "Enhances mental clarity"],
    description: "Pure Ashwagandha root powder from the Himalayan region, traditionally used to combat stress and promote vitality.",
    why: "Ashwagandha, known as the 'Indian Winter Cherry,' is one of the most revered herbs in Ayurveda. For over 3,000 years, it has been used as a powerful adaptogen to help the body manage stress and restore balance.\n\nOur Ashwagandha is sourced from the pristine Himalayan regions where the harsh growing conditions naturally increase the concentration of active compounds called withanolides. Clinical studies show that regular use of Ashwagandha can reduce cortisol levels by up to 30%, significantly improving stress resilience and overall well-being.",
    how: "Mix 1/2 to 1 teaspoon (2-4g) in warm milk, water, or honey twice daily - once in the morning and once before bedtime.\n\nFor stress relief: Take with warm milk and a pinch of cardamom 30 minutes before bed.\nFor energy and vitality: Mix with warm water or juice in the morning on an empty stomach.\n\nStart with a smaller dose and gradually increase as your body adapts to the herb.",
    what: "100% pure, organically grown Ashwagandha root powder (Withania somnifera) with no additives, fillers, or preservatives. Our powder contains a minimum of 2.5% withanolides, the active compounds responsible for Ashwagandha's adaptogenic properties.\n\nEach batch is carefully tested for purity and potency, ensuring you receive the highest quality herb with maximum therapeutic benefits.",
    ingredients: [
      "Pure Ashwagandha Root Powder (Withania somnifera)",
      "Minimum 2.5% Withanolides",
      "No additives or preservatives"
    ],
    dosage: "1/2 to 1 teaspoon (2-4g) twice daily",
    warnings: [
      "Not recommended during pregnancy",
      "May cause drowsiness - avoid driving after evening dose",
      "Consult healthcare provider if taking medications for diabetes or blood pressure"
    ]
  },
  {
    id: "3",
    name: "Brahmi Memory Enhancer",
    category: "Cognitive Health",
    price: 749,
    originalPrice: 999,
    rating: 4.7,
    reviews: 423,
    image: "https://images.unsplash.com/photo-1699380551375-733084e3a437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFobWklMjBoZXJiJTIwbGVhdmVzfGVufDF8fHx8MTc1ODI2NjEyMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Enhances memory", "Improves focus", "Supports brain health", "Reduces mental fatigue"],
    description: "Brahmi extract tablets formulated to support cognitive function, memory, and mental clarity naturally.",
    why: "Brahmi (Bacopa monnieri) is revered in Ayurveda as 'Medhya Rasayana' - a brain tonic that enhances cognitive function. This sacred herb has been used for over 3,000 years by scholars and students to improve memory, concentration, and learning ability.\n\nModern research validates ancient wisdom, showing that Brahmi contains powerful compounds called bacosides that protect brain cells, enhance neural communication, and improve memory formation. Regular use of Brahmi can improve memory retention by up to 40% within 12 weeks.",
    how: "Take 1 tablet twice daily after meals with warm water or milk. For optimal results, take consistently for at least 8-12 weeks.\n\nFor students and professionals: Take one tablet in the morning with breakfast and one in the afternoon.\nFor memory support in seniors: Take with warm milk for better absorption.\n\nBrahmi works gradually - be patient and consistent with your daily intake for best results.",
    what: "Each tablet contains 300mg of standardized Brahmi extract (Bacopa monnieri) containing minimum 20% bacosides. Our Brahmi is wild-harvested from pristine wetlands and processed using traditional water-extraction methods to preserve the herb's natural potency.\n\nThe extract is then carefully standardized to ensure consistent levels of active compounds in every tablet, providing reliable cognitive support.",
    ingredients: [
      "Brahmi Extract (Bacopa monnieri) 300mg",
      "Standardized to 20% Bacosides",
      "Microcrystalline Cellulose",
      "Natural binding agents"
    ],
    dosage: "1 tablet twice daily after meals",
    warnings: [
      "May cause mild stomach upset if taken on empty stomach",
      "Start with one tablet daily for first week",
      "Consult doctor if taking medications for depression or anxiety"
    ]
  },
  {
    id: "4",
    name: "Triphala Digestive Support",
    category: "Digestive Health",
    price: 549,
    originalPrice: 699,
    rating: 4.6,
    reviews: 789,
    image: "https://images.unsplash.com/photo-1593242523486-8d5aa22f3a25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmlwaGFsYSUyMHBvd2RlciUyMGF5dXJ2ZWRpY3xlbnwxfHx8fDE3NTgzNzY3MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Supports digestion", "Gentle detoxification", "Promotes regularity", "Rich in antioxidants"],
    description: "Traditional Triphala blend of three fruits to support healthy digestion and gentle body cleansing.",
    why: "Triphala, meaning 'three fruits,' is one of the most important formulations in Ayurveda, combining Amalaki, Bibhitaki, and Haritaki. This time-tested blend has been used for over 2,000 years to support digestive health and gentle detoxification.\n\nUnlike harsh laxatives, Triphala works gently to regulate digestion, support nutrient absorption, and promote natural elimination. It's rich in vitamin C, antioxidants, and natural compounds that support overall digestive wellness without creating dependency.",
    how: "Mix 1/2 teaspoon in warm water and drink before bedtime, or take 1-2 capsules with warm water 30 minutes before sleep.\n\nFor digestive support: Take consistently every night for best results.\nFor gentle cleansing: Use for 4-6 weeks, then take a 1-week break.\n\nStart with a smaller dose and adjust based on your body's response. The effects are usually noticed within 2-3 days of consistent use.",
    what: "Pure Triphala powder containing equal parts of three organic fruits: Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), and Haritaki (Terminalia chebula). Each fruit is carefully dried and ground to preserve maximum potency.\n\nOur Triphala is sourced from organic farms in India and processed using traditional methods without any chemical treatments or additives.",
    ingredients: [
      "Organic Amalaki (Emblica officinalis)",
      "Organic Bibhitaki (Terminalia bellirica)",
      "Organic Haritaki (Terminalia chebula)",
      "Equal ratio blend (1:1:1)"
    ],
    dosage: "1/2 teaspoon powder or 1-2 capsules before bedtime",
    warnings: [
      "Start with smaller doses to assess tolerance",
      "Not recommended during pregnancy",
      "May cause loose stools initially - reduce dose if needed"
    ]
  },
  {
    id: "5",
    name: "Neem Skin Purifier",
    category: "Skin Health",
    price: 449,
    originalPrice: 599,
    rating: 4.5,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1647135188462-666ff9e2cb09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWVtJTIwbGVhdmVzJTIwaGVyYmFsJTIwbWVkaWNpbmV8ZW58MXx8fHwxNzU4Mzc2NzI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Purifies blood", "Supports clear skin", "Natural antibacterial", "Boosts immunity"],
    description: "Pure Neem leaf extract capsules for natural skin purification and immune system support.",
    why: "Neem, known as the 'Village Pharmacy' in India, has been used for over 4,000 years for its powerful purifying and healing properties. Every part of the neem tree has medicinal value, but the leaves are particularly potent for skin health and blood purification.\n\nNeem contains powerful compounds like nimbidin, nimbin, and azadirachtin that provide natural antibacterial, antifungal, and antiviral properties. Regular use of neem helps purify the blood from within, leading to clearer, healthier skin and stronger immunity.",
    how: "Take 1-2 capsules twice daily with meals and plenty of water. For skin issues, consistency is crucial - take daily for at least 6-8 weeks to see significant improvements.\n\nFor skin purification: Take 2 capsules in the morning with breakfast.\nFor immune support: Take 1 capsule twice daily with meals.\n\nDrink plenty of water throughout the day to support the detoxification process.",
    what: "Each capsule contains 400mg of pure neem leaf extract (Azadirachta indica) standardized to active compounds. Our neem leaves are carefully selected from mature trees and processed using gentle extraction methods to preserve the herb's natural potency.\n\nThe extract is concentrated to provide maximum therapeutic benefits while being gentle on the digestive system.",
    ingredients: [
      "Neem Leaf Extract (Azadirachta indica) 400mg",
      "Standardized active compounds",
      "Vegetarian capsule shell",
      "No artificial additives"
    ],
    dosage: "1-2 capsules twice daily with meals",
    warnings: [
      "Not recommended for children under 12",
      "Avoid during pregnancy and breastfeeding",
      "May cause stomach upset if taken on empty stomach"
    ]
  },
  {
    id: "6",
    name: "Complete Ayurvedic Immunity Kit",
    category: "Immunity Boost",
    price: 1899,
    originalPrice: 2499,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1603790090292-ef562ccac38e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBtZWRpY2luZSUyMGJvdHRsZXMlMjBoZXJic3xlbnwxfHx8fDE3NTgzNzY3MjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    benefits: ["Complete immunity support", "Stress relief", "Energy boost", "Comprehensive wellness"],
    description: "A complete wellness kit featuring our top immunity-boosting herbs: Ashwagandha, Turmeric, Giloy, and Amla.",
    why: "This comprehensive immunity kit combines four of the most powerful Ayurvedic herbs in one convenient package. Each herb works synergistically to provide complete immune system support, stress relief, and overall vitality.\n\nRather than taking individual supplements, this kit provides a holistic approach to wellness, addressing multiple aspects of health simultaneously. The combination of adaptogens, antioxidants, and immune-boosting compounds creates a powerful foundation for optimal health.",
    how: "Follow the included detailed protocol guide for each herb. Generally:\n\nMorning: Take Ashwagandha and Giloy capsules with breakfast\nAfternoon: Take Turmeric capsules with lunch\nEvening: Take Amla tablets with dinner\n\nUse consistently for 3 months for maximum benefit. The kit includes a 30-day supply of each herb with detailed instructions for optimal timing and dosage.",
    what: "This complete kit includes:\n- 60 Ashwagandha capsules (500mg each)\n- 60 Turmeric capsules (500mg each)\n- 60 Giloy capsules (400mg each)\n- 60 Amla tablets (300mg each)\n- Detailed usage guide and wellness protocol\n- Free Ayurvedic lifestyle booklet",
    ingredients: [
      "Ashwagandha Root Extract (500mg)",
      "Turmeric Root Extract (500mg)",
      "Giloy Stem Extract (400mg)",
      "Amla Fruit Extract (300mg)",
      "All organic and standardized"
    ],
    dosage: "Follow detailed protocol included in kit",
    warnings: [
      "Consult healthcare provider before starting the complete protocol",
      "Not recommended during pregnancy",
      "Start with half doses for first week to assess tolerance"
    ]
  }
];

type ViewType = 'home' | 'products' | 'product-detail';

export default function App() {
  const [currentView, setCurrentView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartItems, setCartItems] = useState<number>(0);

  const handleNavigateHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  const handleExploreProducts = () => {
    setCurrentView('products');
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
  };

  const handleAddToCart = (product: Product) => {
    setCartItems(prev => prev + 1);
    toast(`${product.name} added to cart!`, {
      description: `₹${product.price} - Continue shopping or checkout`,
    });
  };

  const handleBackToProducts = () => {
    setCurrentView('products');
    setSelectedProduct(null);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigateHome={handleNavigateHome} cartItems={cartItems} />
      
      {currentView === 'home' && (
        <>
          <HeroSlider onExploreProducts={handleExploreProducts} />
          
          <BenefitsSection />
          
          <CategoriesSection onExploreProducts={handleExploreProducts} />
          
          {/* Featured Products Section */}
          <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-[#05392b] font-semibold text-lg">Best Sellers</span>
                <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
                  Featured Ayurvedic Products
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover our most popular herbs and formulations, carefully selected 
                  for their potency and traditional therapeutic value.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {products.slice(0, 3).map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onViewProduct={handleViewProduct}
                    onAddToCart={handleAddToCart}
                  />
                ))}
              </div>
              
              <div className="text-center">
                <Button 
                  size="lg" 
                  onClick={handleExploreProducts}
                  className="bg-[#05392b] hover:bg-[#05392b]/90 px-8"
                >
                  View All Products
                </Button>
              </div>
            </div>
          </section>
          
          <TestimonialsSection />
          
          <CTASection onExploreProducts={handleExploreProducts} />
        </>
      )}

      {currentView === 'products' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                Our Ayurvedic Products
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our complete range of authentic Ayurvedic herbs and formulations, 
                each carefully sourced and prepared using traditional methods.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onViewProduct={handleViewProduct}
                  onAddToCart={handleAddToCart}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {currentView === 'product-detail' && selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onBack={handleBackToProducts}
          onAddToCart={handleAddToCart}
        />
      )}

      <Footer />
    </div>
  );
}