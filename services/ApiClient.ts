import axios from 'axios';
import { BACKEND_API_URL } from '../config/config';

export const apiClient = axios.create({
  baseURL: BACKEND_API_URL,
});

apiClient.interceptors.request.use((config) => {
  if (config.headers) {
    //TODO TOKEN
    config.headers.Authorization =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRlc3RVc2VyMSIsInN1YiI6IjYyM2UwNmM5OTBlYmZkN2Q5YzhlMDhkYiIsImlhdCI6MTY0ODgzNDM5MiwiZXhwIjoxNjQ4ODk0MzkyfQ.WTFxp8FIHZQ9r98adYUwwOQdsOFPakuGkk4uGahF1AQ';
  }
  return config;
});
