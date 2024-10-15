import React from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import {categories, data} from '../../../data/data'
type Props = {}


const Progress = (props: Props) => {
  const numberOfColumns = 2
  const jsxElemnt = () => {
    for (const cat of categories) {
      
    }
  }
  return (
    <div className='container'>
      <div className="row mt-5">
        <div className="col-6 ">
          {/* This should be an api request... */}
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
      <div className="row mt-5">
        <div className="col-6 ">
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