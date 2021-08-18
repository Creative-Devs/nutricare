import React from 'react';
import { Container, Row, Col, Card, Button, Modal, Form,CloseButton } from 'react-bootstrap';
import './service.css';
import axios from 'axios'
import service from './images/Care.png'

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

  calorieCalculator = e => {
    e.preventDefault();
    const caloriesSearch = e.target.calories.value;
    const url = `https://api.edamam.com/api/nutrition-data?app_id=cf3d9a5c&app_key=792374f75d59c4ae14eb1a0e5e280fab&nutrition-type=cooking&ingr=${caloriesSearch}`;
    axios
      .get(url)
      .then(result => {
        console.log(result.data)
        alert(`the number of calories is ${result.data.calories} kcal`)
        this.setState({
          calories: result.data.calories,
        })
      })
  }

    
    submitForm = (event) => {
      event.preventDefault();
      const bode= {
          name:event.target.name.value,
          age: event.target.age.value,
          weight: event.target.weight.value,
          height: event.target.height.value,
        
      }
      console.log(bode);
  
  }


  render() {
    return (
      <main style={{ backgroundColor: 'beige' }}>
        <br></br>
        <Container style={{ marginTop: '0px' }}>

          <Card className="bg-dark text-white" >
            <Card.Img height="300px" src={service} alt="Card image" />
            <Card.ImgOverlay>
              <Card.Title style={{ marginLeft:'4rem', textAlign: 'center', fontSize: "xx-large", fontFamily: 'Patrick Hand', color: 'black' }}>Programs</Card.Title>

              <Card.Text style={{ padding: '5px', fontFamily: 'Patrick Hand', fontSize: '25px', fontWeight: 'bold', color: 'black' }} >
                {/* We provide you with Diet programs for what you need */}
              </Card.Text>



              <Card.Text>
                <Button className="button" href="/programs" style={{ width: "220px", fontSize: "19px", borderRadius: '8px', border: 'none', height: '60px', backgroundColor: '#444', textAlign: 'center', color: 'white', marginTop: '11rem', marginLeft:'2rem',fontFamily: 'Times new Roman' }} >
                  Show Programs
                </Button>
              </Card.Text>
            </Card.ImgOverlay>
          </Card>
        </Container>




        <br></br>
        <Container>

          <Card className="text-center">
            <Card.Header style={{ fontSize: "xxx-large", fontFamily: 'Patrick Hand', backgroundColor: 'rgb(189,176,160)' }}>Calculate Calories</Card.Header>
            <Card.Body style={{ backgroundColor: 'rgb(255,246,230)' }} >
              <Card.Title style={{ padding: '20px', fontFamily: 'Patrick Hand', fontSize: 'xx-large' }} >Enter to calculate Calories</Card.Title>
              <Card.Text>
                <Form className="caloriesform" style={{ width: "65%", marginLeft: "15%" }}
                  onSubmit={this.calorieCalculator}>
                  <Button style={{ height: '56px', marginLeft: '625px', position: 'relative', top: '86px', left: '27%', backgroundColor: '#8D2828', fontSize: "20px", fontFamily: 'Helvetica',textAlign: 'center' }} className="formbutton" type='submit'>Calculate</Button>
                  <Form.Group className="mb-5" controlId="formBasicEmail">
                    <Form.Control style={{ height: '50px' }} placeholder='Show Calories number' type="text" name="calories" />
                  </Form.Group>

                </Form>


              </Card.Text>
              <Card.Text style={{ float: 'left', fontSize: "xx-large" }}>
              </Card.Text>

            </Card.Body>

          </Card>

        </Container>

        <br></br>



        <Container>


          <Card >
            <Card.Header style={{ height: '90px', width: "100%", margin: '0px', fontFamily: 'Patrick Hand', fontSize: "xxx-large", backgroundColor: 'rgb(189,176,160)', textAlign: 'center' }}>Nutritions Consulting</Card.Header>


            <Card.Body style={{ padding: '20px', fontFamily: 'Patrick Hand', backgroundColor: 'rgb(255,246,230)' }} >

              <Card.Text style={{ float: 'left', fontSize: 'xx-large' }}>
                <div >
                  Plant-based diets may help you lose weight. Vegetarianism and veganism are the most popular versions, which restrict animal products for health, ethical, and environmental reasons.
                  However, more flexible plant-ba
                  sed diets also exist, such as the fl
                  exitarian diet, which is a plant-based diet that allows eati
                  ng animal products in moderation.
                </div>
<p>
{
  this.state.name
}

</p>
                {/* </Card.Text> */}

                {/* <Card.Text> */}
                <br></br>



                <Button class="button" variant="primary" style={{ textAlign: 'center' ,float: 'center', width: '200px', height: '70px', marginTop: '0px',fontSize: "19px", backgroundColor: 'rgb(116, 218, 116)', borderRadius: '8px', border: 'none' }} onClick={this.handleShow}>
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
          <Modal.Header >
            <Modal.Title >Nutritions Consulting</Modal.Title>
            <CloseButton onClick={this.handleClose}>
         close
        </CloseButton>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit={(e) => this.props.submitForm(e)}>
            Name
            <Form.Control  size="lg" type="text" placeholder="Name"  name='name' />
            <br />
            Age
            <Form.Control type="text" size="lg" placeholder="Age"  name='age' />
            <br />
            weight
            <Form.Control size="lg" type="text" placeholder=" weight"  name='weight' />
            <br />
            Height
            <Form.Control size="lg" type="text" placeholder="Height" name='height'/>
            </Form>
          </Modal.Body>
          <Modal.Footer style={{height:"80px"}}>
          <Button style={{marginTop:'40px', marginLeft:'90px'}} variant="primary"  onSubmit={(e) => this.props.submitForm(e)}>Submit</Button>
          </Modal.Footer>
          
        </Modal>
        <br></br>


        <Container>

          <h3 style={{ height: '70px', fontSize: 'xxx-large', fontFamily: 'Patrick Hand', textAlign: 'center', backgroundColor: 'rgb(189,176,160)' }}> Our Nutritions</h3>

          <Row>
            <Col xs={6} md={4}>
              <Card>
                <Card.Img variant="top" src="https://retaildietitians.com/site/assets/files/11314/dietitianlabcoat.1000x600.jpg" height="350px" width="300px" />
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large' }} >Nutrition Janice Newell </Card.Title>
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
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large' }}> Nutrition Sally Kuzemchak</Card.Title>
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
                <Card.Body style={{ backgroundColor: 'rgb(255, 246, 230)' }}>
                  <Card.Title style={{ fontFamily: 'Patrick Hand', fontSize: 'xx-large' }}> Nutrition Mitzi Dulan</Card.Title>
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
