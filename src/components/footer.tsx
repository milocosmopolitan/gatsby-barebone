import React from 'react';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Logo from '../assets/No-logo.svg';
import IconButton from '@material-ui/core/IconButton';
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import LinkedIn from '@material-ui/icons/LinkedIn';

/**
 * This is just a bare-bone footer component for layout purpose
 */
const Footer = (props: any) => {
  return (
    <Box id="footer" position="relative" component="footer" display="flex" justifyContent="center"
    paddingTop={6} paddingBottom={6}>
      
      <Container maxWidth="lg">
        {/* <Box component="div" position="relative" width="100%"
          display="flex" justifyContent="space-between" alignItems="flex-start">
        
        </Box> */}
        <Grid container={true} spacing={4}>
                    
          <Grid item={true} xs={12} sm={12} md={8}>
           
            <Box component="div" position="relative" width="100%"
              display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
              <Logo height="40px" width="120px" />

              <Grid container={true} spacing={4}>
                
                <Grid item={true} xs={12} sm={12} md={12} lg={4}>
                  <Box display="flex" flexDirection="column">
                    <h4>Services</h4>
                    <div>Service 1</div>
                    <div>Service 2</div>
                    <div>Service 3</div>
                    <div>Service 4</div>
                  </Box>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={12} lg={4}>
                  <Box display="flex" flexDirection="column">
                    <h4>About</h4>
                    <div>Our Story</div>
                    <div>Teams</div>
                    <div>Career</div>
                  </Box>
                </Grid>
                <Grid item={true} xs={12} sm={12} md={12} lg={4}>
                  <Box display="flex" flexDirection="column">
                    <h4>Legal</h4>
                    <div>Terms &amp; Conditions</div>
                    <div>Privacy Policy</div>
                    <div>Terms of use</div>
                  </Box>
                </Grid>
              </Grid>
            </Box>

            
          </Grid>

          <Grid item={true} xs={12} sm={12} md={4}>
            <Box component="div" position="relative" width="100%"
              display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
              <Box component="div" position="relative" width="100%"
                display="flex" justifyContent="flex-start" alignItems="stretch">
                <IconButton>
                  <LinkedIn/>
                </IconButton>
              </Box>
              <Box component="div" position="relative" width="100%"
                display="flex" justifyContent="flex-start" alignItems="stretch">
                <div>Subscribe now</div>
                <div>
                  TextInput
                </div>
              </Box>
            </Box>
            
          </Grid>
        </Grid>

        {/* <Grid container={true} spacing={4}>
          <Grid item={true} xs={12} sm={12} md={4}>
            <Box component="div" position="relative" width="100%"
              display="flex" justifyContent="flex-start" alignItems="center" flexDirection="column">
              <Logo height="40px" width="120px" />
              <hr/>
              <div>
                About | Services | Contact
              </div>
              <div aria-label="Company name">Company Name</div>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={12} md={4}>
            <Box component="div" position="relative" width="100%"
                display="flex" justifyContent="center" alignItems="center" flexDirection="column"
                >
              <Box component="div" position="relative" width="100%"
                display="flex" justifyContent="space-between" alignItems="center"
                paddingLeft={4} paddingRight={4}>
                <Phone />
                <div>000-000-0000</div>
              </Box>
              <Box component="div" position="relative" width="100%"
                display="flex" justifyContent="space-between" alignItems="center"
                paddingLeft={4} paddingRight={4}>
                <Email />
                <div>asdasdad@asdad.com</div>
              </Box>
            </Box>
          </Grid>
          <Grid item={true} xs={12} sm={12} md={4}>
            <Box component="div" position="relative" width="100%"
              display="flex" justifyContent="center" alignItems="center" flexDirection="column">
                <Box component="div" position="relative" width="100%"
                  display="flex" justifyContent="space-around" alignItems="center">
                  <IconButton>
                    <LinkedIn/>
                  </IconButton>
                </Box>
            </Box>
          </Grid>
        </Grid> */}
      </Container>
    </Box>
  )
}

export default Footer
