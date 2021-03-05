import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bubbles from './components/Bubbles';
import NavBar from './components/NavBar';
import About from './components/About';
import Bundles from './components/Bundles';
import Cart from './components/Cart';

function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="container py-5">
        {/* <About /> */}
        {/* <Bubbles /> */}
        <Switch>
          <Route exact path="/bubbles" component={Bubbles} />
          <Route exact path="/bundles" component={Bundles} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
        </Switch>

        {/*<About/>*/}
      </div>
    </div>
  );
}

export default App;
