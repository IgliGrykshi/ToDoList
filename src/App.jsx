import React, { Component } from 'react';
import './App.css';
import Home from './components/routes/home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;