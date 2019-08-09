import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/cart/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/actions'

import './cart.scss'
const cart = ({toggleCart}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}> 
            <CartIcon className="shopping-icon"/>
            <span className="item-count">3</span>
        </div>
    )
}



export default connect(null,{toggleCart})(cart)
