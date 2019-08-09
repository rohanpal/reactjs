import React from 'react'
import Custombutton from '../customButton/customButton'
import './cartDropDown.scss'
const cartDropDown = () => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">

            </div>
            <Custombutton className="button">Go Checkout</Custombutton>
            
        </div>
    )
}

export default cartDropDown
