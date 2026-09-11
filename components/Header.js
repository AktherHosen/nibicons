import Link from 'next/link';

export default function Header() {
  return (
    <header className="site">
      <div className="site-nav">
        <Link href="/" className="brand">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
            <rect x="4" y="4" width="7" height="7" />
            <rect x="13" y="4" width="7" height="7" />
            <rect x="4" y="13" width="7" height="7" />
            <rect x="13" y="13" width="7" height="7" />
          </svg>
          Nibicons
        </Link>
        <nav className="links">
          <Link href="/#browse">Browse</Link>
          <Link href="/#install">Install</Link>
          <Link href="/#usage">Usage</Link>
        </nav>
      </div>
    </header>
  );
}
