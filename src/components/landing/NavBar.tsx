'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Info,
  Tag,
  Menu,
  X,
  ChefHat,
  MessageCircle,
  Home,
  Loader2,
} from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const handleGoogleSignIn = async () => {
    try {
      setIsSigningIn(true);
      await signIn('google', { callbackUrl: '/' });
    } finally {
      setIsSigningIn(false); // fallback if no redirect
    }
  };

  const centerLinks = [
    { title: 'Home', path: '/', icon: <Home size={18} /> },
    { title: 'About', path: '/about', icon: <Info size={18} /> },
    { title: 'Pricing', path: '/pricing', icon: <Tag size={18} /> },
    { title: 'Contact', path: '/contact', icon: <MessageCircle size={18} /> },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md text-green-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <ChefHat className="h-8 w-8 text-green-800" />
            <span className="font-bold text-xl tracking-tight">HealthyPlate</span>
          </Link>

          {/* Center Nav (desktop) */}
          <div className="hidden lg:flex space-x-6 mx-auto">
            {centerLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`flex items-center space-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${pathname === link.path
                  ? 'bg-green-700 text-white'
                  : 'hover:bg-green-100 hover:text-green-900'
                  }`}
              >
                {link.icon}
                <span>{link.title}</span>
              </Link>
            ))}
          </div>

          {/* Right buttons */}
          <div className="hidden lg:flex space-x-3">
            <button
              onClick={handleGoogleSignIn}
              disabled={isSigningIn}
              className="bg-white border border-green-700 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-100 transition flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSigningIn ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                <FcGoogle className="text-xl" />
              )}
              {isSigningIn ? 'Signing in...' : 'Sign In with Google'}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="cursor-pointer p-2 rounded-md hover:bg-green-700 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden bg-white px-4 pt-4 pb-6 shadow-md space-y-3">
          {centerLinks.map((link) => (
            <Link
              key={link.path}
              href={link.path}
              onClick={closeMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium flex items-center space-x-2 ${pathname === link.path
                ? 'bg-green-700 text-white'
                : 'hover:bg-green-100 text-green-800'
                }`}
            >
              {link.icon}
              <span>{link.title}</span>
            </Link>
          ))}

          <div className="flex flex-col space-y-2 pt-4">
            <button
              onClick={() => {
                closeMenu();
                handleGoogleSignIn();
              }}
              disabled={isSigningIn}
              className="cursor-pointer bg-white border border-green-700 text-green-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-green-100 flex items-center gap-2 justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSigningIn ? (
                <Loader2 className="animate-spin h-4 w-4" />
              ) : (
                <FcGoogle className="text-xl" />
              )}
              {isSigningIn ? 'Signing in...' : 'Sign In with Google'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
