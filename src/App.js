import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import BestBooks from './Books';
import Profile from './Profile'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
              
              
              <Login/>
              <BestBooks/>
              
            </Route >
            <Route exact path="./Profile">
            <Profile/>

            
            </Route >
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
