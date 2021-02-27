import React from 'react'
import {View, Button, TouchableOpacity, StyleSheet, Image} from "react-native"
import DefaultText from "../components/default-text"
import Colours from "../constants/colours"

export default function ListItem({item, onPress, onButtonPress}){
    return (
        <TouchableOpacity style={styles.container} activeOpacity={0.6} onPress={onPress}>
            <Image source={{uri: item.imageUrl}} style={styles.image} resizeMode="cover"/>
            <View style={styles.inner}>
                <DefaultText style={styles.textContainer} textStyle={styles.text}>{item.title}</DefaultText>
                <DefaultText textStyle={styles.price}>${item.price}</DefaultText>
            </View>
            <View style={styles.buttonContainer}>
                <Button color={Colours.orange} title="Add To Cart" onPress={onButtonPress} />
            </View>
        </TouchableOpacity>
    )
}

const styles=StyleSheet.create({
    container: {
        height: 350,
        margin: 10,
        borderRadius: 5,
        overflow: "hidden",
        backgroundColor: Colours.crimson+"90",
        paddingBottom: 30
    },
    inner: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        marginVertical: 5
    },
    textContainer: {
        justifyContent: "center",
        maxWidth: "70%",
        height: "15%"
    },
    text: {
        fontSize: 23,
        letterSpacing: 2,
        color: "white"
    },
    price: {
        color: Colours.primary,
        fontSize: 23
    },
    image: {
        width: "100%",
        height: "70%"
    },
    buttonContainer: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "15%"
    }
})
