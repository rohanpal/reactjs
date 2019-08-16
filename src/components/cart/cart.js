import React from 'react'
import {ReactComponent as CartIcon} from '../../assets/cart/shopping-bag.svg'
import {connect} from 'react-redux'
import {toggleCart} from '../../redux/cart/actions'
import {selectCartItemsCount} from '../../redux/cart/cartSelectors'

import './cart.scss'
const cart = ({toggleCart,totalCartItems}) => {
    return (
        <div className="cart-icon" onClick={toggleCart}> 
            <CartIcon className="shopping-icon"/>
            <span className="item-count">{totalCartItems}</span>
        </div>
    )
}

const mapStateToProps = (state)=>({
    totalCartItems:selectCartItemsCount(state)
})

export default connect(mapStateToProps,{toggleCart})(cart)
