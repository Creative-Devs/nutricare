import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import { Form, Button } from "react-bootstrap";
import swal from 'sweetalert';


class FoodAPI extends React.Component {
    state = {
        recipes: [],
        calories: [],
        favRecipes: [],
        ownerEmail: this.props.auth0.user.email,
        displayAddModal: false,
        updateRecipeObj: {},
        showUpdateModal: false,
        showCards: false,
    };


    recipeSearching = e => {
        e.preventDefault();
        const recipeSearch = e.target.search.value;
        const url = `https://api.edamam.com/search?app_id=deaf362d&app_key=da028fb12902501b23d2358ae3006d81&q=${recipeSearch}`;
        axios
            .get(url)
            .then(result => {
                console.log(result.data)
                this.setState({
                    recipes: result.data.hits,
                    showCards: true
                })
            })
    }

    addRecipe = (index) => {
        console.log(this.state.recipes[index].recipe.label)
        const body = {
            ownerEmail: this.props.auth0.user.email,
            label: this.state.recipes[index].recipe.label,
            image: this.state.recipes[index].recipe.image,
            calories: this.state.recipes[index].recipe.calories,
            totalWeight: this.state.recipes[index].recipe.totalWeight,
            url: this.state.recipes[index].recipe.url,
        };
        axios.post(`http://localhost:3030/recipe`, body).then(axiosResponse => {
            console.log(axiosResponse.data);

        }).catch(error => alert(error));

        swal({
            title: "Added To Your Favorite",
            icon: "success",
            button: "Aww yiss!",
        });
    }

    render() {
        return (
            <div className='foodapi' style={{ backgroundColor: 'RGB(233, 214, 233)' }}>
                <h1 className='headerclass' style={{ color: '#8D2828', fontFamily: 'Patrick Hand, cursive' }}>Healthy Recipes</h1>

                <Card style={{ marginLeft: '100px', marginRight: '100px', backgroundColor: 'rgb(241, 221, 221)' }}>
                    <Form className="recipeform" style={{ width: "65%", marginLeft: "15%" }}
                        onSubmit={this.recipeSearching}>
                        <Button style={{ height: '56px', marginLeft: '625px', position: 'relative', top: '86px', left: '27%', backgroundColor: '#8D2828', fontSize: "20px", fontFamily: 'Helvetica' }} className="formbutton" type='submit'>Search</Button>
                        <Form.Group className="mb-5" controlId="formBasicEmail">
                            <Form.Control style={{ height: '60px' }} placeholder='Search For Healthy Recipes' type="text" name="search" />
                        </Form.Group>

                    </Form>
                </Card>

                {this.state.showCards &&
                    this.state.recipes.map((recipe, index) => (
                        <Card key={index} style={{ width: '20rem', float: 'right', margin: '8rem 4rem 1rem 2rem', backgroundColor: '#8D2828' }} >
                            <Card.Title className="p-3 text-white" > {recipe.recipe.label}</Card.Title>
                            <ListGroupItem>
                                <Card.Img src={recipe.recipe.image} fluid="true" alt="No image for this movie" />
                            </ListGroupItem>
                            <Card.Body style={{ maxHeight: '10rem', backgroundColor: '#E3DFC8' }}>
                                Calories:{' '}
                                {Math.round(recipe.recipe.calories) + ' kcal'}
                            </Card.Body>
                            <ListGroup >
                                <ListGroupItem style={{ backgroundColor: '#E3DFC8' }}>
                                    totalWeight:{' '}
                                    <span>
                                        {Math.round(recipe.recipe.totalWeight) + ' g'}
                                    </span>
                                </ListGroupItem >
                                <ListGroupItem style={{ backgroundColor: '#E3DFC8' }}>
                                    Get More {' '}
                                    <span >
                                        <a href={recipe.recipe.url}>Details</a>
                                    </span>
                                </ListGroupItem>
                                <Button style={{ backgroundColor: '#8D2828', marginTop: '8rem', marginLeft: '4rem' }} onClick={() => this.addRecipe(index)}>Love it</Button>

                            </ListGroup>
                        </Card>
                    ))}

                <style>
                    @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
                </style>
            </div>

        )
    }
}

export default withAuth0(FoodAPI);
