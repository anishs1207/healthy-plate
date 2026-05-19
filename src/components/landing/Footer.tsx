import React from 'react';
import Link from "next/link";
import { ChefHat, Instagram, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8" />
              <span className="font-bold text-xl tracking-tight">HeathlyPlate</span>
            </Link>
            <p className="mt-4 text-sm">
              Create healthy, delicious recipes with AI assistance and expert nutrition guidance.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/anishsab1207/" className="text-green-100 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://x.com/anishs1207" className="text-green-100 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>

              <a href="mailto:anishs1207@gmail.com" className="text-green-100 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><Link href="/recipes" className="hover:text-white transition-colors">Recipe Library</Link></li>
              <li><Link href="/create" className="hover:text-white transition-colors">AI Recipe Creator</Link></li>
              <li><Link href="/nutrition-coach" className="hover:text-white transition-colors">Nutrition Coach</Link></li>
              <li><Link href="/ingredients" className="hover:text-white transition-colors">Ingredient Tracker</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">Nutrition Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Recipe Ideas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cooking Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Seasonal Ingredients</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-green-800 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} HeathlyPlate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;