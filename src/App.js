import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shoppage/shoppage.component';
import Header from './components/header/header.component';
import SigninSignup from './pages/sigin-signup/signin-signup.component';
import { auth } from './firebase/firebase.utils';
class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      currentuser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentuser: user})
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
      return (
      <div>
      <Header currentuser={this.state.currentuser}/>
      <Switch>
        <Route exact path='/' component={ HomePage } />
        <Route path='/shop' component={ ShopPage } />
        <Route path='/signin' component={ SigninSignup } />
      </Switch>
      </div>
    );
  }
  
}

export default App;
