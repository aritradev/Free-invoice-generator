import { useState, useEffect, useCallback } from 'react';
import { InvoiceState, BusinessInfo, ClientInfo, InvoiceItem, DocumentType } from '@/types/invoice';

const DEFAULT_BUSINESS_INFO: BusinessInfo = {
  companyName: '',
  address: '',
  taxId: '',
  logo: '',
  businessEmail: '',
  businessPhone: '',
};

const DEFAULT_CLIENT_INFO: ClientInfo = {
  name: '',
  email: '',
  phone: '',
  address: '',
};

const DEFAULT_STATE: InvoiceState = {
  documentType: 'invoice',
  printFormat: 'A4',
  documentId: 'INV-0001',
  date: new Date().toISOString().split('T')[0],
  dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
  currency: 'USD',
  businessInfo: DEFAULT_BUSINESS_INFO,
  clientInfo: DEFAULT_CLIENT_INFO,
  items: [{ id: '1', description: '', quantity: 1, rate: '' }],
  discount: '',
  discountType: 'fixed',
  taxPercentage: '',
  note: 'Thank you for trusting us!',
};

export function useInvoiceState() {
  const [state, setState] = useState<InvoiceState>(DEFAULT_STATE);
  const [isReadyToSave, setIsReadyToSave] = useState(false);

  // Load from localStorage only once on mount
  useEffect(() => {
    try {
      const savedBusinessInfo = localStorage.getItem('invoice_businessInfo');
      const savedDocumentId = localStorage.getItem('invoice_documentId');
      
      setState(prev => ({
        ...prev,
        businessInfo: savedBusinessInfo ? { ...DEFAULT_BUSINESS_INFO, ...JSON.parse(savedBusinessInfo) } : prev.businessInfo,
        documentId: savedDocumentId ? savedDocumentId : prev.documentId,
      }));
    } catch (e) {
      console.error('Failed to parse localStorage', e);
    } finally {
      setIsReadyToSave(true);
    }
  }, []);

  // Save to localStorage whenever businessInfo changes (but only after initial load)
  useEffect(() => {
    if (isReadyToSave) {
      localStorage.setItem('invoice_businessInfo', JSON.stringify(state.businessInfo));
    }
  }, [state.businessInfo, isReadyToSave]);

  useEffect(() => {
    if (isReadyToSave) {
      localStorage.setItem('invoice_documentId', state.documentId);
    }
  }, [state.documentId, isReadyToSave]);

  const updateBusinessInfo = (field: keyof BusinessInfo, value: string) => {
    setState(prev => ({
      ...prev,
      businessInfo: { ...prev.businessInfo, [field]: value }
    }));
  };

  const updateClientInfo = (field: keyof ClientInfo, value: string) => {
    setState(prev => ({
      ...prev,
      clientInfo: { ...prev.clientInfo, [field]: value }
    }));
  };

  const updateState = (field: keyof Omit<InvoiceState, 'businessInfo' | 'clientInfo' | 'items'>, value: any) => {
    setState(prev => ({ ...prev, [field]: value }));
  };

  const changeDocumentType = useCallback((type: DocumentType) => {
    setState(prev => {
      let nextDocumentId = prev.documentId;
      if (type === 'receipt' && prev.documentType !== 'receipt') {
        if (nextDocumentId.startsWith('INV-')) {
          nextDocumentId = nextDocumentId.replace('INV-', 'REC-');
        }
      } else if (type === 'invoice' && prev.documentType !== 'invoice') {
        if (nextDocumentId.startsWith('REC-')) {
          nextDocumentId = nextDocumentId.replace('REC-', 'INV-');
        }
      }

      return {
        ...prev,
        documentType: type,
        documentId: nextDocumentId,
      };
    });
  }, []);

  const addItem = () => {
    setState(prev => ({
      ...prev,
      items: [...prev.items, { id: Date.now().toString(), description: '', quantity: 1, rate: '' }]
    }));
  };

  const updateItem = (id: string, field: keyof InvoiceItem, value: any) => {
    setState(prev => ({
      ...prev,
      items: prev.items.map(item => item.id === id ? { ...item, [field]: value } : item)
    }));
  };

  const removeItem = (id: string) => {
    setState(prev => ({
      ...prev,
      items: prev.items.filter(item => item.id !== id)
    }));
  };

  const newDocument = useCallback(() => {
    setState(prev => {
      const match = prev.documentId.match(/^(.*?)(\d+)$/);
      let nextDocumentId = prev.documentId;
      if (match) {
        const prefix = match[1];
        const numStr = match[2];
        const nextNum = parseInt(numStr, 10) + 1;
        nextDocumentId = `${prefix}${String(nextNum).padStart(numStr.length, '0')}`;
      }

      return {
        ...prev,
        documentId: nextDocumentId,
        clientInfo: DEFAULT_CLIENT_INFO,
        items: [{ id: Date.now().toString(), description: '', quantity: 1, rate: '' }],
        date: new Date().toISOString().split('T')[0],
        dueDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        discount: '',
        taxPercentage: '',
      };
    });
  }, []);

  // Math engine
  const safeNumber = (val: string | number) => {
    const parsed = typeof val === 'string' ? parseFloat(val) : val;
    return isNaN(parsed) ? 0 : parsed;
  };

  const subtotal = state.items.reduce((sum, item) => sum + (safeNumber(item.quantity) * safeNumber(item.rate)), 0);
  const discountVal = safeNumber(state.discount);
  const discountAmount = state.discountType === 'fixed' ? discountVal : (subtotal * discountVal) / 100;
  const taxableAmount = Math.max(0, subtotal - discountAmount);
  const taxAmount = (taxableAmount * safeNumber(state.taxPercentage)) / 100;
  const grandTotal = taxableAmount + taxAmount;

  return {
    state,
    updateBusinessInfo,
    updateClientInfo,
    updateState,
    changeDocumentType,
    addItem,
    updateItem,
    removeItem,
    newDocument,
    calculations: {
      subtotal,
      discountAmount,
      taxableAmount,
      taxAmount,
      grandTotal,
    },
    formattedDocumentId: state.documentId // Kept for compatibility if used elsewhere
  };
}
