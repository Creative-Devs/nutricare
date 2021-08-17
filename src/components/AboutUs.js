import React from 'react';
import './aboutus.css'
import { CardGroup, Row, Col,Container, Card, Button, Modal, Form } from 'react-bootstrap';
import doaaa from './images/doaaa.jpg'
import anas from './images/anas.jpg'
import ghaida from './images/ghaida.jpg'


class AboutUs extends React.Component {
    render() {
      return (
  
     
 <>

 {/* <Container> */}

 <Row>
            <Col xs={6} md={3}>
            <Card class="card" >

              <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
                <Card.Img  variant="top" src={doaaa} height="350px" width="300px" />
                <Card.Title  style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)'  }} >Doa'a K.Daban </Card.Title>

                </div>
    <div class="flip-card-back">

                <Card.Body style={{backgroundColor:'rgb(255, 246, 230)',height:'350px'}}>

                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'20px'}} >
                  Doaa graduated from the University of Jordan with Bachelor's degree in Computer engineering, I have an experience in Network Engineering and security, And now one of my goals is to develop my tech skills and become a professional software developer.
         </Card.Text>

                </Card.Body>

                </div>
  </div>
</div>


              </Card>
              </Col>

            <Col xs={6} md={3}>
              <Card>
              <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
                <Card.Img variant="top" src={anas} height="350px" width="300px" />
                <Card.Title style={{fontFamily: 'Patrick Hand',height:'60px',fontSize:'xx-large',backgroundColor:'rgb(255, 246, 230)' }}> Anas Dalal'ah</Card.Title>

                </div>
    <div class="flip-card-back">
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'350px'}}>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'x-large' }}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>

                </div>
  </div>
</div>

              </Card>
              </Col>


             <Col xs={6} md={3}>
              <Card >
              <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
                <Card.Img variant="top" src={ghaida} height="350px" width="300px" />
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}> Ghaida K.Gharaibeh</Card.Title>
                </div> 
     <div class="flip-card-back">
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'350px'}}>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'x-large' }}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                </div>
  </div>
</div>

              </Card>
            </Col>

{/* 
            <br></br> 
                       <Col xs={6} md={3}>
              <Card >
              <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
                <Card.Img variant="top" src={ghaida} height="350px" width="300px" />
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}> Ghaida K.Gharaibeh</Card.Title>
                </div> 
     <div class="flip-card-back">
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'350px'}}>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'x-large' }}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
                </div>
  </div>
</div>

              </Card>
            </Col> */}
             {/* <br></br> 


             <Col xs={6} md={4}>
              <Card >
              
                <Card.Img variant="top" src={ghaida} height="350px" width="300px" />
               
            
                <Card.Body  style={{backgroundColor:'rgb(255, 246, 230)',height:'200px'}}>
                <Card.Title style={{fontFamily: 'Patrick Hand',fontSize:'xx-large',height:'60px',backgroundColor:'rgb(255, 246, 230)' }}> Ghaida K.Gharaibeh</Card.Title>
                  <Card.Text style={{fontFamily: 'Patrick Hand',fontSize:'x-large' }}>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                </Card.Body>
       

              </Card>
            </Col>  */}




          </Row>


{/* </Container> */}


{/* <div class="container">
  <div class="card">
    <div class="box">
      <div class="content">
        <h3>Card One</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, totam velit? Iure nemo labore inventore?</p>
        <a href="#">Read More</a>
      </div>
    </div>
  </div> */}

  



 </>

       
      )}}
      
      export default AboutUs;