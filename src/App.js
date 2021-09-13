import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Books from './components/Books';




export class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Books/>
        
      </div>
    )
  }
}

export default App