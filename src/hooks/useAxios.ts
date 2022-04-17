import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: process.env.AUTH_TOKEN },
});

interface AxiosCallType {
  initialValue: unknown;
  url: string;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export const useAxiosGet = async ({ initialValue, url, params, query }: AxiosCallType) => {
  const [responseValue, setResponseValue] = useState(initialValue);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosClient.get(url, { params });
        setResponseValue(response);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, [url, params]);

  return responseValue;
};
