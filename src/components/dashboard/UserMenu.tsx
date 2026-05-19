"use client";

import React, { useState } from 'react';
import { LogOut } from 'lucide-react';
import { signOut, useSession } from "next-auth/react";

export const UserMenu: React.FC = () => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const { data: session, status } = useSession();

  if (status === 'loading') return null;
  if (!session?.user) return null;

  const handleLogout = () => {
    setIsLoggingOut(true);
    signOut();
  };

  return (
    <div className="relative group flex flex-col items-center mt-2">
      <button className="flex items-center gap-3 p-2 rounded-lg dark:hover:bg-gray-800">
        <img
          src={session?.user.image ?? undefined}
          alt={session.user.name ?? ''}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="text-left">
          <p className="text-sm font-medium dark:text-white">{session.user.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{session.user.email}</p>
        </div>
      </button>

      <button
        onClick={handleLogout}
        disabled={isLoggingOut}
        className="w-full text-center cursor-pointer m-3 flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700 transition-colors text-sm font-medium shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <LogOut size={16} />
        {isLoggingOut ? "Logging out..." : "Logout"}
      </button>
    </div>
  );
};
