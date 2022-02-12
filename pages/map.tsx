import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const MapPage: NextPage = () => {
  const Map = dynamic(
    () => import('../components/Map/Map'),
    { ssr: false } // It's what prevents server-side render
  );
  return <Map />;
};

export default MapPage;
