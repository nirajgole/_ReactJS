import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Table } from 'semantic-ui-react';
const DataTable = props => {
  const { columnData, columnHeading, tableTitle } = props;

  return (
    <Container>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.Cell>{tableTitle}</Table.Cell>
          </Table.Row>
          <Table.Row>
            {columnHeading.map((col, index) => (
              <Table.HeaderCell key={index}>{col}</Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {columnData.map(({ id, name, username, email }, index) => (
            <Table.Row key={index}>
              <Table.Cell scope='row'>{index + 1}</Table.Cell>
              <Table.Cell>{name}</Table.Cell>
              <Table.Cell>{username}</Table.Cell>
              <Table.Cell>{email}</Table.Cell>
              <Table.Cell>
                <Link className='btn btn-primary mr-2' to={`/users/${id}`}>
                  View
                </Link>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </Container>
  );
};

DataTable.propTypes = {
  columnData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DataTable;
