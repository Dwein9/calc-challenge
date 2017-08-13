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
          Insurance Rates
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <Form />
            {/* <Form data={ user }/> */}
            <Result />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
