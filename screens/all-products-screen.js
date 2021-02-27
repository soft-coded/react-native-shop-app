import React from 'react'
import {FlatList, StyleSheet} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import * as cartActions from "../store/actions/cart"
import ListItem from "../components/list-item"
import Colours from "../constants/colours"
import CustHeaderButton from "../components/heder-button"
import {HeaderButtons,Item} from "react-navigation-header-buttons"

function AllProductsScreen({navigation}){
    const products=useSelector(state=>state.products.availableProducts)
    const dispatch=useDispatch()
    return (
        <FlatList 
            data={products}
            renderItem={({item})=>(
                <ListItem 
                    item={item}
                    onPress={()=>navigation.navigate("ProductDetails",{itemId: item.id, itemTitle: item.title})}
                    onButtonPress={()=>dispatch(cartActions.addToCart(item))}
                />
            )}
            style={styles.container}
        />
    )
}

AllProductsScreen.navigationOptions=navData=>{
    return {
        headerTitle: "Our Products",
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Cart" iconName="md-cart" 
                    onPress={()=>navData.navigation.navigate("Cart")}
                />
            </HeaderButtons>
        ),
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Menu" iconName="md-menu" 
                    onPress={()=>navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colours.background
    }
})

export default AllProductsScreen
