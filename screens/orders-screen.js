import React from 'react'
import {FlatList} from "react-native"
import {useSelector} from "react-redux"
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import CustHeaderButton from "../components/heder-button"
import OrderItem from "../components/order-item"
import Colours from "../constants/colours"

export default function OrdersScreen() {
    const currOrders=useSelector(state=>state.orders.orders)
    return (
        <FlatList 
            data={currOrders}
            renderItem={({item})=><OrderItem item={item}/>}
            style={{flex: 1, backgroundColor: Colours.background}}
            contentContainerStyle={{alignItems: "center"}}
        />
    )
}

OrdersScreen.navigationOptions=navData=>{
    return {
        headerTitle: "Your Orders",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Menu" iconName="md-menu" 
                    onPress={()=>navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
}
