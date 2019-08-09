import React from "react";
import Home from "./pages/homepage/homepage";
import "./App.css";
import { Route, Switch,Redirect } from "react-router-dom";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/header/header";
import SignInAndSignUp from "./pages/signInAndSignUp/signInAndSignUp";
import { auth, createUserProfileDocument } from "./firebse/firebaseUtil";
import {connect} from 'react-redux'
import {setCurrentUser} from './redux/user/action'



class App extends React.Component {
 
  unsubscribeFromAuth = null;
  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser(
            {
              id: snapShot.id,
              ...snapShot.data()
            }
          );
        });
      } else {
        setCurrentUser(null);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    console.log(this.props.currentUser);
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render = {()=>this.props.currentUser?(<Redirect to="/"/>):<SignInAndSignUp/>} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({user})=>({
  currentUser:user.currentUser
})
const mapActionToProps = dispatch=>({
  setCurrentUser :user=> dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapActionToProps)(App);
