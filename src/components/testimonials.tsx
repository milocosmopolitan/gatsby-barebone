import React, { ComponentType, useState, useEffect } from "react"
import Box from '@material-ui/core/Box';
import Image from './image';
import { Container, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { useScrollContext } from "../shared/scroll/scroll.provider";
import { useStaticQuery, graphql } from "gatsby"
import { useTranslation } from 'react-i18next';

const TESTIMONIALS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  // 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
]

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  transition: transform 60ms ease-in;
  will-change: transform;
`;

function updateTranslateY(
  ref: React.RefObject<any>,
  setTranslateY: React.Dispatch<React.SetStateAction<number>>
) {
  const vh = window.innerHeight;
  const startingY: number = ref.current.offsetTop - vh;

  if (window.scrollY > startingY) {
    const offset = ref.current.clientHeight - ((window.scrollY - startingY) * 0.8);
    setTranslateY(offset);
  }
}

const TestimonialBlockQuote = (props: any) => {
  return (
    <Box className="block-quote" marginBottom={8} marginRight={4} marginLeft={4} paddingLeft={3} position="relative">
      
      <Box className="quotation right-quote headline-2" position="absolute" top="0" left="-20px">
        &ldquo;
      </Box>
      <Typography variant="body1">
        {props.testimonial}
      </Typography>
      <Box className="quotation left-quote headline-2" position="absolute" bottom="0" right="-20px">
        &bdquo;
      </Box>
      
    </Box>
  )
}

export const Testimonials = React.memo(() => (
  <>
    {TESTIMONIALS.map((testimonial, i) => <TestimonialBlockQuote key={i} testimonial={testimonial} />)}
  </>
))

export const TestimonialsSectionContent = (props: any) => {
  const { scrollY } = useScrollContext();
  const { t } = useTranslation();

  const initialY = window.innerHeight * 0.8;
  const [translateY, setTranslateY] = useState<number>(initialY);

  const onScroll = () => updateTranslateY(props.containerRef, setTranslateY)
  useEffect(onScroll, [scrollY]);

  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "shakinghand-mock.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Container maxWidth="md">
      <Box marginBottom={7}>
        <Typography variant="h3">
          {t('testimonial.heading')}
        </Typography>
        <Typography variant="subtitle1">
          {t('testimonial.subHeading')}
        </Typography>
      </Box>

      {/* <h2>Testimonials</h2>
      <p>Client's testimonial speaks more than self explanation and improves sense of credibility.</p> */}

      <Grid container={true}>
        <Grid item={true} xs={12} md={4} lg={4}>
          {/* Text... */}

          <Box width="400px" position="absolute" left="20vw" display={{ sm: 'none', md: 'block' }}>
            <VerticalTranslateContainer translateY={translateY}>
              <Image fluid={data.placeholderImage.childImageSharp.fluid} />
            </VerticalTranslateContainer>
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={8} lg={8}>
          <Box paddingLeft={{ sm: 0, md: 8 }}>
            {/* <Box width="70%" display="flex" flexDirection="column" justifyContent="center" alignItems="center"> */}
            <Testimonials/>
          </Box>

        </Grid>
      </Grid>
    </Container>
  )
}
