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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import BackgroundImage from 'gatsby-background-image'
import { WithScrollProvider } from "../shared/scroll/scroll.provider";

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
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `);

  const { background } = useStaticQuery(graphql`
    query {
      background: file(relativePath: { eq: "bg-retro-noise.png" }) {
        childImageSharp {
          fluid(quality: 60, maxWidth: 300) {
            ...GatsbyImageSharpFluid_withWebp_tracedSVG
          }
        }
      }
    }
  `)

  const locale: any|null = props.pageContext.locale;
  const value = useMemo(() => ({ locale }), [locale]);

  // const theme = useTheme();
  // const xl = useMediaQuery(theme.breakpoints.only('xl'));
  // const lg = useMediaQuery(theme.breakpoints.only('lg'));
  // const md = useMediaQuery(theme.breakpoints.only('md'));
  // const sm = useMediaQuery(theme.breakpoints.only('sm'));
  // const xs = useMediaQuery(theme.breakpoints.only('xs'));
  // const narrow = useMediaQuery('(max-width:340px)');

  // const breakpoints = useMemo(() => ({ xl, lg, md, sm, xs, narrow }), [
  //   xl, lg, md, sm, xs, narrow
  // ]);

  // const classes = useStyles();

  console.log("Layout | props", props)

  return (
      <LocaleContext.Provider value={value}>
        
        <Header>
          <Link to="about"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            About
          </Link>
          <Link to="services"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            Services
          </Link>
          <Link to="contact"
            className="nav-link"
            spy={true}
            smooth={true}
            offset={-70}>
            Contact
          </Link>

          <LanguageSelector/>
        </Header>

        {/* <BackgroundImage
          Tag="main"
          // To style via external CSS see layout.css last examples:
          // className="test"
          fluid={imageData}
          backgroundColor={`#040e18`}
          // Title get's passed to both container and noscriptImg.
          title="gbitest"
          style={{
            // Defaults are overwrite-able by setting one of the following:
            backgroundSize: '300px',
            // backgroundPosition: '',
            backgroundRepeat: 'repeat',
          }}
          // To "force" the classic fading in of every image (especially on
          // imageData change for fluid / fixed) by setting `soft` on `fadeIn`:
          // fadeIn={`soft`}
          // To be able to use stacking context changing elements yourself,
          // set this to true to disable the "opacity hack":
          // preserveStackingContext={true}
          // You can "safely" (look them up beforehand ; ) add other props:
          id="gbitest"
          role="img"
          aria-label="gbitest"
        > */}
        <main>
          {props.children}
        </main>
          {/* {props.children} */}
        {/* </BackgroundImage> */}
        
        <Footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Footer>
      </LocaleContext.Provider>
    
  )
}

export default WithScrollProvider(WithMediaQuery(WithI18Next(Layout)))
