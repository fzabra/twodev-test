import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FilterMenuData } from '../../utils/filterMenuData'

import styles from './MenuData.module.scss'

const MenuData = () => {
  const [menuPrimary, setMenuPrimary] = useState([])
  const [menuSecondary, setMenuSecondary] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://avril.2dev.ca/fr/graphql?hash=1636483305&identifier_1=%22main%22');

        const {
          firstMenu,
          secondMenu
        } = FilterMenuData(response.data.data.menu.items)

        setMenuPrimary(firstMenu)
        setMenuSecondary(secondMenu)

        setData(response.data.data);
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className={styles.menuPrimary}>
      {menuPrimary.map((menuItem) => (
          <li key={menuItem.item_id}>
            <img src={"https://avril-bkd.2dev.ca/media/" + menuItem.icon} /> 
            {menuItem.title}
            
            <ul>
              {menuSecondary.map((subItem) => (
                <React.Fragment key={subItem.item_id}>
                  {subItem.parent_id === Number(menuItem.item_id) && 
                    <li>
                      {subItem.title}
                    </li>
                  }
                </React.Fragment>
              ))}
            </ul>
          </li>
      ))}
    </ul>
  );
};

export default MenuData;
