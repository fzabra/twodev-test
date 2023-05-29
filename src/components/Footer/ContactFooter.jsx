import React from 'react';


const ContactFooter = () => {
    return (
        <>
        <div className='contactFooterContent'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-5 d-flex flex-column flex-sm-row align-items-baseline gap-5'>
                        <p className='d-none d-sm-block'><img src="./images/icons/mail.svg" alt="Delivery"  /></p>
                        <p className='text-center text-sm-left p-4 p-md-0'>Abonnez-vous à notre infolettre pour rester à l’affût de nos promotions!</p>
                    </div>
                    <div className='col-12 col-lg-7 d-flex flex-column flex-sm-row  align-items-center justify-content-between'>
                        <div className='mb-3 mb-md-0'>
                            <p className='mb-0 img-fluid'><img src="./images/icons/enter_email.svg" alt="Delivery"  /></p>
                        </div>
                        <div className='d-flex flex-column flex-sm-row align-items-center gap-2'>
                            <p className='mb-0'>Suivez-nous</p>
                            <div className='d-flex align-items-center gap-3 mb-3 mb-md-0'>
                                <img src="./images/icons/Facebook.svg" alt="Delivery"  />
                                <img src="./images/icons/Instagram.svg" alt="Delivery"  />
                                <img src="./images/icons/Linkedin.svg" alt="Delivery"  />
                                <img src="./images/icons/Pinterest.svg" alt="Delivery"  />
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
  };
  
  export default ContactFooter;