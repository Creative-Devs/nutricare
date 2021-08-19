import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
export default class FoodAPI extends React.Component {
    state = {
        loading: true,
        recipes: []
    };

    async componentDidMount() {
        const url = "https://api.edamam.com/search?app_id=deaf362d&app_key=da028fb12902501b23d2358ae3006d81&q=pizza";
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        this.setState({ recipes: data.hits, loading: false });
    }

    render() {
        if (this.state.loading) {
            return <div>loading...</div>;
        }

        if (!this.state.recipes.length) {
            return <div>didn't get a recipe</div>;
        }


        return (
            <div>
                {this.state.recipes.map(recipe => (
                    <Card style={{ width: '20rem', float: 'right', margin: '2rem 4rem 1rem 2rem' }} className="text-center mb-3 bg-dark">
                        <Card.Title className="p-3 text-white">Name: {recipe.recipe.label}</Card.Title>
                        <ListGroupItem>
                            <Card.Img src={recipe.recipe.image} fluid="true" alt="No image for this movie" />
                        </ListGroupItem>
                        <Card.Body className="bg-info" style={{ maxHeight: '10rem' }}>
                            {recipe.recipe.label}
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>
                                Label:{' '}
                                <span>
                                    {recipe.recipe.label}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Source:{' '}
                                <span>
                                    {recipe.recipe.source}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                Calories:{' '}
                                <span >
                                    {recipe.recipe.calories}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem>
                                TotalWeight:{' '}
                                <span >
                                    {recipe.recipe.totalWeight}
                                </span>
                            </ListGroupItem>

                        </ListGroup>
                    </Card>
                ))}
            </div>
        )
    }
}