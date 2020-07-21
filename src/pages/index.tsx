import React, { ComponentType } from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import { useTranslation } from "react-i18next"
import { Router } from '@reach/router';

const Contact = React.lazy(() => import('../components/Contact'));
const About = React.lazy(() => import('../components/About'));

const LazyComponent: ComponentType<{
  Component: ComponentType<any>;
  [key: string]: any;
}> = 
  (props: any) => {
    const Component = props.Component;
    return (
      <React.Suspense fallback={'<p>Loading...</p>'}>
        <Component {...props} />
      </React.Suspense>
    )
  };

const Home: ComponentType<any> = () => <h2>Hello and Welcome</h2>;


const IndexPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title="Home" />

      <h1>{t('home.title')}</h1>
      <p>{t('home.subline')}</p>

      <Link to="/">Home</Link>
      <br />
      <Link to="/contact/">Contact</Link>
      <br />
      <Link to="/about-us">About Us</Link>
      <br />

      <Router>
        <Home path="/" />
        <LazyComponent Component={Contact} path="contact" />
        <LazyComponent Component={About} path="about-us" />
      </Router>
    </>
  )
}

export default IndexPage
