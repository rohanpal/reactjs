import {combineReducers} from 'redux'
import userReducer from './user/userReducer'
import cartReducer from './cart/reducer'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig={
    key:"root",
    storage,
    whiteList:["cart"]
}

const rootReducer=combineReducers({
    user:userReducer,
    cart:cartReducer
})

export default persistReducer(persistConfig,rootReducer)