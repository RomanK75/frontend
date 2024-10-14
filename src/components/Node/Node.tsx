import { NodeType } from '../../types/types'


const maxTextLength = 1
const Node = ({id,data,onClick}: NodeType) => {
  return (
    <div className="card devtools" onClick={() => onClick?.()}>
      <img className="card-img-top " src={data.nodeImage} alt="Title" />
      <div className="card-body ">
        <h4 className="card-title">{data.title}</h4>
        {/* <p className="card-text" style={{maxWidth: maxTextLength + 'px'}}>{data.text}</p> */}
      </div>
    </div>
    
    
  )
}

export default Node