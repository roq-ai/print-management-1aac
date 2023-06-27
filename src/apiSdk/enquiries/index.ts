import axios from 'axios';
import queryString from 'query-string';
import { EnquiryInterface, EnquiryGetQueryInterface } from 'interfaces/enquiry';
import { GetQueryInterface } from '../../interfaces';

export const getEnquiries = async (query?: EnquiryGetQueryInterface) => {
  const response = await axios.get(`/api/enquiries${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createEnquiry = async (enquiry: EnquiryInterface) => {
  const response = await axios.post('/api/enquiries', enquiry);
  return response.data;
};

export const updateEnquiryById = async (id: string, enquiry: EnquiryInterface) => {
  const response = await axios.put(`/api/enquiries/${id}`, enquiry);
  return response.data;
};

export const getEnquiryById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/enquiries/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteEnquiryById = async (id: string) => {
  const response = await axios.delete(`/api/enquiries/${id}`);
  return response.data;
};
