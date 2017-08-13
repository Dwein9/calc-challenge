import React, { Component } from 'react';
import { FieldGroup } from 'react-bootstrap'
import { Checkbox } from 'react-bootstrap'
import { Radio } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

class Form extends Component {
  componentWillMount(){
    this.state = { user: { name: '', age: '', sex: 'male', conditions: [] } }
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

  render() {
    console.log(this.state.user)
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 form">

        <h1>Welcome, please fill out the form.</h1>

        <form>

          Name: <input className="center" type='text' placeholder="Name" value={this.state.user.name} onChange={this.handleInputChange.bind(this, 'name')}/> <br /> <br />
          Age: <input className="center" type='number' placeholder="Amount" value={this.state.user.age} onChange={this.handleInputChange.bind(this, 'age')}/> <br /> <br />

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
    );
  }
}

export default Form;
