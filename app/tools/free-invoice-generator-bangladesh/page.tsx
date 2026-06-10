// app/tools/free-invoice-generator-bangladesh/page.tsx
import type { Metadata } from 'next';
import ToolInterface from '@/components/tool/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';

export const metadata: Metadata = {
  title: 'Free Invoice Generator Bangladesh (BDT) - No Login | FreeReceipt',
  description: 'Create professional BDT invoices and receipts with our free invoice generator Bangladesh. No login, perfect for Bangladeshi freelancers, BDT ৳ support.',
  alternates: {
    canonical: 'https://freereceipt.dev/tools/free-invoice-generator-bangladesh',
  },
  openGraph: {
    title: 'Free Invoice & Receipt Generator for Bangladesh (BDT)',
    description: 'Instant invoices for Bangladeshi freelancers. Supports BDT (৳) and USD/EUR. No signup, no fees, completely private.',
    type: 'website',
    url: 'https://freereceipt.dev/tools/free-invoice-generator-bangladesh',
  }
};

export default function FreeInvoiceGeneratorBangladesh() {
  const faqItems = [
    {
      question: "Does this support Bangladeshi Taka (BDT)?",
      answer: "Yes. Select BDT from the currency dropdown and amounts will display with the ৳ symbol using proper locale formatting."
    },
    {
      question: "Is this suitable for Bangladeshi freelancers billing international clients?",
      answer: "Absolutely. You can switch between BDT for local clients and USD/EUR for international clients on the same tool with one click."
    },
    {
      question: "Do I need to pay anything to use this in Bangladesh?",
      answer: "No. The tool is 100% free with no hidden charges, no subscription, and no premium tier."
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
            "name": "Free Invoice Generator Bangladesh",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Browser, Windows, Linux, macOS, Android, iOS",
            "featureList": [
              "BDT Currency Support",
              "No login required",
              "Freelancer-ready invoicing",
              "Privacy-first local processing"
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
            Free Invoice & Receipt Generator for Bangladesh — BDT Currency, No Login
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed">
            Create professional invoices in Bangladeshi Taka (৳) and other currencies instantly. Designed specifically for Bangladeshi freelancers and small business owners.
          </p>

          {/* 3-Card Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12 text-left px-4">
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                <span className="text-xl font-bold text-indigo-600">৳</span>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">BDT Currency Support</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generate invoices in Bangladeshi Taka (৳) with correct number formatting. Easily switch between BDT and other currencies like USD or EUR.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">No Subscription Fees</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Unlike global billing services that lock PDF exports behind a monthly subscription fee, our tool is 100% free and unlimited.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Freelancer Ready</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Perfect for Bangladeshi freelancers billing international clients in USD, EUR, or GBP, as well as local clients in BDT.
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
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Designed for Freelance Developers, Designers, and Agencies in Bangladesh</h2>
          <p className="text-lg text-slate-600 leading-relaxed font-sans">
            For <strong className="font-semibold text-slate-800">Bangali freelancers</strong>, remote contractors, and small business owners, finding a secure and <strong className="font-semibold text-slate-800">free invoice generator Bangladesh</strong> platform can be a challenge. Most global invoicing platforms either do not support the local currency (BDT ৳), require monthly subscription fees, or mandate accounts that upload sensitive customer and tax data to the cloud. Our dedicated <strong className="font-semibold text-slate-800">free invoice maker BDT</strong> utility addresses this gap by offering localized, browser-based billing. It works as an <strong className="font-semibold text-slate-800">invoice generator Bangladesh no signup</strong> tool, permitting you to produce professional VAT/Tax documentation, invoice foreign clients in USD/EUR/GBP, or bill local companies using BDT with proper number format standards. As a <strong className="font-semibold text-slate-800">BDT receipt generator</strong> built for the <strong className="font-semibold text-slate-800">Bangladeshi freelancer invoice tool</strong> standard, it ensures no cloud storage of sensitive financial data. All calculations and exports happen locally in your web browser, keeping your operations fully compliant and your financial details 100% secure and confidential.
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
