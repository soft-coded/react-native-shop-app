import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from "react-native"
import {Ionicons} from "@expo/vector-icons"
import Colours from '../constants/colours'

export default function CartItem({item, onDelete}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{item.quantity}</Text>
            <Text style={styles.text} numberOfLines={1}>{item.title}</Text>
            <Text style={styles.text}>${item.sum.toFixed(2)}</Text>
            <TouchableOpacity onPress={onDelete} activeOpacity={0.7}>
                <Ionicons name="md-trash" color="red" size={26}/>
            </TouchableOpacity>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "95%",
        height: 60,
        marginTop: 20,
        backgroundColor: Colours.secondary+"70",
        borderRadius: 5,
        paddingHorizontal: 20
    },
    text: {
        color: "white",
        fontSize: 20,
        fontFamily: "open-sans-bold",
        maxWidth: "40%"
    }
})