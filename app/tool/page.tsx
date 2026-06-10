import { Metadata } from 'next';
import ToolInterface from '@/components/tool/ToolInterface';

export const metadata: Metadata = {
  title: 'Free Invoice & POS Receipt Generator Tool',
  description: 'Create your A4 invoices and 80mm POS receipts instantly in the browser.',
  alternates: {
    canonical: 'https://freereceipt.dev/tool',
  },
  openGraph: {
    title: 'Free Invoice & POS Receipt Generator — Live Preview',
    description: 'Generate A4 invoices and 80mm thermal receipts in real time. No login, no watermarks, completely private.',
    type: 'website',
    url: 'https://freereceipt.dev/tool',
  }
};

export default function ToolPage() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* Intro Landing Section for SEO */}
      <section className="print:hidden w-full bg-slate-50 border-b border-slate-100 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-4">
            Free Invoice & Receipt Generator — Live Preview, No Login
          </h1>
          <p className="max-w-3xl mx-auto text-base text-slate-600 leading-relaxed mb-8">
            Welcome to the ultimate free invoice and receipt generator, built to run entirely inside your web browser. This utility helps you produce professional A4 invoices and 80mm POS thermal printer receipts with a real-time live preview. The tool supports multiple global currencies—including USD, EUR, GBP, BDT, INR, AUD, and CAD—to suit your business needs. You can easily add line items with auto-calculated tax percentages and discount values, upload your company logo, and download unbranded PDF files. Best of all, no signup or registration is ever required. Because we respect your financial privacy, all drafted invoice details are stored locally on your device using browser local storage, meaning your sensitive customer data is never uploaded to any remote servers.
          </p>
          
          {/* 3-Column Feature List */}
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto text-left">
            <li className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs flex items-center space-x-3">
              <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">A4 & 80mm POS Formats</span>
            </li>
            <li className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs flex items-center space-x-3">
              <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">7 Currencies Supported</span>
            </li>
            <li className="bg-white border border-slate-200 rounded-lg p-4 shadow-xs flex items-center space-x-3">
              <svg className="w-5 h-5 text-indigo-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold text-slate-800">100% Browser-Based Privacy</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Embedded Tool */}
      <ToolInterface />
    </main>
  );
}
