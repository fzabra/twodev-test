import React from 'react';

import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';


const SwiperSliderInstagram = () => {
    return (
        <>
            <div className='section-instagram'>
                <h1>#AVRILSANTE</h1>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={4}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        767: {
                            slidesPerView: 4,
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide><img src='./images/post1.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post2.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post3.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post4.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide> 
                    <SwiperSlide><img src='./images/post1.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post2.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post3.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>
                    <SwiperSlide><img src='./images/post4.png' alt="Image Alt" className='img-fluid'></img></SwiperSlide>                 
                </Swiper>
                </div>
        </>
    );
  };
  
  export default SwiperSliderInstagram;