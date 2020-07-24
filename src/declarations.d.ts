// This file is used to hold ambient type declarations, as well as type shims
// for npm module without type declarations, and assets files.

// For example, to shim modules without declarations, use:
// declare module "package-without-declarations"

// And to shim assets, use (one file extension per `declare`):
// declare module "*.png"

/**
 * For SVG assets
 */
declare module "\*.svg" {
  import React = require("react");
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}

declare module "\*.jpg" {
  const content: string;
  export default content;
}

declare module "\*.png" {
  const content: string;
  export default content;
}

declare module "\*.json" {
  const content: string;
  export default content;
}

/**
 * For Material UI - Custom Breakpoints
 * https://material-ui.com/customization/breakpoints/#custom-breakpoints
 */
// declare module "@material-ui/core/styles/createBreakpoints" {
//   interface BreakpointOverrides {
//     xs: false; // removes the `xs` breakpoint
//     sm: false;
//     md: false;
//     lg: false;
//     xl: false;
//     tablet: true; // adds the `tablet` breakpoint
//     laptop: true;
//     desktop: true;
//   }
// }
