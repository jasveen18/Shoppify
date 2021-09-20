export const reducer = (state,action) => {

    if(action.type === "REMOVE_ITEM"){
        return { ...state, item: state.item.filter((currItem) => {
            return currItem.id !==  action.payload
        })
      };
    };

    if(action.type === "CLEAR_ALL"){
        return {...state, item: []};
    };

    if(action.type === "INCREMENT"){
        const updatedCart = state.item.map((currElem)=>{
            if(currElem.id === action.payload){
                return {...currElem, quantity: currElem.quantity + 1};
            }
            return currElem;
        });

        return {...state , item:updatedCart}
    };

    if(action.type === "DECREMENT"){
        const updatedCart = state.item.map((currElem)=>{
            if(currElem.id === action.payload){
                return {...currElem, quantity: currElem.quantity - 1};
            }
            return currElem;
        }).filter((currElem)=>{
            return currElem.quantity !== 0;
        });

        return {...state , item:updatedCart}
    };

    if(action.type === "TOTAL_ITEMS"){
        let {totalItem, totalAmount} = state.item.reduce((accum, currVal) =>{
            let {quantity, price} = currVal;
            let totalPrize = price * quantity;
            accum.totalItem += quantity;
            accum.totalAmount += totalPrize; 
            return accum;
        }, {totalItem: 0, totalAmount: 0});

        return {...state, totalItem, totalAmount};
    }


    return state;
};