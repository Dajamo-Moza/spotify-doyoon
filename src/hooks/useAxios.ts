import { useState } from 'react';
const axios = require('axios');

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: '' },
});

export const useAxiosGet = async ({
  initialValue,
  url,
  params,
  query,
}: {
  initialValue: unknown;
  url: string;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}) => {
  const [responseValue, setResponseValue] = useState(initialValue);

  const response = await axiosClient.get(url, { params, query });
  setResponseValue(response);
  console.log('response', response);

  return { responseValue };
};
