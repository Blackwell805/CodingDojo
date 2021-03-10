import React, { Component} from "react";

class PersonCard extends Component{
    constructor(props){
        super(props); 
            this.state = {
                age: props.age,
                show: true 
        };
    }
    IncrementItem = () => {
        this.setState({ age: this.state.age + 1 });
    }
    render(){
        const {firstName, lastName, age, hairColor} = this.props;
        return (
            <div>
                <h3>{lastName}, {firstName}</h3>
                <p>Age: {this.state.age}</p>
                <p>Hair Color: {hairColor}</p>
                <button onClick={this.IncrementItem}>Birthday Button for {firstName} {lastName}</button>
            </div>
        );
    }
}

export default PersonCard;