import { createMuiTheme, responsiveFontSizes, } from "@material-ui/core";
import {typography} from './typography';
import {palette} from './palette';

let theme = createMuiTheme({
  typography,
  palette
});

// To use responsive font sizes, include the following line
theme = responsiveFontSizes(theme)

export default theme
