import { ScaleFnOption, AnimationObject } from './animation.types';

const defaultOption: ScaleFnOption = {
  from: 0,
  to: 1,
}

/** CSS helper function */
export function scale(option: {
  scale?: ScaleFnOption,
  scaleX?: ScaleFnOption,
  scaleY?: ScaleFnOption
}): AnimationObject {

  if (!option.scaleX && !option.scaleY && !option.scale) {
    throw Error('Must provide at least one scale function option from "scale", "scaleX", "scaleY".');
  }

  if (option.scale) {
    return {
      from: `scale(${option.scale.from})`,
      to: `scale(${option.scale.to})`,
    }
  }

  const x = { ...defaultOption, ...(option.scaleX || {})};
  const y = { ...defaultOption, ...(option.scaleY || {})};

  return {
    from: `scale(${x.from}, ${y.from})`,
    to: `scale(${x.to}, ${y.to})`,
  }
}
