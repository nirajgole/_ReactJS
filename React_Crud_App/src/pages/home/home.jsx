import React, { useEffect, useContext, useState } from 'react';
import userService from '../../config/user.service';
import { UserContext } from '../../components/users/UserContext';
import GridView from '../../layout/card/grid-view';
import { BsGrid, BsListUl } from 'react-icons/bs';
import './home.styles.css';
import DataTable from '../../components/table/table';
const Home = () => {
  const { users, setUsers } = useContext(UserContext);
  const [view, setView] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      const result = await userService.getUsers();
      setUsers(result.data.reverse());
    };
    loadUsers();
  }, [setUsers]);

  return (
    <div className='container'>
      <div className='row'>
        <button
          className='toggle-button btn btn-info'
          onClick={() => setView(!view)}
        >
          {view ? <BsGrid /> : <BsListUl />}
        </button>
      </div>
      <div className='row'>
        {view ? (
          <DataTable
            tableTitle='User list'
            columnData={users}
            columnHeading={['#', 'Name', 'User Name', 'Email', 'Action']}
          />
        ) : (
          <GridView />
        )}
      </div>
    </div>
  );
};

export default Home;
