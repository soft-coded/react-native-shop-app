import React from "react"
import {HeaderButton} from "react-navigation-header-buttons"
import {Ionicons} from "@expo/vector-icons"
import Colours from "../constants/colours"

export default function CustHeaderButton(props){
    return <HeaderButton {...props} IconComponent={Ionicons} iconSize={35} color={Colours.primary} />
}