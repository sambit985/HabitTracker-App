import React, { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import './app.css';

const LazyHabits = lazy(() => import('./components/habits/habits'));
const LazyHeader = lazy(() => import('./components/header/header'));

const App = () => {
  // useState
  const [habits, setHabits] = useState([]);

  // useEffect
  useEffect(() => {
    getLocalHabits();
  }, []);

  useEffect(() => {
    saveLocalHabits();
  }, [habits]);

  // localStorage
  const saveLocalHabits = () => {
    localStorage.setItem('habits', JSON.stringify(habits));
  };

  const getLocalHabits = useCallback(() => {
    if (localStorage.getItem('habits') === null) {
      localStorage.setItem('habits', JSON.stringify([]));
    } else {
      let localHabits = JSON.parse(localStorage.getItem('habits'));
      setHabits(localHabits);
    }
  }, []);

  const handleIncrement = habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          return { ...habit, count: habit.count + 1 };
        }
        return item;
      })
    );
  };

  const handleDecrement = useCallback(habit => {
    setHabits(habits =>
      habits.map(item => {
        if (item.id === habit.id) {
          const count = habit.count - 1;
          return { ...habit, count: count < 0 ? 0 : count };
        }
        return item;
      })
    );
  }, []);

  const handleDelete = useCallback(habit => {
    setHabits(habits => habits.filter(item => item.id !== habit.id));
  }, []);

  const handleAdd = useCallback(name => {
    setHabits(habits => [...habits, { id: Date.now(), name, count: 0 }]);
  }, []);

  const handleReset = useCallback(() => {
    setHabits(habits =>
      habits.map(item => {
        if (item.count !== 0) {
          return { ...item, count: 0 };
        }
        return item;
      })
    );
  }, []);

  return (
    <div className="container">
      <Suspense fallback={<div>Loading...</div>}>
        <LazyHeader totalCount={habits.filter(item => item.count > 0).length} />
        <LazyHabits
          habits={habits}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          onDelete={handleDelete}
          onAdd={handleAdd}
          onReset={handleReset}
        />
      </Suspense>
    </div>
  );
};

export default App;

