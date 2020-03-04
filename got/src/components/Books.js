import React from 'react';
import { connect } from 'react-redux';
import BookCard from './BookCard';

const Books = (props) => {
    return(
        <div className="flexItems">
            {props.data.map((x,i) => (
                <BookCard key={i} data={x} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}
export default connect(mapStateToProps, {})(Books);