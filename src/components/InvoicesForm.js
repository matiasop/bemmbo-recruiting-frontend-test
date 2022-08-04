import React, { useState, useEffect } from 'react';
import invoicesData from '../data/invoicesData';
import Invoice from './Invoice';
import Modal from './Modal';

function InvoicesForm() {
  const [selectedInvoiceId, setSelectedInvoiceId] = useState('');
  const [selectedCreditNoteId, setSelectedCreditNoteId] = useState('');
  const [creditNotes, setCreditNotes] = useState([]);
  const receivedInvoices = invoicesData.filter((invoice) => invoice.type === 'received');

  const clearForm = () => {
    setSelectedInvoiceId('');
    setSelectedCreditNoteId('');
    setCreditNotes([]);
  };

  useEffect(() => {
    setCreditNotes(invoicesData.filter((invoice) => invoice.reference === selectedInvoiceId));
  }, [selectedInvoiceId]);

  return (
    <>
      <h1 className="font-bold text-xl my-4">Selecciona una factura</h1>
      <div className="flex flex-col align-center justify-center">
        {receivedInvoices.map((invoice) => (
          <Invoice
            key={invoice.id}
            id={invoice.id}
            amount={invoice.amount}
            organizationId={invoice.organization_id}
            currency={invoice.currency}
            type={invoice.type}
            selected={invoice.id === selectedInvoiceId}
            setSelectedId={setSelectedInvoiceId}
          />
        ))}
      </div>

      {selectedInvoiceId && <h1 className="font-bold text-xl my-4">Selecciona una nota de crédito</h1>}
      <div className="flex flex-col align-center justify-center">
        {creditNotes.map((invoice) => (
          <Invoice
            key={invoice.id}
            id={invoice.id}
            amount={invoice.amount}
            organizationId={invoice.organization_id}
            currency={invoice.currency}
            type={invoice.type}
            selected={invoice.id === selectedCreditNoteId}
            setSelectedId={setSelectedCreditNoteId}
          />
        ))}
      </div>
      {selectedCreditNoteId && <Modal clearForm={clearForm} />}
    </>
  );
}

export default InvoicesForm;
