import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPrimeNumbers} from '../actions/primeNumbersList';
import Form from './Form';
import ResultContainer from "./ResultContainer";


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
        return (<div>
            <Form onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
            <ResultContainer/>
        </div>)
    }
}

export default connect(null, {getPrimeNumbers})(FormContainer)
