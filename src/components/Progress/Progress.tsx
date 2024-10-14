import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import nodes from '../../../data/nodeList'
type Props = {}

const listOfNodes = nodes
const Progress = (props: Props) => {
  return (
    <div className='container'>
      {/* <div className='d-md-flex flex-md-equal w-100 my-md-3 ps-md-3'> */}
        {nodes.map((node)=>(
          <ProgressBar key={node.id} title={node.data.title} percentage={node.data.percentage} />
        ))}
      {/* </div> */}
    </div>
  )
}

export default Progress