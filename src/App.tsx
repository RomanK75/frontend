import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Progress from './components/Progress/Progress'
import Reveal from './components/Reveal/Reaveal'
import TimeLine from './components/TimeLine/TimeLine'




function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div id = 'main_container' >
        <Reveal children={<About></About>}></Reveal>
        <Reveal children={<TimeLine></TimeLine>}></Reveal>
        <Reveal children={<Progress></Progress>}></Reveal>
      </div>
    </div>
  )
}

export default App
