import React, { Component } from 'react';
    
    
class PersonCard extends Component {
    render() {
        return (<>
        <h1>{this.props.firstName} {this.props.lastName}</h1>
        <h5>Age: {this.props.age}</h5>
        <h5>Hair Color: {this.props.hairColor}</h5>
        </>);
    }
}
    
export default PersonCard;