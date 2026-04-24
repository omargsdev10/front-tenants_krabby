import React from 'react';

// Definimos una interfaz para las futuras props (si las tuviera)
interface TenantsProps {
  title?: string;
}

const SharedButton = React.lazy(() => import('mfe_shared/MyButton'));

const TenantsApp: React.FC<TenantsProps> = ({ title = "Módulo de Inquilinos" }) => {
  return (
    <div style={{ padding: '20px', border: '2px solid blue' }}>
      <h2>{title} (TypeScript)</h2>
      <p>Ahora tienes tipado fuerte y autocompletado profesional.</p>
      <React.Suspense fallback={<div>Cargando botón...</div>}>
        <SharedButton 
          label="¡BOTÓN SIMPLIFICADO!" 
          onClick={() => alert('¡Funciona sin promesas extra!')} 
        />
      </React.Suspense>
    </div>
    
  );
};

export default TenantsApp;