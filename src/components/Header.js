import React from 'react';
import { Grid } from 'semantic-ui-react';

const Header = () => {
  return(
    <Grid
      style={{
        border: 'solid rgb(18, 133, 207) 5px',
        padding: '15px',
        margin: '5px',
        borderRadius: '15px'
      }}
    >
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={10} textAlign='center'>
      <h1>Blog Reviewer</h1>
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  )
}

export default Header;
