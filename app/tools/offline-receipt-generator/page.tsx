import type { Metadata } from 'next';
import ReceiptEditor from '@/components/tool/ToolInterface';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Offline Billing Software Without Registration | FreeReceipt',
    description: 'The ultimate no cloud receipt maker. Generate receipts securely via HTML and local storage. No sign-ups, no databases, 100% privacy-first.',
    alternates: {
      canonical: 'https://freereceipt.net/tools/offline-receipt-generator',
    },
    openGraph: {
      title: 'Secure Offline Receipt Generator',
      description: 'Create professional invoices directly in your browser using local storage.',
      type: 'website',
    }
  };
}

export default function OfflineReceiptGenerator() {
  return (
    <main className="flex flex-col w-full bg-white">
      {/* Premium Hero Section */}
      <section className="print:hidden w-full bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            Offline Billing Software Without Registration
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed">
            Generate secure, professional receipts instantly. A 100% no-cloud receipt maker that processes everything locally in your browser to guarantee total financial privacy.
          </p>

          {/* Premium Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12 text-left px-4">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                {/* Shield Icon */}
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Zero Cloud Data Transfer</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Your financial data is sensitive. We never upload your invoices or client details to a remote server. Everything stays strictly on your device.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                {/* Hard Drive Icon */}
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Local Storage Persistence</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Generate receipts securely via HTML and local storage. Refresh the page safely knowing your drafts are saved directly in your browser's memory.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                {/* User-X / No Accounts Icon */}
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7a4 4 0 11-8 0 4 4 0 018 0zM9 14a6 6 0 00-6 6v1h12v-1a6 6 0 00-6-6zM21 12h-6" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">No Accounts Required</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Skip the sign-up forms, paywalls, and tracking scripts. Instantly access a full-featured billing tool without handing over your email address.</p>
            </div>

          </div>
        </div>
      </section>

      {/* SEO Content Section */}
      <section className="w-full bg-white py-16 border-b border-slate-100 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Tired of hidden fees and tracking?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            We built a truly <strong className="font-semibold text-slate-800">free receipt maker no watermark</strong> included. You can <strong className="font-semibold text-slate-800">create receipt without sign up</strong>, making this the fastest, most reliable <strong className="font-semibold text-slate-800">invoice generator without login</strong> on the web. No subscriptions, no hidden limits.
          </p>
        </div>
      </section>

      {/* Embedded Tool */}
      <section className="w-full mt-16">
        <ReceiptEditor />
      </section>
    </main>
  );
}
