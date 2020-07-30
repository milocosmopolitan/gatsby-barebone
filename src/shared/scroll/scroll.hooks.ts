// import { Subject } from 'rxjs';
import { useState } from 'react';
import { ScrollUtils } from './scroll.utils';
import { StateHook } from '../common.types';

/** Scroll Hooks for React */
export const useScrollY: StateHook<number> = () => {
  const [value, set] = useState(ScrollUtils.GetScrollY);
  return [value, set];
}

export const useScrollPercentage: StateHook<number> = () => {
  const [value, set] = useState(ScrollUtils.GetScrollPercentage);
  return [value, set];
}
