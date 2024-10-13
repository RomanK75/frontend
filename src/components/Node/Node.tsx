import { NodeType } from '../../types/types'


const maxTextLength = 100
const Node = ({id,data,onClick}: NodeType) => {
  return (
    <div className="card card-slider" onClick={() => onClick?.()}>
      <img className="card-img-top card-slider-img-top" src={data.nodeImage} alt="Title" />
      <div className="card-body card-slider-body">
        <h4 className="card-title card-slider-title">{data.title}</h4>
        {/* <p className="card-text">{data.text}</p> */}
      </div>
    </div>
    
    
  )
}

export default Node