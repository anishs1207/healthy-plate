'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';

interface NavLinkProps {
  to: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

export const NavLink: React.FC<NavLinkProps> = ({ to, icon, children, onClick }) => {
  const pathname = usePathname();
  const router = useRouter();

  const isActive = pathname === to || (to === '/' && pathname === '');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    if (onClick) onClick();
    router.push(to);
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${isActive
        ? 'bg-emerald-50 text-emerald-600'
        : 'text-gray-700 hover:bg-gray-100'
        }`}
    >
      <span className={isActive ? 'text-emerald-500' : 'text-gray-500'}>
        {icon}
      </span>
      <span className="text-sm font-medium">{children}</span>

      {isActive && (
        <span className="ml-auto h-2 w-2 rounded-full bg-emerald-500" />
      )}
    </a>
  );
};
