import React from 'react'
import Feature from '../../components/features/Features';
//importing css files for Navbar.js
import './whatgpt3.css';
import star from '../../assets/Star.svg'
import shield from '../../assets/Shield.svg'
import send from '../../assets/Send.svg'

const Whatgpt3 = () => {
  return (
    <div className='whatgpt3 section_margin' id='whtgpy3'>
      <div className='gpt3__whatgpt3-heading'>
        <h1 className='gradient-text'>You do the business, we’ll handle the money.</h1>
        <a>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</a>
      </div>
      <div className='gpt3__whatgpt3-container'>
      <div class="gpt3__whatgpt3_icon">
        <img src={star}/>
    
      <Feature title="Rewards" text="The best credit cards offer some tantalizing combinations of promotions and prizes"/>
      </div>
      
      <div class="gpt3__whatgpt3_icon">
      <img src={shield}/>

      <Feature title="Secured" text="We take a proactive steps make sure your information and transactions are secure"/>
      </div>
      <div class="gpt3__whatgpt3_icon">
              <img src={send}/>
      <Feature className="class1" title="Balance Transfer" text="A balance transfer credit card can save you a lot of money in interest charges."/>
      </div>
      </div>
    </div>
  )
}

export default Whatgpt3
