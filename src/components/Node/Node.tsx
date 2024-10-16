import { NodeType } from '../../types/types';

const Node = ({ data, onClick }: NodeType) => {
  return (
    <div className="card devtools" onClick={() => onClick?.()}>
      <img className="card-img-top " src={data.nodeImage} alt="Title" />
      <div className="card-body ">
        <h4 className="card-title">{data.title}</h4>
      </div>
    </div>
  );
};

export default Node;
