export class DomUtils {
  static HasDocument = () => typeof document !== 'undefined';
  static GetDocumentSize = () => (
    DomUtils.HasDocument()
    ? { width: document.body.clientWidth, height: document.body.clientHeight }
    : { width: undefined, height: undefined }
  )
}
