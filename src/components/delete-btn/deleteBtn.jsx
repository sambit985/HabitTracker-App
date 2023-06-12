import React from 'react';
import styles from './deleteBtn.module.css';

const DeleteBtn = ({ habit, onDelete }) => {
  const handleDelete = () => {
    onDelete(habit);
  };

  return (
    <button
      className={`${styles.habitButton} ${styles.habitDelete}`}
      onClick={handleDelete}
    >
      <i className="fas fa-trash"></i>
    </button>
  );
};

export default DeleteBtn;
