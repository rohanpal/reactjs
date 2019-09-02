import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/cart/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/actions'
import {selectCartItemsCount} from '../../redux/cart/cartSelectors'

import './cart.scss'
import { createStructuredSelector } from 'reselect';
const cart = ({toggleCart,totalCartItems}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}> 
            <CartIcon className="shopping-icon"/>
            <span className="item-count">{totalCartItems}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    totalCartItems:selectCartItemsCount
})

export default connect(mapStateToProps,{toggleCart})(cart)
