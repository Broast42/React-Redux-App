import React from 'react';
import { connect } from 'react-redux';
import CharacterCard from './CharacterCard';

const Characters = (props) => {
    return(
        <div className="flexItems">
            {props.data.map((x,i) => (
                <CharacterCard key={i} data={x} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}
export default connect(mapStateToProps, {})(Characters);