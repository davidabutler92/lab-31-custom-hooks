import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../AppProvider/AppProvider';
import styles from './Header.css';

export default function Header() {
  const { themeMode } = useContext(AppContext);
  console.log('theme mode!', themeMode);

  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        Home Page
      </Link>
      <button>Click</button>
    </div>
  );
}
