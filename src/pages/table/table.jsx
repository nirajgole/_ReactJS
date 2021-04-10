import React from 'react';
import { Link } from 'react-router-dom';

const Table = data => {
  const { users, deleteUser, columns } = data;
  return (
    <div>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            {columns.map((col, index) => (
              <th key={index} scope='col'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>
                <Link className='btn btn-primary mr-2' to={`/users/${user.id}`}>
                  View
                </Link>
                <Link
                  className='btn btn-outline-primary mr-2'
                  to={`/users/edit/${user.id}`}
                >
                  Edit
                </Link>
                <Link
                  className='btn btn-danger'
                  onClick={() => deleteUser(user.id)}
                  to={`/`}
                >
                  Delete
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
