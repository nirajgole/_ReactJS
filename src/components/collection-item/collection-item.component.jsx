import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className='collection-item'>
      <div
        className='image'
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className='collection-footer'>
        <div className='name'>{name}</div>
        <div className='name'>{price}</div>
      </div>
    </div>
  );
};

export default CollectionItem;
