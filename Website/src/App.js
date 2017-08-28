import React, { Component } from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import HomePage from './components/pages/homePage';
import Products from './components/pages/products';
import Contact from './components/pages/contact.js';

import './Assets/css/style.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component={HomePage} />
          <Route exact path="/products" component={Products} />
          <Route exact path="/contact" component={Contact} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
