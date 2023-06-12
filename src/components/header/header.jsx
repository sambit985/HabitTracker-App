import React from 'react';
import styles from './header.module.css';

const Header = props => {
  return (
    <header className={styles.header}>
      <h1>21 Days of Habit Tracker</h1>
      <p>
        It takes <span>21 days</span> to form a habit
      </p>
      <strong className={styles.headerCountAnnounce}>
        <span className={styles.headerCount}>{props.totalCount}</span> habits
        are being formed!
      </strong>
    </header>
  );
};

export default Header;
