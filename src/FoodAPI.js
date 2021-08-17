import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import { Form, Button } from "react-bootstrap";
import RecipeFormModal from "./components/RecipeFormModal"
import UpdatedRecipe from "./components/UpdatedRecipe"
class FoodAPI extends React.Component {
    state = {
        recipes: [],
        calories: [],
        unit: 'kcal',
        ownerEmail: this.props.auth0.user.email,
        displayAddModal: false,
        updateRecipeObj: {},
        showUpdateModal: false,
    };
    handelDisplayModal = () => {
        this.setState({ displayAddModal: true });
    }
    handelUpdatedModal = (item) => {
        this.setState({ showUpdateModal: true, updateBookObj: item });
    }


    recipeSearching = e => {
        e.preventDefault();
        const recipeSearch = e.target.search.value;
        const url = `https://api.edamam.com/search?app_id=deaf362d&app_key=da028fb12902501b23d2358ae3006d81&q=${recipeSearch}`;
        axios
            .get(url)
            .then(result => {
                console.log(result.data)
                this.setState({
                    recipes: result.data.hits
                })
            })
    }
    addRecipe = (e) => {
        e.preventDefault();

        const body = {
            ownerEmail: this.props.auth0.user.email, // we are getting the email of the user from auth0
            label: e.target.label.value,
            image: e.target.image.value,
            calories: e.target.calories.value,
            totalWeight: e.target.totalWeight.value,
            url: e.target.url.value,
        };
        axios.post(`http://localhost:3030/recipe`, body).then(axiosResponse => {
            // console.log(axiosResponse.data);
            this.state.recipes.push(axiosResponse.data);
            this.setState({
                recipes: this.state.recipes

            });
            console.log(this.state.recipes);

        }).catch(error => alert(error));
        this.setState({ displayAddModal: false });
    }
    deleteRecipe = (index) => {
        axios.delete(
            `http://localhost:3030/recipe/${index}`
        ).then(axiosResponse => {
            if (axiosResponse) {
                const deletedRecipe = this.state.recipes.filter(recipe => recipe._id !== index);
                this.setState({
                    recipe: deletedRecipe,
                });
            }
        }).catch(error => alert(error));
    }

    UpdateRecipe = ((e) => {
        e.preventDefault();
        const recipeId = this.state.updateRecipeObj._id;
        const body = {
            label: e.target.label.value,
            image: e.target.image.value,
            calories: e.target.calories.value,
            totalWeight: e.target.totalWeight.value,
            url: e.target.url.value,
        };

        axios.put(`http://localhost:3030/recipe/${recipeId}`, body).then((axiosResponse) => {
            console.log('updated Recipe Data:  ', axiosResponse.data);


            const updatedRecipeArr = this.state.recipes.map(recipe => {

                if (recipe._id === recipeId) {
                    recipe.label = axiosResponse.data.label;
                    recipe.image = axiosResponse.data.image;
                    recipe.calories = axiosResponse.data.calories;
                    recipe.totalWeight = axiosResponse.data.totalWeight;
                    recipe.url = axiosResponse.data.url;

                    return recipe;
                }
                return recipe;

            });
            this.setState({ recipes: updatedRecipeArr })
            this.handelUpdatedModal({})
            this.setState({ showUpdateModal: false });


        }).catch(error => alert(error));
    });



    calorieCalculator = e => {
        e.preventDefault();
        const caloriesSearch = e.target.calories.value;
        const url = `https://api.edamam.com/api/nutrition-data?app_id=cf3d9a5c&app_key=792374f75d59c4ae14eb1a0e5e280fab&nutrition-type=cooking&ingr=${caloriesSearch}`;
        axios
            .get(url)
            .then(result => {
                console.log(result.data)
                this.setState({
                    calories: result.data.calories,
                })
            })
    }

    render() {
        return (
            <div>
                <Button variant="secondary" onClick={() => this.handelDisplayModal()}>Add a Recipe</Button>

                <RecipeFormModal
                    show={this.state.displayAddModal}
                    handelDisplayModal={this.handelDisplayModal}
                    addRecipe={this.addRecipe}
                />
                {this.state.showUpdateModal &&
                    <UpdatedRecipe
                        show={this.state.showUpdateModal}
                        close={this.handelUpdatedModal}
                        UpdateRecipe={this.UpdateRecipe}
                        updateRecipeObj={this.state.updateRecipeObj}
                    />
                }

                {this.state.recipes.map((recipe, id) => (
                    <Card key={id} style={{ width: '20rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
                        <Card.Title className="p-3 text-white">Name: {recipe.recipe.label}</Card.Title>
                        <ListGroupItem>
                            <Card.Img src={recipe.recipe.image} fluid="true" alt="No image for this movie" />
                        </ListGroupItem>
                        <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                            Calories:{' '}
                            {Math.round(recipe.recipe.calories) + ' kcal'}
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                totalWeight:{' '}
                                <span>
                                    {Math.round(recipe.recipe.totalWeight) + ' g'}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Recipe Details:{' '}
                                <span>
                                    {recipe.recipe.url}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Source:{' '}
                                <span >
                                    {recipe.recipe.source}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Diet Labels:{' '}
                                <span >
                                    {recipe.recipe.dietLabels}
                                </span>
                            </ListGroupItem>
                            <Button variant="outline-danger" style={{ marginLeft: '10px' }} onClick={() => this.deleteRecipe(recipe._id)}>Delete Recipe</Button>
                            <Button variant="outline-danger" onClick={() => this.handelUpdatedModal(recipe)}>Update Recipe</Button>

                        </ListGroup>
                    </Card>
                ))}
                Label:{' '}
                <span>
                    {(this.state.calories + this.state.unit)}
                </span>
                <img src={this.state.analyze} alt="" />
                <Form onSubmit={this.recipeSearching}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Search</Form.Label>
                        <Form.Control type="text" name="search" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <Form onSubmit={this.calorieCalculator}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Calculate Calories</Form.Label>
                        <Form.Control type="text" name="calories" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}
export default withAuth0(FoodAPI);