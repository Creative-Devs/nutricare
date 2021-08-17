import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import {  Card, ListGroup, ListGroupItem} from 'react-bootstrap';
//import './Profile.css';

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
                <Card className='card' style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
  <Card.Body>
    <Card.Title>label</Card.Title>
    <Card.Text>
    Recipe Details:{' '}
    recipe
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem> totalWeight:{' '}
    Cras justo odio</ListGroupItem>
    <ListGroupItem> Calories:{' '}</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
  </ListGroup>
  <Card.Body>
    <Card.Link href="#">Source:{' '}</Card.Link>
    
  </Card.Body>
</Card>
            </div>
        )
    );
};

export default Profile;
