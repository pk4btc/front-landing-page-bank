import React from 'react'
//importing css files for Navbar.js
import './footer.css';
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <footer className='footer-conatiner'>
      <div className='footer-left'>
        <img src={logo}/>
        <p><a>Everything you need to accept card payments and grow your business anywhere on the planet.</a></p>
      </div>
      <div className='footer-right'>
        <div className='footer-right-col1 f-column'>
          <h3>UseFull links</h3>
          <a>Content</a>
          <a>Explore</a>
          <a>Terms & Services</a>
        </div>
        <div className='footer-right-col2 f-column'> <h3>Coommunity</h3>
          <a>Help Center</a>
          <a>Suggestions</a>
          <a>Newsletters</a>
        </div>
        <div className='footer-right-col3 f-column'>
          <h3>Partner</h3>
          <a>Our Partner</a>
          <a>Become a Partner</a>
        </div>
      </div>
    </footer>
  
   
  )
}

export default Footer
