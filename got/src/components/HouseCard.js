import React from 'react';

const HouseCard = (props) => {
    return(
        <div className="card">
            <h3>{props.data.name }</h3>
            <h4>Region: {props.data.region}</h4>
            <h4>Coat of Arms:</h4>
            <h5>{props.data.coatOfArms === '' ? 'none' : props.data.coatOfArms}</h5>
        </div>
    );
};

export default HouseCard;