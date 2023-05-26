import React from 'react';

import { Navigation, Pagination, FreeMode, Scrollbar, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import 'swiper/scss/free-mode';


const ConditionsFooter = () => {
    return (
        <>
        <div className='conditionsFooterContent'>
            <div className='row'>
                <Swiper
                    modules={[Navigation, FreeMode, Pagination, Scrollbar, Autoplay]}
                    spaceBetween={10}
                    slidesPerView={3}
                    freeMode={true}
                    autoplay={{ delay: 3000 }}
                    loop={true}
                    breakpoints={{
                        768: {
                            slidesPerView: 3,
                            enabled: false, 
                        },
                        0: {
                            slidesPerView: 1,
                        },
                    }}
                >
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center text-center justify-content-center'>
                            <img src="./images/icons/delivery-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Livraison à domicile ou ramassage en magasin</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center text-center justify-content-center'>
                            <img src="./images/icons/call-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Service à la clientèle <br /> 1 (844) 375-6446 <br /> <span className='tel'><a href='#'>nous joindre</a></span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center text-center justify-content-center'>
                            <img src="./images/icons/certification-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Paiement sécurisé</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center text-center justify-content-center'>
                            <img src="./images/icons/delivery-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Livraison à domicile ou ramassage en magasin</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center'>
                            <img src="./images/icons/call-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Service à la clientèle <br /> 1 (844) 375-6446 <br /> <span className='tel'><a href='#'>nous joindre</a></span></p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='d-flex flex-row align-items-center'>
                            <img src="./images/icons/certification-footer.svg" alt="Delivery"  />
                            <p className='px-2 px-lg-5'>Paiement sécurisé</p>
                        </div>
                    </SwiperSlide>
                    
                </Swiper>
                </div>
            </div>
        </>
    );
  };
  
  export default ConditionsFooter;