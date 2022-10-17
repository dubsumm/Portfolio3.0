import Carousel from 'react-bootstrap/Carousel';
import sufferMain from '../assets/sufferMain.jpg'
import sufferLogin from '../assets/sufferLogin.jpg'
import sufferGame from '../assets/sufferGame.jpg'
import sufferSpace from '../assets/sufferSpace.jpg'
import sufferCandy from '../assets/sufferCandy.jpg'

function SufferCarousel() {
  return (
    <div className='container'>
    <Carousel className=' shadow-lg '>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={sufferMain}
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={sufferLogin}
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={sufferGame}
          alt="Third slide"
        />

      </Carousel.Item>
      <Carousel.Item className=''>
        <img
          className="d-block w-100 "
          src={sufferSpace}
          alt="Fourth slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={sufferCandy}
          alt="Fifth slide"
        />

        
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default SufferCarousel;