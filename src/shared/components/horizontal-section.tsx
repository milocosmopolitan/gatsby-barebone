import React, { useState, useEffect, useRef, ComponentType } from "react";
import styled from "styled-components";
import {useWindowEventListener} from '../browser/browser.hook';
import { useScrollContext } from "../scroll/scroll.provider";
import { BrowserUtils } from "../browser/browser.utils";

/** */
const TallOuterContainer: ComponentType<any> = styled.div.attrs<any>(
  ({ dynamicHeight }) => ({
    style: { height: `${dynamicHeight}px` }
  })
)`
  position: relative;
  width: 100%;
`;

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

const calcDynamicHeight = (objectWidth: number, height: number) => {
  const { width: vw } = BrowserUtils.GetViewSize();
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

const HorizontalSection: ComponentType<any> = (props) => {
  const [dynamicHeight, setDynamicHeight] = useState<number>(0);
  const [translateX, setTranslateX] = useState<number>(0);
  const { scrollY } = useScrollContext();
  const containerRef = useRef(null);
  const objectRef = useRef(null);

  const onWindowResize = () => updateDynamicHeight(objectRef, props.height, setDynamicHeight);
  const onScrollChange = () => updateTranslateX(containerRef, setTranslateX)

  useWindowEventListener('resize', onWindowResize);

  useEffect(onWindowResize, []);
  useEffect(onScrollChange, [scrollY]);

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
