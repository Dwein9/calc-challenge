import React, { Component } from 'react';
import './App.css';
import Form from './components/form'

import { Navbar } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar>
          Insurance Rates
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
