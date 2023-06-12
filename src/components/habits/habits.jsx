import React from 'react';
import styles from './habits.module.css';
import Habit from '../habit/habit';
import HabitAddForm from '../habit-add-form/habitAddForm';

const Habits = ({
  habits,
  onAdd,
  onIncrement,
  onDecrement,
  onDelete,
  onReset,
}) => {
  return (
    <div className={styles.habits}>
      <HabitAddForm onAdd={onAdd} />
      <ul className={styles.habitsList}>
        {habits.map(habit => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className={styles.habitsReset} onClick={onReset}>
        Reset All
      </button>
    </div>
  );
};

export default Habits;
