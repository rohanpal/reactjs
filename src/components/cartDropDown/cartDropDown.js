import React from 'react'
import Custombutton from '../customButton/customButton'
import './cartDropDown.scss'
import CartItem from '../cartItem/cartItem'
import {connect} from 'react-redux'
import {selectCartItems} from '../../redux/cart/cartSelectors'
const cartDropDown = ({items}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    items.map(item=><CartItem key={item.id} item={item}/>)
                }
            </div>
            <Custombutton className="button">Go Checkout</Custombutton>
            
        </div>
    )
}
const mapStateToProps = (state)=>({
    items:selectCartItems(state)
})
export default connect(mapStateToProps)(cartDropDown)
