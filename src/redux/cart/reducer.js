import {TOGGLE_CART,ADD_ITEM} from './types'
import {addItemToCart} from './utils'
const initialState = {
    hidden:true,
    items:[]
}
const toggleCart = (state=initialState,action)=>{
    switch(action.type){
        case TOGGLE_CART:
            return{
                ...state,
                hidden:!state.hidden
            }
        case ADD_ITEM:
            return{
                ...state,
                items:addItemToCart(state.items,action.payload)
            }
        default:
            return state
    }
}
export default toggleCart