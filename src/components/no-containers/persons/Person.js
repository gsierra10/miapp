import React, { Component } from 'react';

class Person extends Component {

    constructor(props) {
        super(props);
        this.props = props
    }
    render() {

        return (
            <div>
                <span>Nombre: {this.props.name},</span>
                <span>Apellido: {this.props.surname},</span>
                <span>Edad: {this.props.age},</span>
            </div>
        );
    }
}

export default Person;