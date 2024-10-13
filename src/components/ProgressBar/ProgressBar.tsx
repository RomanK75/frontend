import React from 'react'


type Props = {
  title : string,
  percentage : number
}

const ProgressBar = (props: Props) => {
  return (
    <div className="progress">
      <div
        className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
        role="progressbar"
        style={{width: props.percentage + "%"}}
        aria-valuenow={25}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        {props.title}
      </div>
    </div>
    
    
  )
}

export default ProgressBar