import React from 'react';

import './ContentHome.scss';
import ContentA from './ContentA'
import ContentB from './ContentB';
import ContentC from './ContentC';
import ContentD from './ContentD';
import SwiperSliderInstagram from '../SwiperSlider/SwiperSliderInstagram'
import Footer from '../Footer/Footer'


const ContentHome = () => {
  return (
    <>
    <ContentA />
    <ContentB />
    <ContentC />
    <ContentD />
    <SwiperSliderInstagram />
    <Footer />
    </>
  );
};

export default ContentHome;
