import { ADD_ORDER } from "../actions/orders";

const initialState={
    orders: []
}

export default function(state=initialState, action){
    switch(action.type){
        case ADD_ORDER:
            newOrder={
                id: Date.now(),
                items: action.cartItems,
                totalPrice: action.totalPrice,
                time: new Date()
            }
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            }
        default:
            return state
    }
}