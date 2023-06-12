import React, { memo } from 'react';
import styles from './habit.module.css';
import DeleteBtn from '../delete-btn/deleteBtn';
import PopUp from '../pop-up/popUp';

const Habit = memo(({ habit, onIncrement, onDecrement, onDelete }) => {
  const { name, count } = habit;

  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  return (
    <>
      <li className={styles.habit}>
        <span className={styles.habitName}>{name}</span>
        <span className={styles.habitCount}>{count}</span>
        <button
          className={`${styles.habitButton} ${styles.habitIncrease}`}
          onClick={handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className={`${styles.habitButton} ${styles.habitDecrease}`}
          onClick={handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <DeleteBtn habit={habit} onDelete={onDelete} />
      </li>

      {habit.count >= 21 && <PopUp habit={habit} onDelete={onDelete} />}
    </>
  );
});

export default Habit;
