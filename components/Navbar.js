import Link from 'next/link';

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>ホーム</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>私について</a>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <a>プロジェクト</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
