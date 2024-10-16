
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import {categories, data} from '../../../data/data'



const Progress = () => {

  return (
    <div className='container min-vh-100 pgscont py-5'>
      <h1 className="text-center">My skill level</h1>
      <div className="row mt-5 d-flex flex-wrap">
        <div className="col-6 ">
        <h2 className='text-center'>{categories[0].title}</h2>
            {categories[0].childrenNodes.map((id) => {
                const node = data.find((item) => item.id === id);
                if (node) {
                  return (
                    <ProgressBar
                      key={id}
                      percentage={node.data.percentage}
                      title={node.data.title}
                    />
                  );
                }
              return null;
            })}
        </div>
        <div className="col-6 ">
        <h2 className='text-center'>{categories[1].title}</h2>
        {categories[1].childrenNodes.map((id) => {
                const node = data.find((item) => item.id === id);
                if (node) {
                  return (
                    
                    <ProgressBar
                      key={id}
                      percentage={node.data.percentage}
                      title={node.data.title}
                    />
                  );
                }
              return null;
            })}
        </div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-6 ">
        <h2 className='text-center'>{categories[2].title}</h2>
        {categories[2].childrenNodes.map((id) => {
                const node = data.find((item) => item.id === id);
                if (node) {
                  return (
                    <ProgressBar
                      key={id}
                      percentage={node.data.percentage}
                      title={node.data.title}
                    />
                  );
                }
              return null;
            })}
        </div>
        <div className="col-6 ">
          <h2 className='text-center'>{categories[3].title}</h2>
        {categories[3].childrenNodes.map((id) => {
                const node = data.find((item) => item.id === id);
                if (node) {
                  return (
                    <ProgressBar
                      key={id}
                      percentage={node.data.percentage}
                      title={node.data.title}
                    />
                  );
                }
              return null;
            })}
        </div>
        
      </div>
    </div>
  )
}

export default Progress