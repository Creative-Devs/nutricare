import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import axios from 'axios'
import { withAuth0 } from '@auth0/auth0-react';
import { Form, Button } from "react-bootstrap";
import { HandIndexFill } from "react-bootstrap-icons";
// import RecipeFormModal from "./components/RecipeFormModal"
// import UpdatedRecipe from "./components/UpdatedRecipe"
// import FavRecipes from "./components/FavRecipes"
import swal from 'sweetalert';


class FoodAPI extends React.Component {
    state = {
        recipes: [],
        calories: [],
        favRecipes: [],
        unit: 'kcal',
        ownerEmail: this.props.auth0.user.email,
        displayAddModal: false,
        updateRecipeObj: {},
        showUpdateModal: false,
        showCards: false,
    };
    // handelDisplayModal = () => {
    //     this.setState({ displayAddModal: true });
    // }
    // handelUpdatedModal = (item) => {
    //     this.setState({ showUpdateModal: true, updateBookObj: item });
    // }


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
            // text: "You clicked the button!",
            icon: "success",
            button: "Aww yiss!",
          });
    }



    // UpdateRecipe = ((e) => {
    //     e.preventDefault();
    //     const recipeId = this.state.updateRecipeObj._id;
    //     const body = {
    //         label: e.target.label.value,
    //         image: e.target.image.value,
    //         calories: e.target.calories.value,
    //         totalWeight: e.target.totalWeight.value,
    //         url: e.target.url.value,
    //     };

    //     axios.put(`http://localhost:3030/recipe/${recipeId}`, body).then((axiosResponse) => {
    //         console.log('updated Recipe Data:  ', axiosResponse.data);


    //         const updatedRecipeArr = this.state.recipes.map(recipe => {

    //             if (recipe._id === recipeId) {
    //                 recipe.label = axiosResponse.data.label;
    //                 recipe.image = axiosResponse.data.image;
    //                 recipe.calories = axiosResponse.data.calories;
    //                 recipe.totalWeight = axiosResponse.data.totalWeight;
    //                 recipe.url = axiosResponse.data.url;

    //                 return recipe;
    //             }
    //             return recipe;

    //         });
    //         this.setState({ recipes: updatedRecipeArr })
    //         this.handelUpdatedModal({})
    //         this.setState({ showUpdateModal: false });


    //     }).catch(error => alert(error));
    // });



    // calorieCalculator = e => {
    //     e.preventDefault();
    //     const caloriesSearch = e.target.calories.value;
    //     const url = `https://api.edamam.com/api/nutrition-data?app_id=cf3d9a5c&app_key=792374f75d59c4ae14eb1a0e5e280fab&nutrition-type=cooking&ingr=${caloriesSearch}`;
    //     axios
    //         .get(url)
    //         .then(result => {
    //             console.log(result.data)
    //             this.setState({
    //                 calories: result.data.calories,
    //             })
    //         })
    // }

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
                                {Math.round(recipe.recipe.calories) + ' cal'}
                            </Card.Body>
                            <ListGroup >
                                <ListGroupItem style={{ backgroundColor: '#E3DFC8' }}>
                                    totalWeight:{' '}
                                    <span>
                                        {Math.round(recipe.recipe.totalWeight) + ' g'}
                                    </span>
                                </ListGroupItem >
                                {/* <ListGroupItem style={{ backgroundColor: '#E3DFC8' }}> */}
                                    {/* <span>
                                        <a href={recipe.recipe.url} class="btn btn-primary">Details</a>
                                    </span> */}
                                {/* </ListGroupItem> */}
                                <ListGroupItem style={{ backgroundColor: '#E3DFC8' }}>
                                    Get More {' '}
                                    <span >
                                        <a href={recipe.recipe.url}>Details</a>
                                    </span>
                                </ListGroupItem>
                                {/* <ListGroupItem>
                                Diet Labels:{' '}
                                <span >
                                    {recipe.recipe.dietLabels}
                                </span>
                            </ListGroupItem> */}
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
