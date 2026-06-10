import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Print an 80mm Thermal Receipt from a Browser (Complete Guide)',
  description: 'Learn the CSS configurations and browser settings to configure 80mm thermal receipt browser print. Avoid cropped margins and unwanted headers.',
  alternates: {
    canonical: 'https://freereceipt.dev/blog/how-to-print-80mm-thermal-receipt-from-browser',
  },
  openGraph: {
    title: 'How to Print an 80mm Thermal Receipt from a Browser',
    description: 'Avoid page cut-offs and browser headers. Configure CSS and print options for perfect 80mm thermal receipts.',
    type: 'article',
    url: 'https://freereceipt.dev/blog/how-to-print-80mm-thermal-receipt-from-browser',
  }
};

export default function HowToPrintThermalReceipt() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Print an 80mm Thermal Receipt from a Browser (Complete Guide)",
    "datePublished": "2025-06-01",
    "author": {
      "@type": "Organization",
      "name": "FreeReceipt"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FreeReceipt",
      "url": "https://freereceipt.dev"
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-2">
            <span>June 1, 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>6 min read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Guides</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            How to Print an 80mm Thermal Receipt from a Browser (Complete Guide)
          </h1>
        </header>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg">
          If you run a retail shop, a café, or a mobile service business, you probably rely on compact thermal receipt printers. However, most online receipt generators output documents in standard A4 or Letter sizes. When you attempt to print these files on an 80mm (or 58mm) thermal receipt printer, the results are often disastrous. The output prints horribly, either scaling down to micro-text, cropping critical margins, wasting valuable paper, or forcing you to perform manual paper cuts. Fortunately, getting clean output from your web browser to a thermal printer is completely achievable with the right combination of print CSS queries and print setup options.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Why Regular PDFs Fail on Thermal Printers
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          To understand why default web page printing fails on thermal hardware, we have to look at how browsers handle print layouts. By default, web browsers assume you are printing onto a standard sheet of paper, such as A4 or US Letter. Consequently, the print subsystem scales content to fit these large, fixed dimensions. Thermal roll printers, on the other hand, operate on continuous rolls of paper. They do not have fixed vertical page bounds. They only have a fixed horizontal width (typically 80mm or 3 inches).
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          When a standard PDF or web page layout is routed to a thermal spooler, the browser applies massive default margins (usually 0.5 to 1 inch). This leaves very little room for text on an 80mm roll. Additionally, the browser automatically appends headers and footers that contain the date, page number, document title, and URL path. On a narrow receipt, these headers squish together and overlap, ruining the professional appearance of your receipt.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          The CSS Fix: @page {'{'} size: 80mm auto; margin: 0; {'}'}
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          To solve this issue programmatically, we can leverage CSS print media queries. CSS allows developers to override the style sheet only when the document is being output to a physical printer or PDF spooler. The core solution involves utilizing the CSS <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">@page</code> selector to explicitly declare a custom width and indicate that the height should automatically fit the content.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Here is the exact CSS code block needed to configure browser printing for an 80mm thermal receipt printer:
        </p>
        <pre className="bg-slate-900 text-slate-100 rounded-lg p-4 overflow-x-auto text-sm my-6">
          <code>{`@media print {
  @page {
    size: 80mm auto;
    margin: 0;
  }
  html, body {
    width: 80mm;
    max-width: 80mm;
    margin: 0;
    padding: 0;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}`}</code>
        </pre>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Let’s dissect how these properties function. Setting <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">size: 80mm auto</code> instructs the browser’s rendering agent that the physical media is exactly 80 millimeters wide and has a fluid, dynamic length that adjusts to the size of the elements. Specifying <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">margin: 0</code> overrides browser-default margins. This serves the dual purpose of maximizing the printable area and completely stripping away the unwanted browser date/URL headers. Finally, forcing <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">print-color-adjust: exact</code> ensures that background shading and logos print in high fidelity instead of being omitted by default energy-saving options.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Step-by-Step: Print from Chrome, Firefox, Edge
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Even with proper CSS, browser configuration settings are essential to secure a perfect print. Here is a step-by-step guide to setting up your print dialogs:
        </p>
        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Google Chrome & Microsoft Edge</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6 text-base">
          <li>Open the receipt and trigger the print dialog (either click the download/print button or press <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">Ctrl + P</code>).</li>
          <li>Set the <strong>Destination</strong> dropdown to your detected thermal receipt printer.</li>
          <li>Click on <strong>More settings</strong> to expand advanced system configurations.</li>
          <li>Locate <strong>Paper size</strong>. Rather than choosing A4, select <strong>80mm roll</strong> or <strong>80mm x Continuous</strong> (depending on your printer driver names).</li>
          <li>Ensure the <strong>Margins</strong> dropdown is set to <strong>Minimum</strong> or <strong>None</strong>.</li>
          <li>Uncheck the box that says <strong>Headers and footers</strong>.</li>
          <li>Click <strong>Print</strong>.</li>
        </ul>
        <h3 className="text-xl font-bold text-slate-900 mt-8 mb-3">Mozilla Firefox</h3>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6 text-base">
          <li>Press <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-800 font-mono text-xs">Ctrl + P</code> to open Firefox&apos;s print overlay.</li>
          <li>Select your thermal printer.</li>
          <li>Click on <strong>Page Setup</strong>. Under <strong>Format & Options</strong>, check the fit-to-page settings and zero out margins.</li>
          <li>Under <strong>Headers & Footers</strong>, set all dropdown selectors to <strong>--blank--</strong> to prevent dates and page numbers from printing.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          <em>Note:</em> If custom paper sizes do not appear in your print panel, you may need to open your operating system&apos;s printer properties and manually add the size to the driver settings.
        </p>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Using FreeReceipt.dev for Perfect 80mm Output
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          If you want to bypass the complexity of manually writing media queries, you can let our platform handle it for you. Our tool at <Link href="/tools/thermal-receipt-printer-maker" className="text-indigo-600 font-medium hover:underline">FreeReceipt.dev</Link> takes care of CSS adjustments dynamically.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          When you toggle the print format to <strong>POS Receipt (80mm)</strong>, our editor automatically formats the template, resizes font scales, and injects the necessary media styling directly. Hit our download button, and a clean, perfectly structured, unbranded document is generated right in your browser, ready to send to your device spooler without any page-cut headaches.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Troubleshooting Common Issues
        </h2>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6 text-base">
          <li><strong>Issue 1: Receipt content is too wide or cropped:</strong> Make sure you have chosen 80mm paper size inside the print dialog instead of leaving it on default A4. If it continues, adjust the scale percentage in the settings down to 90% or 95%.</li>
          <li><strong>Issue 2: URL, page number, or date printing at the top:</strong> Double-check that browser headers are turned off in your system settings. Setting margins to 0 manually can also force these tags out.</li>
          <li><strong>Issue 3: Font text is too small:</strong> Make sure the source template is formatted for POS. POS receipts need slightly larger font-to-page ratios. Using our POS Receipt layout automatically optimizes font hierarchies.</li>
          <li><strong>Issue 4: Logo appears blurry or pixelated:</strong> Thermal printers print in black and white at 203 DPI. Use high-contrast, high-resolution logos (at least 300 DPI) and avoid color gradients for crisp lines.</li>
        </ul>

        {/* Closing */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Conclusion
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Printing clean 80mm thermal receipts from standard browsers does not have to be frustrating. By using clean CSS styling like <code className="bg-slate-100 px-1.5 py-0.5 rounded text-indigo-600 font-mono text-sm">@page {'{'} size: 80mm auto; margin: 0; {'}'}</code>, you can ensure perfect spool alignment every time. Ready to build your first professional thermal receipt? Try our <Link href="/tools/thermal-receipt-printer-maker" className="text-indigo-600 font-medium hover:underline">Free 80mm POS Receipt Maker</Link> tool now.
        </p>
      </article>
    </main>
  );
}
