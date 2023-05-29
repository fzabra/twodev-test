import React, { useState, useEffect } from "react";
import styles from "./MenuFooter.module.scss";

const MenuFooter = () => {
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
      <div className={styles.MenuFooterContent}>
        <div className="container">
          <div className="box">
            <div className="contentA">
              <p>
                <img src="./images/icons/logo.svg" alt="Delivery" />
              </p>
              <p>
                Abonnez-vous à notre infolettre pour rester à l’affût de nos
                promotions!
              </p>
            </div>
            <div className="contentB">
              {menuItems.map((menu, index) => (
                <div className="menu" key={index}>
                  {windowWidth <= 1439 ? (
                    <>
                      <h1 onClick={() => handleMenuClick(index)}>
                        {menu.title}
                      </h1>
                      <ul
                        style={{
                          display: activeMenu === index ? "block" : "none",
                        }}
                      >
                        {menu.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <>
                      <h1>{menu.title}</h1>
                      <ul>
                        {menu.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuFooter;
