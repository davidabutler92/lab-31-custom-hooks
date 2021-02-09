import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <Link className={styles.link} to="/">
        Home Page
      </Link>
    </div>
  );
}
