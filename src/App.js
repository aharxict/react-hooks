import React, { useState } from 'react';
import './App.css';
import { Posts } from './components/posts/posts';

function App() {
  const [counter, setCounter] = useState(10);

  const showMore = () => {
    setCounter( counter + 10 );
  };

  return (
    <div className="app">
      <button onClick={showMore}>Show more</button>
      <Posts counter={counter} />
    </div>
  );
}

export default App;
