import axios from 'axios';
import queryString from 'query-string';
import { PressInterface, PressGetQueryInterface } from 'interfaces/press';
import { GetQueryInterface } from '../../interfaces';

export const getPresses = async (query?: PressGetQueryInterface) => {
  const response = await axios.get(`/api/presses${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createPress = async (press: PressInterface) => {
  const response = await axios.post('/api/presses', press);
  return response.data;
};

export const updatePressById = async (id: string, press: PressInterface) => {
  const response = await axios.put(`/api/presses/${id}`, press);
  return response.data;
};

export const getPressById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/presses/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deletePressById = async (id: string) => {
  const response = await axios.delete(`/api/presses/${id}`);
  return response.data;
};
