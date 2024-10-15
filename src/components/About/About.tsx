import React from 'react'
import Nodemap from '../Nodemap/Nodemap'

type Props = {}

const About = (props: Props) => {
  return (
    <div className="container hero">
      <div className='row'>
          <h1>About</h1>
          <p className='p-typing'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eligendi tempora nisi suscipit praesentium fugiat aut maiores corrupti, ducimus eveniet vel qui enim ipsa nesciunt inventore non voluptates aliquid quasi.</p>
      </div>
      <div className='row'>
          <Nodemap/>
      </div>
    </div>
  )
}

export default About