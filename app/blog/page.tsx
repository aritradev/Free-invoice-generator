import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Invoice & Receipt Tips — FreeReceipt Blog',
  description: 'Learn how to optimize your invoicing, print perfect thermal receipts, and manage your billing like a pro with our expert guides.',
  alternates: {
    canonical: 'https://freereceipt.dev/blog',
  },
  openGraph: {
    title: 'Free Invoice & Receipt Tips — FreeReceipt Blog',
    description: 'Expert guides on invoicing, browser thermal printing, and business billing workflows.',
    type: 'website',
    url: 'https://freereceipt.dev/blog',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Invoice & Receipt Tips — FreeReceipt Blog',
    description: 'Guides for invoice templates, thermal receipt printing, and billing workflows.',
  }
};

const blogPosts = [
  {
    title: 'How to Print an 80mm Thermal Receipt from a Browser (Complete Guide)',
    excerpt: 'Frustrated by truncated pages, weird margins, and tiny fonts when printing receipts from Chrome or Safari? Learn the exact CSS rules and printer settings to get clean thermal output directly from your web browser.',
    date: 'June 1, 2025',
    readTime: '6 min read',
    slug: 'how-to-print-80mm-thermal-receipt-from-browser'
  },
  {
    title: 'Receipt vs Invoice: What\'s the Difference? (With Examples)',
    excerpt: 'Many business owners use "receipt" and "invoice" interchangeably, but they serve completely different legal and accounting functions. Discover when to issue each document and why mixing them up is a tax mistake.',
    date: 'June 4, 2025',
    readTime: '5 min read',
    slug: 'receipt-vs-invoice-difference'
  },
  {
    title: 'Best Free Invoice Templates for Freelancers in 2025',
    excerpt: 'A clean, professional invoice template ensures fast payments and happy clients. Explore the best free layouts, crucial legal fields to include, currency guidelines, and common invoicing mistakes to avoid.',
    date: 'June 8, 2025',
    readTime: '6 min read',
    slug: 'free-invoice-templates-freelancers-2025'
  }
];

export default function BlogIndex() {
  return (
    <main className="min-h-screen bg-slate-50 py-16">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Free Invoice & Receipt Tips
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Practical guides and tutorials to master invoicing, receipt printing, and secure billing workflows for small businesses.
          </p>
        </div>

        {/* Blog Post List */}
        <div className="space-y-8">
          {blogPosts.map((post) => (
            <article
              key={post.slug}
              className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md hover:border-indigo-100 transition-all duration-300 group"
            >
              <div className="flex flex-col gap-4">
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <time dateTime="2025-06-01">{post.date}</time>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {post.excerpt}
                </p>

                {/* CTA Link */}
                <div className="mt-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
