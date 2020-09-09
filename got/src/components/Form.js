import React from 'react';
import { useInput } from '../hooks/useInput';
import { connect } from 'react-redux';
import { getData } from '../store/actions'
 
const Form = (props) => {

    const [category, handleCategory] = useInput('');
    const [limit, handleLimit] = useInput('');

    console.log("data from form ", props.data )

    return(
        <div>
            <select onChange={e => handleCategory(e.target.value)}>
                <option value="">Select a Category</option>
                <option value="characters">Characters</option>
                <option value="houses">Houses</option>
                <option value="books">Books</option>
            </select>
            <select  onChange={e => handleLimit(e.target.value)}>
                <option value="">Select an item limit</option>
                <option value="10">10</option>
                <option value="20">20</option>
                <option value="30">30</option>
                <option value="40">40</option>
                <option value="50">50</option>
            </select>
            <button onClick={() => props.getData(category, limit)}>Submit</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        data: state.data,
        fetching: state.fetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getData })(Form);