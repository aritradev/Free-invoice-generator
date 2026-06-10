"use client";

import { useState } from 'react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: "How do I make a receipt without signing up?",
    answer: "You can create a receipt without signing up instantly on our platform. Because we do not require user accounts, you can simply open the generator, enter your business details, add your items, and download your document immediately."
  },
  {
    question: "Is there a truly free receipt maker with no watermark?",
    answer: "Yes. Our tool is a completely free receipt maker with no watermark included. Unlike other generators that hide PDF downloads behind a paywall or force their logo onto your documents, our output is 100% clean, professional, and unbranded."
  },
  {
    question: "How to create an 80mm thermal receipt online?",
    answer: "To create an 80mm thermal receipt, simply select the '80mm POS Receipt' format in our editor. We use highly optimized CSS to ensure your document prints directly from your web browser to your ESC/POS thermal printer with zero margin cut-offs."
  },
  {
    question: "Where is my invoice data saved if there is no server?",
    answer: "Your data never leaves your device. We utilize your browser's local storage to save your drafts. This guarantees total financial privacy, as your sensitive client details and pricing are never uploaded to any remote database."
  },
  {
    question: "Can I export my receipt as a PDF?",
    answer: "Absolutely. Once you finish filling out the template, click the download button to instantly export your receipt as an A4 PDF. The PDF is generated locally on your device, making it perfect for emailing to clients."
  },
  {
    question: "How to make a POS receipt for my retail shop?",
    answer: "Our generator is built specifically for the retail POS use case. Just toggle the document type to 'Receipt', enter your store's information, add the purchased items, and you will get a retail-ready thermal receipt that you can print on the spot."
  },
  {
    question: "Can I change the currency on the invoice?",
    answer: "Yes, you have full currency support. You can easily change the currency symbol in the editor settings to match your local requirements—whether you need USD, EUR, GBP, or any other global currency."
  },
  {
    question: "Is this billing software completely free forever?",
    answer: "Yes, our platform is completely free forever. We do not have premium tiers, subscriptions, or hidden fees. We built this tool to provide a fast, secure, and permanent billing solution for small businesses and freelancers."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="mt-32 max-w-3xl px-6 lg:px-8 w-full mx-auto" aria-labelledby="faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      
      <div className="text-center mb-12">
        <h2 id="faq-heading" className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Everything you need to know about our privacy-first receipt and invoice generator.
        </p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index} 
              className="border border-slate-200 rounded-lg bg-white overflow-hidden transition-colors hover:border-indigo-100"
            >
              <button
                type="button"
                className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
                onClick={() => toggleAccordion(index)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                <span className="text-base font-semibold text-slate-900 pr-8">
                  {faq.question}
                </span>
                <span className="flex-shrink-0 ml-4">
                  <svg
                    className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ease-in-out ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-5 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
