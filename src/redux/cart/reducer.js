import {TOGGLE_CART,ADD_ITEM,REMOVE_CART_ITEM,REMOVE_ITEM} from './types'
import {addItemToCart,removeItemFromCart} from './utils'
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
        case REMOVE_CART_ITEM:
            return{
                ...state,
                items:state.items.filter(item=>item.id!==action.payload)
            }
        case REMOVE_ITEM:
            return{
                ...state,
                items:removeItemFromCart(state.items,action.payload)
            }
        default:
            return state
    }
}
export default toggleCart