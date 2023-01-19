import React from 'react'
//importing css files for Feature.js
import './feature.css';

const Feature = ({title,text}) => {
  return (
    <div className='gpt__features_container'>
    <div className='gpt__features_container-title'>
      {/* add title const and used in other files* in whatp3.*/}
      <h1>{title}</h1>
    </div>
    <div className='gpt__features_container-content'>
      <a>{text}</a>
    </div>

      
      

      </div>
  )
}

export default Feature
