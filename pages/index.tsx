import Head from 'next/head';

import { HomeAnimation } from '../components/homeAnimation';
import { Installation } from '../components/installation';
import { Navbar } from '../components/navbar';
import { Examples } from '../components/examples';
import { Footer } from '../components/footer/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>React Anime.js Wrapper</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HomeAnimation />
      <Installation />
      <Examples />
      <Footer />
    </div>
  );
}
