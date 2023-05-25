import React from 'react';

const ContentD = () => {
  return (
    <>
        <div className='parent-news'>
            <div className="container">
                <div className='row'>
                    <section className='news'>
                        <div className="row">
                            <div className="col-12 text-center mt-3 box-news">
                                <div>
                                    <h2>Offres d'emploi</h2>
                                    <ul>
                                        <li>Rabais employé de 25%</li>
                                        <li>Avantages sociaux et Programme d'aide aux employés</li>
                                        <li>Possibilités d'avancement</li>
                                    </ul>
                                    <p><button className='default'>Voir les offres<br></br>d'emploi</button></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 text-center mt-3 box-news">
                                <div>
                                    <h2>Programme Privilège</h2>
                                    <ul>
                                        <li>Recevez 1% de remuse en DOllars Avril sur vos achats en magasib ou en ligne</li>
                                        <li>Utilisez vos Dollar Avril pour économiser</li>
                                        <li>Profitez d'offres exclusives sur vos produits préférés</li>
                                    </ul>
                                    <p><button className='default'>Accéder au<br></br>Programme Privilège</button></p>
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

export default ContentD;
