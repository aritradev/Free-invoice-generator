import { useState, ChangeEvent, KeyboardEvent } from 'react';
import { Trash2, Plus } from 'lucide-react';
import { BusinessInfo, ClientInfo, InvoiceState, InvoiceItem, DocumentType } from '@/types/invoice';

interface InvoiceFormProps {
  state: InvoiceState;
  updateBusinessInfo: (field: keyof BusinessInfo, value: string) => void;
  updateClientInfo: (field: keyof ClientInfo, value: string) => void;
  updateState: (field: keyof Omit<InvoiceState, 'businessInfo' | 'clientInfo' | 'items'>, value: any) => void;
  changeDocumentType: (type: DocumentType) => void;
  addItem: () => void;
  updateItem: (id: string, field: keyof InvoiceItem, value: any) => void;
  removeItem: (id: string) => void;
}

export default function InvoiceForm({
  state,
  updateBusinessInfo,
  updateClientInfo,
  updateState,
  changeDocumentType,
  addItem,
  updateItem,
  removeItem
}: InvoiceFormProps) {

  const sharedInputClasses = "w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500";
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const validateEmail = () => {
    if (!state.businessInfo.businessEmail) {
      setEmailError(null);
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(state.businessInfo.businessEmail)) {
      setEmailError("Please enter a valid email.");
    } else {
      setEmailError(null);
    }
  };

  const validatePhone = () => {
    if (!state.businessInfo.businessPhone) {
      setPhoneError(null);
      return;
    }
    const phoneRegex = /^[\d\s+\-()]*$/;
    if (!phoneRegex.test(state.businessInfo.businessPhone)) {
      setPhoneError("Please enter a valid phone number.");
    } else {
      setPhoneError(null);
    }
  };

  const handleLogoUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = new Image();
        img.onload = () => {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;
          
          const MAX_SIZE = 800;
          if (width > height && width > MAX_SIZE) {
            height *= MAX_SIZE / width;
            width = MAX_SIZE;
          } else if (height > MAX_SIZE) {
            width *= MAX_SIZE / height;
            height = MAX_SIZE;
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          if (ctx) {
            // Fill white background to prevent black boxes on transparent images
            ctx.fillStyle = '#ffffff';
            ctx.fillRect(0, 0, width, height);
            ctx.drawImage(img, 0, 0, width, height);
            
            let quality = 0.9;
            let dataUrl = canvas.toDataURL('image/jpeg', quality);
            
            while (dataUrl.length > 680000 && quality > 0.1) {
              quality -= 0.1;
              dataUrl = canvas.toDataURL('image/jpeg', quality);
            }
            
            updateBusinessInfo('logo', dataUrl);
          }
        };
        img.src = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      const activeEl = document.activeElement as HTMLElement;
      if (activeEl && activeEl.tagName.toLowerCase() !== 'textarea') {
        e.preventDefault();
        const focusableElements = Array.from(
          document.querySelectorAll<HTMLElement>('input, textarea, select, button')
        ).filter(el => !el.hasAttribute('disabled') && el.tabIndex !== -1);
        
        const index = focusableElements.indexOf(activeEl);
        if (index > -1 && index < focusableElements.length - 1) {
          focusableElements[index + 1].focus();
        }
      }
    }
  };

  return (
    <div className="flex flex-col gap-8 print:hidden" onKeyDown={handleKeyDown}>
      <div className="flex flex-col gap-4">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex bg-slate-200 p-1 rounded-lg w-fit">
            <button
              onClick={() => changeDocumentType('invoice')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${state.documentType === 'invoice' ? 'bg-white shadow text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Invoice
            </button>
            <button
              onClick={() => changeDocumentType('receipt')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${state.documentType === 'receipt' ? 'bg-white shadow text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              Receipt
            </button>
          </div>

          <div className="flex bg-slate-200 p-1 rounded-lg w-fit ml-auto">
            <button
              onClick={() => updateState('printFormat', 'A4')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${state.printFormat === 'A4' ? 'bg-white shadow text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              A4 Document
            </button>
            <button
              onClick={() => updateState('printFormat', 'POS')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${state.printFormat === 'POS' ? 'bg-white shadow text-slate-900' : 'text-slate-600 hover:text-slate-900'}`}
            >
              80mm POS Receipt
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Document Number</label>
          <input type="text" value={state.documentId || ''} onChange={e => updateState('documentId', e.target.value)} className={sharedInputClasses} placeholder="INV-0001" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">Your Business</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Logo (Auto-compressed to &lt;500KB)</label>
            <input type="file" accept="image/*" onChange={handleLogoUpload} className="mt-1 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100" />
            {state.businessInfo.logo && <img src={state.businessInfo.logo} alt="Logo" className="mt-2 h-12 max-w-full object-contain" />}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
            <input type="text" value={state.businessInfo.companyName || ''} onChange={e => updateBusinessInfo('companyName', e.target.value)} className={sharedInputClasses} placeholder="Acme Corp" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
            <textarea value={state.businessInfo.address || ''} onChange={e => updateBusinessInfo('address', e.target.value)} className={sharedInputClasses} rows={2} placeholder="123 Tech Blvd, NY" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Email</label>
            <input 
              type="email" 
              value={state.businessInfo.businessEmail || ''} 
              onChange={e => updateBusinessInfo('businessEmail', e.target.value)} 
              onBlur={validateEmail}
              className={`${sharedInputClasses} ${emailError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`} 
              placeholder="contact@acmecorp.com" 
            />
            {emailError && <p className="text-red-500 text-xs mt-1">{emailError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Business Phone</label>
            <input 
              type="tel" 
              value={state.businessInfo.businessPhone || ''} 
              onChange={e => updateBusinessInfo('businessPhone', e.target.value)} 
              onBlur={validatePhone}
              className={`${sharedInputClasses} ${phoneError ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''}`} 
              placeholder="+1 (555) 000-0000" 
            />
            {phoneError && <p className="text-red-500 text-xs mt-1">{phoneError}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID / VAT</label>
            <input type="text" value={state.businessInfo.taxId || ''} onChange={e => updateBusinessInfo('taxId', e.target.value)} className={sharedInputClasses} placeholder="US123456789" />
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">Client Details</h2>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Name</label>
            <input type="text" value={state.clientInfo.name || ''} onChange={e => updateClientInfo('name', e.target.value)} className={sharedInputClasses} placeholder="John Doe" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Email</label>
            <input type="email" value={state.clientInfo.email || ''} onChange={e => updateClientInfo('email', e.target.value)} className={sharedInputClasses} placeholder="john.doe@example.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Phone</label>
            <input type="tel" value={state.clientInfo.phone || ''} onChange={e => updateClientInfo('phone', e.target.value)} className={sharedInputClasses} placeholder="+1 (555) 000-0000" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Client Address</label>
            <textarea value={state.clientInfo.address || ''} onChange={e => updateClientInfo('address', e.target.value)} className={sharedInputClasses} rows={2} placeholder="456 Client St, CA" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
          <input type="date" value={state.date || ''} onChange={e => updateState('date', e.target.value)} className={sharedInputClasses} />
        </div>
        
        {state.documentType === 'invoice' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Due Date</label>
            <input type="date" value={state.dueDate || ''} onChange={e => updateState('dueDate', e.target.value)} className={sharedInputClasses} />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Currency</label>
          <select value={state.currency} onChange={e => updateState('currency', e.target.value)} className={sharedInputClasses}>
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="BDT">BDT (৳)</option>
            <option value="INR">INR (₹)</option>
            <option value="AUD">AUD ($)</option>
            <option value="CAD">CAD ($)</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-slate-900 border-b border-slate-200 pb-2">Line Items</h2>
        
        <div className="hidden md:flex gap-4 px-4 text-sm font-medium text-gray-700">
          <div className="flex-1">Description</div>
          <div className="w-24">Qty</div>
          <div className="w-32">Rate</div>
          {state.items.length > 1 && <div className="w-5"></div>}
        </div>

        {state.items.map((item, index) => (
          <div key={item.id} className="flex flex-col md:flex-row items-start gap-4 p-4 rounded-lg border border-slate-200 transition-all duration-300 hover:border-blue-300/50 hover:shadow-md bg-white">
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700 md:hidden mb-1">Description</label>
              <textarea rows={2} placeholder="e.g. Website Design Services" value={item.description || ''} onChange={e => updateItem(item.id, 'description', e.target.value)} className={sharedInputClasses} />
            </div>
            <div className="w-full md:w-24">
              <label className="block text-sm font-medium text-gray-700 md:hidden mb-1">Quantity</label>
              <input type="number" placeholder="1" value={item.quantity} onChange={e => updateItem(item.id, 'quantity', e.target.value)} className={sharedInputClasses} />
            </div>
            <div className="w-full md:w-32">
              <label className="block text-sm font-medium text-gray-700 md:hidden mb-1">Rate</label>
              <input type="number" placeholder="0.00" value={item.rate} onChange={e => updateItem(item.id, 'rate', e.target.value)} className={sharedInputClasses} />
            </div>
            {state.items.length > 1 && (
              <button onClick={() => removeItem(item.id)} className="text-slate-400 hover:text-red-500 transition-colors p-2 md:p-0 md:mt-2">
                <Trash2 className="h-5 w-5" />
              </button>
            )}
          </div>
        ))}

        <button onClick={addItem} className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-indigo-600 rounded-md transition-colors duration-200 ease-out hover:bg-slate-100 hover:text-slate-900 active:bg-slate-200">
          <Plus className="h-4 w-4" /> Add Item
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Note / Footer Message</label>
            <textarea value={state.note || ''} onChange={e => updateState('note', e.target.value)} className={sharedInputClasses} rows={4} placeholder="Thank you for trusting us!" />
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Discount</label>
            <div className="flex shadow-sm rounded-md">
              <input type="number" placeholder="0" value={state.discount} onChange={e => updateState('discount', e.target.value)} className={`${sharedInputClasses} rounded-none rounded-l-md border-r-0 focus:z-10`} />
              <select value={state.discountType} onChange={e => updateState('discountType', e.target.value as 'fixed' | 'percentage')} className={`${sharedInputClasses} w-auto rounded-none rounded-r-md bg-gray-50 text-gray-500 focus:z-10`}>
                <option value="fixed">{state.currency}</option>
                <option value="percentage">%</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Tax (%)</label>
            <input type="number" placeholder="0" value={state.taxPercentage} onChange={e => updateState('taxPercentage', e.target.value)} className={sharedInputClasses} />
          </div>
        </div>
      </div>
    </div>
  );
}
