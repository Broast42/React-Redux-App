import React from 'react';

const BookCard = (props) => {
    return(
        <div className="card">
            <h3>{props.data.name }</h3>
            <h4>Pages: {props.data.numberOfPages}</h4>
            <h4>Number of Characters: {props.data.characters.length + 1}</h4>
            <h5>Number of POV Characters: {props.data.povCharacters.length + 1}</h5>
        </div>
    );
};

export default BookCard;