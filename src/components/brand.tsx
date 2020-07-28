import React from 'react';
import { useTheme, useMediaQuery } from '@material-ui/core';
import MobileBrand from './brand-mobile';
import DesktopBrand from './brand-lg';

/**
 * This component handles different branding emphasizing strategy for different viewport
 * @param props 
 */
export default function Brand(props: any) {
  // const renders = useRef(0);
  const theme = useTheme();
  const breakpointMatches = useMediaQuery(theme.breakpoints.down(props.breakpoint));  
  return (
    <div className="brand-container">
      {/* BRAND:{renders.current++} */}
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
