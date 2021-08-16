import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from 'axios'
import { Form, Button } from "react-bootstrap";
export default class FoodAPI extends React.Component {
    state = {
        recipes: [],
        calories: [],
        unit: 'kcal',
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
                    recipes: result.data.hits
                })
            })
    }
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
                {this.state.recipes.map(recipe => (
                    <Card style={{ width: '20rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
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