import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import nodes from '../../../data/nodeList'
type Props = {}

const listOfNodes = nodes
const Progress = (props: Props) => {
  return (
    <div>
      {nodes.map((node)=>(
        <ProgressBar key={node.id} title={node.data.title} percentage={node.data.percentage} />
      ))}
    </div>
  )
}

export default Progress