import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

/**
 * This is just a bare-bone footer component for layout purpose
 */
const Footer = (props: any) => {
  return (
    <Box position="relative" component="footer">
      <Container maxWidth="sm">
        <Grid container={true} spacing={3}>
          <Grid item={true} xs={12} sm={12} md={6} lg={3}>
            Column 1
          </Grid>
          <Grid item={true} xs={12} sm={12} md={6} lg={3}>
            Column 2
          </Grid>
          <Grid item={true} xs={12} sm={12} md={6} lg={3}>
            Column 3
          </Grid>
          <Grid item={true} xs={12} sm={12} md={6} lg={3}>
            Column 4
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Footer
