import React from 'react';
import Navbar from "./components/navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/home';
import About from './components/about';
import Contact from './components/contact';
import Posts from "./components/Posts";
import Products from './components/products';
import Login from './components/login'
import SignUpForm from './components/Signup'
import Account from './components/Account';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/products' component={Products} />
            <Route path='/about' component={About} />
            <Route path='/contact' component={Contact} />
            <Route path='/login' component={Login} />
            <Route path='/signup' component={SignUpForm} />
            <Route path='/account' component={Account} />
            <Route path='/:post_id' component={Posts} />
          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;