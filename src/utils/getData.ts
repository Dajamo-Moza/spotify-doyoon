import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
});

interface AxiosCallType<T> {
  url: string;
  key: string;
  params?: Record<string, unknown>;
}

export const getAxiosData = async <T>({ url, key, params }: AxiosCallType<T>): Promise<T> => {
  try {
    const {
      data: {
        [key]: { items },
      },
    } = await axiosClient.get(url, { params });

    return items;
  } catch (err) {
    console.error(err);
    return err;
  }
};
