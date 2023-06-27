import axios from 'axios';
import queryString from 'query-string';
import { DesignDraftInterface, DesignDraftGetQueryInterface } from 'interfaces/design-draft';
import { GetQueryInterface } from '../../interfaces';

export const getDesignDrafts = async (query?: DesignDraftGetQueryInterface) => {
  const response = await axios.get(`/api/design-drafts${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createDesignDraft = async (designDraft: DesignDraftInterface) => {
  const response = await axios.post('/api/design-drafts', designDraft);
  return response.data;
};

export const updateDesignDraftById = async (id: string, designDraft: DesignDraftInterface) => {
  const response = await axios.put(`/api/design-drafts/${id}`, designDraft);
  return response.data;
};

export const getDesignDraftById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/design-drafts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteDesignDraftById = async (id: string) => {
  const response = await axios.delete(`/api/design-drafts/${id}`);
  return response.data;
};
