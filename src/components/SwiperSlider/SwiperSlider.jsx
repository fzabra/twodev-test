import React from 'react';

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


const SwiperSlider = () => {
    return (
        <>
            <div>
                <div className="container">
                    <div className='row'>
                        <div className='col-12'>
                            <Swiper
                                // install Swiper modules
                                modules={[Navigation, Pagination, Scrollbar]}
                                spaceBetween={0}
                                slidesPerView={1}
                                pagination={{ clickable: true }}
                            >
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                                <SwiperSlide><img src='./images/videos.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
  };
  
  export default SwiperSlider;