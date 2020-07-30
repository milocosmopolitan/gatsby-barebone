// import { DocumentUtils, WindowUtils } from './utils';

import { BrowserUtils } from "../browser/browser.utils";
import { DomUtils } from "../dom/dom.utils";

/**
 * Static utility methods for scroll
 *
 * !Important Notes
 *  - try to write with minimum dependencies,
 *    even detach from the React so
 *    it can be used across any javascript framework
 */

export class ScrollUtils {

  static GetScrollY: () => number = () => {

      const _isClient = BrowserUtils.IsClient();
      const _hasDocument = DomUtils.HasDocument();
      const _hasScrollYProp = _isClient &&!!window.scrollY;  // No IE8

      return _isClient && _hasScrollYProp
        ? window.scrollY
        : _hasDocument ? document.body.scrollTop || document.documentElement.scrollTop : 0;
    }

  static GetScrollPercentage: () => number =
    () => {
      const _hasDocument = DomUtils.HasDocument();
      const top = ScrollUtils.GetScrollY();
      const height = _hasDocument
        ? document.documentElement.scrollHeight -
          document.documentElement.clientHeight
        : 0;
      return (top && height) ? top / height : 0;
    }

  static GetScrollDirection: (previousY: number) => 'down' | 'up' =
    (previousY: number) => {
      const _hasDocument = DomUtils.HasDocument();
      const currentY = ScrollUtils.GetScrollY();
      return _hasDocument ? ((currentY > previousY) ? 'down' : 'up') : 'up';
    }
}
