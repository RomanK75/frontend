import Nodemap from '../Nodemap/Nodemap';
import { useState, useEffect } from 'react';

const About = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = width < 768;
  return (
    <div className="container hero mt-5">
      <div className="typewriter-container text-center">
        <h1 className=" typewriter line1 mb-4">Hello world!</h1>
        <p className=" text-break typewriter line2 mb-2">Меня зовут Роман, мне 28 лет</p>
        {isMobile ? <div className="mb-2" >
          <p className=" text-break typewriter line3 mb-2">Живу в г.Новосибирске</p>
          <p className=" text-break typewriter line4">fullstack разработчик</p>
        </div> :
          <p className=" text-break typewriter line3">Живу в г.Новосибирске, fullstack разработчик</p>}
      </div>
      <div className="row">
        <Nodemap />
      </div>
    </div>
  );
};

export default About;
