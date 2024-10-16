import Nodemap from '../Nodemap/Nodemap';

const About = () => {
  return (
    <div className="container hero mt-5">
      <div className="typewriter-container text-center">
        <h1 className=" typewriter line1 mb-4">Hi there!</h1>
        <p className=" text-break typewriter line2 mb-2">Меня зовут Роман</p>
        <p className=" text-break typewriter line3">И тут коротко о том что я умею</p>
      </div>
      <div className="row">
        <Nodemap />
      </div>
    </div>
  );
};

export default About;
