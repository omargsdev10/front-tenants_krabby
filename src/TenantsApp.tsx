import React from 'react';

// Definimos una interfaz para las futuras props (si las tuviera)
interface TenantsProps {
  title?: string;
}

const TenantsApp: React.FC<TenantsProps> = ({ title = "Módulo de Inquilinos" }) => {
  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>{title} (TypeScript)</h2>
      <p>Ahora tienes tipado fuerte y autocompletado profesional.</p>
    </div>
  );
};

export default TenantsApp;