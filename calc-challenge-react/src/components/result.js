import React, { Component } from 'react';

class Result extends Component {
  render() {
    return (
      <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 result">
        { !this.props.data.submitted ?
         ( <div>
             <h1> Welcome.</h1>
             <h3 > Please fill out the form to receive a quote.</h3>
           </div>
         )
        :
         ( <div>
             <h1> Welcome {this.props.data.name}.</h1>
             <h3> Based on your submissions, we have quoted you: ${this.props.data.quote}.</h3>
           </div>
         )}
      </div>
    )
  }
}

export default Result;
