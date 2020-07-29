import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";


let theme = createMuiTheme({
  typography: {

    fontFamily: [
      `patua one`,
      `roboto slab`
    ].join(","),

    fontSize:   18,

    'h1': {
      fontFamily: `patua one`,
      fontSize: 96,
      fontWeight: 300,
      letterSpacing: '-1.5px'
    },
    'h2': {
      fontFamily: `patua one`,
      fontSize: 60,
      fontWeight: 300,
      letterSpacing: '-0.5px'
    },
    'h3': {
      fontFamily: `patua one`,
      fontSize: 48,
      fontWeight: 400,
      letterSpacing: '0px'
    },
    'h4': {
      fontFamily: `patua one`,
      fontSize: 34,
      fontWeight: 400,
      letterSpacing: '0.25px'
    },
    'h5': {
      fontFamily: `patua one`,
      fontSize: 24,
      fontWeight: 400,
      letterSpacing: '0px'
    },
    'h6': {
      fontFamily: `patua one`,
      fontSize: 20,
      fontWeight: 500,
      letterSpacing: '0.15px'
    },
    'subtitle1': {
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.15px'
    },
    'subtitle2': {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.1px'
    },
    'body1': {
      fontFamily: `roboto slab`,
      fontSize: 16,
      fontWeight: 400,
      letterSpacing: '0.5px'
    },
    'body2': {
      fontFamily: `roboto slab`,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '0.25px'
    },
    'caption': {
      fontFamily: `roboto slab`,
      fontSize: 12,
      fontWeight: 400,
      letterSpacing: '0.4px'
    },
    'button': {
      fontFamily: `roboto slab`,
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '1.25px'
    },
    'overline': {
      fontFamily: `roboto slab`,
      fontSize: 10,
      fontWeight: 300,
      letterSpacing: '1.5px'
    },
  },
});

// To use responsive font sizes, include the following line
theme = responsiveFontSizes(theme)

export default theme
