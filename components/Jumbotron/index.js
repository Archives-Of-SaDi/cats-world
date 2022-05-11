import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Jumbotron() {
  const router = useRouter();

  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Cats World</h1>
        <p className="lead">Find your best friend today. Adopt a wonder cat</p>
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => router.push('/cats')}
        >
          Start looking
        </button>
      </div>
    </div>
  );
}
