import React from 'react';
import { connect } from 'react-redux';
import Characters from './Characters';
import Houses from './Houses';
import Books from './Books';

const Display = (props) => {
    if (props.category === 'characters'){
        return (
            <div>
                <Characters />
            </div>
        );
    }else if (props.category === 'houses'){
        return (
            <div>
                <Houses />
            </div>
        );
    }else if (props.category === 'books'){
        return (
            <div>
                <Books />
            </div>
        );
    }

    return(
        <div className="landing">
            <h2>Choose a category above.</h2>
        </div>
    );

    
};

const mapStateToProps = state => {
    return {
        data: state.data,
        fetching: state.fetching,
        error: state.error,
        category: state.category
    }
}

export default connect(mapStateToProps, {})(Display);