import React from 'react';
import { createRoot } from 'react-dom/client';
import TenantsApp from './TenantsApp';

const container = document.getElementById('root');

// TypeScript nos obliga a asegurar que el container no sea nulo
if (container) {
  const root = createRoot(container);
  root.render(<TenantsApp />);
}