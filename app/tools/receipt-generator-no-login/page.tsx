// app/tools/receipt-generator-no-login/page.tsx
import type { Metadata } from 'next';
import ToolInterface from '@/components/tool/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Receipt Generator No Login - Privacy-First Billing | FreeReceipt',
  description: 'Create invoices and receipts instantly with our receipt generator no login. No registration, no signup, 100% browser-based private billing.',
  alternates: {
    canonical: 'https://freereceipt.dev/tools/receipt-generator-no-login',
  },
  openGraph: {
    title: 'Receipt Generator — No Login, No Signup',
    description: 'Instant, private receipts inside your browser. No registration, no databases, your data stays local.',
    type: 'website',
    url: 'https://freereceipt.dev/tools/receipt-generator-no-login',
  }
};

export default function ReceiptGeneratorNoLogin() {
  const faqItems = [
    {
      question: "Why don't you require a login?",
      answer: "Requiring accounts creates friction and forces us to store your data. We believe billing tools should be instant and private. So we built one."
    },
    {
      question: "Is my business information safe?",
      answer: "Your business details are saved only in your browser's localStorage on your own device. We have zero access to this data. Clearing your browser data removes it permanently."
    },
    {
      question: "Does it work on mobile?",
      answer: "Yes. The tool is fully responsive and works on iPhone, Android, and tablet browsers."
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
            "name": "Receipt Generator No Login",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Browser, Windows, Linux, macOS, Android, iOS",
            "featureList": [
              "No login required",
              "No registration",
              "100% browser local",
              "Offline support"
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
            Receipt Generator — No Login, No Registration, No Data Collected
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed">
            Generate professional billing documents instantly without signups. Keep your invoicing completely private and secure on your own device.
          </p>

          {/* 3-Card Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 text-left px-4">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Open & Use Instantly</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                No signup flow, no email confirmations, and no waiting. Start drafting your receipt immediately upon opening the page.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Your Data Stays Local</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                All details are processed directly in your browser. Nothing is ever sent to a remote database, ensuring total financial privacy.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-3.536 4.978 4.978 0 011.414-3.536m0 0L5.636 5.636m3.536 9.9a5 5 0 011.414-3.536M3 3l18 18" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Works Offline</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Once loaded, the tool runs entirely offline without an active internet connection, so you can invoice clients from anywhere.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Fully Private and Instant Billing</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Our secure <strong className="font-semibold text-slate-800">receipt generator no login</strong> tool is designed for small business owners and freelancers who value their privacy and time. Most online billing services require you to create an account, verify your email, and sign up for subscriptions. This tool functions as a complete <strong className="font-semibold text-slate-800">invoice generator without login</strong>, meaning you can start drafting receipts instantly. Built as a <strong className="font-semibold text-slate-800">no signup receipt tool</strong>, it runs entirely client-side, making it a reliable <strong className="font-semibold text-slate-800">browser receipt maker</strong> that saves all data directly to your local device. Because we do not use databases or remote cloud servers for storing your documents, your financial information remains strictly confidential. Once the page is loaded, you can even use it offline to create, adjust, and download PDF copies of your invoices, providing peace of mind and full control over your billing process without subscription constraints.
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
