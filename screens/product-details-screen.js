import React from 'react'
import {ScrollView, Text, Button, Image, StyleSheet} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import Colours from "../constants/colours"
import DefaultText from "../components/default-text"
import * as cartActions from "../store/actions/cart"

export default function ProductDetails({navigation}) {
    const productId=navigation.getParam("itemId")
    const item=useSelector(state=>
        state.products.availableProducts.find(product=>
            product.id===productId
        )
    )
    const dispatch=useDispatch()
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{uri: item.imageUrl}} style={styles.image} resizeMode="cover"/>
            <Button 
                color={Colours.orange} 
                title="Add to Cart"
                onPress={()=>dispatch(cartActions.addToCart(item))}
            />
            <DefaultText style={styles.textContainer} textStyle={styles.price}>${item.price}</DefaultText>
            <Text style={styles.text}>{item.description}</Text>
        </ScrollView>
    )
}

ProductDetails.navigationOptions=navData=>{
    return {
        headerTitle: navData.navigation.getParam("itemTitle")
    } 
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background,
        alignItems: "center"
    },
    image: {
        width: "95%",
        height: 300,
        marginVertical: 20,
        marginHorizontal: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colours.crimson
    },
    textContainer: {
        marginVertical: 20
    },
    price: {
        color: "#ffffff80",
        fontSize: 30
    },
    text: {
        fontSize: 20,
        color: "#d3d3d3",
        fontFamily: "open-sans-bold",
        textAlign: "center",
        marginHorizontal: 10
    }

})