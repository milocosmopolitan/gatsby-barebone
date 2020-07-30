import React, {useRef, ComponentType, useState} from 'react';
import { useTranslation } from "react-i18next";
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { Container, makeStyles, Drawer, Box, Typography } from '@material-ui/core';
import styled from "styled-components";
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    margin: 0,
    [theme.breakpoints.up('lg')]: {
      marginLeft: 400,
    },
  }
}));


const OuterContainer: ComponentType<any> = styled.div.attrs<any>(
  ({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
`;

export const AboutDetail = () => {
  return (
    <>
      <Container maxWidth="md">
        <Typography variant="h2">About Team</Typography>
      </Container>
    </>
  )
}

export const AboutSectionContent = (props: any) => {
  const classes = useStyles();
  const containerRef = useRef()
  const { t } = useTranslation();

  const [opened, setState] = useState(false);

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState(open);
  }

  return (
    <OuterContainer ref={containerRef}>
      <Container maxWidth="sm" className={classes.content}>
        <Typography variant="h2">
          {t('about.company.heading')}
        </Typography>
        <Box component="summary" position="relative" width="100%" display="flex" justifyContent="center" marginTop={4} marginBottom={4}>
          <Typography variant="body1">
            {t('about.company.body')}
          </Typography>
        </Box>
        {/** we probably will need too replace this button with custom designed button for the site */}
        <Box component="div" position="relative" width="100%" display="flex" justifyContent="center" marginTop={7}>
          <Button variant="contained" onClick={toggleDrawer(true)} aria-label={t('about.drawer.openButton')}>
            {t('about.drawer.openButton')}
          </Button>
        </Box>
      </Container>

      <Drawer anchor='left' open={opened} onClose={toggleDrawer(false)} SlideProps={{timeout: 1000}}>
        <Box id="about-detail-container" component="aside" position="relative" width="100vw">
          <Box id="about-detail-header" component="header"
            position="relative" width="100%" display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)} aria-label={t('about.drawer.closeButton')}>
              <Close />
            </IconButton>
          </Box>
          <Box component="main" position="relative" width="100%" display="flex">
            <AboutDetail />
          </Box>
        </Box>
      </Drawer>
    </OuterContainer>
  )
}
