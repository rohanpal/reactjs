import React from "react";
import Custombutton from "../customButton/customButton";
import "./cartDropDown.scss";
import CartItem from "../cartItem/cartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";
import { toggleCart } from "../../redux/cart/actions";
import { withRouter } from "react-router-dom";
const cartDropDown = ({ items, history, dispatch }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.length ? (
          items.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <Custombutton
        onClick={() => {
          history.push("/checkout");
          dispatch(toggleCart());
        }}
      >
        Go Checkout
      </Custombutton>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  items: selectCartItems
});
export default withRouter(connect(mapStateToProps)(cartDropDown));
