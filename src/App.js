import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Blogs from './components/pages/Blogs';
import Footer from './components/Footer';


// import Services from './components/pages/Services';
// import Products from './components/pages/Products';


import SignUp from './components/pages/SignUp';
import Exhibition from './components/pages/Exhibition';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          <Route path='/blogs' component={Blogs} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/exhibition' component={Exhibition} />
        </Switch>
        <Footer />
      </Router>

    </>
  );
}

export default App;