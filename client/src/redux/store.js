import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { getProductReducer, getProductDetailsReducer } from './reducers/productReducers';
import { addToCartReducer } from './reducers/cartReducer';

const reducer = combineReducers({
    getProductReducer,
    getProductDetailsReducer,
    addToCartReducer

});

const middleware = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))

);

export default store; 