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
      <h1>Selecciona una factura</h1>
      <div>
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

      <h1>Selecciona una nota de crédito</h1>
      <div>
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
        {selectedCreditNoteId && <Modal clearForm={clearForm} />}
      </div>
    </>
  );
}

export default InvoicesForm;
