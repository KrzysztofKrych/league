import '../styles/globals.css';
import 'antd/dist/antd.css';
import type { AppProps } from 'next/app';
import { OnInitRequests } from '../components/OnInitRequests/OnInitRequests';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <OnInitRequests />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp;
