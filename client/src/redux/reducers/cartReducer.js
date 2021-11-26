
export const addToCartReducer = (state = { cartItems: []}, action) => {
    switch(action.type){
        case 'ADD_TO_CART': 
            const item = action.payload;

            const itemExist = state.cartItems.find(product => product.id === item.id);

            if(itemExist)
                return;

            return {...state, cartItems: [...state.cartItems, item]}
            
        case 'ADD_TO_CART_FAIL':
            return {error: action.payload}

        case 'REMOVE_ITEM':
            return {...state, cartItems: [state.cartItems.filter(product => product.id !== action.payload)]}    
                
        default:
            return state    
 
    }

};