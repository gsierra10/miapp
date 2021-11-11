import React, { Component } from 'react';

class Counter extends Component {  
    constructor(props) {
        super(props);
        this.state = { count: 0};
    }
    increment(){
        this.setState({ count: this.state.count + 1})
    }
    render(){
        return (
            <div>
                <Contador value={this.state.count}>
    
                </Contador>
                <Button label="Add" onClick={()=>this.increment()}>
                    
                </Button>
            </div>
        )
    }
} 
const Contador = props => {
    return(
      <div>
        <h1>{props.value}</h1>
      </div>
    );
};
const Button = props => {
    return (
        <button onClick={()=>props.onClick()}> {props.label}</button>
    );
};
export default Counter;
  