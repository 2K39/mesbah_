import React from "react";
import Nav from './Nav.js';
import Box from "./Box.js";
import cat from './media/cat.jpg';
import Logo from './media/logo.png'

import './styles/Style.css'
import Circle from './Circle.js'

function App(){
  let nav = [
    {name:'yahoo' , site:"https://www.google.com.sa/"},
    {name:'home' , site:'https://www.google.com/'}
  ]
  let gitLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png'

  return(
     <div className='column' style={{}}>
     
       <Circle src={Logo} size="200px"/>
       <h1>mesbah</h1>
       <h2>by: ahmed khamdan</h2>
        <a href="https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40cool_man/mesbah-8870cf0ca3ab41e99625495572770685-signed.apk"><button >Downloud</button></a>
        {/* <Nav logo={logo} nav={nav}/>
        <Box text='ipsom lorem' src={cat} reverse='true'/>
        <Box src={gitLogo}/> */}
    </div>
)}

export default App;