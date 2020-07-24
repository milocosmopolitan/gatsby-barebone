import React, {createContext, useContext, useMemo, ComponentType, Component} from 'react';
import useMedia from 'use-media';

interface Props {
  children: React.ReactNode;
}

export const MediaQueryContext = createContext<any>(null);


export function useMediaQueryContext() {
  return useContext(MediaQueryContext);
}

const mediaQueries = {
  mobile: '(max-width: 767px)',
  prefersReducedMotion: '(prefers-reduced-motion: reduce)',
};

const MediaQueryProvider = ({children}: Props) => {
  const mobileView = useMedia(mediaQueries.mobile);
  const prefersReducedMotion = useMedia(mediaQueries.prefersReducedMotion);
  const value = useMemo(() => ({mobileView, prefersReducedMotion}), [
    mobileView,
    prefersReducedMotion,
  ]);

  return (
    <MediaQueryContext.Provider value={value}>
      {children}
    </MediaQueryContext.Provider>
  );
}

function WithMediaQuery(WrappedComponent: ComponentType<any>) {
  return class extends Component<any> {
    render() {
      return (
        <MediaQueryProvider>
          <WrappedComponent {...this.props}/>
        </MediaQueryProvider>
      );
    }
  }
}

export default WithMediaQuery;
