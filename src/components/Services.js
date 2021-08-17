import React from 'react';
import { Container, Row, Col, Card, Button, Modal, Form } from 'react-bootstrap';
import './service.css';

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
      <main style={{backgroundColor:'beige'}}>
        <br></br>
        <Container style={{marginTop:'0px'}}>

          <Card className="bg-dark text-white" >
            <Card.Img height="300px" src="https://images.unsplash.com/photo-1494859802809-d069c3b71a8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80" alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ textAlign: 'center', fontSize: "xxx-large", fontFamily: 'Patrick Hand', color: 'black' }}>Programs</Card.Title>
              
              <Card.Text style={{ padding: '10px', fontFamily: 'Patrick Hand',fontSize:'25px',fontWeight:'bold' ,color:'black'}} >
              In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without
              In publishing and grommonly used to demonstrate the visual form of a document or a typeface without

</Card.Text>

              
              
              <Card.Text>
                <Button class="button" href="/programs" style={{ float:'center', width: "200px", fontSize: "15px", borderRadius: '8px', border: 'none',height: '50px', backgroundColor: 'rgb(116, 218, 116)', textAlign: 'center',color:'white' }} >
                  Click to see the Programs
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>



       
        <br></br>
        <Container>

          <Card  className="text-center">
            <Card.Header style={{ fontSize: "xxx-large", fontFamily: 'Patrick Hand', backgroundColor: 'rgb(189,176,160)' }}>Calculate Calories</Card.Header>
            <Card.Body style={{backgroundColor:'rgb(255,246,230)'}} >
              <Card.Title style={{ padding: '20px', fontFamily: 'Patrick Hand',fontSize:'xx-large' }} >Enter to calculate</Card.Title>
              <Card.Text>
                <div class="input-group">
                  <form>
                    <input style={{ width: '900px' ,marginLeft:'90px'}} type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                      <button class="button" type="button" style={{marginLeft:'80px',width: '200px', height: '50px',borderRadius: '8px', backgroundColor: 'rgb(116, 218, 116)', border: 'none'
                   ,marginTop:'9px',color:'white'}}>search</button>

                  </form>
                </div>


              </Card.Text>
              <Card.Text style={{float:'left',fontSize:"xx-large"}}>
              </Card.Text>

            </Card.Body>

          </Card>

        </Container>

        <br></br>
        


        <Container>


          <Card >
            <Card.Header style={{ height:'90px',width: "100%", margin: '0px', fontFamily: 'Patrick Hand',fontSize: "xxx-large", backgroundColor: 'rgb(189,176,160)', textAlign: 'center' }}>Nutritions Consulting</Card.Header>


            <Card.Body style={{ padding: '20px', fontFamily: 'Patrick Hand',backgroundColor:'rgb(255,246,230)' }} >

              <Card.Text style={{float:'left',fontSize:'xx-large'}}>
                <div > 
                Plant-based diets may help you lose weight. Vegetarianism and veganism are the most popular versions, which restrict animal products for health, ethical, and environmental reasons.
However, more flexible plant-ba
                sed diets also exist, such as the fl
                exitarian diet, which is a plant-based diet that allows eati
                ng animal products in moderation.
</div>

              {/* </Card.Text> */}

              {/* <Card.Text> */}
              <br></br>
           


                <Button class="button" variant="primary" style={{float:'center',width: '200px', height: '50px', marginTop: '0px', fontSize: "medium", backgroundColor: 'rgb(116, 218, 116)' ,borderRadius: '8px', border: 'none'}} onClick={this.handleShow}>
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


        <Container>

          <h3 style={{ height: '70px', fontSize:'xxx-large', fontFamily: 'Patrick Hand',textAlign: 'center', backgroundColor: 'rgb(189,176,160)' }}> Our Nutritions</h3>

          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://retaildietitians.com/site/assets/files/11314/dietitianlabcoat.1000x600.jpg" height="350px" width="300px" />
                <Card.Body style={{backgroundColor:'rgb(255, 246, 230)'}}>
                  <Card.Title  style={{fontFamily: 'Patrick Hand',fontSize:'xx-large' }} >Nutrition Janice Newell </Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text> */}
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>

            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://st3.depositphotos.com/1177973/15225/i/950/depositphotos_152255688-stock-photo-young-female-nutritionist.jpg" height="350px" width="300px" />
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)'}}>
                  <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large' }}> Nutrition Sally Kuzemchak</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text> */}
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://themes.muffingroup.com/be/dietitian/wp-content/uploads/2015/10/home_dietitian_pic1.jpg" height="350px" width="300px" />
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)'}}>
                  <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large' }}> Nutrition Mitzi Dulan</Card.Title>
                  {/* <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text> */}
                </Card.Body>

              </Card>
              {/* <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded /> */}
            </Col>



          </Row>


          </Container>
<br></br>

      </main>
    )
  }
}

export default Services;