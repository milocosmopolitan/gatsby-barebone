import React from "react"
import Box from '@material-ui/core/Box';
import { IntroSectionContent } from '../components/intro';
import { AboutSectionContent } from '../components/about';
import { ServiceSectionContent } from '../components/services';
import { TestimonialsSectionContent } from '../components/testimonials';
import { ContactSectionContent } from '../components/contact';

import Image from "../components/image";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";

const IndexPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <>
      <SEO title="Home" lang={i18n.language} />
      {/* <h1>{t('home.title')}</h1>
      <p>{t('home.subline')}</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div> */}
      <Box id="intro"
        className="section"
        component="section"
        position="relative" width="100%" minHeight="100vh"
        display="flex" justifyContent="center" alignItems="center">
        <IntroSectionContent/>
      </Box>

      <Box id="about"
        className="section alt-color"
        component="section"
        position="relative" width="100%" minHeight="100vh"
        display="flex" justifyContent="center" alignItems="center">
        <AboutSectionContent/>
      </Box>

      <Box id="services"
        className="section"
        component="section"
        position="relative" width="100%" minHeight="100vh">
        <ServiceSectionContent/>
      </Box>

      <Box id="testimonial"
        className="section alt-color"
        component="section"
        position="relative" width="100%" minHeight="50vh">
        <TestimonialsSectionContent/>
      </Box>

      <Box id="contact"
        className="section"
        component="section"
        position="relative" width="100%" minHeight="100vh">
        <ContactSectionContent/>
      </Box>
    </>
  )
}

export default IndexPage
