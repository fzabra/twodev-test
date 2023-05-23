import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://avril.2dev.ca/fr/graphql?hash=1636483305&identifier_1=%22main%22');
        setData(response.data.data);
      } catch (error) {
        console.error('Error getting data:', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  if (!data.menu || !data.menu.items) {
    return <div>Menu unavailable</div>;
  }

  const menuItems = data.menu.items.slice(14, 20); 

  return (
    <ul>
      {menuItems.map((menuItem) => (
        <li key={menuItem.item_id}>{menuItem.title}</li>
      ))}
    </ul>
  );
};

export default MenuData;
