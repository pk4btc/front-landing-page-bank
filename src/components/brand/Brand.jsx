import React from 'react'
//importing css files for brand.js
import './brand.css';
// importing exported img in one file "index.js"
import {twit,linkedin,airbnb,instagram} from './index.js'

const  Brand = () => {
  return (
    <>
    <div className='gpt__brand section__padding'>
      <div>
        <img src={twit}/>
      </div>
      <div>
        <img src={instagram}/>
      </div>
   
      <div>
         <img src={airbnb}/>
      </div>
      <div>
         <img src={linkedin}/>
      </div>
      </div>
      <div className='gpt__numbers'>
        <div><a className='gpt__numbers-a-number'>3800</a><a className='gpt__numbers-a-text'>User Active</a></div>
        <div><a className='gpt__numbers-a-number'>230+</a><a className='gpt__numbers-a-text'>Trusted</a></div>
        <div><a className='gpt__numbers-a-number'>$230M+</a><a className='gpt__numbers-a-text'>Transaction</a></div>
      </div>
      </>
  )
}

export default Brand
