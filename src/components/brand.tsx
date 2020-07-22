import React, { useRef, useState } from 'react';
import { Transition } from 'react-transition-group';
// import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import { transformCss } from '../utils/animation/transform';
import { useWindowEventListener } from '../shared/hooks/browser.hook';

const duration = 300;

const transform = transformCss({
  scale: { from: 1, to: 0.8 },
  translateY: { from: 60, to: 0, unit: 'px' }
});

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: transform.from,
}

const transitionStyles: any = {
  entering: { transform: transform.to },
  entered:  { transform: transform.to },
  exiting:  { transform: transform.from },
  exited:   { transform: transform.from },
};

const AnimateOnScroll = (props: any) => (
  <Transition in={props.in} timeout={duration}>
    {state => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {props.children}
      </div>
    )}
  </Transition>
);

export default function Brand(props: any) {
  const [trigger, setTrigger] = useState(false);
  const onScroll = () => {
    const scrollPassed = window.scrollY > props.parentRef.current.clientHeight;
    setTrigger(scrollPassed);
  };

  useWindowEventListener('scroll', onScroll)

  return (
    <div className="brand-container">
      <AnimateOnScroll in={trigger}>

        <Box component="div">
          {props.children}
        </Box>

      </AnimateOnScroll>
    </div>
    
  )
}
