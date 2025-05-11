import React from 'react';
import styles from '@/styles/Home.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>MyPortfolio</h1>
    </header>
  );
}
