import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/logo/crown.svg";
import { auth } from "../../firebse/firebaseUtil";
import "./header.scss";
const header = ({ currentUser }) => {
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
          Sign In
        </Link>
      )}
      </div>

      
    </div>
  );
};

export default header;
