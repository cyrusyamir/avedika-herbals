import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Star, ArrowLeft, ShoppingCart, Heart, Share2, CheckCircle, AlertTriangle } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Product } from "./ProductCard";

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetail({ product, onBack, onAddToCart }: ProductDetailProps) {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back Button */}
      <Button 
        variant="ghost" 
        onClick={onBack}
        className="mb-6 hover:bg-green-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full rounded-lg shadow-lg"
            />
            {discount > 0 && (
              <Badge className="absolute top-4 left-4 bg-red-500 hover:bg-red-600 text-lg px-3 py-1">
                {discount}% OFF
              </Badge>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <Badge 
              variant="secondary" 
              className="mb-2 bg-green-100 text-green-800"
            >
              {product.category}
            </Badge>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "text-yellow-400 fill-current"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>

            <div className="flex items-center space-x-3 mb-6">
              <span className="text-3xl font-bold text-green-600">
                ₹{product.price}
              </span>
              {product.originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.originalPrice}
                </span>
              )}
              {discount > 0 && (
                <span className="text-green-600 font-semibold">
                  Save ₹{product.originalPrice! - product.price}
                </span>
              )}
            </div>

            <p className="text-gray-700 text-lg mb-6">{product.description}</p>

            {/* Benefits */}
            <div className="mb-6">
              <h3 className="font-semibold mb-3">Key Benefits:</h3>
              <div className="flex flex-wrap gap-2">
                {product.benefits.map((benefit, index) => (
                  <Badge 
                    key={index} 
                    variant="outline"
                    className="border-green-200 text-green-700 px-3 py-1"
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    {benefit}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button 
                size="lg" 
                className="w-full bg-green-600 hover:bg-green-700 text-lg py-6"
                onClick={() => onAddToCart(product)}
              >
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart - ₹{product.price}
              </Button>
              
              <div className="flex space-x-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Wishlist
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Information Tabs */}
      <Tabs defaultValue="benefits" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="benefits">Benefits</TabsTrigger>
          <TabsTrigger value="why">Why Choose</TabsTrigger>
          <TabsTrigger value="how">How to Use</TabsTrigger>
          <TabsTrigger value="what">What's Inside</TabsTrigger>
        </TabsList>

        <TabsContent value="benefits" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Health Benefits</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.why}
                </p>
                <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="why" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">Why Choose This Product?</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.why}
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="how" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">How to Use</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">Recommended Dosage:</h4>
                  <p className="text-green-700">{product.dosage}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Instructions:</h4>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {product.how}
                  </p>
                </div>

                {product.warnings.length > 0 && (
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Important Warnings:
                    </h4>
                    <ul className="list-disc list-inside space-y-1">
                      {product.warnings.map((warning, index) => (
                        <li key={index} className="text-yellow-700">{warning}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="what" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-700">What's Inside</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose max-w-none space-y-4">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.what}
                </p>
                
                <div>
                  <h4 className="font-semibold mb-3">Key Ingredients:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {product.ingredients.map((ingredient, index) => (
                      <div key={index} className="flex items-center space-x-2 bg-green-50 p-3 rounded-lg">
                        <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{ingredient}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}