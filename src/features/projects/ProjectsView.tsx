import React from 'react';
import useProjects from './useProjects';

const RemoteList = React.lazy(() => import('mfe_shared/List'));

const ProjectsView: React.FC = () => {
  const { data, loading, error } = useProjects();

  return (
    <div>
      <h2 className="text-base-content text-lg font-semibold mb-1">Projects</h2>
      <p className="text-base-content opacity-40 text-xs mb-4">Listado desde API local</p>

      {loading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-ring loading-xl" />
        </div>
      )}

      {error && (
        <div role="alert" className="alert alert-error">
          <span>Error al cargar projects: {error}</span>
        </div>
      )}

      {!loading && !error && (
        <React.Suspense fallback={<div className="flex justify-center items-center py-10"><span className="loading loading-ring loading-xl" /></div>}>
          <RemoteList
            title="Projects activos"
            data={data}
            fields={{ title: 'name', subtitle: 'internalCode' }}
          />
        </React.Suspense>
      )}
    </div>
  );
};

export default ProjectsView;
