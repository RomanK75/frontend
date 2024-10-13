import { useState,useEffect } from 'react'
import Slider, { Settings } from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// types
import Node from '../Node/Node'
// data
import nodes from '../../../data/nodeList'
type Props = {}


const Nodemap = (props: Props) => {
  const [nodesList, setNodesList] = useState(nodes)
  // const [pythonNode, setPythonNode] = useState([nodes[1]])
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AmountOfSlides = () => {
    if (width < 576) {
      return 1
    } else if (width < 768) {
      return 2
    } else if (width < 992) {
      return 3
    } else if (width < 1600) {
      return 4
    } else {
      return 6
    }
  }

  const settings:Settings = {
    dots: true,

    speed: 300,
    slidesToShow: AmountOfSlides(),
    slidesToScroll: 1,
    adaptiveHeight: true,
    infinite: true,
    draggable: false,
    }

  return (
    <div className='container'>
      <div className='container slider'>
        <h2>
          My devTools stack
        </h2>
        
          <div className='row'>
            <Slider {...settings}>
              {nodesList.map((node) => (
                <Node
                  key={node.id}
                  id={node.id}
                  data = {node.data}
                  />
                ))}
            </Slider>
          </div>
 
        </div>
    </div>
  )
}

export default Nodemap