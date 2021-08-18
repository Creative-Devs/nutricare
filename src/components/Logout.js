import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Card from 'react-bootstrap/Card';


function Logout() {
    const {
        isAuthenticated,
        logout,
    } = useAuth0();

    return isAuthenticated && (
        <Card >
            <Card.Body style={{ marginLeft: '1160px' }}>
                <button style={{ position: 'absolute', bottom: '5.7rem' }} onClick={() => {
                    logout({ returnTo: window.location.origin });
                }}>Log out</button>
            </Card.Body>
        </Card >
    );
}

export default Logout;
