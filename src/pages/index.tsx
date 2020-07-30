import React, {useRef, ComponentType, useState} from 'react';
import Box from '@material-ui/core/Box';
import { IntroSectionContent } from '../components/intro';
import { AboutSectionContent } from '../components/about';
import { ServiceSectionContent } from '../components/services';
import { TestimonialsSectionContent } from '../components/testimonials';
import { ContactSectionContent } from '../components/contact';
import styled from "styled-components";

import Logo from '../assets/No-logo.svg';

import Image from "../components/image";
import SEO from "../components/seo";
import { useTranslation } from "react-i18next";
import BrandLarge from "../components/brand-lg";

const Section: ComponentType<any> = styled.section.attrs<{minHeight: string}>(
  ({ minHeight }) => ({
    style: { minHeight: minHeight ? `${minHeight}` : 'unset' }
  })
)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  position: relative;
  width: 100%;
`;


const IndexPage = () => {
  const { t, i18n } = useTranslation();
  const testimonialRef = useRef<any>();
  const serviceRef = useRef<any>();
  // const renders = useRef(0);
  return (
    <>
      <SEO title="Home" lang={i18n.language} />
      <Box position="fixed" top={0} className="background-image"
          height="100vh" width="100vw">
        {/* <div>scrollY: {scrollY}</div> */}
        {/* <div>renders: {renders.current++}</div> */}
      </Box>
      <Section id="intro" className="section" minHeight="80vh">
        <IntroSectionContent/>
      </Section>

      <Section id="about" className="section">
        {/* <BrandLarge triggerAt={300}>
          <Logo/>
        </BrandLarge> */}
        
        <Box paddingTop="500px" paddingBottom="200px">
          <AboutSectionContent/>
        </Box>
        {/** ANIMATE ONLY ON DESKTOP VIEW */}
        {/* <Box position="sticky" width="100%" top="200px"display="flex" justifyContent="center" paddingBottom="200px">
          <BrandLarge triggerAt={300}>
            <Logo/>
          </BrandLarge>
        </Box> */}
        

        {/* <AboutSectionContent/> */}
      </Section>

      <Section id="services" className="section alt-color" minHeight="100vh" ref={serviceRef}>
        <ServiceSectionContent containerRef={serviceRef}/>
      </Section>

      <Section id="testimonial" className="section" ref={testimonialRef}>
        <Box paddingTop="100px" paddingBottom="100px">
          <TestimonialsSectionContent containerRef={testimonialRef}/>
        </Box>
      </Section>

      <Section id="contact" className="section alt-color">
        <Box paddingTop="100px" paddingBottom="100px">
          <ContactSectionContent/>
        </Box>
      </Section>
    </>
  )
}

export default IndexPage
