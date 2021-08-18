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

    componentDidMount = async () => {
        await axios.get(
            `http://localhost:3030/recipes?email=${this.state.ownerEmail}`
        ).then(axiosResponse => {
            console.log(axiosResponse.data)
            this.setState({
                favRecipes: axiosResponse.data
            });
        }).catch(error => alert(error));
    };

    render() {
        return (

            this.state.favRecipes.map((recipe, index) => (
                <Card style={{ width: '38rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark" >
                    <Card.Title className="p-3 text-white">Title: {recipe.label}</Card.Title>
                    <ListGroupItem>
                        <Card.Img style={{ height: '20rem' }} src={recipe.image} fluid="true" alt="No image for this recipe" />
                    </ListGroupItem>
                    <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                        {recipe.calories}
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>
                            Total Weight:{' '}
                            <span>
                                {recipe.totalWeight}
                            </span>
                        </ListGroupItem>
                        <ListGroupItem>
                            URL:{' '}
                            <span>
                                {recipe.url}
                            </span>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

            ))

        )
    }
}
export default withAuth0(FavRecipes);