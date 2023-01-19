import React from 'react'
//importing css files for Navbar.js
import './header.css';
import robot from '../../assets/robot.png';
import arrow from '../../assets/arrow-up.svg';

const Header = () => {
  return (
    <div className='gpt__header section__padding ' id="home">
      <div className='gpt__header_content'>
        <h1 className='gradient__text'>The Next <a>GENERATION</a>
          Payment Method.</h1>
        <p>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. 
          We examine annual percentage rates, annual fees.</p>
        <div className='gpt__header-content__people'>
            {/*using this have to import img at the top import robot from ...src*/}
          <p>
          <img src={arrow}/>
          <a> Get</a><a> started</a>
          </p>
        </div>

        <div className='gpt__content_input'>
          <input type="email" placeholder='emailadress'></input>
          <button type='button'>subscribe newsletter</button>
        </div>
        
        </div>
        <div className='gpt__header-image'>  
          <img src={robot} />
        </div>

      </div>
      
  )
}

export default Header
