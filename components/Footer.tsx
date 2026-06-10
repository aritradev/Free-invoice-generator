import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="print:hidden border-t border-gray-100 bg-white py-8 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:items-start">
          <Link href="/" className="flex items-center mb-2">
            <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <rect x="4" y="4" width="16" height="20" rx="2" fill="#1D4ED8" fillOpacity="0.1" stroke="#1D4ED8" strokeWidth="2"/>
              <path d="M9 14L12 17L19 9" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 8H16" stroke="#1D4ED8" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            <span className="text-lg font-bold tracking-tight text-slate-900">FreeReceipt</span>
          </Link>
          <p className="text-sm text-slate-500">
            Built for privacy. Runs entirely in your browser.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center sm:items-end">
          <div className="flex gap-4">
            <Link href="/about" className="text-sm font-medium transition-colors duration-200 ease-in-out text-slate-500 hover:text-blue-600">
              About
            </Link>
            <Link href="/privacy" className="text-sm font-medium transition-colors duration-200 ease-in-out text-slate-500 hover:text-blue-600">
              Privacy
            </Link>
          </div>
          <div className="flex gap-4 mt-2">
            <Link href="/tools/thermal-receipt-printer-maker" className="text-xs text-slate-400 hover:text-blue-500 transition-colors">
              Thermal Receipt Maker
            </Link>
            <Link href="/tools/offline-receipt-generator" className="text-xs text-slate-400 hover:text-blue-500 transition-colors">
              Offline Receipt Generator
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
