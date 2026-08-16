import React from 'react';

const ProjectsView = React.lazy(() => import('./features/projects/ProjectsView'));

type View = 'projects';

interface TenantsAppProps {
  view?: View;
}

const views: Record<View, React.ReactNode> = {
  projects: (
    <React.Suspense fallback={<div className="flex justify-center items-center py-10"><span className="loading loading-ring loading-xl" /></div>}>
      <ProjectsView />
    </React.Suspense>
  ),
};

const TenantsApp: React.FC<TenantsAppProps> = ({ view = 'projects' }) => {
  return <>{views[view]}</>;
};

export default TenantsApp;
