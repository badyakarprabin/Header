import React from 'react';

import './App.css';

const ShoppingItem = props => {
  return (
    <div>
      <div className="shopping-item-wrapper">
        {props.hasDiscount && <div>Discount on this item</div>}
        <div className="shopping-item-img" />
        <div className="shopping-item-desc">
          <div>Price: {props.listedPrice}</div>
          <div>Listed Date : {props.listedDate}</div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingItem;
