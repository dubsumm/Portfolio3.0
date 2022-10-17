import Carousel from 'react-bootstrap/Carousel';
import mccHome from '../assets/mccHome.jpg'
import mccFooter from '../assets/mccFooter.jpg'
import mccHistory from '../assets/mccHistory.jpg'


function PortCarousel() {
  return (
    <div className='container'>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mccHome}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mccFooter}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={mccHistory}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default PortCarousel;