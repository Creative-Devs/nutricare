import React from 'react';
// import './aboutus.css'
import { CardGroup, Row, Col,Container, Card, Button, Modal, Form } from 'react-bootstrap';
import Dody from './images/Dody.png'
import anas from './images/anas.jpg'
import ghaida from './images/ghaida.jpg'
import Abdelqader from './images/Abdelqader.jpg'
import Hatem from './images/Hatem.jpg'
class AboutUs extends React.Component {
    render() {
      return (
 <>
 <Container>
 <Row>
 <Col xs={6} md={4}>
              <Card >
              {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"> */}
                <Card.Img variant="top" src={Abdelqader} height="350px" width="300px" />
                {/* </div> 
     <div class="flip-card-back"> */}
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}> Abdelqader Al-omari</Card.Title>
<Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px' }}>
                  Abdelqader graduated from the University of Jordan with Bachelor's degree in Mechanical engineering
                  </Card.Text>
                </Card.Body>
                {/* </div>
  </div>
</div> */}
              </Card> 
            </Col> 
             <Col xs={6} md={4}>
            <Card class="card" >
              {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"> */}
                <Card.Img  variant="top" src={Dody} height="350px" width="300px" />
                {/* </div> */}
    {/* <div class="flip-card-back"> */}
                <Card.Body style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title  style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)'  }} >Doa'a K.Daban </Card.Title>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px'}} >
                  Doaa graduated from the University of Jordan with Bachelor's degree in Computer engineering
         </Card.Text>
                </Card.Body>
                {/* </div>
  </div>
</div> */}
              </Card>
              </Col>
              <Col xs={6} md={4}>
              <Card >
                <Card.Img variant="top" src={Hatem} height="350px" width="300px" />
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}>Hatem Sallam</Card.Title>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px' }}>
                  Hatem graduated from the Balqa applied university with Bachelor's degree in Civil engineering
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>  
            <Col xs={6} md={4}>
              <Card>
              {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"> */}
                <Card.Img variant="top" src={anas} height="350px" width="300px" />
                {/* </div> */}
    {/* <div class="flip-card-back"> */}
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title style={{fontFamily: 'Patrick Hand',height:'60px',fontSize:'xx-large',backgroundColor:'rgb(255, 246, 230)' }}> Anas Dalal'ah</Card.Title>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px' }}>
                  Anas graduated from Yarmouk university with Bachelor's degree in electrical engineering.
.
                  </Card.Text>
                </Card.Body>
                {/* </div>
  </div>
</div> */}
              </Card>
              </Col>
             <Col xs={6} md={4}>
              <Card >
              {/* <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front"> */}
                <Card.Img variant="top" src={ghaida} height="350px" width="300px" />
                {/* </div> 
     <div class="flip-card-back"> */}
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}> Ghaida K.Gharaibeh</Card.Title>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px' }}>
                  Ghaida graduated from the University of Jordan with Bachelor's degree in Industrial engineering
                  </Card.Text>
                </Card.Body>
                {/* </div>
  </div>
</div> */}
              </Card>
            </Col>
            <br></br> 
             <br></br> 
          {/* </Row> */}
</Row>
</Container>
 </>
      )}}
      export default AboutUs;
