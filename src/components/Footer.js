import React from 'react';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
// import Container from 'react-bootstrap/Container';
// import { FaFacebookSquare } from "react-icons/fa";
// import { GoMarkGithub } from "react-icons/go";
// import { AiFillInstagram } from "react-icons/ai";
// import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css'
// import logo from './images/logo.jpg';
import logo2 from './images/nutri-logo.jpg';

class Footer extends React.Component {
  render() {
    return (

      <>
<footer>

        <h3 class="title-logo--footer">Follow<span>Us</span></h3>

        <nav class="footer-nav">
            <ul class="contact-us">
                <li class="footer-nav-item"><span>E-mail address:</span> jostainable2021@JOstainable.com</li>
                <br></br>
                <br></br>

                <li class="footer-nav-item"><span>Phone Number:</span> +962 687 457 992</li>
                <br></br>
                <br></br>


                <li class="footer-nav-item"><span>Loction:</span> Amman - Jordan</li>
            </ul>
        </nav>
        <div class="social-bar">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-instagram"></a>

        </div>
        <div class="clear"></div>
        <p class="copy-rights">
            Copyright JOstainable &copy; 2010-2021 All rights reserved.
        </p>
        </footer>
    </>
/* 
        <Navbar style={{ maxHeight: '120px', position: 'relative', bottom: '0%', width: '100%' }} collapseOnSelect expand="lg" bg="dark" variant="dark">


          <Container>
            <Navbar.Brand href="#home">
              <img
                class="ims"
                alt="logo"
                src={logo2}
                width="135"
                height="95"
                className="d-inline-block align-top" />{' '}
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
              <Nav.Link href="#features">
                <i class="fa fa-facebook-f"></i>
              </Nav.Link>
              <div style={{ position: 'relative', bottom: '0%' }}>
                <i class="fa fa-facebook-f"></i>
              </div>
              <span className="btn-inner--icon">
                <i className="fa fa-github" />
              </span>

              <Nav.Link href="#features">
                < GoMarkGithub />
                <i class="bi bi-github"></i>

              </Nav.Link>
              <Nav.Link href="#features">
                <AiFillInstagram style={{ height: '5rem' }} />
              </Nav.Link>
              <Nav.Link href="#features">
                <FaFacebookSquare style={{ height: '5rem' }} />
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar> */
        

 )


  }
}

export default Footer;