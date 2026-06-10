'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="print:hidden sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-3">
            <rect x="4" y="4" width="16" height="20" rx="2" fill="#1D4ED8" fillOpacity="0.1" stroke="#1D4ED8" strokeWidth="2"/>
            <path d="M9 14L12 17L19 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M8 8H16" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold tracking-tight text-slate-900">FreeReceipt</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-4 py-2">
            Home
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-4 py-2">
            About
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-4 py-2">
            Privacy
          </Link>
          <Link
            href="/tool"
            className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-[1px] active:shadow-sm"
          >
            Generate Receipts
          </Link>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={toggleMenu}
            className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full left-0 top-16 flex flex-col items-center py-4 gap-4 z-40">
          <Link href="/" onClick={toggleMenu} className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/privacy" onClick={toggleMenu} className="text-base font-medium text-slate-600 hover:text-blue-600 transition-colors">
            Privacy
          </Link>
          <Link
            href="/tool"
            onClick={toggleMenu}
            className="rounded-md bg-indigo-600 px-6 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-out active:scale-95"
          >
           Generate Receipts
          </Link>
        </div>
      )}
    </nav>
  );
}
