// app/tools/free-receipt-maker-no-watermark/page.tsx
import type { Metadata } from 'next';
import ToolInterface from '@/components/tool/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Free Receipt Maker No Watermark - Unlimited Downloads | FreeReceipt',
  description: 'Create professional receipts instantly with our free receipt maker no watermark. No signup required, clean receipt PDF download, 100% free.',
  alternates: {
    canonical: 'https://freereceipt.dev/tools/free-receipt-maker-no-watermark',
  },
  openGraph: {
    title: 'Free Receipt Maker — No Watermark, No Signup',
    description: 'Generate clean, unbranded receipts in your browser. Free PDF download, no signups, no limits.',
    type: 'website',
    url: 'https://freereceipt.dev/tools/free-receipt-maker-no-watermark',
  }
};

export default function FreeReceiptMakerNoWatermark() {
  const faqItems = [
    {
      question: "Is this receipt maker really free with no watermark?",
      answer: "Yes. We never add our logo, URL, or any branding to your downloaded PDF. The document is 100% yours."
    },
    {
      question: "Do I need to create an account?",
      answer: "No account, no email, no password required. Ever. Open the page and start generating."
    },
    {
      question: "Can I use these receipts for real business transactions?",
      answer: "Yes. The receipts include all standard fields: business name, address, tax ID, line items, tax, and totals — everything needed for legitimate business documentation."
    }
  ];

  return (
    <main className="flex flex-col w-full bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Free Receipt Maker No Watermark",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Browser, Windows, Linux, macOS, Android, iOS",
            "featureList": [
              "No watermarks",
              "No signup required",
              "Unlimited free downloads",
              "Browser-local privacy"
            ]
          })
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
            }))
          })
        }}
      />

      {/* Hero Section */}
      <section className="print:hidden w-full bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm leading-tight">
            Free Receipt Maker — No Watermark, No Signup, No Limits
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed">
            Create professional, clean receipts and invoices in seconds. Download unbranded PDFs instantly without registration or fees.
          </p>

          {/* 3-Card Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 text-left px-4">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Zero Branding</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Your downloaded PDF contains only YOUR business info, not ours. Keep your professional records clean and unbranded.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">No Account Wall</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Open the page, fill in the details, and download. No email, no password, and no complicated onboarding flows.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Unlimited Downloads</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate as many receipts and invoices as you need. Absolutely free forever, without any hidden subscription plans or restrictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Tool */}
      <section className="w-full">
        <ToolInterface />
      </section>

      {/* SEO Body Section */}
      <section className="print:hidden w-full bg-white py-16 border-t border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Clean, Unbranded PDF Receipts Instantly</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            If you are tired of using online receipt makers that print ugly watermarks or force you to sign up for an account just to download a copy, you have found the perfect solution. Our professional <strong className="font-semibold text-slate-800">free receipt maker no watermark</strong> generator provides a <strong className="font-semibold text-slate-800">clean receipt PDF download</strong> containing only your own business data and logo. We built this <strong className="font-semibold text-slate-800">receipt maker no signup</strong> tool because we believe that essential billing utilities should be fast, private, and accessible to everyone without friction. With this <strong className="font-semibold text-slate-800">receipt generator no branding</strong>, you can instantly input items, calculate taxes, set discounts, and generate official documentation directly on your local device. Small business owners, freelancers, and contractors trust our browser-based utility for their daily billing needs because it saves time, costs absolutely nothing, and respects data privacy by storing all input securely in the browser&apos;s localStorage.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="print:hidden w-full bg-white py-16 border-b border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </main>
  );
}
