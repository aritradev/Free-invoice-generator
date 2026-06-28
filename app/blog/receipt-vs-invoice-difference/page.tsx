import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Receipt vs Invoice: What\'s the Difference? (With Examples)',
  description: 'Understand the difference between receipt and invoice. Learn when to issue each, crucial fields to include, and correct invoicing workflows.',
  alternates: {
    canonical: 'https://freereceipt.dev/blog/receipt-vs-invoice-difference',
  },
  openGraph: {
    title: 'Receipt vs Invoice: What\'s the Difference?',
    description: 'Learn the legal and accounting differences between receipts and invoices, when to use each, and explore comparative examples.',
    type: 'article',
    url: 'https://freereceipt.dev/blog/receipt-vs-invoice-difference',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Receipt vs Invoice: What\'s the Difference?',
    description: 'Clear examples and practical rules for when to issue an invoice vs a receipt.',
  }
};

export default function ReceiptVsInvoice() {
  const faqItems = [
    {
      question: 'Is a receipt the same as an invoice?',
      answer:
        'No. An invoice requests payment before money is received, while a receipt confirms payment after the transaction is completed. They serve different accounting purposes and should not be used interchangeably. Businesses usually issue an invoice first, then issue a receipt once the invoice has been paid in full.',
    },
    {
      question: 'Do freelancers need to send both invoice and receipt?',
      answer:
        'Yes, in most professional workflows freelancers should keep both. The invoice tracks money owed and payment terms, while the receipt documents that payment was collected. Keeping matched invoice and receipt records improves bookkeeping accuracy, supports tax reporting, and reduces disputes with clients over payment status or timing.',
    },
    {
      question: 'When should I issue a receipt to a client?',
      answer:
        'Issue a receipt immediately after payment clears, whether the client paid by card, transfer, cash, or online processor. Fast receipt delivery provides proof of payment and builds trust. It also helps both sides close the transaction in their accounting systems without waiting for month-end reconciliation.',
    },
    {
      question: 'Can an invoice be used as proof of payment?',
      answer:
        'Usually no. An unpaid invoice only shows that payment was requested, not completed. To prove payment, a receipt or payment confirmation is required. Some accounting systems can mark an invoice as paid, but businesses still commonly generate a dedicated receipt for tax records, reimbursements, and client documentation.',
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Receipt vs Invoice: What's the Difference? (With Examples)",
    "datePublished": "2025-06-04",
    "dateModified": "2026-06-28",
    "mainEntityOfPage": "https://freereceipt.dev/blog/receipt-vs-invoice-difference",
    "author": {
      "@type": "Person",
      "name": "FreeReceipt Editorial Team"
    },
    "reviewedBy": {
      "@type": "Organization",
      "name": "FreeReceipt Billing Workflow Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "FreeReceipt",
      "url": "https://freereceipt.dev"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://freereceipt.dev"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://freereceipt.dev/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Receipt vs Invoice",
        "item": "https://freereceipt.dev/blog/receipt-vs-invoice-difference"
      }
    ]
  };

  const faqSchema = {
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
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-2">
            <span>June 4, 2025</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>5 min read</span>
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
            <span>Accounting</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Receipt vs Invoice: What&apos;s the Difference? (With Examples)
          </h1>
          <p className="mt-4 text-sm text-slate-500">
            Written by <span className="font-semibold text-slate-700">FreeReceipt Editorial Team</span> and reviewed by <span className="font-semibold text-slate-700">FreeReceipt Billing Workflow Team</span>.
          </p>
        </header>

        {/* Intro */}
        <p className="text-slate-600 leading-relaxed mb-6 text-base sm:text-lg">
          An invoice asks a client to pay, while a receipt confirms that payment was already made. The difference is timing and purpose: invoices track money due, receipts track money received. Using both documents correctly improves accounting accuracy, supports tax compliance, and reduces payment disputes for freelancers and small businesses.
        </p>

        {/* Section 1 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          What Is an Invoice?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          An invoice is a formal business document requesting payment from a client. Crucially, an invoice is issued <strong>before</strong> the payment is received. Think of it as an official request or bill detailing the services rendered or goods sold, detailing how much the buyer owes the seller. Invoices act as a critical record of accounts receivable, enabling you to track outstanding debts and project cash flow.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          A standard invoice must contain specific fields to be legally binding and useful for accounting:
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6 text-base">
          <li><strong>Invoice Number:</strong> A unique, sequential identifier for tracking and references.</li>
          <li><strong>Issue & Due Dates:</strong> Exactly when the invoice was drafted and the deadline for making payment.</li>
          <li><strong>Business Details:</strong> Company names, contact information, and tax identification numbers for both seller and buyer.</li>
          <li><strong>Line Items:</strong> An itemized breakdown of products or services, unit rates, quantities, and totals.</li>
          <li><strong>Payment Terms:</strong> Clear instructions on how to pay (bank details, payment gateways) and terms like Net-30.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Invoices are primarily utilized in B2B transactions, service-based industries, and freelance arrangements where payment is not made immediately at the time of delivery.
        </p>

        {/* Section 2 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          What Is a Receipt?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          In contrast to an invoice, a receipt is an acknowledgment that payment has already been processed. It serves as definitive proof of transaction, issued <strong>after</strong> payment is received. When a customer pays a bill, they receive a receipt confirming the transaction was completed. For the buyer, it represents proof of expense, and for the seller, it acts as a record of cash received.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          A receipt contains different fields than an invoice, focusing on the transaction details:
        </p>
        <ul className="list-disc pl-6 text-slate-600 space-y-2 mb-6 text-base">
          <li><strong>Receipt Number:</strong> A sequential identifier for tracking cash income.</li>
          <li><strong>Transaction Date:</strong> The exact date and time the payment was successfully processed.</li>
          <li><strong>Amount Paid:</strong> The total sum received, including taxes and discounts.</li>
          <li><strong>Payment Method:</strong> How the transaction was paid (e.g., Credit Card, PayPal, Cash, Bank Transfer).</li>
          <li><strong>Zero Balance Note:</strong> Often includes a &quot;Paid&quot; stamp or a zero balance remaining.</li>
        </ul>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Receipts are the default documentation in retail stores, e-commerce, cash transactions, and restaurants, where transaction and payment happen simultaneously.
        </p>

        {/* Section 3 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Side-by-Side Comparison
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          To help visualize the difference between receipt and invoice documents, let&apos;s look at their core traits compared side-by-side:
        </p>

        {/* Comparison Table */}
        <div className="overflow-x-auto my-8 border border-slate-200 rounded-xl">
          <table className="min-w-full divide-y divide-slate-200 text-sm">
            <thead>
              <tr className="bg-slate-50 text-slate-700 font-semibold text-left">
                <th className="px-4 py-3 border-b border-slate-200">Feature</th>
                <th className="px-4 py-3 border-b border-slate-200">Invoice</th>
                <th className="px-4 py-3 border-b border-slate-200">Receipt</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">Purpose</td>
                <td className="px-4 py-3 text-slate-600">Requests payment for services/goods</td>
                <td className="px-4 py-3 text-slate-600">Acts as proof of payment completed</td>
              </tr>
              <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">When Issued</td>
                <td className="px-4 py-3 text-slate-600">Before the payment is received</td>
                <td className="px-4 py-3 text-slate-600">After the payment is received</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">Due Date</td>
                <td className="px-4 py-3 text-slate-600">Yes (requires explicit payment deadline)</td>
                <td className="px-4 py-3 text-slate-600">No (payment was already finalized)</td>
              </tr>
              <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">Payment Method</td>
                <td className="px-4 py-3 text-slate-600">No (lists instructions, not final method)</td>
                <td className="px-4 py-3 text-slate-600">Yes (records how transaction was paid)</td>
              </tr>
              <tr className="hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">Legal Status</td>
                <td className="px-4 py-3 text-slate-600">Obligation of debt</td>
                <td className="px-4 py-3 text-slate-600">Discharge of debt</td>
              </tr>
              <tr className="bg-slate-50/20 hover:bg-slate-50/50 transition-colors">
                <td className="px-4 py-3 font-semibold text-slate-900">Tax Deductions</td>
                <td className="px-4 py-3 text-slate-600">Used as projection of revenue</td>
                <td className="px-4 py-3 text-slate-600">Mandatory proof for tax deduction claims</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Do I Need Both?
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          In a standard professional business workflow, you actually need both documents to maintain complete, double-entry financial records. The sequence begins when you complete a project or sell a bulk order. You issue a professional invoice to your customer. Once they review it and pay the balance, you issue a receipt.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Many freelancers skip the receipt phase, assuming that their clients&apos; bank records are proof enough. This is a common and risky accounting mistake. If the tax authorities audit your client or your own business, having matched invoices and receipts ensures you can justify all business deductions and tax reports.
        </p>

        {/* Section 5 */}
        <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-4 border-b border-slate-100 pb-2">
          Create Both Free with FreeReceipt.dev
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          Fortunately, keeping your accounting in order does not require expensive, complicated software packages. Our free utility at <Link href="/tool" className="text-indigo-600 font-medium hover:underline">FreeReceipt.dev</Link> supports both invoice and receipt documents.
        </p>
        <p className="text-slate-600 leading-relaxed mb-6 text-base">
          With a simple toggle at the top of our editor panel, you can switch layouts instantly. Creating professional, unbranded invoices shouldn&apos;t cost you a monthly subscription. By using a secure, browser-based billing tool, you can protect your client&apos;s data privacy and get paid on time. Ready to draft your first invoice? Start generating with our <Link href="/tool" className="text-indigo-600 font-medium hover:underline">Free Invoice Generator</Link> now.
        </p>

        <section className="mt-12 border-t border-slate-100 pt-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          {faqItems.map((item) => (
            <div key={item.question} className="mb-6">
              <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.question}</h3>
              <p className="text-slate-600 leading-relaxed text-base">{item.answer}</p>
            </div>
          ))}
        </section>

        <section className="mt-12 border-t border-slate-100 pt-8">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Related Guides</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-600">
            <li><Link href="/blog/free-invoice-templates-freelancers-2025" className="text-indigo-600 hover:underline font-medium">Best free invoice templates for freelancers</Link></li>
            <li><Link href="/blog/how-to-print-80mm-thermal-receipt-from-browser" className="text-indigo-600 hover:underline font-medium">How to print 80mm thermal receipts from a browser</Link></li>
            <li><Link href="/tools/receipt-generator-no-login" className="text-indigo-600 hover:underline font-medium">Receipt generator with no login</Link></li>
          </ul>
        </section>
      </article>
    </main>
  );
}
