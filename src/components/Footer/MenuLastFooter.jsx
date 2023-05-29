import React, { useState, useEffect } from "react";
import styles from "./MenuLastFooter.module.scss";

const MenuLastFooter = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuClick = (index) => {
    if (activeMenu === index) {
      setActiveMenu(null);
    } else {
      setActiveMenu(index);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuItems = [
    {
      title: "Avril",
      items: [
        "À propos d'Avril",
        "Nos Magasins",
        "Événements",
        "Services offerts",
        "Cartes-cadeaux",
        "Emplois et carrières",
        "Presse",
      ],
    },
    {
      title: "Avril",
      items: [
        "À propos d'Avril",
        "Nos Magasins",
        "Événements",
        "Services offerts",
        "Cartes-cadeaux",
        "Emplois et carrières",
        "Presse",
      ],
    },
    {
      title: "Avril",
      items: [
        "À propos d'Avril",
        "Nos Magasins",
        "Événements",
        "Services offerts",
        "Cartes-cadeaux",
        "Emplois et carrières",
        "Presse",
      ],
    },
  ];

  return (
    <>
      <div className={styles.MenuLastFooterContent}>
        <div className="container">
          <div className="box">
            <div className="contentA">
              <p>
                © 2020 Avril, Tous droits réservés.
              </p>
            </div>
            <div className="contentB">
              <p>Termes et conditions</p>
              <p>Sécurité & confidentialité</p>
              <p>Clause de non-responsabilité</p>
              <p>English</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuLastFooter;
