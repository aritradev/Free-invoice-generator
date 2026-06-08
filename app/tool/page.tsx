"use client";

import { useState, useEffect } from 'react';
import { useInvoiceState } from '@/hooks/useInvoiceState';
import InvoiceForm from '@/components/tool/InvoiceForm';
import InvoicePreview from '@/components/tool/InvoicePreview';
import { Download, Plus } from 'lucide-react';

export default function ToolPage() {
  const [isMounted, setIsMounted] = useState(false);
  const {
    state,
    updateBusinessInfo,
    updateClientInfo,
    updateState,
    changeDocumentType,
    addItem,
    updateItem,
    removeItem,
    newDocument,
    calculations,
    formattedDocumentId
  } = useInvoiceState();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-50">
        <div className="animate-pulse flex flex-col items-center gap-4">
          <div className="h-8 w-48 bg-slate-200 rounded"></div>
          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>
      </div>
    );
  }

  const handlePrint = () => {
    const originalTitle = document.title;
    document.title = state.documentId || 'Document';
    window.print();
    // Use setTimeout to ensure the print dialog reads the title before restoring
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  };

  return (
    <div className="flex-1 flex flex-col xl:flex-row bg-slate-50 h-[calc(100vh-4rem)] print:h-auto overflow-hidden print:overflow-visible">
      
      {/* LEFT: Editor Area */}
      <div className="w-full xl:w-1/2 flex flex-col border-r border-slate-200 print:hidden h-full">
        
        {/* Tool Toolbar */}
        <div className="flex-none flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shadow-sm">
          <h1 className="text-xl font-bold text-slate-900">Document Editor</h1>
          <button
            onClick={newDocument}
            className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
          >
            <Plus className="h-4 w-4" /> New Document
          </button>
        </div>

        {/* Form Container */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 pb-32">
          <InvoiceForm
            state={state}
            updateBusinessInfo={updateBusinessInfo}
            updateClientInfo={updateClientInfo}
            updateState={updateState}
            changeDocumentType={changeDocumentType}
            addItem={addItem}
            updateItem={updateItem}
            removeItem={removeItem}
          />
        </div>
      </div>

      {/* RIGHT: Preview Area */}
      <div className="w-full xl:w-1/2 flex flex-col bg-slate-100 print:w-full print:bg-white h-full print:h-auto">
        
        {/* Preview Toolbar */}
        <div className="flex-none flex items-center justify-between px-6 py-4 bg-white border-b border-slate-200 shadow-sm print:hidden">
          <h2 className="text-sm font-bold text-slate-400 uppercase tracking-wider">Live Preview</h2>
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 transition-colors shadow-sm"
          >
            <Download className="h-4 w-4" /> Download PDF
          </button>
        </div>

        {/* Preview Container */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8 flex justify-center print:p-0 print:block pb-32 print:pb-0">
          <div className="w-full max-w-[816px] print:max-w-none print:w-full">
            <InvoicePreview
              state={state}
              calculations={calculations}
              formattedDocumentId={formattedDocumentId}
            />
          </div>
        </div>
      </div>

    </div>
  );
}
