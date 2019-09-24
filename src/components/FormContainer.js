import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPrimeNumbers} from '../actions/form';
import Form from './Form';

class FormContainer extends Component {
    state = {
        number: '',
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.props.getPrimeNumbers(this.state.number);

        this.setState({
            number: ''
        })
    };

    render() {
        return (<Form
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}
        />)
    }
}

export default connect(null, {getPrimeNumbers})(FormContainer)
