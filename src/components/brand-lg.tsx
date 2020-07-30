import React, { ComponentType } from 'react';
import styled from "styled-components";
import { useScrollContext } from '../shared/scroll/scroll.provider';
import { useScrollAnimation } from '../shared/scroll/scroll.animation';
import { BrowserUtils } from '../shared/browser/browser.utils';

const BrandContainer: ComponentType<any> = styled.div.attrs<any>(({ justifyContent }) => ({
  style: { justifyContent: justifyContent || 'center' }
}))`
  position: absolute;
  width: 100%;
  top: 15px;
  display: flex;
  justify-content: start;
`;

const TransformContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY, translateX, scale }) => ({
  style: {
    transform: `translate(${translateX || 0}px, ${translateY || 0}px) scale(${scale || 1})`
  }
}))`
  will-change: transform;
`;

function DesktopBrand(props: any) {

  const {scrollY} = useScrollContext();
  const { height: vh, width: vw } = BrowserUtils.GetViewSize();
  
  const translateX = useScrollAnimation([{
    start: vh * 0.25,
    end: vh * 0.7,
    transform: { from: 0, to: -vw * 0.25 }
  },{
    start: vh * 1.3,
    end: vh * 1.6,
    transform: { from: -vw * 0.25, to: -vw * 0.5 + 100 }
  }], scrollY)


  const translateY = useScrollAnimation([{
    start: vh * 0,
    end: vh * 0.4,
    transform: { from: vh * 0.8, change: -vh * 0.3, limit: 0 }
  },{
    start: vh * 0.8,
    end: vh * 1.6,
    transform: { from: vh * 0.5, change: -vh * 0.5, limit: 0 }
  }], scrollY)

  const scale = useScrollAnimation([{
    start: vh * 1.3,
    end: vh * 1.6,
    transform: { from: 4, to: 1 }
  }], scrollY)

  return (
    <BrandContainer justifyContent={'center'}>
      <TransformContainer translateX={translateX} translateY={translateY} scale={scale}>
        {props.children}
      </TransformContainer>
    </BrandContainer>
  )
}

export default DesktopBrand;
