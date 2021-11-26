
export const getProductReducer = (state = {products: []}, action) => {
    switch(action.type){
        case 'GET_PRODUCTS_SUCCESS':
            return {products: action.payload}

        case 'GET_PRODUCTS_FAIL':
            return {error: action.payload}
            
        default:
            return state

    }
};


export const getProductDetailsReducer = (state = {product: {}}, action) => {
    switch(action.type){
        case 'PRODUCT_DETAILS_SUCCESS':
            return {product: action.payload}

        case 'PRODUCT_DETAILS_FAIL':
            return {product: action.payload}

        default:
            return state  

    }
};