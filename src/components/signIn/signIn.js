import React, { Component } from "react";
import "./signIn.scss";
import CustomInput from "../formInput/formInput";
import CustomButton from "../customButton/customButton";
import { signInWithGoogle,auth } from "../../firebse/firebaseUtil";
export class signIn extends Component {
  state = {
    email: "",
    password: ""
  };
  handleSubmit =  async event => {
    event.preventDefault();
    const {email,password} = this.state
    try {
      await auth.signInWithEmailAndPassword(email,password)
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.error(error)
    }
    
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <CustomInput
            name="email"
            value={this.state.email}
            required
            type="email"
            handleChange={this.handleChange}
            label="Email"
          />

          <CustomInput
            name="password"
            value={this.state.password}
            required
            type="password"
            handleChange={this.handleChange}
            label="password"
          />

          <div className="buttons">
            <CustomButton type="submit">Login</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              signIn with google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default signIn;
