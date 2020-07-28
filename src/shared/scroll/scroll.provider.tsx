import React, {createContext, useContext, useMemo, ComponentType, useState} from 'react';
import { useScrollPercentage, useScrollY } from './scroll.hooks';
import { ScrollUtils } from './scroll.utils';
import { useWindowEventListener } from '../browser/browser.hook';

interface ScrollProviderState {
  scrollY: number;
  scrolledPercent: number;
  scrollDirection: 'up' | 'down';
}

interface ScrollProviderProps {
  children?: React.ReactNode;
  factor?: number;
  onScroll?: (e: ScrollProviderState) => void;
}

const ScrollContext = createContext<ScrollProviderState>({
  scrollY: 0,
  scrolledPercent: 0,
  scrollDirection: 'up'
});


export function useScrollContext() {
  return useContext(ScrollContext);
}

export function ScrollProvider({children, factor, onScroll}: ScrollProviderProps) {
  // console.log('ScrollProvider.Component');
  const [ scrolledPercent, setPercent ] = useScrollPercentage();
  const [ scrollY, setYPos ] = useScrollY();
  const [ scrollDirection, setScrollDirection ] = useState<'up' | 'down'>('up');

  let previousScrollY = 0;
  
  let ticking = false;

  

  function update() {
    // console.log('update', ticking, onScroll);
    // reset the tick so we can
    // capture the next onScroll
    ticking = false;
    // scrollPercent = $(window).scrollTop() / (scrollDistance - $(window).height());
    setScrollDirection(() => ScrollUtils.GetScrollDirection(previousScrollY));
    setPercent(() => ScrollUtils.GetScrollPercentage());
    
    
    if (onScroll) {
      onScroll({scrollY, scrollDirection, scrolledPercent})
    }

    // console.log('update', scrollY, scrollDirection, scrolledPercent);
    previousScrollY = ScrollUtils.GetScrollY();

    // // For Green Sock API
    // var progressAction = percent * (factor || 1.05);

    // if (latestKnownScrollY > lastScrollTop) {  // downscroll
    //   TweenLite.to(action, 0, {progress:progressAction, ease: Power0.easeNone});
    // } else {
    //   TweenLite.to(action, 0, {progress:progressAction, ease: Power0.easeNone});
    // }
  }

  function updateScrollY() {
    setYPos(() => ScrollUtils.GetScrollY());
    
    requestTick();
    // console.log('updateScrollY', ScrollUtils.GetScrollY(), value);
  }

  function requestTick() {
    if(!ticking) { requestAnimationFrame(update); }
    ticking = true;
  }

  useWindowEventListener('scroll', updateScrollY)

  const value = useMemo(
    () => ({scrollY, scrolledPercent, scrollDirection}),
    [ scrollY, scrolledPercent, scrollDirection ]
  );

  return (
    <ScrollContext.Provider value={value}>
      {children}
    </ScrollContext.Provider>
  );
}

export const WithScrollProvider = (Component: ComponentType<any>) => (props: any) => {
  const {onScroll} = props;
  return (
    <ScrollProvider onScroll={onScroll}>
      <Component {...props} />
    </ScrollProvider>
  )
}
