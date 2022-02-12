import type { NextPage } from 'next';
import Link from 'next/link';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { getLocales } from '../utils/helpers';
import { useTrip } from '../contexts/trip/context';
import { useEffect } from 'react';
import { TripAction } from '../contexts/trip/actions';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const [trip, tripDispatch] = useTrip();
  useEffect(() => {
    tripDispatch({
      type: TripAction.UPDATE_TRIP_CONTEXT_ACTION,
      payload: { body: { from: 'test2' } },
    });
  }, []);
  return (
    <>
      <Link href="/map">Go to map</Link>
      <div>{t('common.test')}</div>
      <div>{trip.from}</div>
    </>
  );
};

export async function getServerSideProps({
  req,
  locales,
  defaultLocale,
}: any) {
  const userLocales = getLocales(req.headers["accept-language"])
  const userLocale = userLocales.find(element => locales.includes(element));
  return {
    props: {
      ...(await serverSideTranslations(userLocale || defaultLocale, ['common'])),
    },
  };
}

export default Home;