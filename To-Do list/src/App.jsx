import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './header';
import Enter from './entry';
import Task from './task';
import './App.css';



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <br />
      <Enter />
      <br></br>
      <Task />
      

    </div>
  )
}

export default App
