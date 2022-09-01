import React, { Component } from 'react';
    
    
class PersonCard extends Component {
        constructor(props){
                super(props);
                        this.state={
                                age : this.props.age
                        }
                }
        addAge=()=>{
                this.setState({age:this.state.age+1})
        }
    render() {
        return (<>
        <h1>{this.props.firstName} {this.props.lastName}</h1>
        <h5>Age: {this.state.age}</h5>
        <h5>Hair Color: {this.props.hairColor}</h5>
        <button onClick={this.addAge}>birthday button </button>
        </>);
    }
}
    
export default PersonCard;