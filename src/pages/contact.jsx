import React, { useContext } from 'react';
import { UserContext } from '../components/users/UserContext';

const Contact = () => {
  const { users } = useContext(UserContext);
  return (
    <div className='container'>
      {users.map((data, index) => (
        <h1 key={index} className='py-4'>
          {data.name}
        </h1>
      ))}
    </div>
  );
};
export default Contact;
