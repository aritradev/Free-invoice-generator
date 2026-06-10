// app/tools/thermal-receipt-printer-maker/page.tsx
import type { Metadata } from 'next';
import ReceiptEditor from '@/components/tool/ToolInterface';
import FaqAccordion from '@/components/FaqAccordion';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Free 80mm POS Receipt Maker & Templates | FreeReceipt',
    description: 'Free ESC/POS receipt generator optimized for thermal printers. Create pixel-perfect 80mm POS receipts instantly in your browser.',
    alternates: {
      canonical: 'https://freereceipt.net/tools/thermal-receipt-printer-maker',
    },
    openGraph: {
      title: 'Free 80mm Thermal Printer Receipt Maker',
      description: 'Generate ESC/POS compatible 80mm receipts without format nightmares.',
      type: 'website',
    }
  };
}

export default function ThermalReceiptMaker() {
  const faqItems = [
    {
      question: "How do I print an 80mm receipt from a browser?",
      answer: "Our generator uses optimized CSS print media queries — specifically @page { size: 80mm auto; margin: 0; } — to format output perfectly for ESC/POS thermal printers. Select the 80mm POS Receipt format in the editor, then hit Download PDF."
    },
    {
      question: "Does this work with any thermal receipt printer brand?",
      answer: "Yes. The output is plain HTML/CSS rendered by your browser's print engine, so it works with any thermal printer your OS recognizes — Epson, Star Micronics, Bixolon, SNBC, and generic 80mm USB/Bluetooth printers."
    },
    {
      question: "Why does my receipt show the browser URL at the top when I print?",
      answer: "This happens when browser margins are not zeroed out. Our tool automatically injects @page { margin: 0; } in print mode, which removes the browser header and footer. Make sure you are using the Download PDF button in our tool, not the browser's own Ctrl+P shortcut on a different page."
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
            "name": "Free 80mm POS Receipt Maker",
            "applicationCategory": "BusinessApplication",
            "operatingSystem": "Browser, Windows, Android, iOS",
            "featureList": [
              "ESC/POS compatibility",
              "Thermal printer optimization",
              "80mm layouts"
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

      {/* Premium Hero Section */}
      <section className="print:hidden w-full bg-gradient-to-b from-slate-50 to-white py-16 lg:py-24 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 drop-shadow-sm">
            Free 80mm POS Receipt Maker
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-600 mt-4 leading-relaxed">
            Generate professional, ESC/POS compatible receipts directly in your browser. Optimized perfectly for standard 80mm thermal printers with zero margin cut-offs.
          </p>

          {/* Premium Feature Grid */}
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16 text-left">
            
            {/* Card 1 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-indigo-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-100 transition-colors">
                <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">ESC/POS Ready</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Outputs raw, print-ready HTML/CSS optimized directly for standard thermal spoolers. No driver conflicts.</p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-emerald-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-emerald-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-100 transition-colors">
                <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">Zero Margin Errors</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Aggressive <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs font-mono text-emerald-700">@page {"{"} margin: 0; {"}"}</code> styling is applied automatically to prevent annoying browser URL artifacts on your paper.</p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-200 shadow-sm rounded-xl p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300 group">
              <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-2">100% Browser Native</h2>
              <p className="text-slate-600 text-sm leading-relaxed">Everything runs locally. Hit print, and it cuts perfectly. No cloud syncing, no accounts required.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Embedded Tool */}
      <section className="w-full">
        <ReceiptEditor />
      </section>

      {/* SEO Content Section */}
      <section className="w-full bg-white py-16 border-t border-b border-slate-100 print:hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Why Use Our Tool?</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Stop fighting with margins. If you need a reliable <strong className="font-semibold text-slate-800">80mm thermal receipt generator</strong>, our tool formats the CSS perfectly so you can <strong className="font-semibold text-slate-800">print thermal receipt from browser</strong> directly to your hardware. We built the most consistent <strong className="font-semibold text-slate-800">free pos receipt maker</strong> on the web with zero layout issues.
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
