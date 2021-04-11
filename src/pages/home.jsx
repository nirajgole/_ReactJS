import React, { useState, useEffect, useContext } from 'react';
import userService from '../config/user.service';
import Table from '../components/table/table';
import { UserContext } from '../components/users/UserContext';

const Home = () => {
  const { users, setUsers } = useContext(UserContext);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await userService.getUsers();
    setUsers(result.data.reverse());
  };

  return (
    <div className='container'>
      <h1 className='py-4'>List of users</h1>
      <Table
        tableTitle='User list'
        columnData={users}
        columnHeading={['#', 'Name', 'User Name', 'Email', 'Action']}
      />
    </div>
  );
};

export default Home;
