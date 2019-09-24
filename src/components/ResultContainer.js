import React, {Component} from 'react';
import Result from './Result';
import {connect} from 'react-redux';

class ResultContainer extends Component {
    render() {
        return <div>
            <Result primeNumbersList={this.props.primeNumbersList}/>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        primeNumbersList: state.primeNumbersList,
    }
};

export default connect(mapStateToProps, null)(ResultContainer)
