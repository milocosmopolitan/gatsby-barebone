/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header"
import Footer from './footer';
import LanguageSelector from "./language-selector";
import WithI18Next from "../i18n/i18next.hoc";
import { Link } from "react-scroll";
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

interface IPageContext {
  locale: any|null;
}

interface ILayoutProps {
  children: React.ReactChildren;
  pageContext: IPageContext;
}

const Layout = (props: ILayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const locale: any|null = props.pageContext.locale;
  const value = useMemo(() => ({ locale }), [locale]);

  // const classes = useStyles();

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
      <main>{props.children}</main>
      
      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </LocaleContext.Provider>
  )
}

export default WithI18Next(Layout)
