import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './header'
import Slogan from './slogan'
import Time from './time'
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {

  return (
    <center>
      <Header></Header>
      <Slogan></Slogan>
      <Time></Time>
    </center>
  )
 
}

export default App
