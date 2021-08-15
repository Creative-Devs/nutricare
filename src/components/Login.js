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


        <Card >
            <Card.Body style={{ marginLeft: '1200px' }}>
                <button style={{ position: 'absolute', bottom: '55px' }} onClick={loginWithRedirect}>Log in</button>
            </Card.Body>
        </Card>

    );
}

export default Login;