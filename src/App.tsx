import { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Nodemap from './components/Nodemap/Nodemap'
import About from './components/About/About'
import Progress from './components/Progress/Progress'
import Reveal from './components/Reveal/Reaveal'




function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <div id = 'main_container' >
        <Reveal children={<About></About>}></Reveal>
        <Reveal children={<Nodemap></Nodemap>}></Reveal>
        <Reveal children={<Progress></Progress>}></Reveal>
      </div>
    </div>
  )
}

export default App
