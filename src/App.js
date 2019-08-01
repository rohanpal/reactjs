import React from "react";
import Home from "./pages/homepage/homepage";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";
import { auth, createUserProfileDocument } from "./firebse/firebaseUtil";

class App extends React.Component {
  state = {
    currentUser: null
  };
  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      } else {
        this.setState({ currentUser: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(this.state.currentUser)
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
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
