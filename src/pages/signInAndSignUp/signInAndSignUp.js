import React from 'react'
import './signInAndSignUp.scss'
import SignIn from '../../components/signIn/signIn'

import SignUp from '../../components/signUp/signUp';
const signInAndSignUp = () => {
    return (
        <div className="signInAndSignUp">
            <SignIn/>
            <SignUp/>
        </div>
    )
}

export default signInAndSignUp
