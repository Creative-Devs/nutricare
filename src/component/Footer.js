import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { FaFacebookSquare} from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { AiFillInstagram } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css'

class Footer extends React.Component {
        render() {
            return (

            <>


<Navbar style={{height:'9rem' }} collapseOnSelect expand="lg" bg="dark" variant="dark">

  
  <Container>
    <Navbar.Brand href="#home">
      <img
      class="ims"
        alt=""
        src="/logo.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"/>{' '}
    </Navbar.Brand>
    </Container>
    <Container>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
   
  

  </Navbar.Collapse>
  </Container>
  <Container>
 
  <Nav>
      <Nav.Link eventKey={2} href="#memes">
      <span >&copy;</span>

      </Nav.Link>
    </Nav>
  </Container>

  <Container >

<Nav>
<Nav.Link  href="#features">
    < FaFacebookSquare   />
</Nav.Link>
<Nav.Link href="#features">
    < GoMarkGithub />


</Nav.Link>
<Nav.Link href="#features">
    <AiFillInstagram  style={{height:'9rem' }}/>


</Nav.Link>

</Nav>
</Container>
</Navbar>
             </>
             )


            }
        }

        export default Footer