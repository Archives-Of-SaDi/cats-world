import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Nav from '../../components/Nav';
import Head from 'next/head';

export default function cats() {
  const [cat, setCat] = useState(null);

  const router = useRouter();
  const { id } = router.query;

  const fetchCat = async () => {
    const response = await fetch(`/api/cats/${id}`);
    const data = await response.json();
    setCat(data);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  return (
    <>
      <Head>
        <title>Cat</title>
      </Head>

      <Nav />
      {cat && (
        <div className="container mt-5" style={{ display: 'flex' }}>
          <img src={cat.image.url} alt={cat.image.alt} />
          <div className="mx-5">
            <h1>{cat.name}</h1>
            <p>{cat.description}</p>
          </div>
        </div>
      )}
    </>
  );
}
