// rafc snippets simple functional compnent
// instal dependcies npm install reac-icons
//containers have a multiple compontens inside equeal to compontens folders Contianers are bieger

// import { Article,Brand,Cta, } from './components'  importing in one line beacuse of index.js files in compnetets
import React from 'react'
import Cta from './components/cta/Cta'
import Brand from './components/brand/Brand'
import Navbar from './components/navbar/Navbar'
import './App.css'
import {Footer,Possibility,Feature,Whatgpt3,Header} from './containers/';





// use al of our components here  in APP
const App = () => {
  return (
    
    <div className='App'>
        <div class="grad-bg">
              <Navbar/>
              <Header/>
            </div>
            <Brand/>
            <Whatgpt3/>
            <Feature/>
            <Possibility/>
            <Cta/>
            <Footer/>
            
     
    </div>
  )
}

export default App
