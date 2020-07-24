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
import { IconButton, Button, useMediaQuery, useTheme } from '@material-ui/core';
import { useStaticQuery, graphql } from 'gatsby';
import { useLocation } from '../shared/hooks/location.hook';
import BrandLarge from './brand-lg';
import Logo from '../assets/No-logo.svg';

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

  const {location} = useLocation();

  console.log(location.pathname)
  // const { sitePage } = useStaticQuery(
  //   graphql`
  //     query {
  //       sitePage {
  //         id
  //         path
  //       }
  //     }
  //   `
  // )
  // Just in case if we ever need to update UI based on location
  // const DynamicPageBrand = location.pathname === '/'
  //   ? () : ()
  // const theme = useTheme();
  // const md = useMediaQuery(theme.breakpoints.only('md'));

  // const ResponsiveBrand = md ? (
  //   <Brand parentRef={appBarRef}>
  //     <Link to="intro"
  //       spy={true}
  //       smooth={true}
  //       offset={-70}
  //       duration={500}>
  //       LOGO 
  //     </Link>
  //   </Brand>
  // ) : (
  //   <BrandLarge>
  //   </BrandLarge>
  // );

  return (
    <>
      <AppBar color="transparent" ref={appBarRef} elevation={0}>


        <Box position="absolute" width="100%" top="15px" display="flex" justifyContent="start">
          <Brand parentRef={appBarRef} breakpoint="sm">
            <Link to="intro"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}>
              <Logo height="40px" width="120px" /> 
            </Link>
          </Brand>
        </Box>

        <HideOnScroll {...props}>
          <Toolbar component="nav">

            <Box component="div"
              className="mobile-nav"
              position="absolute"
              right="15px"
              display={{ xs: 'block', sm: 'block', md: 'none' }}>
              <IconButton id="collapsed-nav" className="nav-collapsed" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              {/* {props.children} */}
            </Box>
            {/* <Typography variant="h6">Scroll to Hide App Bar</Typography> */}

            <Box component="div"
              className="desktop-nav"
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
