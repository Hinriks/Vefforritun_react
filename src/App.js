import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bubbles from './components/Bubbles';
import NavBar from './components/NavBar';
import About from './components/About';
import Bundles from './components/Bundles';
import Cart from './components/Cart';
import BubbleDetails from './components/BubbleDetails';
import Delivered from './components/Delivered';
import Pickup from './components/Pickup';
import OrderReview from "./components/OrderReview";

function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="container py-5">
        <Switch>
          <Route exact path="/bubbles" component={Bubbles} />
          <Route exact path="/bundles" component={Bundles} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/bubbles/:id" component={BubbleDetails} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
