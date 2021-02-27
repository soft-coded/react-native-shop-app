export const ADD_ORDER="ADD_ORDER"

export function addOrder(cartItems,totalPrice){
    return {type: ADD_ORDER, cartItems, totalPrice}
}