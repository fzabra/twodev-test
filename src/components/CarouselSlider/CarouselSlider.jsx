import Carousel from 'react-bootstrap/Carousel';
import './CarouselSlider.scss';
function CarouselSlider() {
  const isMobile = window.innerWidth <= 768;
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_600x750_FR.jpg' : 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_2880x1200_FR.jpg'}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_600x750_FR.jpg' : 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_2880x1200_FR.jpg'}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={isMobile ? 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_600x750_FR.jpg' : 'https://avril-bkd.2dev.ca/media/wysiwyg/CARROUSEL_CIRCULAIRE_DBL_NOV_2880x1200_FR.jpg'}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselSlider;