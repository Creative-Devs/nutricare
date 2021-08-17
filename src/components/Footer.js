import React from 'react';
// import { Instagram } from 'react-bootstrap-icons';
import './footer.css'
// import instaIcon from './images/instaIcon.jpg';
import facebook from './images/facebook.png'
import insta from './images/insta.png'
import twitter from './images/twitter.png'

class Footer extends React.Component {
  render() {
    return (

      <>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Cairo:wght@200&family=Caveat&family=Dancing+Script&family=Gothic+A1:wght@300&family=Lobster&family=Patrick+Hand&family=Permanent+Marker&family=Raleway:ital@1&display=swap');
</style>
        <footer>

          <h3 class="title-logo--footer">Follow<span>Us</span></h3>

          <nav class="footer-nav">
            <ul class="contact-us">
              <li class="footer-nav-item"><span>Email address:</span> info@nutricare.com</li>
              <br></br>

              <li class="footer-nav-item"><span>Phone Number:</span> +962 123 456 789</li>
              <br></br>


              <li class="footer-nav-item"><span>Location:</span> Amman - Jordan</li>
            </ul>
          </nav>
          <div class="social-bar" >
            <img src={facebook} style={{height:'30px',width:'30px'}} class="facebook" />
            <img src={insta} style={{height:'30px',width:'30px'}} class="insta"/>
            <img src={twitter} style={{height:'30px',width:'30px'}} class="twitter" />


            {/* <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-instagram"></a> */}

          </div>
          <div class="clear"></div>
          <p class="copy-rights">
            Copyright NutriCare 2021 &copy;
          </p>
        </footer>
      </>
    )


  }
}

export default Footer;