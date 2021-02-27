import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cart"
import { ADD_ORDER } from "../actions/orders"

const initialState={
    items: [],
    totalPrice: 0
}

export default (state=initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
            const key=action.product.id
            const present=state.items.findIndex(item=>item.id===key)
            if(present>=0){
                state.items[present].quantity++
                state.items[present].sum+=action.product.price
                return {
                    ...state,
                    items: state.items,
                    totalPrice: state.totalPrice+action.product.price
                }
            }
            else{
                const addItem={
                    id: key,
                    quantity: 1,
                    price: action.product.price,
                    sum: action.product.price,
                    title: action.product.title
                }
                return {
                    ...state,
                    items: [...state.items, addItem],
                    totalPrice: state.totalPrice+action.product.price
                }
            }

        case REMOVE_FROM_CART:
            const itemInd=state.items.findIndex(item=>item.id===action.itemId)
            const price=state.items[itemInd].price
            if(state.items[itemInd].quantity>1){
                state.items[itemInd].quantity--
                state.items[itemInd].sum-=price
            }
            else
                state.items.splice(itemInd,1)
            return{
                ...state,
                items: state.items,
                totalPrice: state.totalPrice-price    
            }
        case ADD_ORDER:
            return initialState
            
        default:
            return state
    }
}