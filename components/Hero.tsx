"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [format, setFormat] = useState<'A4' | 'POS'>('A4');

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Column (Copy) */}
        <div className="flex flex-col items-start text-left max-w-2xl">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-semibold tracking-wide border border-blue-300 mb-6">
            100% Free • No Login Required
          </div>
          <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.1]">
            Instantly Build Free Thermal Receipts & Invoice with Live Preview
          </h1>
          <p className="mt-6 text-lg text-slate-500 leading-relaxed">
            A truly free receipt maker with no watermark. Instantly generate professional A4 invoices and 80mm thermal receipts. Enjoy a real-time live preview with absolutely no login required.
          </p>
          <div className="mt-8 flex items-center">
            <Link
              href="/tool"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-8 py-3.5 rounded-lg shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              Generate Receipts Now
            </Link>
          </div>
        </div>

        {/* Right Column (High-Fidelity Showcase) */}
        <div className="relative w-full min-h-[500px] flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border border-slate-200 p-8 shadow-inner">
          <div className="relative z-10 w-full flex flex-col items-center h-full">
            {/* Animated Toggle */}
            <div className="flex bg-slate-200/50 p-1 rounded-full shadow-inner mb-8 border border-slate-200/50">
              <button
                onClick={() => setFormat('A4')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  format === 'A4'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                Standard A4
              </button>
              <button
                onClick={() => setFormat('POS')}
                className={`px-6 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  format === 'POS'
                    ? 'bg-white shadow-sm text-blue-600'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                80mm POS
              </button>
            </div>

            {/* Document Graphic */}
            <div className="relative flex-1 w-full flex justify-center items-center">
              <div
                className={`transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] bg-white overflow-hidden flex flex-col mx-auto ${
                  format === 'A4'
                    ? 'w-[80%] aspect-[1/1.4] rounded-lg shadow-2xl shadow-slate-200/50 border border-slate-100 p-6'
                    : 'w-[250px] h-[400px] rounded-t-lg rounded-b-none border-t border-l border-r border-b-4 border-dashed border-slate-300 p-5 shadow-xl'
                }`}
              >
                {format === 'A4' ? (
                  // High-Fidelity A4 Layout Simulation
                  <div className="flex-1 flex flex-col opacity-100 transition-opacity duration-500">
                    {/* Header Area */}
                    <div className="flex justify-between items-start mb-8">
                      <div className="w-12 h-12 bg-blue-600/20 rounded"></div>
                      <div className="flex flex-col items-end">
                        <div className="w-24 h-4 bg-slate-300 rounded"></div>
                        <div className="w-32 h-3 bg-slate-200 rounded mt-2"></div>
                      </div>
                    </div>
                    
                    {/* Billing Area */}
                    <div className="flex justify-between items-end mb-8">
                      <div className="flex flex-col gap-2 w-1/2">
                        <div className="w-12 h-2 bg-slate-300 rounded-sm mb-1"></div>
                        <div className="w-32 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-24 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-28 h-2 bg-slate-200 rounded-sm"></div>
                      </div>
                      <div className="flex flex-col items-end gap-2 w-1/2">
                        <div className="w-12 h-2 bg-slate-300 rounded-sm mb-1"></div>
                        <div className="w-28 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-32 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-20 h-2 bg-slate-200 rounded-sm"></div>
                      </div>
                    </div>

                    {/* Table Area */}
                    <div className="w-full flex items-center bg-slate-50 h-8 mb-4 px-2 rounded-sm border border-slate-100">
                      <div className="w-1/2 h-2 bg-slate-300 rounded-sm"></div>
                      <div className="w-1/6 h-2 bg-slate-300 rounded-sm ml-auto"></div>
                      <div className="w-1/6 h-2 bg-slate-300 rounded-sm ml-4"></div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mb-3 px-2">
                      <div className="col-span-2 h-2 bg-slate-200 rounded-sm"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-3 px-2">
                      <div className="col-span-2 h-2 bg-slate-200 rounded-sm w-4/5"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                    </div>
                    <div className="grid grid-cols-4 gap-4 mb-6 px-2">
                      <div className="col-span-2 h-2 bg-slate-200 rounded-sm"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                      <div className="col-span-1 h-2 bg-slate-200 rounded-sm ml-auto w-12"></div>
                    </div>
                    
                    {/* Totals Area */}
                    <div className="mt-auto flex flex-col items-end gap-3 border-t border-slate-100 pt-6">
                      <div className="w-40 flex justify-between">
                        <div className="w-16 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-16 h-2 bg-slate-300 rounded-sm"></div>
                      </div>
                      <div className="w-40 flex justify-between">
                        <div className="w-10 h-2 bg-slate-200 rounded-sm"></div>
                        <div className="w-12 h-2 bg-slate-300 rounded-sm"></div>
                      </div>
                      <div className="w-48 flex justify-between items-center mt-2 border-t border-slate-100 pt-3">
                        <div className="w-12 h-3 bg-slate-300 rounded-sm"></div>
                        <div className="w-20 h-4 bg-slate-400 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                ) : (
                  // High-Fidelity POS Layout Simulation
                  <div className="flex-1 flex flex-col items-center text-center opacity-100 transition-opacity duration-500">
                    <div className="w-10 h-10 bg-slate-800 rounded-lg mb-4"></div>
                    <div className="w-32 h-3 bg-slate-800 rounded-sm mb-2"></div>
                    <div className="w-20 h-2 bg-slate-400 rounded-sm mb-1.5"></div>
                    <div className="w-24 h-2 bg-slate-400 rounded-sm mb-6"></div>
                    
                    <div className="w-full border-t border-dashed border-slate-300 my-4"></div>
                    
                    {/* Centered Line Items */}
                    <div className="w-full flex flex-col gap-3 mb-6">
                      <div className="flex justify-between items-center w-full">
                        <div className="w-20 h-2 bg-slate-600 rounded-sm"></div>
                        <div className="w-10 h-2 bg-slate-600 rounded-sm"></div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="w-16 h-2 bg-slate-600 rounded-sm"></div>
                        <div className="w-10 h-2 bg-slate-600 rounded-sm"></div>
                      </div>
                      <div className="flex justify-between items-center w-full">
                        <div className="w-24 h-2 bg-slate-600 rounded-sm"></div>
                        <div className="w-10 h-2 bg-slate-600 rounded-sm"></div>
                      </div>
                    </div>

                    <div className="w-full border-t border-dashed border-slate-300 my-4"></div>
                    
                    {/* Prominent Centered Total */}
                    <div className="w-full flex flex-col items-center mb-6">
                      <div className="w-12 h-2 bg-slate-400 rounded-sm mb-2"></div>
                      <div className="w-24 h-5 bg-slate-800 rounded-sm"></div>
                    </div>

                    {/* Centered Barcode */}
                    <div className="mt-auto flex justify-center items-end gap-1 w-full h-8">
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-2 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-3 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-2 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-2 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                      <div className="w-1 h-full bg-slate-800 rounded-sm"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
