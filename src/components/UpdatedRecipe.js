import React from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { withAuth0 } from "@auth0/auth0-react";

export class UpdatedRecipe extends React.Component {
    render() {
        return (
            <div>

                <Modal show={this.props.show} onHide={this.props.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update a Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.props.UpdateRecipe(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe Name</Form.Label>
                                <Form.Control
                                    type="text" name="label" defaultValue={this.props.updateRecipeObj.label} placeholder="Enter recipe name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe Image</Form.Label>
                                <Form.Control name="image" defaultValue={this.props.updateRecipeObj.image}
                                    type="text" placeholder="Recipe Description" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Calories</Form.Label>
                                <Form.Control type="text" name="calories" defaultValue={this.props.updateRecipeObj.calories} placeholder="Calories" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe Total Weight</Form.Label>
                                <Form.Control type="text" name="totalWeight" defaultValue={this.props.updateRecipeObj.totalWeight} placeholder="Recipe Total Weight" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe URL</Form.Label>
                                <Form.Control type="text" name="url" defaultValue={this.props.updateRecipeObj.url} placeholder="Recipe URL" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Update Recipe
                            </Button>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={this.props.close}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
}


export default withAuth0(UpdatedRecipe);