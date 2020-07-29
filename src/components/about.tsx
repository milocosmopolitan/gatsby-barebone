import React, {useRef, ComponentType, useState} from 'react';
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Close from '@material-ui/icons/Close';
import { Container, makeStyles, Drawer, Box } from '@material-ui/core';
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
        <h2>About Team</h2>
      </Container>
    </>
  )
}

export const AboutSectionContent = (props: any) => {
  const classes = useStyles();
  const containerRef = useRef()

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
        <h2>About Business</h2>

        <summary>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut massa tellus. Sed nunc felis, tristique eget consequat a, commodo sit amet odio. Nunc ut tellus non ipsum rhoncus condimentum. Curabitur urna turpis, tincidunt ut consectetur non, vehicula sit amet lacus. Nam ultricies libero et libero consequat, tempor fermentum purus accumsan. Integer viverra, eros sit amet dignissim mattis, sem ante tristique ipsum, sit amet convallis ligula est vel turpis. Nam finibus sed risus vel faucibus. Duis ut tellus sed augue condimentum malesuada et quis est. Maecenas tempus felis sed dui faucibus, lobortis dictum sapien suscipit. Pellentesque convallis urna nec sem venenatis aliquet. Maecenas mollis iaculis leo, ac pretium mauris. Duis a tellus tincidunt, accumsan justo nec, efficitur risus. Vestibulum sagittis nisl in mauris mollis commodo.
          </p>
        </summary>
      </Container>

      {/* <Button variant="contained" onClick={toggleDrawer('left', true)}>{anchor}</Button> */}
      <Drawer anchor='left' open={opened} onClose={toggleDrawer(false)} SlideProps={{timeout: 1000}}>
        {/* {list(anchor)} */}
        <Box component="aside" position="relative" width="100vw">
          <Box component="header" position="relative" width="100%" display="flex" justifyContent="flex-end">
            <IconButton onClick={toggleDrawer(false)}>
              <Close />
            </IconButton>
          </Box>
          <Box component="main" position="relative" width="100%" display="flex">
            <AboutDetail />
          </Box>
        </Box>
      </Drawer>

      <Button variant="contained" onClick={toggleDrawer(true)}>Learn more</Button>
    </OuterContainer>
  )
}
