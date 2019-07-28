import React from 'react'
import './customButton.scss'
const customButton = ({children,isGoogleSignIn,...restProps}) => {
    return (
        <button {...restProps} className={`${isGoogleSignIn?'google-sign-in':''} custom-button`}>
            {children}
        </button>
    )
}

export default customButton
