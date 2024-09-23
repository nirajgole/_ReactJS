import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import userService from '../../config/user.service';

const AddUser = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    website: '',
    phone: ''
  });

  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await userService.createUser(user);
    history.push('/');
  };

  const { name, username, email, website, phone } = user;
  return (
    <div>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h2 className='text-center mb-4'>Add A User</h2>
          <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Name'
                name='name'
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Username'
                name='username'
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='email'
                className='form-control form-control-lg'
                placeholder='Enter Your E-mail Address'
                name='email'
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Phone Number'
                name='phone'
                value={phone}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className='form-group'>
              <input
                type='text'
                className='form-control form-control-lg'
                placeholder='Enter Your Website Name'
                name='website'
                value={website}
                onChange={e => onInputChange(e)}
              />
            </div>
            <button className='btn btn-primary btn-block'>Add User</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
