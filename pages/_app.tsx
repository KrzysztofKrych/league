import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { TripProvider } from '../contexts/trip/TripProvider';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps,  }: AppProps) {
  return (
    <TripProvider>
      <Component {...pageProps} />
    </TripProvider>
  );
}

export default appWithTranslation(MyApp);
