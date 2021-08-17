import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { withAuth0 } from "@auth0/auth0-react";

class RecipeFormModal extends React.Component {
    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.handleDisplayModal}>
                    <Modal.Header>
                        <Modal.Title>Add Recipe Form</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={(e) => this.props.addRecipe(e)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe Title</Form.Label>
                                <Form.Control name="label" type="text" placeholder="Enter the recipe label" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Image</Form.Label>
                                <Form.Control name="image" type="text" placeholder="Enter the recipe image url" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Calories </Form.Label>
                                <Form.Control name="calories" type="text" placeholder="Enter Calories" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Total Weight</Form.Label>
                                <Form.Control name="totalWeight" type="text" placeholder="Enter the total weight" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Recipe URL</Form.Label>
                                <Form.Control name="url" type="text" placeholder="Enter the recipe URL" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Add Recipe
                            </Button>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleDisplayModal}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}
export default withAuth0(RecipeFormModal);