import { useState, useEffect } from 'react';
import { getProjects } from './projectsApi';
import type { Project } from './types';

type State = {
  data: Project[];
  loading: boolean;
  error: string | null;
};

const useProjects = (): State => {
  const [state, setState] = useState<State>({
    data: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    let cancelled = false;

    getProjects()
      .then((data) => {
        if (!cancelled) setState({ data, loading: false, error: null });
      })
      .catch((err: Error) => {
        if (!cancelled) setState({ data: [], loading: false, error: err.message });
      });

    return () => { cancelled = true; };
  }, []);

  return state;
};

export default useProjects;
