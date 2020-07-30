/**
 * Made this utility class, Due to gatsby SSR, to prevent window undefined error
 */
export class BrowserUtils {
  static IsClient = () => typeof window !== 'undefined';

  static GetViewSize = () => (
    BrowserUtils.IsClient()
    ? { width: window.innerWidth, height: window.innerHeight }
    : { width: 0, height: 0 }
  )
}
