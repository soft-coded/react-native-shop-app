import React,{useState} from 'react'
import {View, Text, Button, StyleSheet} from "react-native"
import Colours from "../constants/colours"

export default function OrderItem({item}) {
    const [details, setDetails]=useState(false)
    const [detailsText, setDetailsText]=useState("Show Details")
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.price}>${item.totalPrice.toFixed(2)}</Text>
                <Text style={styles.time}>{item.time.toLocaleDateString("en-IN",{
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                })}</Text>
            </View>
            <View style={styles.details}>
                {
                    details && item.items.map((orderItem, i)=>{
                        return (
                            <View style={styles.detailsContainer} key={i}>
                                <Text style={styles.text}>{orderItem.quantity}</Text>
                                <Text style={styles.text} numberOfLines={1}>{orderItem.title}</Text>
                                <Text style={styles.text}>${orderItem.sum.toFixed(2)}</Text>
                            </View>
                        )
                    })
                }
            </View>
            <Button 
                title={detailsText} 
                color={Colours.orange} 
                onPress={()=>{
                    setDetails(!details)
                    setDetailsText(detailsText==="Show Details"? "Hide Details": "Show Details")
                }}
            />
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        width: 400,
        maxWidth: "90%",
        backgroundColor: Colours.crimson+"80",
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginVertical: 20
    },
    innerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 10,
        marginVertical: 10
    },
    price: {
        color: Colours.primary,
        fontSize: 22,
        fontFamily: "open-sans-bold"
    },
    time: {
        color: Colours.primary,
        fontFamily: "open-sans",
        fontSize: 20
    },
    details: {
        width: "100%",
        alignItems: "center",
        marginBottom: 10
    },
    detailsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 60,
        marginVertical: 10,
        backgroundColor: Colours.secondary+"70",
        borderRadius: 5,
        paddingHorizontal: 20
    },
    text: {
        color: "white",
        fontSize: 20,
        fontFamily: "open-sans",
        maxWidth: "40%"
    }
})