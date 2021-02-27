import { createStackNavigator, createDrawerNavigator, createAppContainer } from "react-navigation"
import AllProducts from "../screens/all-products-screen"
import ProductDetails from "../screens/product-details-screen"
import Cart from "../screens/cart-screen"
import Colours from "../constants/colours"
import OrdersScreen from "../screens/orders-screen"
import UsProScreen from "../screens/user-products-screen"
import EditProScreen from "../screens/edit-products-screen"

const ProductsStack=createStackNavigator({
    AllProducts: AllProducts,
    ProductDetails: ProductDetails,
    Cart: Cart
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colours.background
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            letterSpacing: 1,
            color: "white",
            fontSize: 30
        }
    },
    headerLayoutPreset: "center"
})

const OrdersStack=createStackNavigator({
    Orders: OrdersScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colours.background
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            letterSpacing: 1,
            color: "white",
            fontSize: 30
        },
    },
    headerLayoutPreset: "center"
})

const UserProductsStack=createStackNavigator({
    UserProds: UsProScreen,
    EditProds: EditProScreen
}, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Colours.background
        },
        headerTitleStyle: {
            fontFamily: "open-sans-bold",
            letterSpacing: 1,
            color: "white",
            fontSize: 30
        },
    },
    headerLayoutPreset: "center"
})

const ShopDrawer=createDrawerNavigator({
    Products: ProductsStack,
    Orders: OrdersStack,
    UserProducts: UserProductsStack
},{
    contentOptions: {
        activeTintColor: Colours.orange,
        inactiveTintColor: "grey",
        labelStyle: {
            fontSize: 25,
            letterSpacing: 1
        }
    },
    drawerBackgroundColor: Colours.tertiary+"90"
})

export default createAppContainer(ShopDrawer)