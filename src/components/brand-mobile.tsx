import React, { useRef, useState, ComponentType, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import { transformCss } from '../utils/animation/transform';
import styled from "styled-components";
import { useScrollContext } from '../shared/scroll/scroll.provider';

const duration = 300;

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transformOrigin: `center`
}

const transformStyle = transformCss({
  scale: { from: 1, to: 0.8 },
  translateY: { from: 0, to: 0, unit: 'px' }
})

const BrandContainer: ComponentType<any> = styled.div.attrs<any>(({ justifyContent }) => ({
  style: { justifyContent: justifyContent || 'center' }
}))`
  position: absolute;
  width: 100%;
  top: 15px;
  display: flex;
  justify-content: start;
`;

const triggerAnimation = (
  ref: React.RefObject<any>,
  setTrigger: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const conditionMatches = window.scrollY > ref.current.clientHeight;
  setTrigger(conditionMatches);
}

const MobileBrand: ComponentType<any> = (props: any) => {
  const renders = useRef(0);
  const {scrollY} = useScrollContext();
  const [trigger, setTrigger] = useState(false);
  const onScroll = () => triggerAnimation(props.parentRef, setTrigger);
  // attempting to replace scroll event listener to react context and hook combo.
  // useWindowEventListener('scroll', onScroll);

  useEffect(() => onScroll(), [scrollY]);

  const transitionStyles: {[key: string]: object} = {
    entering: { transform: transformStyle.to },
    entered:  { transform: transformStyle.to },
    exiting:  { transform: transformStyle.from },
    exited:   { transform: transformStyle.from },
  };
  return (
    <BrandContainer justifyContent="start">
      <Transition in={trigger} timeout={duration}>
        {(state: string) => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            {props.children} {renders.current++}
          </div>
        )}
      </Transition>
    </BrandContainer>
  )
}

export default MobileBrand;
