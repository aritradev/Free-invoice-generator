import Link from 'next/link';
import { Metadata } from 'next';
import Hero from '@/components/Hero';
import { 
  Globe, 
  Users, 
  Calculator, 
  Hash, 
  HardDrive, 
  Type, 
  FileText, 
  Printer 
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Invoice & POS Receipt Generator | FreeReceipt.net',
  description: 'Create professional A4 PDF invoices and 80mm thermal POS receipts instantly. No login required, 100% free, and your data stays safe in your browser\'s local storage.',
  keywords: ['Free Invoice & POS Receipt Generator', 'free invoice maker', '80mm receipt generator', 'thermal printer receipt template', 'pos invoice tool', 'no login receipt maker'],
};

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-16">
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Free Invoice & POS Receipt Generator",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "All",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "isAccessibleForFree": true,
            "description": "A privacy-focused web utility to generate standard A4 invoices and 80mm POS receipts directly from the browser without an account.",
            "keywords": "Free Invoice & POS Receipt Generator, free invoice maker, 80mm receipt generator, thermal printer receipt template, pos invoice tool, no login receipt maker"
          })
        }}
      />
      
      {/* Interactive Hero Section */}
      <Hero />

      {/* Visual Demo - 3 Columns */}
      <div className="mt-20 w-full max-w-7xl px-4 lg:px-8">
        <div className="group bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-800 transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-900/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
            
            {/* Column 1: Simulated Inputs (lg:col-span-3) */}
            <div className="lg:col-span-3 bg-slate-800 p-6 flex flex-col gap-6 border-r border-slate-700 text-slate-300 text-sm">
              <div className="space-y-2">
                <div className="h-4 w-24 bg-slate-700 rounded mb-4"></div>
                <div className="h-10 w-full bg-slate-700 rounded border border-slate-600 flex items-center px-3 text-white transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50">Acme Design Studio</div>
                <div className="h-16 w-full bg-slate-700 rounded border border-slate-600 p-3 transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50">123 Creative Blvd<br/>New York, NY 10001</div>
              </div>
              <div className="space-y-2 pt-4 border-t border-slate-700">
                <div className="h-4 w-32 bg-slate-700 rounded mb-4"></div>
                <div className="h-10 w-full bg-slate-700 rounded border border-slate-600 flex items-center px-3 text-white transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50">Tech Startup Inc.</div>
                <div className="h-10 w-full bg-slate-700 rounded border border-slate-600 flex items-center px-3 transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50">billing@techstartup.com</div>
              </div>
              <div className="space-y-2 pt-4 border-t border-slate-700">
                <div className="flex gap-2">
                  <div className="h-10 w-full bg-slate-700 rounded border border-slate-600/0 flex items-center justify-between px-3 transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50"><span>Tax</span><span>$131.00</span></div>
                  <div className="h-10 w-full bg-slate-700 rounded border border-slate-600/0 flex items-center justify-between px-3 transition-colors duration-500 group-hover:border-slate-600/80 group-hover:bg-slate-800/50"><span>Discount</span><span>$0</span></div>
                </div>
              </div>
            </div>

            {/* Column 2: Live A4 Preview (lg:col-span-6) */}
            <div className="lg:col-span-6 relative w-full h-full flex items-center justify-center bg-slate-50 p-8 overflow-hidden">
              {/* Center A4 Invoice */}
              <div className="w-full max-w-[500px] border border-slate-200 bg-white p-8 text-slate-900 font-sans shadow-xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.02] group-hover:-translate-y-2 group-hover:shadow-2xl">
                <div className="flex justify-between items-start mb-8 border-b-2 border-slate-800 pb-4">
                  <div>
                    <div className="w-12 h-12 bg-indigo-600 rounded flex items-center justify-center text-white font-bold text-xl mb-2">A</div>
                    <h2 className="font-bold text-xl">Acme Design Studio</h2>
                    <p className="text-xs text-slate-500">123 Creative Blvd<br/>New York, NY 10001</p>
                  </div>
                  <div className="text-right">
                    <h1 className="text-3xl font-black text-slate-300 uppercase">Invoice</h1>
                    <p className="font-bold text-slate-900 mt-1">INV-0142</p>
                    <p className="text-xs text-slate-500">Date: Oct 24, 2026</p>
                  </div>
                </div>

                <table className="w-full text-sm mb-8">
                  <thead>
                    <tr className="border-b border-slate-300 text-left">
                      <th className="py-2">Description</th>
                      <th className="py-2 text-right">Qty</th>
                      <th className="py-2 text-right">Rate</th>
                      <th className="py-2 text-right">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Website Redesign</td>
                      <td className="py-3 text-right">1</td>
                      <td className="py-3 text-right">$2,500.00</td>
                      <td className="py-3 text-right font-medium">$2,500.00</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">SEO Optimization</td>
                      <td className="py-3 text-right">1</td>
                      <td className="py-3 text-right">$800.00</td>
                      <td className="py-3 text-right font-medium">$800.00</td>
                    </tr>
                    <tr className="border-b border-slate-100">
                      <td className="py-3">Logo Branding</td>
                      <td className="py-3 text-right">1</td>
                      <td className="py-3 text-right">$200.00</td>
                      <td className="py-3 text-right font-medium">$200.00</td>
                    </tr>
                  </tbody>
                </table>

                <div className="flex justify-end text-sm">
                  <div className="w-48">
                    <div className="flex justify-between py-1"><span>Subtotal</span><span>$3,500.00</span></div>
                    <div className="flex justify-between py-1"><span>Tax</span><span>$131.00</span></div>
                    <div className="flex justify-between py-2 mt-2 border-t-2 border-slate-800 text-lg font-bold">
                      <span>Total</span><span>$3,631.00</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Column 3: Contextual Help (lg:col-span-3) */}
            <div className="lg:col-span-3 bg-slate-900 p-8 flex flex-col justify-center border-l border-slate-800">
              <h3 className="text-xl font-bold text-white mb-4">Instant Visual Feedback</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                As you type in the editor on the left, the document on the right updates instantly. No saving, no loading screens.
              </p>
              <h3 className="text-xl font-bold text-white mb-4">Math Engine Built-in</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                Add your items and specify your tax and discount rates. Our math engine strictly calculates the subtotal, deducts discounts, applies taxes to the taxable amount, and renders the grand total automatically.
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Core Features Grid */}
      <div className="mt-32 max-w-7xl px-6 lg:px-8 w-full">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Professional Grade Features
            </h2>
            <p className="mt-4 text-lg text-slate-600">Everything you need, running privately in your browser.</p>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            
            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Globe className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Multiple Currencies</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Support for USD, EUR, GBP, BDT, INR, AUD, CAD, formatting intelligently via Intl API.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Users className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Client Management</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Easily input and layout client billing information perfectly aligned for standard window envelopes.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Calculator className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Dynamic Calculations</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Fixed or percentage discounts applied strictly before tax logic to keep your accounting compliant.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Hash className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Auto Numbering</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Generates padded incremental IDs (e.g., INV-0001) that increment seamlessly on new document creation.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <HardDrive className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Compressed Local Storage</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                No server dependencies. Logos are compressed locally via HTML Canvas to prevent storage quota limits.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Type className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Clean Typography</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Modern, professional sans-serif fonts with distinct hierarchies that elevate your brand's aesthetics.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <FileText className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">A4 & POS Formats</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                Dual layouts support standard A4 PDF invoices or 80mm thermal receipts for retail environments.
              </dd>
            </div>

            <div className="flex flex-col">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100">
                <Printer className="h-6 w-6 text-indigo-600" />
              </div>
              <dt className="text-lg font-semibold leading-7 text-slate-900">Vector-based PDF</dt>
              <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                We use native browser print capabilities to generate perfectly crisp, selectable text PDFs, never blurry images.
              </dd>
            </div>

          </dl>
        </div>
      </div>

      {/* POS SEO Section */}
      <div className="mt-32 max-w-7xl px-6 lg:px-8 w-full mx-auto bg-indigo-50 rounded-3xl p-8 lg:p-12 border border-indigo-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">
              Built for Retail: 80mm Thermal POS Printing
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Running a cafe, pop-up shop, or retail store? Most invoice makers force you to print on massive A4 paper. Our generator features a dedicated <strong className="font-semibold text-slate-900">80mm POS Receipt Mode</strong>. Just flip the toggle, and your receipt instantly reformats to the perfect width for standard thermal printers. Hit print, and it cuts perfectly—no margins, no wasted paper, no account required.
            </p>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 w-full max-w-[300px] flex flex-col items-center">
              <div className="w-16 h-16 bg-slate-100 rounded-full mb-4 flex items-center justify-center">
                <Printer className="h-8 w-8 text-slate-400" />
              </div>
              <div className="w-full h-2 bg-slate-100 rounded mb-3"></div>
              <div className="w-3/4 h-2 bg-slate-100 rounded mb-6"></div>
              <div className="w-full border-t border-dashed border-slate-300 mb-4"></div>
              <div className="w-full flex justify-between mb-2"><div className="w-12 h-2 bg-slate-100 rounded"></div><div className="w-8 h-2 bg-slate-100 rounded"></div></div>
              <div className="w-full flex justify-between mb-4"><div className="w-16 h-2 bg-slate-100 rounded"></div><div className="w-8 h-2 bg-slate-100 rounded"></div></div>
              <div className="w-full border-t border-slate-900 pt-2 flex justify-between"><div className="w-12 h-3 bg-slate-200 rounded"></div><div className="w-10 h-3 bg-slate-200 rounded"></div></div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-32 max-w-3xl px-6 lg:px-8 w-full mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="group bg-white rounded-lg shadow-sm border border-slate-200 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 p-6">
              Do I need to create an account?
              <span className="ml-4 flex-shrink-0 text-indigo-600 group-open:-rotate-180 transition-transform duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600">
              No. Our tool is 100% free and requires no login or email to generate invoices.
            </div>
          </details>

          <details className="group bg-white rounded-lg shadow-sm border border-slate-200 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 p-6">
              Where is my business data saved?
              <span className="ml-4 flex-shrink-0 text-indigo-600 group-open:-rotate-180 transition-transform duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600">
              For your privacy, we don't use databases. Your company logo and address are saved strictly in your own browser's local storage.
            </div>
          </details>

          <details className="group bg-white rounded-lg shadow-sm border border-slate-200 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 p-6">
              Can I print to an 80mm thermal receipt printer?
              <span className="ml-4 flex-shrink-0 text-indigo-600 group-open:-rotate-180 transition-transform duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600">
              Yes. You can toggle between standard A4 document sizes and 80mm POS receipt formats perfectly formatted for thermal printers.
            </div>
          </details>

          <details className="group bg-white rounded-lg shadow-sm border border-slate-200 open:shadow-md transition-all">
            <summary className="flex cursor-pointer items-center justify-between font-semibold text-slate-900 p-6">
              Does it support my local currency?
              <span className="ml-4 flex-shrink-0 text-indigo-600 group-open:-rotate-180 transition-transform duration-200">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </summary>
            <div className="px-6 pb-6 text-slate-600">
              Yes, the generator supports all standard global currencies and automatically formats the math to your local standard.
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
