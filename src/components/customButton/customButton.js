import React from "react";
import "./customButton.scss";
const customButton = ({ children, isGoogleSignIn, inverted, ...restProps }) => {
  return (
    <button
      {...restProps}
      className={`${
        inverted ? "inverted" : ""
      } {isGoogleSignIn?'google-sign-in':''} custom-button`}
    >
      {children}
    </button>
  );
};

export default customButton;
