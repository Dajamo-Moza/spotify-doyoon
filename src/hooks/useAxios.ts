import { useState } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: '' },
});

interface AxiosCallType {
  initialValue: unknown;
  url: string;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export const useAxiosGet = async ({ initialValue, url, params, query }: AxiosCallType) => {
  const [responseValue, setResponseValue] = useState(initialValue);

  const response = await axiosClient.get(url, { params });
  setResponseValue(response);

  return { responseValue };
};
