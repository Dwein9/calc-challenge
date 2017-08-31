import React, { Component } from 'react';
import './App.css';
import Form from './components/form'
import calculate from './calculations'
import { Navbar } from 'react-bootstrap';

class App extends Component {
  constructor(){
    super();
    this.state = {
      user: { name: '', age: '', sex: 'male', conditions: [], submitted: false, quote: '' }
    }
  }

  handleSubmit(e){
    e.preventDefault()
    if (this.state.user.age < 18) {
      alert('You must be over 18.');
    } else {
      var newQuote = calculate.conditionCost(this.state.user.conditions, calculate.ageCost(this.state.user.age)) + calculate.femaleDiscount(this.state.user.sex)
      this.setState({
        user: Object.assign( {}, this.state.user, { submitted: !this.state.user.submitted, quote: newQuote.toFixed(2) } )
      })
    }
    console.log(this.state);
  }

  handleInputChange(e, key){
    this.setState({
      user: Object.assign( {}, this.state.user, { [key]: e.target.value } )
    })
  }

  handleConditions(e, key){
    if ( this.state.user.conditions.includes(e.target.value) ) {
      this.setState({
        user: Object.assign( {}, this.state.user, { [key]: this.state.user.conditions.filter((c)=> c !== e.target.value) } )
      })
    } else {
      let newConditions = this.state.user.conditions.concat([e.target.value])
      this.setState({
        user: Object.assign( {}, this.state.user, { [key]: newConditions } )
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar>
          Insurance Rates
        </Navbar>
        <div className="container-fluid">
          <div className="row">
            <Form user={this.state.user}
              handleSubmit={(e) => this.handleSubmit(e)}
              handleInputChange={(key, e) => this.handleInputChange(key, e)}
              handleConditions={(key, e) => this.handleConditions(key, e)}
            />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
