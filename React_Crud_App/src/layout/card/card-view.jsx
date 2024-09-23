import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';

const CardView = ({ item }) => {
  const { id, name, username, email } = item;

  return (
    <>
      <Card>
        <Card.Content header={username} />
        <Card.Content description={name} />
        <Card.Content extra>
          <Icon name='mail' />
          {email}
        </Card.Content>
        <Card.Content>
          <Link to={`/users/${id}`}>
            <Button primary content='View'></Button>
          </Link>
        </Card.Content>
      </Card>
    </>
  );
};

export default CardView;
