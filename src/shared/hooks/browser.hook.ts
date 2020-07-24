import { useEffect, DependencyList } from 'react';

const _isClient = () => typeof window !== 'undefined';

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
    if (!_isClient()) return;
    window.addEventListener(eventKey, callback);
    return () => window.removeEventListener(eventKey, callback);
  }, []) // Empty array ensures that effect is only run on mount and unmount
}
