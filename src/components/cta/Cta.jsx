import React from 'react'
//importing css files for Cta.js
import './cta.css';

const Cta = () => {
  return (
    <div className='cta-container'>
      <div className='cta-container-item'>
        <h1>Let’s try our service now!</h1>
        <a>Everything you need to accept card payments and grow your business anywhere on the planet..</a>
      </div>
      <div className='cta-container-button'>
        <button type="submit">Check us!</button>
      </div>
      
    </div>
  )
}

export default Cta
