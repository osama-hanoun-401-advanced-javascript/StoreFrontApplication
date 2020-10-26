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