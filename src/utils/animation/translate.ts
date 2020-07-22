import { TranslateFnOption, AnimationObject } from './animation.types';

const defaultOption: TranslateFnOption = {
  from: 0,
  to: 0,
  unit: 'px',
}

/** CSS helper function */
export function translate(option: {
  translateX?: TranslateFnOption,
  translateY?: TranslateFnOption
}): AnimationObject {

  if (!option.translateX && !option.translateY) {
    throw Error('Must provide at least one translate option for either "x" or "y".');
  }

  const x = { ...defaultOption, ...(option.translateX || {})};
  const y = { ...defaultOption, ...(option.translateY || {})};

  return {
    from: `translate(${x.from}${x.unit}, ${y.from}${y.unit})`,
    to: `translate(${x.to}${x.unit}, ${y.to}${y.unit})`,
  }
}
