import React from 'react';

const Icons = ({ name, ...props }) => {
  const icons = {
    bar: (
      <img src="./images/icons/bar.svg" alt="Bar Icon" {...props} />
    ),
    cart: (
      <img src="./images/icons/cart.svg" alt="Cart Icon" {...props} />
    ),
    note: (
      <img src="./images/icons/note.svg" alt="Note Icon" {...props} />
    ),
    user: (
      <img src="./images/icons/user.svg" alt="User Icon" {...props} />
    ),
    usergrey: (
      <img src="./images/icons/user-grey.svg" alt="User Icon" width="1.375rem" {...props} />
    ),
    truck: (
      <img src="./images/icons/truck.svg" alt="Truck Icon" {...props} />
    ),
    close: (
      <img src="./images/icons/close-white.svg" alt="Close Icon" width="1.375rem" {...props} />
    ),
    search: (
      <img src="./images/icons/search.svg" alt="Search Icon" width="1.375rem" {...props} />
    ),

    
  };

  if (icons[name]) {
    return icons[name];
  }

  return null;
};

export default Icons;
