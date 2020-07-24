import React from 'react';
import Box from '@material-ui/core/Box';
import Image from './image';
import { Container, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const TESTIMONIALS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
]


export const TestimonialsSectionContent = (props: any) => {

  
  return (
    <Container maxWidth="md">
      <h2>Testimonials</h2>
      <p>Client's testimonial speaks more than self explanation and improves sense of credibility.</p>
      
      <Grid container={true}>
        <Grid item={true} xs={12} md={4} lg={4}>
          Text... 

          <Box width="400px" position="absolute">
            <Image containerRef={props.containerRef} />
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={8} lg={8}>
          <Box paddingLeft={3}>
            {/* <Box width="70%" display="flex" flexDirection="column" justifyContent="center" alignItems="center"> */}
            {TESTIMONIALS.map((testimonial, i) => (
                <Box key={i} margin={2} padding={2}>
                  <span>{testimonial}</span>
                </Box>
              ))}
            {/* </Box> */}
          </Box>
          
        </Grid>
      </Grid>
    </Container>
  )
}
