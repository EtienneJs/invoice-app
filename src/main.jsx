import React from 'react';
import ReactDOM from 'react-dom/client';
import { InvoiceApp } from './InvoiceApp';
import InvoiceProvider from './context/InvoiceContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <InvoiceProvider>
      <InvoiceApp />
    </InvoiceProvider>
  </React.StrictMode>,
)
