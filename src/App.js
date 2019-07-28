import React from "react";
import Home from "./pages/homepage/homepage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";
import { auth } from "./firebse/firebaseUtil";

class App extends React.Component {
  state = {
    currentuser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user });
      console.log(this.state.currentuser);
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentuser}/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
