import React from 'react'
import {View, Text, StyleSheet} from "react-native"
import Colours from "../constants/colours"

function DefaultText({children, textStyle, style}) {
    return (
        <View style={style}>
            <Text numberOfLines={1} style={{...styles.text, ...textStyle}}>{children}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    text: {
        color: Colours.primary,
        fontFamily: "open-sans-bold"
    }
})

export default DefaultText
