import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getData = (category, limit) => dispatch => {
    dispatch({type: FETCHING_DATA_START});

    axios
        .get(`https://www.anapioficeandfire.com/api/${category}?page=1&pageSize=${limit}`)
        .then(res => {
            dispatch({ type: FETCHING_DATA_SUCCESS, payload: { result: res.data, category: category } });
        })
        .catch(err => {
            dispatch({ type: FETCHING_DATA_FAILURE, payload: err });
        });
};