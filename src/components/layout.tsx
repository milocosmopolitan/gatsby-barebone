/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useMemo } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header"
import LanguageSelector from "./language-selector";
import WithI18Next from "../i18n/i18next.hoc";
import "./layout.scss"

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

  return (
    <LocaleContext.Provider value={value}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <LanguageSelector/>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{props.children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </LocaleContext.Provider>
  )
}

export default WithI18Next(Layout)
