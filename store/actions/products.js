export const DELETE_PRODUCT="DELETE_PRODUCT"
export const CREATE_PRODUCT="CREATE_PRODUCT"
export const UPDATE_PRODUCT="UPDATE_PRODUCT"

export function deleteProduct(id){
    return {type: DELETE_PRODUCT, productId: id}
}

export function createProduct(title, price, imageUrl, description){
    return {type: CREATE_PRODUCT, product: {title, price, imageUrl, description}}
}

export function updateProduct(id, title, price, imageUrl, description){
    return {type: UPDATE_PRODUCT, product: {id, title, price, imageUrl, description}}
}