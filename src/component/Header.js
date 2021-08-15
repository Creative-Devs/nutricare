import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
// import DropdownButton from 'react-bootstrap/DropdownButton';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './images/logo.jpg';
// import reactDom from 'react-dom';
// import { Button } from 'react-bootstrap';
import './header.css'




class Header extends React.Component {
    render() {
        return (
            <>


{/* //             <header>
//             <div class="header" id="myHeader">
//   <h2>My Header</h2>
// </div>
// 	</header> */}

{/* <Navbar className="fixed-top">

</Navbar>


document.addEventListener("DOMContentLoaded", function(){
  // add padding top to show content behind navbar
  navbar_height = document.querySelector('.navbar').offsetHeight;
  document.body.style.paddingTop = navbar_height + 'px';
});  */}


 {/* <header> */}


{/* <nav id="navbar_top" class="navbar navbar-expand-lg navbar-dark bg-primary">
<Container>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src= {logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
Nutricare
    </Navbar.Brand>

    </Container>


 
</nav> */}
{/* </header> */} 

 <Navbar style={{height:'10rem'}}  class="navbar navbar-expand-lg navbar-dark bg-primary" collapseOnSelect expand="lg"  class="fixed"  bg="$blue" variant="light" >
  
  <Container>
    <Navbar.Brand href="#home">
      <img
        alt=""
        src= {logo}
        width="40"
        height="40"
        className="d-inline-block align-top"
      />{' '}
Nutricare
    </Navbar.Brand>

    </Container>
    
    <Container >

  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features"   >Home</Nav.Link>
      <Nav.Link href="#pricing">My Profile</Nav.Link>
      <Nav.Link href="#pricing">Programs</Nav.Link>
      <NavDropdown title="Services" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
      <Nav.Link href="#pricing">  About us</Nav.Link>

    </Nav>
    
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        Log out

      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>    


 
</>
      
  

          
        
        )
    }
}

export default Header;