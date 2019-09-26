import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getPrimeNumbers} from '../actions/primeNumbersList';
import Form from './Form';
import Result from "./Result";

class FormContainer extends Component {
  state = {
    number: '',
    pageSize: '',
    currentPage: '',
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.setState({currentPage: 1}, () => {
      this.props.getPrimeNumbers(this.state);
    });
  };

  onClick = (event) => {
    this.setState({currentPage: event.target.value}, () => {
      this.props.getPrimeNumbers(this.state);
    });
  };

  render() {
    return (<>
      <Form onSubmit={this.onSubmit} onChange={this.onChange} values={this.state}
            errorMessage={this.props.errorMessage}/>

      <Result onClick={this.onClick} pageOfItems={this.props.pageOfItems} pager={this.props.pager}/>
    </>)
  }
}

const mapStateToProps = (state) => {
  return {
    pageOfItems: state.pageOfItems,
    pager: state.pager,
    errorMessage: state.errorMessage
  }
};

export default connect(mapStateToProps, {getPrimeNumbers})(FormContainer)

