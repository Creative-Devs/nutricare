import React from 'react';
import axios from 'axios';
import { Form, Button, Table } from 'react-bootstrap'


class FoodAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            label: '',
            img: '',
            calories: '',
            url: '',
            err: 'no response',
            showErr: false,
        }
    }

    recipeSearch = async (e) => {
        e.preventDefault();
        const foodName = e.target.food.value;
        const URL = `https://api.edamam.com/search?app_id=${process.env.REACT_APP_ID}&app_key=${process.env.REACT_API_KEY}&q=${foodName}&format=json`;

        try {
            let recipeResult = await fetch(URL);
            console.log(recipeResult)
            let jsonData = await recipeResult.json()
            this.setState({
                label: jsonData.hits[0].recipe.label,
                img: jsonData.hits[0].recipe.image,
                calories: jsonData.hits[0].recipe.calories,
                url: jsonData.hits.recipe[0].url,
                showErr: false,
            })
        }
        catch (error) {
            this.setState(
                {
                    showErr: true,
                }
            )
        }

    };

    render() {
        return (
            <div className="container" style={{ marginTop: "10px" }}>
                <h1 className="header bg-dark text-white center" style={{ textAlign: 'center' }}>Food Searcher</h1>
                <Form className onSubmit={this.recipeSearch}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Recipe Label</Form.Label>
                        <Form.Control type="text" placeholder="Enter food name" name="food" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Search
                    </Button>
                </Form>

                <Table striped bordered hover size="sm mt-4">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Recipe Title</th>
                            <th>Recipe Calories</th>
                            <th>Recipe URL</th>
                            <th>Recipe Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>{this.state.label}</td>
                            <td>{this.state.calories}</td>
                            <td>{this.state.url}</td>
                            <td>{this.state.img}</td>
                        </tr>
                    </tbody>
                </Table>
                <div className='bg-danger text-white text-center' style={{ fontSize: '25px' }}>{this.state.showErr ? <p>{this.state.err}</p> : ''}</div>
            </div>
        )
    }
}

export default FoodAPI;