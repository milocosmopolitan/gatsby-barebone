import React, { useState, useEffect, useRef, ComponentType } from "react";
import styled from "styled-components";
import Box from '@material-ui/core/Box';
import {useWindowEventListener} from '../hooks/browser.hook';

/** */
const TallOuterContainer: ComponentType<any> = styled.div.attrs<any>(
  ({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
  })
)`
  position: relative;
  width: 100%;
`;

const StickyHeader: ComponentType<any> = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  overflow-x: hidden;
`;

const StickyInnerContainer: ComponentType<any> = styled.div`
  position: sticky;
  top: 15vh;
  height: 85vh;
  width: 100%;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  height: 100%;
  will-change: transform;
`;

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  position: absolute;
  will-change: transform;
`;

const calcDynamicHeight = (objectWidth: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + vh + 150;
};

const updateDynamicHeight = (
  ref: React.RefObject<any>,
  setDynamicHeight: React.Dispatch<React.SetStateAction<number>>
) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);
  setDynamicHeight(dynamicHeight);
};

const updateTranslateX = (
  ref: React.RefObject<any>,
  setTranslateX: React.Dispatch<React.SetStateAction<number>>
) => {
  const offsetTop = -ref.current.offsetTop;
  setTranslateX(offsetTop);
};

const toggleStickyHeader = (
  containerRef: React.RefObject<any>,
  scrollBoxRef: React.RefObject<any>,
  setStickyHeaderStatus: React.Dispatch<React.SetStateAction<boolean>>
) => {  
  const objectWidth = scrollBoxRef.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth);

  const offsetTop = -containerRef.current.offsetTop;
  const shouldStickHeader = (-offsetTop + containerRef.current.clientHeight) < dynamicHeight; 

  // console.log('toggleStickyHeader.shouldStickHeader', shouldStickHeader, offsetTop, dynamicHeight, containerRef)
  setStickyHeaderStatus(shouldStickHeader);
}

interface HorizontalSectionProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  HeaderComponent?: ComponentType<any>
}

const HorizontalSection: ComponentType<HorizontalSectionProps> = ({
  children, title, description
}) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);

  const [shouldStickHeader, setStickyHeaderStatus] = useState<boolean>(true);

  const containerRef = useRef(null);
  const objectRef = useRef(null);
  // const headerRef = useRef(null);

  useEffect(() => updateDynamicHeight(objectRef, setDynamicHeight), []);

  const onWindowResize = () => updateDynamicHeight(objectRef, setDynamicHeight);
  const onScrollChange = () => {
    updateTranslateX(containerRef, setTranslateX);
    toggleStickyHeader(containerRef, objectRef, setStickyHeaderStatus);
    // console.log(containerRef, objectRef, 'dynamicHeight', dynamicHeight, 'translateX', -translateX)
  };

  useWindowEventListener('resize', onWindowResize);
  useWindowEventListener('scroll', onScrollChange);

  // const shouldStickHeader = !!dynamicHeight && !!translateX;

  // console.log(containerRef, objectRef, 'dynamicHeight', dynamicHeight, 'translateX', -translateX, dynamicHeight+translateX)

  return (
    <>
      {/* {shouldStickHeader ? 'sticky' : 'absolute'} */}
      {/* {containerRef?.current?.offsetTop} */}
      {/* {containerRef.current.offsetTop} */}
      {/* <Box></Box> */}
      {/* <VerticalTranslateContainer translateY={-translateX}>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
          <h2>Services</h2>
          <p>This sections displays services provided by the business</p>
          
        </Box>
      </VerticalTranslateContainer> */}
      {/* <Box position="relative"> */}
        {/* <Box position={shouldStickHeader ? 'sticky' : 'relative'} top={0}>
          <Box position="relative">
            <VerticalTranslateContainer translateY={shouldStickHeader ? 0 : -translateX - headerRef.current.clientHeight} ref={headerRef}>
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <h2>Services</h2>
                <p>This sections displays services provided by the business</p>
                
              </Box>  
            </VerticalTranslateContainer>
          </Box>
        </Box> */}
      {/* </Box> */}
      
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        <Box position={shouldStickHeader ? 'sticky' : 'relative'} top={0} width="100%">
          {/* <Box position="relative" width="100%"> */}
            {/* <VerticalTranslateContainer translateY={shouldStickHeader ? 0 : -translateX} ref={headerRef}> */}
              <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <h2>Services</h2>
                <p>This sections displays services provided by the business</p>
                
              </Box>  
            {/* </VerticalTranslateContainer>
          </Box> */}
        </Box>
        <StickyInnerContainer ref={containerRef}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            {children}
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
        
      </TallOuterContainer>
    </>
    
  );
};

export default HorizontalSection;
