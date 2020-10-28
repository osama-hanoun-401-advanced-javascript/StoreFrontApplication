import axios from 'axios';
export const changeActiveCategory = payload => {
    return {
        type: 'change',
        payload,
    };
};
export const add = payload => {
    return {
        type: 'ADD',
        payload,
    };
};
export const remove = payload => {
    return {
        type: 'REMOVE',
        payload,
    };
};


export const getCategories = () => {
    return async function (dispatch) {
        const response = await axios.get(
            `https://api-js401.herokuapp.com/api/v1/categories`
        );
        dispatch({
            type: 'READ_CATEGORIES',
            payload: response.data.results,
        });
    };
};



export const readAllProduct = () => {
    return async function (dispatch) {
        const response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products`);
        dispatch({
            type: 'READ_ALL_PRODUCTS',
            payload: response.data.results,
        });
    };
};