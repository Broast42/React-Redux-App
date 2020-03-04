import React from 'react';
import { connect } from 'react-redux';
import HouseCard from './HouseCard';

const Houses = (props) => {
    return(
        <div className="flexItems">
            {props.data.map((x,i) => (
                <HouseCard key={i} data={x} />
            ))}
        </div>
    );
};

const mapStateToProps = state => {
    return {
        data: state.data,
    }
}
export default connect(mapStateToProps, {})(Houses);