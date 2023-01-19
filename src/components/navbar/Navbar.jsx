import React from 'react'
import { useState } from 'react'; //Reaguje na zmiany statefull
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri' //importing some iconsRImenu and closemnu from pacakge intalled 
//importing css files for Navbar.js
import './navbar.css';
import  logo from '../../assets/logo.svg' //importing pic from assets NAMEING LOGO and using in templates Src // naming convetnions
// BEM convetions read later good to use some say


const Menu= () =>(

  /*   <React.Fragment>  we are define react fragment with short syntax <> */
   <>
  <p><a href="#home">Home</a></p>
  <p><a href="#gpt3">Gp4 </a></p>
  <p><a href="#possibility">whatIs</a></p>
  <p><a href="#features">Features</a></p>
  <p><a href="#blog">Solutions</a></p>
  </>
)
const Navbar = () => {
  const [ChangeMenu, setMenu] = useState(false) // fun to change valuable
  return (
    <div className='gpt3__navbar'> 
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={logo} />
        </div>
        <div className='gpt3__navbar-links_contaier'>
          <Menu/>
        </div>
        <div className='gpt3__navbar-button' id="elo">
          <a type='button'>Sing in</a>
          <button type='button'>Sign Up</button>
        </div>
        <div className='gpt3__navbar-menu'>
          
         {/* if ChangeMenu  then show specific sometgins* quick inline if statemntw with sign question callback function onCLick*/}
         {ChangeMenu ? <RiCloseLine color="#fff" onClick={()=> setMenu(false)}/>
                       :<RiMenu3Line color="#fff" onClick={()=>setMenu(true)} /> }
        {/* only is it true render what is coming */}
        {ChangeMenu &&(
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu-container-links'>
            <Menu/>
            <div className='gpt3__navbar-menu_container-links-sign'>
                  <a type='button'>Sing in</a>
                  <button type='button'>Sign Up</button>
            </div>
          
            </div>
          </div>
        )}

        </div>
      </div>
    </div>
  )
}

export default Navbar
