import React, { useEffect } from 'react';

function Invoices() {
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch('https://recruiting.api.bemmbo.com/invoices/pending');
    };

    fetchData();
  }, []);

  return (
    <h1>Invoices</h1>
  );
}

export default Invoices;
