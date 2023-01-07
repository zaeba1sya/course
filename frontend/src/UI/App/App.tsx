import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useStore } from '../../Core/store';
import './App.css';

const App = () => {

  const dispatch = useDispatch();
  
  const { store: {
    Todo: {
      todos
    }
  }, asyncActions: {
    Todo: {
      getTodos
    }
  } } = useStore((store) => ({
    Todo: store.Todo
  }));

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div>
      {todos.map(({title}, idx) => <h1 key={idx}>{title}</h1>)}
    </div>
  );
}

export default App;
