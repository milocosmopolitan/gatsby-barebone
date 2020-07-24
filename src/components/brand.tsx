import React, { useRef, useState, ComponentType, useLayoutEffect, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import Box from '@material-ui/core/Box';
import { transformCss } from '../utils/animation/transform';
import { useWindowEventListener } from '../shared/hooks/browser.hook';
import { useTheme, useMediaQuery } from '@material-ui/core';
import styled from "styled-components";

const duration = 300;

// const transform = transformCss({
//   scale: { from: 1, to: 0.8 },
//   translateY: { from: 0, to: 0, unit: 'px' }
// });

const defaultStyle = {
  // position: 'absolute',
  // width: '100%',
  transition: `transform ${duration}ms ease-in-out`,
  // transform: transform.from,
  transformOrigin: `center`
}

// const mobileTransitionStyles: any = {
//   entering: { transform: transform.to },
//   entered:  { transform: transform.to },
//   exiting:  { transform: transform.from },
//   exited:   { transform: transform.from },
// };

// const TransitionAt = (props: any) => (
//   <Transition in={props.in} timeout={duration}>
//     {state => (
//       <div style={{
//         ...defaultStyle,
//         ...props.transitionStyles[state]
//       }}>
//         {props.children}
//       </div>
//     )}
//   </Transition>
// );


const animations: {[key: string]: any} = {
  mobile: {
    conditionMatches: (ref: React.RefObject<any>) => (window.scrollY > ref.current.clientHeight),
    transformStyle: transformCss({
      scale: { from: 1, to: 0.8 },
      translateY: { from: 0, to: 0, unit: 'px' }
    })
  },
  desktop1: {
    conditionMatches: (triggerPoint: number) => (window.scrollY > triggerPoint),
    transformStyle: transformCss({
      scale: { from: 4, to: 4 },
      translateX: { from: 0, to: -25, unit: 'vw' }
    })
  },
  scale: {
    conditionMatches: (triggerPoint: number) => (window.scrollY > triggerPoint),
    transformStyle: transformCss({
      scale: { from: 1, to: 0.25 },
      translateX: { from: 0, to: -25, unit: 'vw' }
    })
  },
}

const BrandContainer: ComponentType<any> = styled.div.attrs<any>(({ justifyContent }) => ({
  style: { justifyContent: justifyContent || 'center' }
}))`
  position: absolute;
  width: 100%;
  top: 15px;
  display: flex;
  justify-content: start;
  will-change: transform;
`;

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  transition: transform ease-in,
  will-change: transform;
`;

function triggerAnimation(
  key: string,
  conditionParam: any,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
) {

  // console.log('triggerAnimation', key)
  const conditionMatches = animations[key].conditionMatches(conditionParam);
  setTrigger(conditionMatches);
}

function MobileBrand(props: any) {
  const [trigger, setTrigger] = useState(false);
  const onScroll = () => triggerAnimation('mobile', props.parentRef, setTrigger);
  useWindowEventListener('scroll', onScroll);

  const transitionStyles: {[key: string]: object} = {
    entering: { transform: animations.mobile.transformStyle.to },
    entered:  { transform: animations.mobile.transformStyle.to },
    exiting:  { transform: animations.mobile.transformStyle.from },
    exited:   { transform: animations.mobile.transformStyle.from },
  };
  return (
    <BrandContainer justifyContent="start">
      <Transition in={trigger} timeout={duration}>
        {(state: string) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {props.children}
          </div>
        )}
      </Transition>
      {/* <TransitionAt in={trigger} transitionStyles={{
          entering: { transform: animations.mobile.transformStyle.to },
          entered:  { transform: animations.mobile.transformStyle.to },
          exiting:  { transform: animations.mobile.transformStyle.from },
          exited:   { transform: animations.mobile.transformStyle.from },
        }}>
          <div>
            {props.children}
          </div>
      </TransitionAt> */}
    </BrandContainer>
  )
}

function DesktopBrand(props: any) {
  const [slideToLeftTrigger, setSlideToLeftTrigger] = useState(false);
  const [scaleTrigger, setScaleTrigger] = useState(false);
  
  // console.log(window)
  
  const vh = window.innerHeight;
  const initialY = vh*0.8;
  const [translateY, setTranslateY] = useState<number>(initialY);

  const onScroll = () => {
    triggerAnimation('desktop1', 300, setSlideToLeftTrigger);

    // const endPointElement = document.querySelector('#about');
    // const endPointElementRect = endPointElement && endPointElement.getBoundingClientRect();

    // console.log(endPointElementRect);
    // 500 is padding top of about section

    const point = {
      a: (vh * 0.3),
      b: (vh * 1)
    }
    const offset =  window.scrollY < point.a
      ? initialY - (window.scrollY)
      : window.scrollY > point.b
        ? (
            (initialY - (vh * 0.3)) - (window.scrollY - point.b) > 0
              ? (initialY - (vh * 0.3)) - (window.scrollY - point.b)
              : 0
          )
        : initialY - (vh * 0.3);

    setScaleTrigger(!(offset>0));

    setTranslateY(offset);
  }

  useWindowEventListener('scroll', onScroll);
  // useWindowEventListener('load', () => setTranslateY(vh*0.3));

  // useLayoutEffect(() => {
  //   const vh = window.innerHeight;
  //   return () => {
  //     cleanup
  //   };
  // }, [input])

  const transitionStyles: {[key: string]: object} = {
    entering: { transform: animations.desktop1.transformStyle.to },
    entered:  { transform: animations.desktop1.transformStyle.to },
    exiting:  { transform: animations.desktop1.transformStyle.from },
    exited:   { transform: animations.desktop1.transformStyle.from },
  };

  const scaleStyles: {[key: string]: object} = {
    entering: { transform: animations.scale.transformStyle.to },
    entered:  { transform: animations.scale.transformStyle.to },
    exiting:  { transform: animations.scale.transformStyle.from },
    exited:   { transform: animations.scale.transformStyle.from },
  };

  return (
    <BrandContainer justifyContent={'center'}>
      <VerticalTranslateContainer translateY={translateY}>
        <Transition in={slideToLeftTrigger} timeout={duration}>
          {(state: string) => (
            <div style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}>
              <Transition in={scaleTrigger} timeout={duration}>
                {(innerState: string) => (
                  <div style={{
                    ...defaultStyle,
                    ...scaleStyles[innerState]
                  }}>
                    {props.children}
                  </div>
                )}
              </Transition>
            </div>
          )}
        </Transition>
      </VerticalTranslateContainer>
    </BrandContainer>
  )
}

/**
 * This component handles different branding emphasizing strategy for different viewport
 * @param props 
 */
export default function Brand(props: any) {
  const theme = useTheme();
  const breakpointMatches = useMediaQuery(theme.breakpoints.down(props.breakpoint));
  // const onResize () => 

  // useWindowEventListener('resize', onResize);
  return (
    <div className="brand-container">
      {(
        breakpointMatches
        ? (
          <MobileBrand parentRef={props.parentRef} className="brand-mobile">
            {props.children}
          </MobileBrand>
        )
        : (
          <DesktopBrand className="brand-desktop">
            {props.children}
          </DesktopBrand>
        )
      )}
    </div>
  )
}
