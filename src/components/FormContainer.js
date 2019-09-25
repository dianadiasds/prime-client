import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPrimeNumbers} from '../actions/primeNumbersList';
import Form from './Form';
import Result from "./Result";

class FormContainer extends Component {
    state = {
        number: '',
        pageSize: '',
        currentPage: ''
    };

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    onSubmit = (event) => {
        event.preventDefault();
        this.props.getPrimeNumbers(this.state)
    };

    onClick = (event) => {
        this.setState({ currentPage: event.target.value }, () => {
            this.props.getPrimeNumbers(this.state);
        });
    };

    render() {
        return (<div>
            <Form onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}/>
            <Result onClick={this.onClick} pageOfItems={this.props.pageOfItems} pager={this.props.pager}/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        pageOfItems: state.pageOfItems,
        pager: state.pager,
    }
};

export default connect(mapStateToProps, {getPrimeNumbers})(FormContainer)

