import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api.spotify.com/v1',
  timeout: 1000,
  headers: { Authorization: `Bearer ${process.env.AUTH_TOKEN}` },
});

interface AxiosCallType<T> {
  url: string;
  key?: string;
  params?: Record<string, unknown>;
  body?: Record<string, unknown>;
  query?: Record<string, unknown>;
}

export const getAxiosData = async <T>({ url, key, params }: AxiosCallType<T>): Promise<T> => {
  if (key) {
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
  } else {
    try {
      const {
        data: { items },
      } = await axiosClient.get(url, { params });

      return items;
    } catch (err) {
      console.error(err);
      return err;
    }
  }
};

export const putAxiosData = async <T>({ url, params }: AxiosCallType<T>): Promise<T | void> => {
  try {
    await axiosClient.put(url, { params });
  } catch (err) {
    console.error(err);
    return err;
  }
};

export const postAxiosData = async <T>({ url, params, body, query }: AxiosCallType<T>): Promise<T | void> => {
  try {
    const makeQuery = (queryOptions: Record<string, unknown>) => {
      let resultQueryString = '?';

      for (const [key, value] of Object.entries(queryOptions)) {
        const queryString = `${key}=${value}`;
        resultQueryString = resultQueryString.concat(queryString);
      }

      return resultQueryString;
    };

    await axiosClient.post((url = query ? `${url}${makeQuery(query)}` : url), { params, ...body });
  } catch (err) {
    console.error(err);
    return err;
  }
};
