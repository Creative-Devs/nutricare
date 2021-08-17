import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class FavRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favRecipes: [],
            ownerEmail: this.props.auth0.user.email,
        }
    }
    getRecipes = async () => {
        await axios.get(
            `http://localhost:3030/recipes?email=${this.state.ownerEmail}`
        ).then(axiosResponse => {
            this.setState({
                favRecipes: axiosResponse.data
            });
            console.log(this.favRecipes);
        }).catch(error => alert(error));
    };

    render() {
        return (
            <>
                <Card style={{ width: '38rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
                    <Card.Title className="p-3 text-white">Title: {this.favRecipes[0].label}</Card.Title>
                    <ListGroupItem>
                        <Card.Img style={{ height: '20rem' }} src={this.state.favRecipes[0].image} fluid="true" alt="No image for this recipe" />
                    </ListGroupItem>
                    <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                        {this.state.favRecipes[0].calories}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Total Weight:{' '}
                            <span>
                                {this.state.favRecipes[0].totalWeight}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            URL:{' '}
                            <span>
                                {this.state.favRecipes[0].url}
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>
            </>
        )
    }
}
export default withAuth0(FavRecipes);