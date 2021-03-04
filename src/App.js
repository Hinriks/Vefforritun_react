import React from 'react';
import Bubbles from './components/Bubbles';
import NavBar from './components/NavBar';

function App() {
  return (
    <div id="app">
      <NavBar/>
      <div className="container py-5">
        <Bubbles/>
      </div>
    </div>
  );
}

export default App;
