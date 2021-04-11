import React from 'react';
import { Link } from 'react-router-dom';

const CardView = ({ item }) => {
  const { id, name, username } = item;
  return (
    <div>
      <div className='card'>
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className='card-subtitle mb-2 text-muted'>{username}</h6>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <Link className='btn btn-primary mr-2' to={`/users/${id}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardView;
