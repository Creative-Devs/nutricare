import React from 'react';
import Header from './components/Header';
import IsLoadingAndError from './components/isLoadingAndError';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { withAuth0 } from '@auth0/auth0-react';
import Login from './components/Login'
import Logout from './components/Logout'
import Profile from './components/Profile'
import Home from './components/Home'
import 'bootstrap/dist/css/bootstrap.min.css';
import Programs from './components/Programs';


class App extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    console.log('app', this.props);
    console.log(isAuthenticated);
    return (
      <>
        <Router>
          <IsLoadingAndError>
            <Header />
            <Switch>
              <Route exact path="/">
                {(isAuthenticated &&
                  <>
                    {/* <Logout /> */}
                    <Home />
                  </>
                )}
                {!isAuthenticated && (
                  <>
                    <Login />
                    <Home />
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
              <Route exact path="/programs">
                <Programs/>
              </Route>
            
              {/* <Route exact path="/services">
                <Services/>
              </Route>
              <Route exact path="/aboutUs">
                <AboutUs/>
              </Route> */}

            </Switch>
            <Footer />
          </IsLoadingAndError>
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
