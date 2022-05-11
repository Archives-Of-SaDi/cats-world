import Head from 'next/head';
import Image from 'next/image';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Cats World</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Nav />
        <Jumbotron />
      </main>
    </div>
  );
}
