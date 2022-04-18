import { useEffect, useState } from 'react';
import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
});

interface AxiosCallType<T> {
  initialValue: T;
  url: string;
  key: string;
  params?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export const useAxiosGet = <T>({ initialValue, url, key, params, query }: AxiosCallType<T>): T => {
  const [responseValue, setResponseValue] = useState<T>(initialValue);

  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: {
            [key]: { items },
          },
        } = await axiosClient.get(url, { params });

        setResponseValue(items);
      } catch (err) {
        console.error(err);
      }
    };

    getData();
  }, []);

  return responseValue;
};
