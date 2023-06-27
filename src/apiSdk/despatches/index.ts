import axios from 'axios';
import queryString from 'query-string';
import { DespatchInterface, DespatchGetQueryInterface } from 'interfaces/despatch';
import { GetQueryInterface } from '../../interfaces';

export const getDespatches = async (query?: DespatchGetQueryInterface) => {
  const response = await axios.get(`/api/despatches${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDespatch = async (despatch: DespatchInterface) => {
  const response = await axios.post('/api/despatches', despatch);
  return response.data;
};

export const updateDespatchById = async (id: string, despatch: DespatchInterface) => {
  const response = await axios.put(`/api/despatches/${id}`, despatch);
  return response.data;
};

export const getDespatchById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/despatches/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDespatchById = async (id: string) => {
  const response = await axios.delete(`/api/despatches/${id}`);
  return response.data;
};
