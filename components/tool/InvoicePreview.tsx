import { InvoiceState } from '@/types/invoice';

interface InvoicePreviewProps {
  state: InvoiceState;
  calculations: {
    subtotal: number;
    discountAmount: number;
    taxableAmount: number;
    taxAmount: number;
    grandTotal: number;
  };
  formattedDocumentId: string;
}

export default function InvoicePreview({ state, calculations, formattedDocumentId }: InvoicePreviewProps) {
  const safeNumber = (val: string | number) => {
    const parsed = typeof val === 'string' ? parseFloat(val) : val;
    return isNaN(parsed) ? 0 : parsed;
  };

  const formatCurrency = (amount: number | string) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: state.currency,
    }).format(safeNumber(amount));
  };

  const isPOS = state.printFormat === 'POS';

  return (
    <>
      <style dangerouslySetInnerHTML={{__html: `
        @media print {
          @page { 
            /* Provide explicit Width and Height to force Chrome to recognize the custom size */
            size: ${state.printFormat === 'A4' ? 'A4 portrait' : '80mm 297mm'}; 
            margin: 0; /* Ensures browser headers/footers are stripped */
          }
          html, body {
            /* Force the browser rendering engine to shrink to the receipt width */
            width: ${state.printFormat === 'A4' ? 'auto' : '80mm'} !important;
            max-width: ${state.printFormat === 'A4' ? 'none' : '80mm'} !important;
            background-color: white !important;
            margin: 0 !important;
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}} />

      {isPOS ? (
        <div className="w-full bg-white print:bg-white print:px-[5mm] print:py-[8mm] p-4 shadow-sm print:shadow-none min-h-[400px] print:min-h-0 text-slate-900 border border-slate-200 print:border-none mx-auto print:mx-0 max-w-[80mm] print:w-[80mm] print:max-w-[80mm] overflow-hidden break-words font-sans text-xs">
          
          {/* POS Header */}
          <div className="flex flex-col items-center justify-center text-center mb-6">
            {state.businessInfo.logo && (
              <img src={state.businessInfo.logo} alt="Business Logo" className="object-contain max-h-24 max-w-full w-auto object-center mb-2 grayscale" />
            )}
            <h1 className="text-lg font-bold uppercase">{state.businessInfo.companyName || 'Your Company Name'}</h1>
            {state.businessInfo.address && <p className="whitespace-pre-wrap mt-1">{state.businessInfo.address}</p>}
            {state.businessInfo.businessEmail && <p className="mt-1">{state.businessInfo.businessEmail}</p>}
            {state.businessInfo.businessPhone && <p className="mt-1">{state.businessInfo.businessPhone}</p>}
            {state.businessInfo.taxId && (
              <p className="mt-1">Tax ID: {state.businessInfo.taxId}</p>
            )}
          </div>

          <div className="border-t border-dashed border-slate-400 py-2 mb-2 text-center">
            <h2 className="text-sm font-bold uppercase tracking-wider">{state.documentType}</h2>
            <p>{formattedDocumentId}</p>
            <p>{state.date}</p>
          </div>

          <div className="border-t border-dashed border-slate-400 py-2 mb-4">
            <p className="font-bold">Bill To:</p>
            <p>{state.clientInfo.name || 'Client Name'}</p>
            {state.clientInfo.email && <p>{state.clientInfo.email}</p>}
            {state.clientInfo.phone && <p>{state.clientInfo.phone}</p>}
          </div>

          {/* POS Items */}
          <div className="mb-4">
            <div className="flex justify-between font-bold border-b border-dashed border-slate-400 pb-1 mb-2">
              <span>Item</span>
              <span>Total</span>
            </div>
            {state.items.map((item, index) => (
              <div key={item.id} className="mb-2">
                <p className="font-semibold whitespace-pre-wrap">{item.description || `Item ${index + 1}`}</p>
                <div className="flex justify-between text-slate-600">
                  <span>{item.quantity} x {formatCurrency(item.rate)}</span>
                  <span className="text-slate-900">{formatCurrency(safeNumber(item.quantity) * safeNumber(item.rate))}</span>
                </div>
              </div>
            ))}
          </div>

          {/* POS Totals */}
          <div className="border-t border-dashed border-slate-400 pt-2 mb-6">
            <div className="flex justify-between py-1">
              <span>Subtotal</span>
              <span>{formatCurrency(calculations.subtotal)}</span>
            </div>
            {calculations.discountAmount > 0 && (
              <div className="flex justify-between py-1 text-slate-600">
                <span>Discount</span>
                <span>-{formatCurrency(calculations.discountAmount)}</span>
              </div>
            )}
            {calculations.taxAmount > 0 && (
              <div className="flex justify-between py-1">
                <span>Tax ({state.taxPercentage}%)</span>
                <span>{formatCurrency(calculations.taxAmount)}</span>
              </div>
            )}
            <div className="flex justify-between py-2 mt-1 border-t-2 border-slate-900 text-base font-bold">
              <span>TOTAL</span>
              <span>{formatCurrency(calculations.grandTotal)}</span>
            </div>
          </div>

          <div className="text-center italic text-slate-500 pb-4 whitespace-pre-wrap">
            {state.note || 'Thank you for trusting us!'}
          </div>

        </div>
      ) : (
        <div className="w-full bg-white p-8 shadow-sm min-h-[1056px] text-slate-900 border border-slate-200 mx-auto max-w-[816px] font-sans a4-print-container relative flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-start mb-12">
            <div className="max-w-[50%]">
              {state.businessInfo.logo ? (
                <img src={state.businessInfo.logo} alt="Business Logo" className="object-contain max-h-24 max-w-full w-auto object-left mb-4" />
              ) : (
                <div className="h-12" /> // spacer if no logo
              )}
              <h1 className="text-3xl font-bold text-slate-900">{state.businessInfo.companyName || 'Your Company Name'}</h1>
              {state.businessInfo.address && <p className="text-sm text-slate-500 whitespace-pre-wrap mt-2">{state.businessInfo.address}</p>}
              {state.businessInfo.businessEmail && <p className="text-sm text-slate-500 mt-1">{state.businessInfo.businessEmail}</p>}
              {state.businessInfo.businessPhone && <p className="text-sm text-slate-500 mt-1">{state.businessInfo.businessPhone}</p>}
              {state.businessInfo.taxId && (
                <p className="text-sm text-slate-500 mt-1">Tax ID: {state.businessInfo.taxId}</p>
              )}
            </div>
            
            <div className="text-right">
              <h2 className="text-4xl font-black text-slate-200 uppercase tracking-wider mb-4">
                {state.documentType}
              </h2>
              <div className="text-sm text-slate-600">
                <p className="font-bold text-lg text-slate-900 mb-1">{formattedDocumentId}</p>
                <p>Date: {state.date}</p>
                {state.documentType === 'invoice' && state.dueDate && (
                  <p>Due Date: {state.dueDate}</p>
                )}
              </div>
            </div>
          </div>

          {/* Client */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider border-b-2 border-slate-100 pb-2 mb-4">
              Bill To
            </h3>
            <p className="font-bold text-lg text-slate-900">{state.clientInfo.name || 'Client Name'}</p>
            {state.clientInfo.address && (
              <p className="text-sm text-slate-600 whitespace-pre-wrap mt-1">{state.clientInfo.address}</p>
            )}
            {state.clientInfo.email && (
              <p className="text-sm text-slate-600 mt-1">{state.clientInfo.email}</p>
            )}
            {state.clientInfo.phone && (
              <p className="text-sm text-slate-600 mt-1">{state.clientInfo.phone}</p>
            )}
          </div>

          {/* Items Table */}
          <table className="w-full mb-12 text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-800 text-sm font-bold text-slate-900 uppercase">
                <th className="py-3 px-2">Description</th>
                <th className="py-3 px-2 text-right">Qty</th>
                <th className="py-3 px-2 text-right">Rate</th>
                <th className="py-3 px-2 text-right">Amount</th>
              </tr>
            </thead>
            <tbody className="text-sm text-slate-700">
              {state.items.map((item, index) => (
                <tr key={item.id} className="border-b border-slate-100">
                  <td className="py-4 px-2 whitespace-pre-wrap">{item.description || `Item ${index + 1}`}</td>
                  <td className="py-4 px-2 text-right">{item.quantity}</td>
                  <td className="py-4 px-2 text-right">{formatCurrency(item.rate)}</td>
                  <td className="py-4 px-2 text-right font-medium text-slate-900">{formatCurrency(safeNumber(item.quantity) * safeNumber(item.rate))}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Totals */}
          <div className="flex justify-between items-start">
            <div className="w-full max-w-[50%] text-sm text-slate-600 whitespace-pre-wrap pt-2">
              {state.note && <><span className="font-bold text-slate-400 uppercase tracking-wider text-xs block mb-1">Note</span>{state.note}</>}
            </div>
            <div className="w-full max-w-sm text-sm text-slate-700">
              <div className="flex justify-between py-2 px-2">
                <span>Subtotal</span>
                <span className="font-medium text-slate-900">{formatCurrency(calculations.subtotal)}</span>
              </div>
              
              {calculations.discountAmount > 0 && (
                <div className="flex justify-between py-2 px-2 text-red-600">
                  <span>Discount</span>
                  <span>-{formatCurrency(calculations.discountAmount)}</span>
                </div>
              )}

              {calculations.taxAmount > 0 && (
                <div className="flex justify-between py-2 px-2">
                  <span>Tax ({state.taxPercentage}%)</span>
                  <span className="font-medium text-slate-900">{formatCurrency(calculations.taxAmount)}</span>
                </div>
              )}

              <div className="flex justify-between py-4 px-2 mt-2 border-t-4 border-slate-900 text-2xl font-bold text-slate-900">
                <span>Total</span>
                <span>{formatCurrency(calculations.grandTotal)}</span>
              </div>
            </div>
          </div>

          {/* Custom Print Footer */}
          <div className="flex justify-between items-end text-xs text-slate-500 pt-6 mt-auto border-t border-slate-100 a4-print-footer">
            <div className="text-left">
              <p>Generated on: {new Date().toLocaleString()}</p>
              <p className="mt-1">freereceipt.dev</p>
            </div>
            <div className="text-right">
              {state.businessInfo.companyName && <p className="font-bold text-slate-600">{state.businessInfo.companyName}</p>}
              {state.businessInfo.address && <p className="whitespace-pre-wrap mt-0.5">{state.businessInfo.address}</p>}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
