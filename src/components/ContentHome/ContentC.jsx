import React from 'react';

import SwiperSlider from '../SwiperSlider/SwiperSlider'

const ContentC = () => {
  return (
    <>
        <div>
            <div className="container">
                <div className='row'>
                    <section className='slider-mov'>
                        <div className="col-12 text-center mt-5 mb-5">
                            <div className="title">
                                <h2>10 magasins</h2>
                            </div>
                            <div className="row">
                                <div className="col-6 left-col">
                                    <div className="img-magasins">
                                        <img src='./images/images8.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Montréal</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images6.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Saint-Bruno</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images7.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Québec</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images2.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Brossard</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images1.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Levis</p>
                                    </div>                            
                                </div>
                                <div className="col-6 right-col">
                                    <div className="img-magasins">
                                        <img src='./images/Laval_1.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Laval</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images5.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Granby</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images4.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Sherbrooke</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images3.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Longueil</p>
                                    </div>
                                    <div className="img-magasins">
                                        <img src='./images/images.png' alt="Image Alt" className='img-fluid'></img>
                                        <p>Megog</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row mt-5">
                                <div className="col-12 mt-3">
                                    <div>
                                        <div>
                                            <h2>AVRIR. BIEN MIEUX <br></br>Témoignages</h2>
                                        </div>
                                        <div>
                                            <SwiperSlider />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    </>
  );
};

export default ContentC;
