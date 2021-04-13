import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import userService from '../../config/user.service';

const ViewUser = () => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    website: '',
    phone: ''
  });

  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const result = await userService.viewUser(id);
    setUser(result.data);
  };

  const deleteUser = async id => {
    await userService.deleteUser(id);
    loadUser();
  };
  return (
    <div className='container py-4'>
      <h1 className='display-4'>Name: {user.name}</h1>
      <hr />
      <ul className='list-group w-50'>
        <li className='list-group-item'>user id: {id}</li>
        <li className='list-group-item'>username: {user.username}</li>
        <li className='list-group-item'>email: {user.email}</li>
        <li className='list-group-item'>phone: {user.phone}</li>
        <li className='list-group-item'>website: {user.website}</li>
        <li className='list-group-item'>
          <Link
            className='btn btn-danger float-right '
            onClick={() => deleteUser(user.id)}
            to={`/`}
          >
            Delete
          </Link>
          <Link
            className='btn btn-outline-primary float-right mr-2'
            to={`/users/edit/${user.id}`}
          >
            Edit
          </Link>
        </li>
        <Link className='btn btn-primary' to='/'>
          back to Home
        </Link>
      </ul>
    </div>
  );
};

export default ViewUser;
