import { useEffect, useState } from 'react';
import Nav from '../../components/Nav';
import Card from '../../components/Card';
import Head from 'next/head';

export default function cats() {
  const [cats, setCats] = useState([]);

  const fetchCats = async () => {
    const response = await fetch('/api/cats');
    const data = await response.json();
    setCats(data);
  };

  useEffect(() => {
    fetchCats();
  }, []);

  return (
    <>
      <Head>
        <title>Cats</title>
      </Head>

      <Nav />
      <div className="container mt-5">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {cats.map(cat => (
            <Card
              name={cat.name}
              id={cat.id}
              photo={cat.photo}
              email={cat.email}
              image={cat.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}
