import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import UpdatedRecipe from './UpdatedRecipe'

class FavRecipes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favRecipes: [],
            ownerEmail: this.props.auth0.user.email,
            updateRecipeObj: {},
            showUpdateModal: false,
            closeModal:false,
        }
    }

handleCloseModal =()=> {

    this.setState({
        closeModal: false
    })
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

    handelUpdatedModal = (item) => {
        this.setState({ showUpdateModal: true, updateRecipeObj: item });
    }



    deleteRecipe = (id) => {
        axios.delete(
            `http://localhost:3030/recipe/${id}`
        ).then(axiosResponse => {
            this.setState({
                favRecipes: axiosResponse.data,
            });
            console.log(axiosResponse.data)
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


            const updatedRecipeArr = this.state.favRecipes.map(recipe => {

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
            this.setState({ favRecipes: updatedRecipeArr })
            this.handelUpdatedModal({})
            this.setState({ showUpdateModal: false });


        }).catch(error => alert(error));
    });


    render() {
        return (
            <>
                {
                    this.state.showUpdateModal &&
                    <UpdatedRecipe
                        show={this.state.showUpdateModal}
                        close={this.handleCloseModal}
                        UpdateRecipe={this.UpdateRecipe}
                        updateRecipeObj={this.state.updateRecipeObj}
                    />
                }

                {this.state.favRecipes.map((recipe, index) => (
                    <Card style={{ width: '20rem', float: 'right', margin: '8rem 4rem 1rem 2rem', backgroundColor: '#8D2828' }} className="text-center mb-3" >
                        <Card.Title style={{backgroundColor: '#8D2828'}} className="p-3 text-white">{recipe.label}</Card.Title>
                        <ListGroupItem>
                            <Card.Img style={{ height: '20rem' }} src={recipe.image} fluid="true" alt="No image for this recipe" />
                        </ListGroupItem>
                        <Card.Body style={{ maxHeight: '10rem', backgroundColor: '#E3DFC8' }}>
                            {'Calories: ' + Math.round(recipe.calories) + ' cal' }
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem style={{ backgroundColor: '#E3DFC8'}}>
                                Total Weight:{' '}
                                <span>
                                    {Math.round(recipe.totalWeight)+ ' g'}
                                </span>
                            </ListGroupItem>
                            <ListGroupItem style={{ backgroundColor: '#E3DFC8'}}>
                                Get More{' '}
                                <span>
                                <a href={recipe.url}>Details</a>
                                    {/* {recipe.url} */}
                                </span>
                            </ListGroupItem>
                        </ListGroup>

                        <div className='ButtonDiv'>

                        <Button style={{ backgroundColor: '#8D2828', marginTop: '8rem', marginLeft: '-1rem' }} onClick={() => this.deleteRecipe(recipe._id)}>Delete</Button>
                        <Button style={{ backgroundColor: '#8D2828', marginTop: '8rem', marginLeft: '7rem' }} variant="outline-danger" onClick={() => this.handelUpdatedModal(recipe)}>Update</Button>

                        </div>
                    </Card>


                ))
                }</>

        )
    }
}
export default withAuth0(FavRecipes);