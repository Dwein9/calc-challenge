import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import Result from './components/result'

import { Navbar } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          <a className="nav" href="#">Insurance Rates</a>
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <Form />
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
