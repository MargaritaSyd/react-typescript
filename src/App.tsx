import React from 'react';
import Counter from './components/Counter';
import './App.css';

const App = () => {
  return (
    <>
      <h1>React Bases</h1>
      <Counter initialValue={0}/>
    </>
  );
}

export default App;
