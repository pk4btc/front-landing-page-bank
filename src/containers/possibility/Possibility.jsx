import React from 'react'
//importing css files for Navbar.js
import './possibility.css';
import { people01,people02,people03 } from '../../assets';
import Feature from '../../components/features/Features';
// creating array
const featuresData= [{
  img:<img src={people02}/>,
  text:'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.'
},{
  img:<img src={people01}/>,
  text:'Money makes your life easier. If youre lucky to have it, youre lucky.'
},{
  img:<img src={people03}/>,
  text:'It is usually people in the money business, finance, and international trade that are really rich.'
},
]

const Possibility = () => {
  return (
    <div className='section-possibility'>
      <div className='section-posibility-container'>
      {featuresData.map((item,index) =>(
        <Feature title={item.text} text={item.img} key={item.index}/>
    
      ))}
   
      </div>
    </div>
  )
}

export default Possibility
