'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileToolsOpen, setIsMobileToolsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (isMobileMenuOpen) {
      setIsMobileToolsOpen(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
        setIsMobileToolsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav ref={navRef} className="print:hidden sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
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
          <Link href="/" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">
            Home
          </Link>

          {/* Tools Dropdown Container */}
          <div className="relative group py-2">
            <button className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2 inline-flex items-center gap-1 focus:outline-none">
              Tools ▾
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-1 w-64 rounded-md bg-white border border-slate-100 shadow-lg hidden group-hover:block group-focus-within:block focus-within:block z-50">
              <div className="py-1">
                <Link
                  href="/tools/thermal-receipt-printer-maker"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium"
                >
                  80mm Thermal Receipt
                </Link>
                <Link
                  href="/tools/offline-receipt-generator"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium"
                >
                  Offline Generator
                </Link>
                <Link
                  href="/tools/free-receipt-maker-no-watermark"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium"
                >
                  No Watermark Receipt
                </Link>
                <Link
                  href="/tools/receipt-generator-no-login"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium"
                >
                  No Login Generator
                </Link>
                <Link
                  href="/tools/free-invoice-generator-bangladesh"
                  className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-indigo-600 transition-colors font-medium"
                >
                  Bangladesh (BDT)
                </Link>
              </div>
            </div>
          </div>

          <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">
            About
          </Link>
          <Link href="/privacy" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors px-3 py-2">
            Privacy
          </Link>
          
          <Link
            href="/tool"
            className="ml-2 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-out hover:-translate-y-[2px] hover:shadow-lg hover:shadow-blue-500/20 active:translate-y-[1px] active:shadow-sm"
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
        <div className="md:hidden bg-white border-b border-slate-100 shadow-lg absolute w-full left-0 top-16 flex flex-col items-center py-6 gap-4 z-40 overflow-y-auto max-h-[calc(100dvh-4rem)]">
          <Link href="/" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Home
          </Link>
          
          {/* Mobile Tools Collapsible Menu */}
          <button
            onClick={() => setIsMobileToolsOpen(!isMobileToolsOpen)}
            className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1 focus:outline-none"
          >
            Tools {isMobileToolsOpen ? '▴' : '▾'}
          </button>
          
          {isMobileToolsOpen && (
            <div className="flex flex-col items-center gap-2 w-full bg-slate-50 py-3 border-y border-slate-100 transition-all duration-300">
              <Link href="/tools/thermal-receipt-printer-maker" onClick={toggleMenu} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1">
                80mm Thermal Receipt
              </Link>
              <Link href="/tools/offline-receipt-generator" onClick={toggleMenu} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1">
                Offline Generator
              </Link>
              <Link href="/tools/free-receipt-maker-no-watermark" onClick={toggleMenu} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1">
                No Watermark Receipt
              </Link>
              <Link href="/tools/receipt-generator-no-login" onClick={toggleMenu} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1">
                No Login Generator
              </Link>
              <Link href="/tools/free-invoice-generator-bangladesh" onClick={toggleMenu} className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors py-1">
                Bangladesh (BDT)
              </Link>
            </div>
          )}

          <Link href="/blog" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Blog
          </Link>
          <Link href="/about" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            About
          </Link>
          <Link href="/privacy" onClick={toggleMenu} className="text-base font-semibold text-slate-700 hover:text-blue-600 transition-colors">
            Privacy
          </Link>
          <Link
            href="/tool"
            onClick={toggleMenu}
            className="w-11/12 text-center rounded-md bg-indigo-600 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-200 ease-out active:scale-95"
          >
           Generate Receipts
          </Link>
        </div>
      )}
    </nav>
  );
}
