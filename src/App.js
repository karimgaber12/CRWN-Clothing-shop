/* eslint-disable no-unused-vars */
/* eslint-disable no-labels */
/* eslint-disable no-unused-labels */
/* eslint-disable no-unused-expressions */
import './App.css';
import HomePage from './pages/homePage/Homepage.component'
import {Route , Switch,Redirect} from 'react-router-dom'
import Shop from './pages/shop/Shop.component';
import Header from './components/header/header.component';
import CheckoutPage from './pages/checkout/checkout.component';
import SignIn from './pages/signIn-signUp/sign-in-sign-up.component';
import React from 'react';
import { auth,createUserProfileDoc } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
 // this is a higher order component that take the component as an argument and return procedure
 // connect component allow us to get any properties from our reducers
import {connect} from 'react-redux';

class App extends React.Component {
  unSubscripeFromAuth = null
  // state of user will be fitched after load all app and being aware of any change on user auth
  componentDidMount(){

    

    this.unSubscripeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      // save userAuth from database to state to use data in our app
      if (userAuth) {
        const userRef = await createUserProfileDoc(userAuth);
        userRef.onSnapshot(snapShot =>{
         this.props.setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              });
        });
      }
      this.props.setCurrentUser(userAuth);
    });
  }
  // finish any subscribtion to avoid any over load on app
  componentWillUnmount(){
    this.unSubscripeFromAuth()
  }
  render(){

    return (
      <div className="App">
        <Header/>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={Shop} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path="/signin" render={()=> this.props.currentUser ? (<Redirect to="/"/>) : (<SignIn/>)} />
  
      </Switch>
      </div>
    );
  }
}

  // get cuurent user from redux 
  const mapStateToProps = ({ user }) =>({
    currentUser: user.currentUser
  })
    // save state of user from reducer and allow for app.js to getCurrentUser
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);