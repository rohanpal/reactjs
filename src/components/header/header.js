import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import { auth } from "../../firebse/firebaseUtil";
import {connect} from 'react-redux'
import CartIcon from '../cart/cart'
import CartDropDown from '../cartDropDown/cartDropDown'
import {toggleCart} from '../../redux/cart/actions'
import "./header.scss";
import {createStructuredSelector} from 'reselect'
import {selectCartHidden} from '../../redux/cart/cartSelectors'
import {selectCurrentUser} from '../../redux/user/userSelector'

const header = ({currentUser,hidden,toggleCart}) => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo" />
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div onClick={() => auth.signOut()} className="option">
            Sign Out
          </div>
        ) : (
          <Link to="signin" className="option">
            LOGIN
          </Link>
        )}
        <CartIcon />
      </div>
      {!hidden && <CartDropDown/>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
  hidden:selectCartHidden
})
export default connect(mapStateToProps,{toggleCart})(header);
