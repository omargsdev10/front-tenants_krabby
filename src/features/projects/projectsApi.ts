import axiosInstance from '../../shared/axiosInstance';
import type { Project } from './types';

const BASE = '/api/Projects';

export const getProjects = (): Promise<Project[]> =>
  axiosInstance.get<Project[]>(BASE).then((res) => res.data);

export const getProjectById = (id: string): Promise<Project> =>
  axiosInstance.get<Project>(`${BASE}/${id}`).then((res) => res.data);
