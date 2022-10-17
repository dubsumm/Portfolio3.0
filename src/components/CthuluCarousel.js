import Carousel from 'react-bootstrap/Carousel';
import CthuluHome from '../assets/cthuluHome.jpg'
import CthuluChars from '../assets/cthuluChars.jpg'
import CthuluProfle from '../assets/cthuluProfile.jpg'
import CthuluGame from '../assets/cthuluGame.jpg'

function PortCarousel() {
  return (
    <div className='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CthuluHome}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CthuluChars}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CthuluProfle}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={CthuluGame}
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default PortCarousel;