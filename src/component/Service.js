import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button,Container,Row,Col,Image,Card} from 'react-bootstrap';
import './service.css'



class Service extends React.Component {
    render() {
        return (

        <>
{/*         
<Container>
      <figure className="postion-realative">
    
     <Image class="container"   text-align="center" src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg" rounded height="350px" width="1200px"  />
    <figcaption>

    </figcaption>
    <Button  class="btn" variant="outline-primary">Primary</Button> 
     </figure>
</Container> */}
<div class="container">


 <Image class="container"   text-align="center" src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg" rounded height="350px" width="1000px"  />

<Button  class="btn" variant="outline-primary">Primary</Button>  

</div>
 

{/* <Card  style={{ width: '8rem' }} style={{ padding: '6rem' }}  >
  <Card.Img src="https://ochsner-craft.s3.amazonaws.com/blog/articles/_930x524_crop_center-center_75_none/healthy-food.jpg" rounded height="300px" width="20px" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
      <Button  class="btn" variant="outline-primary">Primary</Button>
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card> */}

<br></br>
<br></br>
<br></br>
<br></br>


<Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="https://getfood.refb.org/uploads/images/_1152xAUTO_crop_center-center_none/Cover-photo-retouched.jpg" height="300px" width="300px" rounded />
    </Col>
    <Col xs={6} md={4}>
      <Image src="https://2rdnmg1qbg403gumla1v9i2h-wpengine.netdna-ssl.com/wp-content/uploads/sites/3/2019/06/cropped-GettyImages-643764514-650x428.jpg" height="300px" width="300" rounded />
    </Col>
    <Col xs={6} md={4}>
    <Image src="https://www.yummytoddlerfood.com/wp-content/uploads/2019/08/baby-led-weaning-foods-on-countertop.jpg" height="300px" width="300" rounded />

    </Col>
  </Row>
</Container>
<br></br>
<br></br>
<br></br>
<br></br>

<Container>
  <Row>
    <Col xs={6} md={4}>
        <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. </p>
    </Col>
    <Col xs={6} md={4}>
   < p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. </p>
    </Col>
    <Col xs={6} md={4}>
    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.

Lorem ipsum is typically a corrupted version of 'De finibus bonorum et malorum', a 1st century BC text by the Roman statesman and philosopher Cicero, with words altered, added, and removed to make it nonsensical and improper Latin. </p>
    </Col>
  </Row>
</Container>

        </>

        )}}
 export default Service;