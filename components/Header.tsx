import { ShoppingCart, Menu, Leaf } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  onNavigateHome: () => void;
  cartItems: number;
}

export function Header({ onNavigateHome, cartItems }: HeaderProps) {
  return (
    <header className="bg-white border-b border-green-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={onNavigateHome}
          >
            <Leaf className="h-8 w-8 text-green-600 mr-2" />
            <span className="text-xl font-semibold text-gray-900">AyurVeda</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Products</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">About</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Benefits</a>
            <a href="#" className="text-gray-700 hover:text-green-600 transition-colors">Contact</a>
          </nav>

          {/* Cart and Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}