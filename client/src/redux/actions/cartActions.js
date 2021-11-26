import axios from 'axios';

export const addToCart = (id) => async(dispatch) => {
    try{
        const { data } = await axios.get(`/product/${id}`);
        dispatch({ type: 'ADD_TO_CART', payload: data});

    }catch(err){
        dispatch({ type: 'ADD_TO_CART_FAIL', payload: err});
    }

};


export const removeItem = (id) => (dispatch) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id});

};