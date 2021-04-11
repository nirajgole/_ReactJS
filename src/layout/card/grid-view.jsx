import React, { useContext } from 'react';
import { UserContext } from '../../components/users/UserContext';
import CardView from './card-view';
import './card.styles.css';

const GridView = () => {
  const { users } = useContext(UserContext);
  return (
    <div className='container'>
      <div className='grid-view'>
        {users.map((item, index) => (
          <CardView key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default GridView;
