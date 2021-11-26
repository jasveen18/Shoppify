import axios from 'axios';


export const getProductAction = () => async(dispatch) => {

    try{
        const { data } = await axios.get(`/products`);
        //console.log(data);
        dispatch({type: 'GET_PRODUCTS_SUCCESS', payload: data});

    }catch(err){
        dispatch({type: 'GET_PRODUCTS_FAIL', payload: err});
    }

};



export const getProductDetailsAction = (id) => async(dispatch) => {
    try{
        const { data } = await axios.get(`http://localhost:8000/product/${id}`);
        //console.log(data);
        dispatch({type: 'PRODUCT_DETAILS_SUCCESS', payload: data});

    }catch(err){
        dispatch({ type: 'PRODUCT_DETAILS_FAIL', payload: err});
    }

};