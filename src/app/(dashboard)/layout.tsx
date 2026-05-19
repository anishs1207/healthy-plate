"use client"

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/dashboard/NavBar';
import { Menu } from 'lucide-react';
import { Toaster } from 'sonner';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-700 text-lg">Checking authentication...</p>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-gray-50">
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="fixed top-4 left-4 z-40 p-2 rounded-md bg-white shadow-md md:hidden"
        aria-label="Toggle menu"
      >
        <Menu size={24} />
      </button>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } md:translate-x-0 transition-transform duration-300 ease-in-out z-30 md:relative md:w-64 lg:w-72 bg-white shadow-lg
  h-screen overflow-hidden`}
      >
        <Navbar userId={session?.user.id} closeMenu={() => setIsMobileMenuOpen(false)} />
      </aside>

      <main className="flex-1 overflow-auto p-4 md:p-6">
        <Toaster />
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>

    </div>
  );
};

export default Layout;