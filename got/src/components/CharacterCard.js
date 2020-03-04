import React from 'react';

const CharacterCard = (props) => {
    return(
        <div className="card">
            <h3>{props.data.name === '' ? props.data.aliases[0]: props.data.name}</h3>
            <h4>Gender: {props.data.gender}</h4>
            <h4>Culture: {props.data.culture  === '' ? 'unknown': props.data.culture}</h4>
            <h4>Aliases:</h4>
            {props.data.aliases.map((x,i) => <h5 key={i}>{x === "" ? "none": x}</h5>)}
        </div>
    );
};

export default CharacterCard;