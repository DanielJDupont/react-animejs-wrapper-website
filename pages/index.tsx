import Head from 'next/head';
import { Examples } from '../components/examples';

import { HomePage } from '../components/homepage';
import { Navbar } from '../components/navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <HomePage />
      <Examples />
    </div>
  );
}
