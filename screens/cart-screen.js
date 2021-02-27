import React from 'react'
import {View, Text, FlatList, Button, StyleSheet} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import Colours from "../constants/colours"
import CartItem from "../components/cart-item"
import {removeFromCart} from "../store/actions/cart"
import {addOrder} from "../store/actions/orders"

export default function CartScreen(){
    const cartItems=useSelector(state=>state.cart.items)
    const totalPrice=useSelector(state=>state.cart.totalPrice)
    const dispatch=useDispatch()
    return (
        <View style={styles.container}>
            <View style={styles.priceContainer}>
                <View style={styles.innerPrice}>
                    <Text style={styles.text}>Total: </Text>
                    <Text style={styles.price}>${totalPrice.toFixed(2)}</Text>
                </View>
                <Button 
                    color={Colours.primary} 
                    title="Order Now" 
                    disabled={cartItems.length? false: true}
                    onPress={()=>dispatch(addOrder(cartItems,totalPrice))}
                />
            </View>
            <FlatList 
                data={cartItems}
                renderItem={({item})=><CartItem 
                    onDelete={()=>dispatch(removeFromCart(item.id))} 
                    item={item}
                />}
                contentContainerStyle={{alignItems: "center"}}
            />
        </View>
    )
}

CartScreen.navigationOptions={
    headerTitle: "Your Cart"
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background,
        alignItems: "center",
        paddingTop: 20
    },
    priceContainer: {
        backgroundColor: Colours.crimson+"90",
        width: "90%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10,
        height: 70,
        borderRadius: 10
    },
    text: {
        color: "white",
        fontSize: 25,
        fontFamily: "open-sans"
    },
    price: {
        color: Colours.primary,
        fontSize: 30,
        fontFamily: "open-sans-bold",
        textShadowColor: Colours.secondary,
        textShadowOffset: {width: 2, height: 2},
        textShadowRadius: 5
    },
    innerPrice: {
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "center"
    }
})