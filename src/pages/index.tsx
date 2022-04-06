import Header from '@components/Header';
import Layout from '@components/Layout';
import MapDiv from '@components/Map';
import Head from 'next/head';
import type { NextPage } from 'next';
import { LocateDataProvider } from '../contexts/LocateDataContext';

const Home: NextPage = () => (
  <>
    <Head>
      <title>Ip Tracker</title>
      <meta name="description" content="Creating Ip Adress Tracker" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
    </Head>
    <Layout>
      <LocateDataProvider>
        <Header />
        <MapDiv />
      </LocateDataProvider>
    </Layout>
  </>
);

export default Home;
