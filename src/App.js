import React from 'react';
import Bubbles from './components/Bubbles';
import NavBar from './components/NavBar';
import About from './components/About';

function App() {
  return (
    <div id="app">
      <NavBar/>
      <div className="container py-5">
        <Bubbles/>
        {/*<About/>*/}
      </div>
    </div>
  );
}

export default App;
