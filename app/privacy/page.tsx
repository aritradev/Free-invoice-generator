export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
      
      <div className="mt-8 prose prose-slate prose-lg">
        <p className="text-lg leading-8 text-slate-600">
          Our Invoice & Receipt Generator is designed with a core focus on data privacy. We believe your business information is yours alone.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">100% Local Processing</h2>
        <p className="mt-4 text-slate-600">
          This application runs entirely in your web browser. When you enter your company details, client information, or upload a logo, <strong>none of that data is ever sent to a server</strong>. There is no backend database connected to this tool.
        </p>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">Browser Storage</h2>
        <p className="mt-4 text-slate-600">
          To provide a seamless experience, we use your browser's native <code>localStorage</code> to save your Business Information (Company Name, Address, Tax ID, and Logo). This means:
        </p>
        <ul className="mt-4 space-y-4 text-slate-600 list-disc pl-6">
          <li>The data stays on your device.</li>
          <li>You don't need to re-enter your details the next time you use the tool on the same browser.</li>
          <li><strong>Clearing your browser cache or site data will permanently delete this information.</strong></li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">Analytics & Tracking</h2>
        <p className="mt-4 text-slate-600">
          We do not use any invasive tracking scripts or analytics that harvest your entered data. Your invoice contents remain strictly between you and your screen.
        </p>
      </div>
    </div>
  );
}
