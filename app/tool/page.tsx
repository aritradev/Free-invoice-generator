import { Metadata } from 'next';
import ToolInterface from '@/components/tool/ToolInterface';

export const metadata: Metadata = {
  title: 'Free Invoice & POS Receipt Generator Tool',
  description: 'Create your A4 invoices and 80mm POS receipts instantly in the browser.',
};

export default function ToolPage() {
  return <ToolInterface />;
}
