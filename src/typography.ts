import { createMuiTheme, responsiveFontSizes, } from "@material-ui/core";
import { TypographyOptions } from "@material-ui/core/styles/createTypography";

export const typography: TypographyOptions = {

  fontFamily: [
    `patua one`,
    `roboto slab`,
    `roboto`
  ].join(","),

  fontSize:   18,

  'h1': {
    fontFamily: `patua one`,
    fontSize: 96,
    fontWeight: 300,
    letterSpacing: '-1.5px',
    marginBottom: '10px'
  },
  'h2': {
    fontFamily: `patua one`,
    fontSize: 60,
    fontWeight: 300,
    letterSpacing: '-0.5px',
    marginBottom: '10px'
  },
  'h3': {
    fontFamily: `patua one`,
    fontSize: 48,
    fontWeight: 400,
    letterSpacing: '0px',
    marginBottom: '10px'
  },
  'h4': {
    fontFamily: `patua one`,
    fontSize: 34,
    fontWeight: 400,
    letterSpacing: '0.25px',
    marginBottom: '10px'
  },
  'h5': {
    fontFamily: `patua one`,
    fontSize: 24,
    fontWeight: 400,
    letterSpacing: '0px',
    marginBottom: '10px'
  },
  'h6': {
    fontFamily: `patua one`,
    fontSize: 20,
    fontWeight: 500,
    letterSpacing: '0.15px',
    marginBottom: '10px'
  },
  'subtitle1': {
    fontSize: 20,
    fontWeight: 400,
    letterSpacing: '0.15px',
    marginBottom: '10px'
  },
  'subtitle2': {
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '0.1px',
    marginBottom: '10px'
  },
  'body1': {
    fontFamily: `roboto slab`,
    fontSize: 18,
    fontWeight: 400,
    letterSpacing: '0.5px',
    marginBottom: '10px'
  },
  'body2': {
    fontFamily: `roboto slab`,
    fontSize: 16,
    fontWeight: 500,
    letterSpacing: '0.25px',
    marginBottom: '10px'
  },
  'caption': {
    fontFamily: `roboto`,
    fontSize: 14,
    fontWeight: 400,
    letterSpacing: '0.4px'
  },
  'button': {
    fontFamily: `roboto`,
    fontSize: 16,
    fontWeight: 500,
    textDecoration: 'uppercase',
    letterSpacing: '1.25px'
  },
  'overline': {
    fontFamily: `roboto`,
    fontSize: 12,
    fontWeight: 300,
    letterSpacing: '1.5px'
  },
}
