import React, {useState, useCallback, useEffect} from 'react'
import {View, Text, TextInput, StyleSheet} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import Colours from "../constants/colours"
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import CustHeaderButton from "../components/heder-button"
import {updateProduct, createProduct} from "../store/actions/products"

export default function EditUserProduct({navigation}){
    const currProd=useSelector(state=>
        state.products.userProducts.find(prod=>prod.id===navigation.getParam("id"))
    )
    const dispatch=useDispatch()
    const [title, setTitle]=useState(currProd? currProd.title: "")
    const [imageUrl, setImageUrl]=useState(currProd? currProd.imageUrl: "")
    const [price, setPrice]=useState(currProd? currProd.price.toString(): "")
    const [description, setDescription]=useState(currProd? currProd.description: "")

    const onSubmit=useCallback(()=>{
        dispatch(
            currProd? updateProduct(currProd.id, title, price, imageUrl,description): createProduct(title, price, imageUrl, description)
        )
    },[title, price, imageUrl, description])

    useEffect(()=>{
        navigation.setParams({submit: onSubmit})
    },[onSubmit])

    return (
        <View style={styles.container}>
            <View style={styles.formControl}>
                <Text style={styles.text}>Title</Text>
                <TextInput style={styles.input} value={title} onChangeText={text=>setTitle(text)} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.text}>Image URL</Text>
                <TextInput style={styles.input} value={imageUrl} onChangeText={text=>setImageUrl(text)} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.text}>Price</Text>
                <TextInput style={styles.input} value={price} onChangeText={text=>setPrice(text)} />
            </View>
            <View style={styles.formControl}>
                <Text style={styles.text}>Description</Text>
                <TextInput style={styles.input} value={description} onChangeText={text=>setDescription(text)} />
            </View>
        </View>
    )
}

EditUserProduct.navigationOptions=navData=>{
    const onSubmit=navData.navigation.getParam("submit")
    return {
        headerTitle: navData.navigation.getParam("title"),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Menu" iconName="md-checkmark" 
                    onPress={()=>{onSubmit(); navData.navigation.goBack()}}
                />
            </HeaderButtons>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background
    },
    formControl: {
        width: "100%",
        margin: 10 
    },
    text: {
        color: Colours.primary,
        fontSize: 25,
        fontFamily: "open-sans-bold",
        marginBottom: 10
    },
    input: {
        color: "white",
        fontSize: 20,
        fontFamily: "open-sans",
        borderBottomColor: "white",
        borderWidth: 2
    }
})