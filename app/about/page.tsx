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
          <li><strong>Fill in your Business Details:</strong> Start by uploading your logo and entering your company name, address, and tax ID. This is securely saved in your browser so you don't have to enter it every time.</li>
          <li><strong>Enter Client Information:</strong> Type in your client's details and the invoice specifics (date, terms).</li>
          <li><strong>Add Items:</strong> List your services or products, quantities, and rates. The tool calculates subtotals, discounts, and taxes automatically.</li>
          <li><strong>Preview & Download:</strong> Use the live preview on the right. Once it looks perfect, hit Download to print it as a high-quality PDF.</li>
        </ul>

        <h2 className="mt-12 text-2xl font-bold tracking-tight text-slate-900">The Philosophy</h2>
        <p className="mt-4 text-slate-600">
          Most invoice generators require you to sign up, hand over your business data, and eventually hit you with a paywall. We chose a different path. By running the generator entirely in your browser without any server-side database, we eliminate server costs and privacy concerns simultaneously. It's a win-win.
        </p>
      </div>
    </div>
  );
}
