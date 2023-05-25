import React from 'react';

import './ContentHome.scss';
import ContentA from './ContentA'
import ContentB from './ContentB';
import ContentC from './ContentC';
import ContentD from './ContentD';
import SwiperSliderInstagram from '../SwiperSlider/SwiperSliderInstagram'


const ContentHome = () => {
  return (
    <>
    <ContentA />
    <ContentB />
    <ContentC />
    <ContentD />
    <SwiperSliderInstagram />
    </>
  );
};

export default ContentHome;
