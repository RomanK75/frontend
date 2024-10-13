import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Nodemap from './components/Nodemap/Nodemap'
import About from './components/About/About'
import ProgressBar from './components/ProgressBar/ProgressBar'
import Progress from './components/Progress/Progress'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id = 'main_container' style={{marginTop: '100px', width: '80%', marginLeft: 'auto', marginRight: 'auto'}}>
        <About></About>
        <Nodemap></Nodemap>
        <Progress></Progress>
      </div>
    </div>
  )
}

export default App
