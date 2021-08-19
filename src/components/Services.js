import React from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
// import './service.css';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
</style>

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    }
  }


  handleShow = () => {
    this.setState({
      show: true,
    });
  };

  handleClose = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <>
        <Container>

          <Card className="bg-dark text-white" >
            <Card.Img height="300px" src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: 'center', fontSize: "xxx-large", fontFamily: 'Patrick Hand', color: 'black' }}>Programs</Card.Title>
              <Card.Text>
                <Button href="/programs" style={{ width: "25%", marginTop: "120px", fontSize: "small", height: '40px', backgroundColor: 'rgb(199, 80, 80)', textAlign: 'center' }} >
                  Click to see the Programs
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>



        <br></br>
        <br></br>
        <br></br>
        <Container>

          <Card className="text-center">
            <Card.Header style={{ fontSize: "xx-large", fontFamily: 'Patrick Hand', backgroundColor: 'rgb(186, 199, 211)' }}>Calculate Calories</Card.Header>
            <Card.Body>
              <Card.Title>Enter to calculate</Card.Title>
              <Card.Text>
                <div class="input-group">
                  <form>
                    <input style={{ width: '400px' }} type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <br></br>  <button type="button" style={{
                      width: '400px', height: '40px', backgroundColor: 'rgb(199, 80, 80)', border: 'none'
                    }}>search</button>

                  </form>
                </div>


              </Card.Text>
              <Card.Text>
                hello for test
              </Card.Text>

            </Card.Body>

          </Card>

        </Container>

        <br></br>
        <br></br>
        <br></br>


        <Container>


          <Card >
            <Card.Header style={{ width: "100%", margin: '0px', fontSize: "xx-large", backgroundColor: 'rgb(186, 199, 211)', textAlign: 'center' }}>Nutritions Consulting</Card.Header>


            <Card.Body style={{ padding: '20px' }}>

              <Card.Text>
                Plant-based diets may help you lose weight. Vegetarianism and veganism are the most popular versions, which restrict animal products for health, ethical, and environmental reasons.

                However, more flexible plant-based diets also exist, such as the flexitarian diet, which is a plant-based diet that allows eating animal products in moderation.


              </Card.Text>
              <br></br>

              <Card.Text>
                <Button variant="primary" style={{ width: "50%", marginTop: '90px', fontSize: "medium", height: '40px', backgroundColor: 'rgb(199, 80, 80)' }} onClick={this.handleShow}>
                  Book Consulting
                </Button>
              </Card.Text>

            </Card.Body>
          </Card>

        </Container>


        {/* <Card className="text-center">
  <Card.Body>
    
    
    <Card.Title style={{fontSize:"xxx-large",position: 'absolute',top: '50%',left: '20%',transform: 'translate(-50%, -50%)'}}> Body building</Card.Title>
    <Card.Text>
    <Card.Img variant="bottom" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&q=80" heighr="200px" />
    </Card.Text> 
  </Card.Body>
  
</Card> */}

        <Modal
          show={this.state.show}
          onHide={this.state.handleClose}
          backdrop="static"
          keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title >Nutritions Consulting</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Control size="lg" type="text" placeholder="Name" />
            <br />
            <Form.Control type="text" size="lg" placeholder="Age" />
            <br />
            <Form.Control size="lg" type="text" placeholder=" Wieght" />
            <br />
            <Form.Control size="lg" type="text" placeholder="Height" />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary">Submit</Button>
          </Modal.Footer>
        </Modal>
        <br></br>
        <br></br>
        <br></br>

        <Container>

          <h3 style={{ height: '60px', textAlign: 'center', backgroundColor: 'rgb(186, 199, 211)' }}> Our Nutritions</h3>
        </Container>

        <Container>
          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://thumbs.dreamstime.com/z/smiling-black-female-nutrition-adviser-apple-tape-measure-looking-camera-clinic-weight-loss-specialist-promoting-198078903.jpg" height="350px" width="300px" />
                <Card.Body>
                  <Card.Title>Nutrition Janice Newell </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>

            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://st3.depositphotos.com/1177973/15225/i/950/depositphotos_152255688-stock-photo-young-female-nutritionist.jpg" height="350px" width="300px" />
                <Card.Body>
                  <Card.Title> Nutrition Sally Kuzemchak</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://media.istockphoto.com/photos/pretty-female-dietologist-holding-apple-in-her-hand-and-smiling-picture-id1224770135?s=612x612" height="350px" width="300px" />
                <Card.Body>
                  <Card.Title> Nutrition Mitzi Dulan</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>



          </Row>



        </Container>

      </>

    )
  }
}

export default Services;