import React, { useEffect, useState } from 'react';
import './ContentHome.scss';


const ContentHome = () => {
  return (
    <>
    
    <div className="container">
        <div className='row'>
            <section>
                <div className='col-12 text-center mt-3'>
                    <p>Avril, c’est le printemps. La promesse de l’abondance.</p>
                    <p>C’est la rivière qui coule librement, les oiseaux qui reviennent des pays chauds, les abeilles qui bourdonnent à nouveau. Une nature calme qui s’éveille tranquillement, mais sûrement, que l’on aime fréquenter pour ses vertus apaisantes et ses recettes de bonheur qui nous guident en toute sérénité. </p>
                    <p>Chez Avril, nous souhaitons rendre accessible le meilleur de la nature à tous les consommateurs québécois. Nous croyons qu’être mieux est tout ce dont nous avons besoin pour bien vivre. </p>
                    <p>C’est pourquoi nous offrons des produits sains, naturels et biologiques. Des produits bons pour le corps et l’esprit, mais aussi pour notre environnement.</p>
                </div>
            </section>
            <section>
                <div className='col-12 text-center mt-3'>
                    <h1 className='title-h1'>AVRIL. BIEN MIEUX <img src="./images/label25.svg" alt="Label 25" /></h1>
                </div>
            </section>
        </div>
    </div>
    <div>
     <div className="container">
     <div className='row'>
            <section>
                <div className='col-12 mt-3'>
                    <div className='row'>
                        <div className='col-0 col-md-2'></div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src="./images/TheSAVCollective_AvrilSB5 1.png" alt="Image Alt" className='img-fluid' />
                            </div>
                            <div className='col-12 col-md-4 p-4'>
                                <p>Nous offrons une vaste sélection de produits biologiques, naturels, végétaliens, sans gluten, locaux et écoresponsables.</p>
                                <p>Tous nos fruits et légumes sont certifiés biologiques par Ecocert Canada.</p>
                                <p><button className='default'>Magasiner</button></p>
                            </div>
                        <div className='col-0 col-md-2'></div>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <div className='row'>
                        <div className='col-0 col-md-2  order-md-1'></div>
                        <div className='col-12 col-md-4 text-center order-1 order-md-3'>
                            <img src="./images/TheSAVCollective_AvrilSB5 1.png" alt="Image Alt" className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-4 p-4 order-2 order-md-2'>
                            <p>Nous offrons une vaste sélection de produits biologiques, naturels, végétaliens, sans gluten, locaux et écoresponsables.</p>
                            <p>Tous nos fruits et légumes sont certifiés biologiques par Ecocert Canada.</p>
                        </div>
                        <div className='col-0 col-md-2 order-md-4'></div>
                    </div>            
                </div>
                <div className='col-12 mt-3'>
                    <div className='row'>
                        <div className='col-0 col-md-2'></div>
                            <div className='col-12 col-md-4 text-center'>
                                <img src="./images/TheSAVCollective_AvrilSB5 1.png" alt="Image Alt" className='img-fluid' />
                            </div>
                            <div className='col-12 col-md-4 p-4'>
                                <p>Nous offrons une vaste sélection de produits biologiques, naturels, végétaliens, sans gluten, locaux et écoresponsables.</p>
                                <p>Tous nos fruits et légumes sont certifiés biologiques par Ecocert Canada.</p>
                                <p><button className='default'>Magasiner</button></p>
                            </div>
                        <div className='col-0 col-md-2'></div>
                    </div>
                </div>
                <div className='col-12 mt-3'>
                    <div className='row'>
                        <div className='col-0 col-md-2 order-md-1'></div>
                        <div className='col-12 col-md-4 text-center order-1 order-md-3'>
                            <img src="./images/TheSAVCollective_AvrilSB5 1.png" alt="Image Alt" className='img-fluid' />
                        </div>
                        <div className='col-12 col-md-4 p-4 order-2 order-md-2'>
                            <p>Nous offrons une vaste sélection de produits biologiques, naturels, végétaliens, sans gluten, locaux et écoresponsables.</p>
                            <p>Tous nos fruits et légumes sont certifiés biologiques par Ecocert Canada.</p>
                        </div>
                        <div className='col-0 col-md-2 order-md-4'></div>
                    </div>
                </div>
            </section>
        </div>
    </div>
    </div>
    </>
  );
};

export default ContentHome;
