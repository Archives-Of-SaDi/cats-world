import { useRouter } from 'next/router';

export default function Nav() {
  const router = useRouter();

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span
          style={{ cursor: 'pointer' }}
          className="navbar-brand mb-0 h1"
          onClick={() => router.push('/')}
        >
          Navbar
        </span>
      </div>
    </nav>
  );
}
