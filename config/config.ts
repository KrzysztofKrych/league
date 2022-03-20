import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();
const { NODE_ENV, BACKEND_API_URL } = publicRuntimeConfig;

export { NODE_ENV, BACKEND_API_URL };
