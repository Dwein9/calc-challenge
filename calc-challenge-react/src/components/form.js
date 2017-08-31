import React, { Component } from 'react';
import { Checkbox } from 'react-bootstrap'
import { Radio } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { FormGroup } from 'react-bootstrap'

// import Result from './result'
// import calculate from '../calculations'

class Form extends Component {

  render() {
    return (
      <div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
        {/* <Result data= {this.state.user}/> */}
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <form onSubmit={(e) => this.props.handleSubmit(e)}>

            Name: <input className="center" type='text' placeholder="Name" value={this.props.user.name} onChange={(e) => this.props.handleInputChange(e, 'name')}/> <br /> <br />
             Age: <input className="center" type='number' placeholder="Age" value={this.props.user.age} onChange={(e) => this.props.handleInputChange(e, 'age')}/> <br /> <br />

            <FormGroup>
              <h3>Sex</h3>
              <Radio defaultChecked name="radioGroup" value="male" onClick={(e) => this.props.handleInputChange(e, 'sex')} inline>
                Male
              </Radio>

              <Radio name="radioGroup" value="female" onClick={(e) => this.props.handleInputChange(e, 'sex')} inline>
                Female
              </Radio>
            </FormGroup>


            <FormGroup>
              <h3>Conditions</h3>
              <Checkbox value="Allergies" onClick={(e) => this.props.handleConditions(e, 'conditions')} inline>
                 Allergies
              </Checkbox>
               <Checkbox value="Sleep Apnea" onClick={(e) => this.props.handleConditions(e, 'conditions')} inline>
                 Sleep Apnea
               </Checkbox>
               <Checkbox value="Heart Disease" onClick={(e) => this.props.handleConditions(e, 'conditions')} inline>
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
