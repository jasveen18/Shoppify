import React,{createContext,useEffect,useReducer} from 'react'
import Home from './Home';
import './App.css'
import { products } from './Products';
import { reducer } from './reducer';


export const CartContext = createContext();

const initialState = {
    item:products,
    totalAmount:0,
    totalItem:0,
};

const Cart = () => {
    
    const [state, dispatch] = useReducer(reducer, initialState)

    const removeItem = (id) => {
        return dispatch({
            type:"REMOVE_ITEM",
            payload: id,       
        });
    };

    const clearCart = () => {
        return dispatch({
            type:"CLEAR_ALL",      
        });
    };

    const increment = (id) => {
        return dispatch({
            type:"INCREMENT",
            payload: id,      
        });
    };

    const decrement = (id) => {
        return dispatch({
            type:"DECREMENT",
            payload: id,      
        });
    };

    useEffect(()=> {
        dispatch({type: "TOTAL_ITEMS"});
    }, [state.item]);

    return (
        <CartContext.Provider value={{...state , removeItem, clearCart, increment, decrement}}>
            <Home />
        </CartContext.Provider>
    )
}

export default Cart
