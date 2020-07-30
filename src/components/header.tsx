import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, animateScroll as scroll } from "react-scroll";
import Slide from '@material-ui/core/Slide';
import Brand from './brand';
import { IconButton } from '@material-ui/core';
import { useLocation } from '../shared/hooks/location.hook';
import Logo from '../assets/No-logo.svg';
import { useBackgroundDarkness } from '../shared/background-check';

function HideOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: typeof window !== `undefined` ? window : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function HideAppBar(props: any) {
  const appBarRef = useRef(null);
  const {location} = useLocation();

  const bgDarkness = useBackgroundDarkness(appBarRef, ['.section'], 1);

  return (
    <>
      <AppBar color="transparent" className={(bgDarkness <= 0.5 ? 'background-checked-dark' : 'background-checked-light')} ref={appBarRef} elevation={0}>


        <Box position="absolute" width="100%" top="15px" display="flex" justifyContent="start">
          <Brand parentRef={appBarRef} breakpoint="sm">
            <Link to="intro"
              style={{position: 'relative', width: "120px", height: '40px', display: "flex" }}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Logo style={{position: 'absolute', top: 0, left: 0, fill: (bgDarkness <= 0.5 ? 'white' : 'black')}} height="40px" width="120px" /> 
            </Link>
          </Brand>
        </Box>

        <HideOnScroll {...props}>
          <Toolbar component="nav">

            <Box component="div"
              className="mobile-nav"
              position="absolute"
              right="15px"
              color={(bgDarkness <= 0.5 ? 'white' : 'black')}
              display={{ xs: 'block', sm: 'block', md: 'none' }}>
              <IconButton id="collapsed-nav" className="nav-collapsed" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
            </Box>

            <Box component="div"
              className="desktop-nav"
              color={(bgDarkness <= 0.5 ? 'white' : 'black')}
              display={{ xs: 'none', sm: 'none', md: 'flex' }}
              position="absolute" right="15px"
              justifyContent="space-around" alignItems="center">
              {props.children}
            </Box>

          </Toolbar>
        </HideOnScroll>
      </AppBar>
    </>
  );
}
