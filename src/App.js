import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Bubbles from './components/Bubbles';
import NavBar from './components/NavBar';
import About from './components/About';
import Bundles from './components/Bundles';


function App() {
  return (
    <div id="app">
      <NavBar />
      <div className="container py-5">
        <Switch>
          <Route exact path="/" component={Bubbles} />
          <Route exact path="/bundles" component={Bundles} />
        </Switch>

        {/*<About/>*/}
      </div>
    </div>
  );
}

export default App;
