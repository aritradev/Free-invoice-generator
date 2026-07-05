import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://freereceipt.dev'),
  title: "Invoice & Receipt Generator",
  description: "A completely free, privacy-first, browser-based tool to generate professional invoices and receipts.",
  openGraph: {
    siteName: 'FreeReceipt',
    locale: 'en_US',
    type: 'website',
    url: 'https://freereceipt.dev',
    title: 'Free Receipt & Invoice Generator — No Login, No Watermark',
    description: 'Create professional A4 invoices and 80mm thermal POS receipts instantly. 100% free, no watermark, no login required. Runs entirely in your browser.',
    images: [{
      url: 'https://freereceipt.dev/og-image.png',
      width: 1200,
      height: 630,
      alt: 'FreeReceipt — Free Invoice & Receipt Generator'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Receipt & Invoice Generator — No Login, No Watermark',
    description: 'Create A4 invoices and 80mm POS receipts free. No signup, no watermark.',
    images: ['https://freereceipt.dev/og-image.png']
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "FreeReceipt",
  "url": "https://freereceipt.dev",
  "description": "Free, privacy-first invoice and receipt generator. Runs entirely in your browser.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://freereceipt.dev/tool"
    },
    "query-input": "required name=search_term_string"
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "FreeReceipt",
  "url": "https://freereceipt.dev",
  "logo": "https://freereceipt.dev/og-image.png",
  "description": "Privacy-first invoice and receipt generator that runs fully in your browser.",
  "sameAs": []
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-slate-50 text-slate-900">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-LZPDXXYCTD"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LZPDXXYCTD');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
