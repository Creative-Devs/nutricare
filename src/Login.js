import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
// import './Login.css';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
  const {
    isAuthenticated,
    loginWithRedirect,
  } = useAuth0();

  return !isAuthenticated && (
    
   
    <Card style={{ width: '18rem' }}>
        <Card.Body>
          {/* <Card.Title>Log In</Card.Title> */}
          {/* <Card.Text>
            Click Below to Log In
          </Card.Text> */}
          <button onClick={loginWithRedirect}>Log in</button>
         </Card.Body>
       </Card> 
       
  );
}

export default Login;