import { useEffect, DependencyList } from 'react';
import { BrowserUtils } from './browser.utils';

/**
 * React hook for window event listener
 * to make sure that events are removed
 * when component is unmounted
 */
export function useWindowEventListener (
  eventKey: string,
  callback: () => void,
  dep: DependencyList = []
) {
  useEffect(() => {
    if (!BrowserUtils.IsClient()) return;
    window.addEventListener(eventKey, callback);
    return () => window.removeEventListener(eventKey, callback);
  }, dep) // Empty array ensures that effect is only run on mount and unmount
}
