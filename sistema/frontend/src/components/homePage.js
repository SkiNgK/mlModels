import React, { Component } from 'react';
import ListItens from './listItens'

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ListItens features={this.props.features} updatePatient={this.props.updatePatient} arquivarUser={this.props.arquivarUser}>
            </ListItens>
        )
    }
}

export default HomePage