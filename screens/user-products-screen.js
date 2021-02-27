import React from 'react'
import {FlatList} from "react-native"
import {useSelector, useDispatch} from "react-redux"
import ListItem from "../components/user-products-item"
import Colours from '../constants/colours'
import {HeaderButtons, Item} from "react-navigation-header-buttons"
import CustHeaderButton from "../components/heder-button"
import {deleteProduct} from "../store/actions/products"

export default function UserProductsScreen({navigation}) {
    const userProducts=useSelector(state=>state.products.userProducts)
    const dispatch=useDispatch()
    return (
        <FlatList 
            data={userProducts}
            renderItem={({item})=><ListItem 
                item={item}
                onButtonPress={()=>dispatch(deleteProduct(item.id))}
                onPress={()=>navigation.navigate("EditProds",{title: item.title, id: item.id})}
            />}
            style={{flex: 1, backgroundColor: Colours.background}}
        />
    )
}

UserProductsScreen.navigationOptions=navData=>{

    return {
        headerTitle: "Your Products",
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Menu" iconName="md-menu" 
                    onPress={()=>navData.navigation.toggleDrawer()}
                />
            </HeaderButtons>
        ),
        headerRight: (
            <HeaderButtons HeaderButtonComponent={CustHeaderButton}>
                <Item title="Menu" iconName="md-create" 
                    onPress={()=>navData.navigation.navigate("EditProds", {title: "New Item"})}
                />
            </HeaderButtons>
        )
    }
}
