import React, { useState, useEffect, useRef, ComponentType } from "react";
import styled from "styled-components";
import Box from '@material-ui/core/Box';
import {useWindowEventListener} from '../browser/browser.hook';
import { useScrollContext } from "../scroll/scroll.provider";

/** */
const TallOuterContainer: ComponentType<any> = styled.div.attrs<any>(
  ({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
  })
)`
  position: relative;
  width: 100%;
`;

// const StickyHeader: ComponentType<any> = styled.div`
//   position: sticky;
//   top: 0;
//   width: 100%;
//   overflow-x: hidden;
// `;s

const StickyInnerContainer: ComponentType<any> = styled.div.attrs<any>(({ width, height, top }) => ({
  style: { width: `${width}px`, height: `${height}px`, top: `${top}px` }
}))`
  position: sticky;
  overflow-x: hidden;
`;

const HorizontalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateX }) => ({
  style: { transform: `translateX(${translateX}px)` }
}))`
  position: absolute;
  height: 100%;
  transition: transform 60ms linear;
  will-change: transform;
`;

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  position: absolute;
  will-change: transform;
`;

const calcDynamicHeight = (objectWidth: number, height: number) => {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  return objectWidth - vw + height;
};

const updateDynamicHeight = (
  ref: React.RefObject<any>,
  leftPos: number,
  setDynamicHeight: React.Dispatch<React.SetStateAction<number>>
) => {
  const objectWidth = ref.current.scrollWidth;
  const dynamicHeight = calcDynamicHeight(objectWidth, leftPos);
  setDynamicHeight(dynamicHeight);
};

const updateTranslateX = (
  ref: React.RefObject<any>,
  setTranslateX: React.Dispatch<React.SetStateAction<number>>
) => {
  const offsetTop = -ref.current.offsetTop;
  setTranslateX(offsetTop);
};

// const toggleStickyHeader = (
//   containerRef: React.RefObject<any>,
//   scrollBoxRef: React.RefObject<any>,
//   setStickyHeaderStatus: React.Dispatch<React.SetStateAction<boolean>>
// ) => {
//   const objectWidth = scrollBoxRef.current.scrollWidth;
//   const dynamicHeight = calcDynamicHeight(objectWidth);

//   const offsetTop = -containerRef.current.offsetTop;
//   const shouldStickHeader = (-offsetTop + containerRef.current.clientHeight) < dynamicHeight; 

//   // console.log('toggleStickyHeader.shouldStickHeader', shouldStickHeader, offsetTop, dynamicHeight, containerRef)
//   setStickyHeaderStatus(shouldStickHeader);
// }

// function updateRect(
//   parentRef: React.RefObject<any>,
//   setWidth: React.Dispatch<React.SetStateAction<number>>,
//   seHeight: React.Dispatch<React.SetStateAction<number>>
// ) {
//   const rect: DOMRect = parentRef.current.getBoundingClientRect();
//   setWidth(rect.width);
//   seHeight(rect.height);
// }

const HorizontalSection: ComponentType<any> = (props) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  // const [width, setWidth] = useState<number>(0);
  // const [height, setHeight] = useState<number>(0);

  const { scrollY } = useScrollContext();

  // const [shouldStickHeader, setStickyHeaderStatus] = useState<boolean>(true);

  const containerRef = useRef(null);
  const objectRef = useRef(null);
  // const headerRef = useRef(null);

  

  const onWindowResize = () => updateDynamicHeight(objectRef, props.height, setDynamicHeight);
  const onScrollChange = () => updateTranslateX(containerRef, setTranslateX)
  // const onInit = () => {
  //   // updateRect(props.parentRef, setWidth, setHeight)
  //   updateDynamicHeight(objectRef, setDynamicHeight);
  // }

  useWindowEventListener('resize', onWindowResize);
  // useWindowEventListener('scroll', onScrollChange);

  useEffect(onWindowResize, []);
  useEffect(onScrollChange, [scrollY]);

  // props.parentRef

  console.log(props)
  return (
    <>
      <TallOuterContainer dynamicHeight={dynamicHeight}>
        
        <StickyInnerContainer ref={containerRef} width={props.width} height={props.height} top={props.top}>
          <HorizontalTranslateContainer translateX={translateX} ref={objectRef}>
            {props.children}
          </HorizontalTranslateContainer>
        </StickyInnerContainer>
      </TallOuterContainer>
    </>
  );
};

export default HorizontalSection;
