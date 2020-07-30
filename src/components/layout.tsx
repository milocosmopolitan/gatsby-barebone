/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo, useContext } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header"
import Footer from './footer';
import LanguageSelector from "./language-selector";
import WithI18Next from "../i18n/i18next.hoc";
import { Link } from "react-scroll";
import WithMediaQuery from "../shared/media-query.provider";
import { useTheme, ThemeProvider } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
// import Logo from '../assets/No-logo.svg';

import BackgroundImage from 'gatsby-background-image'
import { WithScrollProvider } from "../shared/scroll/scroll.provider";
import theme from "../theme";
import { useTranslation } from "react-i18next";
import { Typography } from "@material-ui/core";

// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     // root: {
//     //   flexGrow: 1,
//     // },
//     menuButton: {
//       marginRight: theme.spacing(2),
//     },
//     title: {
//       flexGrow: 1,
//     },
//   }),
// );


export const LocaleContext = React.createContext<IPageContext>({
  locale: null
});

export const BreakpointsContext = React.createContext<any>({
  xs: false,
  sm: false,
  md: false,
  lg: false,
  xl: false,
});

export function useBreakpointsContext() {
  return useContext(BreakpointsContext);
}

interface IPageContext {
  locale: any|null;
}

interface ILayoutProps {
  children: React.ReactChildren;
  pageContext: IPageContext;
}

const Layout = (props: ILayoutProps) => {
  const locale: any|null = props.pageContext.locale;
  const value = useMemo(() => ({ locale }), [locale]);
  
  const { t } = useTranslation();

  return (
    <ThemeProvider theme={theme}>
      <LocaleContext.Provider value={value}>
        <Header>
          <Link to="about"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            <span className="MuiTypography-root MuiTypography-body1">
              {t('header.navigation.about')}
            </span>
          </Link>
          <Link to="services"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            <span className="MuiTypography-root MuiTypography-body1">
              {t('header.navigation.services')}
            </span>
          </Link>
          <Link to="contact"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            <span className="MuiTypography-root MuiTypography-body1">
              {t('header.navigation.contact')}
            </span>
          </Link>

          <LanguageSelector/>
        </Header>

        <main>
          {props.children}
        </main>
        <Footer />
      </LocaleContext.Provider>
    </ThemeProvider>
  )
}

export default WithScrollProvider(WithMediaQuery(WithI18Next(Layout)))
