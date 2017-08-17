import React, { Component } from 'react';
import { Button } from 'react-bootstrap'


class Result extends Component {
  componentWillReceiveProps(nextProps){
    this.state = { submitted: nextProps.data.submitted }
  }

  reSubmit(){
    this.setState({
      submitted: !this.state.submitted
    })
  }


  show(){
    if( this.state === null || !this.state.submitted  ){
      return (
        <div>
          <h1> Welcome.</h1>
          <h3 > Please fill out the form to receive a quote.</h3>
        </div>
    )
    } else {
      return (
        <div>
          <h1> Welcome {this.props.data.name}.</h1>
          <h3> Based on your submissions, we have quoted you: ${this.props.data.quote}.</h3>

          <Button onClick={this.reSubmit.bind(this)}>
            Retry
          </Button>

        </div>
      )
    }
  }


  render() {
    return (
      <div>
        {this.show()}
      </div>
    )
  }
}

export default Result;
