import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';

class FavRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favRecipes: [],
            ownerEmail: this.props.auth0.user.email,
            recipes: [],
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
    deleteRecipe = (index) => {
        axios.delete(
            `http://localhost:3030/recipe/${index}`
        ).then(axiosResponse => {
            if (axiosResponse) {
                const deletedRecipe = this.state.recipes.filter(recipe => recipe._id !== index);
                this.setState({
                    recipes: deletedRecipe,
                });
            }
        }).catch(error => alert(error));
    }

    render() {
        return (

            this.state.favRecipes.map((recipe, index) => (
                <Card style={{ width: '20rem', float: 'right', margin: '8rem 4rem 1rem 2rem', backgroundColor: '#8D2828' }} className="text-center mb-3 bg-dark" >
                    <Card.Title className="p-3 text-white">Title: {recipe.label}</Card.Title>
                    <ListGroupItem>
                        <Card.Img style={{ height: '20rem' }} src={recipe.image} fluid="true" alt="No image for this recipe" />
                    </ListGroupItem>
                    <Card.Body style={{ maxHeight: '10rem', backgroundColor: '#E3DFC8' }}>
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
                    <Button style={{ backgroundColor: '#8D2828', marginTop: '8rem', marginLeft: '4rem' }} onClick={() => this.deleteRecipe(index)}>Delete</Button>
                    {/* <Button style={{ backgroundColor: '#8D2828', marginTop: '8rem', marginLeft: '4rem' }} onClick={() => this.addRecipe(index)}>Love it</Button> */}
                </Card>


            ))

        )
    }
}
export default withAuth0(FavRecipes);