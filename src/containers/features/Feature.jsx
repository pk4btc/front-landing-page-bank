import React from 'react'
//importing css files for Navbar.js
import './features.css';
import {card} from '../../assets/index'

const Feature = () => {
  return (
    <div className='cont-feature'>
      <div className='cont-feature-heading'>
        <h1>Find a better card deal in few easy steps.</h1>
        <a>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</a>
        <button type="submit">Get started</button>

      </div>
      <div className='cont-feature-image-circle'>
      <div className='cont-feautre-image'>
        <img src={card}/>
      </div>
      </div>
      
    </div>
  )
}

export default Feature
