import React,{useState} from 'react'
import { StatusBar } from 'expo-status-bar'
import AppLoading from "expo-app-loading"
import * as Font from "expo-font"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import productsReducer from "./store/reducers/products"
import cartReducer from "./store/reducers/cart"
import ordersReducer from "./store/reducers/orders"
import Navigator from "./navigation/shops-navigator"

const rootReducer=combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer
})

const store=createStore(rootReducer)

function getFonts(){
  return Font.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf")
  })
}

export default function App() {
  const [fontsLoaded,setFontsLoaded]=useState(false)

  if(!fontsLoaded)
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={()=>setFontsLoaded(true)}
        onError={err=>console.log(err)}
      />
    )

  return (
    <>
      <StatusBar style="inverted"/>
      <Provider store={store}>
        <Navigator/>
      </Provider>
    </>
  )
}