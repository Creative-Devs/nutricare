import React from 'react';
// import Header from './Header';
import IsLoadingAndError from './IsLoadingAndError';
// import Footer from './Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './Login'
import Logout from './Logout'
import Profile from './Profile'
import Home from './Components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {


  render() {
    const {isAuthenticated} =this.props.auth0;
    console.log('app', this.props);
    console.log(isAuthenticated);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            {/* <Header /> */}
            <Switch>
              <Route exact path="/">
                {(isAuthenticated &&
                  <>
                    <Home />
                    <Logout />
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <Login />
                  </>
                )}
              </Route>
              <Route exact path="/profile">
                {isAuthenticated && (
                  <>
                    <Profile />
                  </>
                )}
              </Route>
                      {/* <Route exact path="/programs">
                <Programs/>
              </Route>
            
              <Route exact path="/services">
                <Services/>
              </Route>

              <Route exact path="/aboutus">
                <Aboutus/>
              </Route> */}
            </Switch>
            {/* <Footer /> */}
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);