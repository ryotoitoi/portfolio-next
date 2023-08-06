import Link from 'next/link';
import styles from '../styles/navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.container}>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">ホーム</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">私について</Link>
        </li>
        <li className={styles.li}>
          <Link href="/projects">プロジェクト</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
