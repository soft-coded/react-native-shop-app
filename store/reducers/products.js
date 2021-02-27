import { PRODUCTS } from "../../data/data"
import {DELETE_PRODUCT, CREATE_PRODUCT, UPDATE_PRODUCT} from "../actions/products"

const initialState={
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(product=>product.ownerId==="me")
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(item=>item.id!==action.productId)
            }
            
        case UPDATE_PRODUCT:
            const currProd=state.userProducts.findIndex(prod=>prod.id===action.product.id)
            state.userProducts[currProd].title=action.product.title
            state.userProducts[currProd].imageUrl=action.product.imageUrl
            state.userProducts[currProd].price=action.product.price
            state.userProducts[currProd].description=action.product.description
            return {
                ...state,
                userProducts: state.userProducts
            }
            
        case CREATE_PRODUCT:
            const newProd={
                id: Date.now(),
                ownerId: "me",
                title: action.product.title,
                price: action.product.price,
                description: action.product.description,
                imageUrl: action.product.imageUrl
            }
            return {
                ...state,
                userProducts: state.userProducts.concat(newProd)
            }
            
        default:
            return state
    }
}