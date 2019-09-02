import React from "react";
import "./checkOutItem.scss";
import { connect } from "react-redux";
import { removeItem,removeCartItem ,addItem} from "../../redux/cart/actions";
const checkOutItem = ({
  item,
  removeItem,removeCartItem,addItem
}) => {
    const  { name, quantity, price, imageUrl,id } = item
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
      <div className="arrow" onClick={()=>removeItem(item)}>&#10094;</div>
      <span className="value">{quantity}</span>
      <div className="arrow" onClick={()=>addItem(item)}>&#10095;</div>
      </span>
      <span className="price">{price}</span>
      <span className="remove-button" onClick={() => removeCartItem(id)}>
        &#10005;
      </span>
    </div>
  );
};
const mapDispatchToProps = dispatch => ({
  removeItem: item => dispatch(removeItem(item)),
  removeCartItem:id=>dispatch(removeCartItem(id)),
  addItem:(item)=>dispatch(addItem(item))
});
export default connect(
  null,
  mapDispatchToProps
)(checkOutItem);
