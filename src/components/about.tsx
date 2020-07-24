import React, {useRef, ComponentType, useState} from 'react';
// import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import { Container, makeStyles } from '@material-ui/core';
// import BrandLarge from './brand-lg';
import styled from "styled-components";
// import { useWindowEventListener } from '../shared/hooks/browser.hook';
import { Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    margin: 0,
    // [theme.breakpoints.down('sm')]: {
    //   backgroundColor: theme.palette.secondary.main,
    // },
    // [theme.breakpoints.up('md')]: {
    //   backgroundColor: theme.palette.primary.main,
    // },
    [theme.breakpoints.up('lg')]: {
      marginLeft: 400,
    },
  },
  /**  */
  brandingLarge: {

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

const AnimationQueues = {
  a: {
    scrollY: 0,
    transform: {
      scale: 2,
    }
  },
  b: {
    scrollBind: {
      anchoredElementId: ''
    },
    transform: {
      scale: 2,
    }
  }
}

// const updateTranslateX = (
//   ref: React.RefObject<any>,
//   setTranslateY: React.Dispatch<React.SetStateAction<number>>
// ) => {
//   console.log(ref)
  
//   if (ref.current.parentNode.offsetTop)
//   setTranslateX(ref.current.parentNode.offsetTop);
// }

export const AboutSectionContent = (props: any) => {
  const classes = useStyles();

  // const [translateY, setTranslateX] = useState<number>(0);

  // // const onWindowResize = () => {
    
  // // }
  // const onScrollChange = () => {
  //   // updateTranslateX(containerRef, setTranslateX);
  //   // console.log(containerRef)

  //   updateTranslateX(containerRef, setTranslateX);
  // };

  // // useWindowEventListener('resize', onWindowResize);
  // useWindowEventListener('scroll', onScrollChange);

  const containerRef = useRef()
  return (
    <OuterContainer ref={containerRef}>
      {/* <Box position="absolute" width="100%" top="-200px" display="flex" justifyContent="center">
        <BrandLarge>
          Logo {translateY}
        </BrandLarge>
      </Box> */}
      <Container maxWidth="sm" className={classes.content}>
        <h2>About Business</h2>

        <summary>
          {/* testing long text 1 paragraph, 125 words, 848 bytes. */}
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut massa tellus. Sed nunc felis, tristique eget consequat a, commodo sit amet odio. Nunc ut tellus non ipsum rhoncus condimentum. Curabitur urna turpis, tincidunt ut consectetur non, vehicula sit amet lacus. Nam ultricies libero et libero consequat, tempor fermentum purus accumsan. Integer viverra, eros sit amet dignissim mattis, sem ante tristique ipsum, sit amet convallis ligula est vel turpis. Nam finibus sed risus vel faucibus. Duis ut tellus sed augue condimentum malesuada et quis est. Maecenas tempus felis sed dui faucibus, lobortis dictum sapien suscipit. Pellentesque convallis urna nec sem venenatis aliquet. Maecenas mollis iaculis leo, ac pretium mauris. Duis a tellus tincidunt, accumsan justo nec, efficitur risus. Vestibulum sagittis nisl in mauris mollis commodo.
          </p>
        </summary>
      </Container>

      <Button variant="contained">Learn more</Button>
    </OuterContainer>
  )
}

export const AboutTeam = () => {
  return (
    <>
      <h2>About Team</h2>
    </>
  )
}
