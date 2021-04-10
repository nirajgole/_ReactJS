import React, { useState, useEffect } from 'react';
import userService from '../config/user.service';
import Table from './table/table';

const Home = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await userService.getUsers();
    setUsers(result.data.reverse());
  };

  const deleteUser = async id => {
    await userService.deleteUser(id);
    loadUsers();
  };

  return (
    <div className='container'>
      <h1 className='py-4'>List of users</h1>
      <Table
        users={users}
        deleteUser={deleteUser}
        columns={['#', 'Name', 'User Name', 'Email', 'Action']}
      />
    </div>
  );
};

export default Home;
