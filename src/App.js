import React, { Component } from 'react';
import HexagonGrid from './HexagonsGrid'
import './App.css';

class App extends Component {  

  render() {
    return (
      <div className="App">
        <h2>AGSOCE Business Intelligence</h2>
        <HexagonGrid />
      </div>
    );
  }
}

export default App;
