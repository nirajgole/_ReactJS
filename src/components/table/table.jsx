import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Table = props => {
  const { columnData, columnHeading, tableTitle } = props;

  return (
    <>
      <h2>{tableTitle}</h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            {columnHeading.map((col, index) => (
              <th key={index} scope='col'>
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {columnData.map(({ id, name, username, email }, index) => (
            <tr key={index}>
              <th scope='row'>{index + 1}</th>
              <td>{name}</td>
              <td>{username}</td>
              <td>{email}</td>
              <td>
                <Link className='btn btn-primary mr-2' to={`/users/${id}`}>
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

Table.propTypes = {
  columnData: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default Table;
