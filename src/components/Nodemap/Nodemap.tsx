import { useState, useEffect } from 'react';
import Slider, { Settings } from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// types
import Node from '../Node/Node';
// data
import { nodes } from '../../../data/data';

const Nodemap = () => {
  const [nodesList] = useState(nodes);
  // const [pythonNode, setPythonNode] = useState([nodes[1]])
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const AmountOfSlides = () => {
    if (width < 576) {
      return 1;
    } else if (width < 768) {
      return 2;
    } else {
      return 3;
    }
  };

  const settings: Settings = {
    dots: true,
    speed: 1000,
    slidesToShow: AmountOfSlides(),
    slidesToScroll: AmountOfSlides(),
    adaptiveHeight: true,
    infinite: true,
    draggable: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
  };

  return (
    <div className="container slider">
      <h2 className="text-center mt-5 mb-5">My devTools stack</h2>
      <div className="row">
        <Slider {...settings}>
          {nodesList.map((node) => (
            <Node key={node.id} id={node.id} data={node.data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Nodemap;
