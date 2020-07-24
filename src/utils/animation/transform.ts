import { translate as translateCss } from './translate';
import { scale as scaleCss } from './scale';
import { AnimationObject } from './animation.types';

/**
 * Helper function which returns transform CSS for the animation
 */
export function transformCss (option: any): AnimationObject {

  // const translateFn = ()
  const {
    translateY, translateX,
    scale, scaleX, scaleY
  } = option;

  const styles: {[key:string]: AnimationObject} =  {}

  if (translateY || translateX) {
    styles.translate = translateCss({ translateY, translateX });
  }

  if (scale) {
    styles.scale = scaleCss({ scale, scaleX, scaleY })
  }

  return Object.keys(styles).reduce((output, key: string) => {
    if (!output.from.length) {
      output.from = styles[key].from
    } else {
      output.from = output.from + ' ' + styles[key].from
    }

    if (!output.to.length) {
      output.to = styles[key].to
    } else {
      output.to = output.to + ' ' + styles[key].to
    }

    return output;
  }, { from:'', to: '' })
}
