import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap'
import { Radio } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

import Result from './result'
import calculate from '../calculations'


class Form extends Component {
  componentWillMount(){
    this.state = { user: { name: '', age: '', sex: 'male', conditions: [], submitted: false, quote: '' } }
  }

  handleInputChange(key, e){
    this.setState({
      user: Object.assign({}, this.state.user, {[key]: e.target.value} )
    })
  }

  handleConditions(key, e){
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
  }


  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        <Result data= {this.state.user}/>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <form ref="form" onSubmit={this.handleSubmit.bind(this)}>

            Name: <input className="center" type='text' placeholder="Name" value={this.state.user.name} onChange={this.handleInputChange.bind(this, 'name')}/> <br /> <br />
             Age: <input className="center" type='number' placeholder="Age" value={this.state.user.age} onChange={this.handleInputChange.bind(this, 'age')}/> <br /> <br />

            <FormGroup>
              <h3>Sex</h3>
              <Radio defaultChecked name="radioGroup" value="male" onClick={this.handleInputChange.bind(this, 'sex')} inline>
                Male
              </Radio>

              <Radio name="radioGroup" value="female" onClick={this.handleInputChange.bind(this, 'sex')} inline>
                Female
              </Radio>
            </FormGroup>


            <FormGroup>
              <h3>Conditions</h3>
              <Checkbox value="Allergies" onClick={this.handleConditions.bind(this, 'conditions')} inline>
                 Allergies
              </Checkbox>
               <Checkbox value="Sleep Apnea" onClick={this.handleConditions.bind(this, 'conditions')} inline>
                 Sleep Apnea
               </Checkbox>
               <Checkbox value="Heart Disease" onClick={this.handleConditions.bind(this, 'conditions')} inline>
                 Heart Disease
               </Checkbox>
             </FormGroup>


             <Button type="submit">
               Submit
             </Button>
           </form>
         </div>
        </div>
    );
  }
}

export default Form;
