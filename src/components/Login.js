import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { useAuth0 } from '@auth0/auth0-react';

function Login() {
    const {
        isAuthenticated,
        loginWithRedirect,
    } = useAuth0();

    return !isAuthenticated && (


        <Card >
            <Card.Body style={{ marginLeft: '1100px' }}>
                <button style={{ position: 'absolute', bottom: '5.7rem' }} onClick={loginWithRedirect}>Log in</button>
            </Card.Body>
        </Card>

    );
}

export default Login;
