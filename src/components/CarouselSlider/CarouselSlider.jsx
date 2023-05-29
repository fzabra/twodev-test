import Carousel from 'react-bootstrap/Carousel';
import styles from './CarouselSlider.module.scss';
function CarouselSlider() {
  const isMobile = window.innerWidth <= 768;
  return (
    <div className={styles.sliderHome}>
    <Carousel>
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
    </div>
  );
}

export default CarouselSlider;