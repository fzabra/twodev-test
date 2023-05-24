import React from 'react';
import Header from './components/Header/Header';
import CarouselSlider from './components/CarouselSlider/CarouselSlider';
import ContentHome from './components/ContentHome/ContentHome';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header />
      <CarouselSlider />
      <ContentHome />
    </>
  )
}

export default App
