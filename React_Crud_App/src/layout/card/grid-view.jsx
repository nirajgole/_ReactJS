import React, { useContext } from 'react';
import { Grid } from 'semantic-ui-react';
import { UserContext } from '../../components/users/UserContext';
import CardView from './card-view';
import './card.styles.css';

const GridView = () => {
  const { users } = useContext(UserContext);
  return (
    <>
      <Grid relaxed columns={3}>
        {users.map((item, index) => (
          <Grid.Column key={index}>
            <CardView item={item} />
          </Grid.Column>
        ))}
      </Grid>
    </>
  );
};

export default GridView;
