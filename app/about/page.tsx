import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About FreeReceipt | Privacy-First Invoice & Receipt Generator',
  description: 'Learn how FreeReceipt works, why all data stays in your browser, and how to generate clean invoices and thermal receipts with zero signup.',
  alternates: {
    canonical: 'https://freereceipt.dev/about',
  },
  openGraph: {
    title: 'About FreeReceipt | Privacy-First Invoice & Receipt Generator',
    description: 'Understand our privacy-first approach to browser-based invoice and receipt generation.',
    type: 'website',
    url: 'https://freereceipt.dev/about',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About FreeReceipt | Privacy-First Invoice & Receipt Generator',
    description: 'See how FreeReceipt helps freelancers and small businesses generate invoices without sharing sensitive data.',
  },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">About Our Tool</h1>
      
      <div className="mt-8 prose prose-slate prose-lg">
        <p className="text-lg leading-8 text-slate-600">
          This Invoice & Receipt Generator was built with a simple philosophy: professional utilities should be free, fast, and respect your privacy.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">How to Use</h2>
        <ul className="mt-4 space-y-4 text-slate-600 list-disc pl-6">
          <li><strong>Fill in your Business Details:</strong> Start by uploading your logo and entering your company name, address, and tax ID. This is securely saved in your browser so you don&apos;t have to enter it every time.</li>
          <li><strong>Enter Client Information:</strong> Type in your client&apos;s details and the invoice specifics (date, terms).</li>
          <li><strong>Add Items:</strong> List your services or products, quantities, and rates. The tool calculates subtotals, discounts, and taxes automatically.</li>
          <li><strong>Preview & Download:</strong> Use the live preview on the right. Once it looks perfect, hit Download to print it as a high-quality PDF.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">The Philosophy</h2>
        <p className="mt-4 text-slate-600">
          Most invoice generators require you to sign up, hand over your business data, and eventually hit you with a paywall. We chose a different path. By running the generator entirely in your browser without any server-side database, we eliminate server costs and privacy concerns simultaneously. It&apos;s a win-win.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">Helpful Links</h2>
        <ul className="mt-4 space-y-3 text-slate-600 list-disc pl-6">
          <li>
            Start building documents in the <Link href="/tool" className="text-indigo-600 hover:underline font-medium">free invoice and receipt generator</Link>.
          </li>
          <li>
            Learn 80mm setup steps in <Link href="/blog/how-to-print-80mm-thermal-receipt-from-browser" className="text-indigo-600 hover:underline font-medium">our thermal printing guide</Link>.
          </li>
          <li>
            Compare invoice workflows in <Link href="/blog/receipt-vs-invoice-difference" className="text-indigo-600 hover:underline font-medium">receipt vs invoice</Link>.
          </li>
        </ul>
      </div>
    </div>
  );
}
