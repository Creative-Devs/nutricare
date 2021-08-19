import React from 'react';
import './footer.css'
import facebook from './images/facebook.png'
import insta from './images/insta.png'
import twitter from './images/twitter.png'

class Footer extends React.Component {
  render() {
    return (

      <>
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
            <img src={facebook} style={{ height: '30px', width: '30px' }} class="facebook" />
            <img src={insta} style={{ height: '30px', width: '30px' }} class="insta" />
            <img src={twitter} style={{ height: '30px', width: '30px' }} class="twitter" />


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
