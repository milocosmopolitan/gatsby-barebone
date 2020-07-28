export class BrowserUtils {
  static IsClient = () => typeof window !== 'undefined';

  static GetViewSize = () => (
    BrowserUtils.IsClient()
    ? { width: window.innerWidth, height: window.innerHeight }
    : { width: undefined, height: undefined }
  )
}
