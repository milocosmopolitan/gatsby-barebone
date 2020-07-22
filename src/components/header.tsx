import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import MenuIcon from '@material-ui/icons/Menu';
import { Link, animateScroll as scroll } from "react-scroll";
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import Brand from './brand';
import { IconButton, Button } from '@material-ui/core';

function GrowOnScroll(props: any) {
  const { children } = props;
  const trigger = useScrollTrigger({ target: typeof window !== `undefined` ? window : undefined });

  return (
    <Grow appear={true} in={trigger}>
      {children}
    </Grow>
  );
}

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
  return (
    <>
      <AppBar color="transparent" ref={appBarRef} elevation={0}>
        <Box position="absolute" width="100%" top="15px" display="flex" justifyContent="center">
          <Brand parentRef={appBarRef}>
            <Link to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              LOGO
            </Link>
          </Brand>
        </Box>
        <HideOnScroll {...props}>
          <Toolbar component="nav">
            <IconButton id="collapsed-nav" className="nav-collapsed" edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}

            <Box component="div"
              className="nav-expanded"
              display={{ xs: 'none', sm: 'none', md: 'block' }}
              position="absolute" right="15px">
              {props.children}
            </Box>
          </Toolbar>
        </HideOnScroll>
      </AppBar>
    </>
  );
}
