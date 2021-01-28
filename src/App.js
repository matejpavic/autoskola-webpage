import React, { Component } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

class App extends Component {
  constructor() {
    super();
    this.state = {
      route: 'home'
    }
  }
  render() {
    return (
    <div>
      {this.state.route==='home'
      ?
      <HomePage />
      :
      <AboutPage />
    }
    </div>
  );
  }
}

export default App;
