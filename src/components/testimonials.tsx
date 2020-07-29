import React, { ComponentType, useState, useEffect } from "react"
import Box from '@material-ui/core/Box';
import Image from './image';
import { Container, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import styled from "styled-components";
import { useScrollContext } from "../shared/scroll/scroll.provider";
import { useStaticQuery, graphql } from "gatsby"

const TESTIMONIALS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sodales velit vitae ante elementum cursus id euismod nulla. Sed volutpat lacus vitae mauris commodo rhoncus. Vivamus non lorem sed ligula euismod dictum.',
]

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  transition: transform ease-in;
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

export const TestimonialsSectionContent = (props: any) => {
  const { scrollY } = useScrollContext();

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
      <h2>Testimonials</h2>
      <p>Client's testimonial speaks more than self explanation and improves sense of credibility.</p>

      <Grid container={true}>
        <Grid item={true} xs={12} md={4} lg={4}>
          Text...

          <Box width="400px" position="absolute">
            <VerticalTranslateContainer translateY={translateY}>
              <Image fluid={data.placeholderImage.childImageSharp.fluid} />
            </VerticalTranslateContainer>
          </Box>
        </Grid>
        <Grid item={true} xs={12} md={8} lg={8}>
          <Box paddingLeft={3}>
            {/* <Box width="70%" display="flex" flexDirection="column" justifyContent="center" alignItems="center"> */}
            {TESTIMONIALS.map((testimonial, i) => (
                <Box key={i} margin={2} padding={2}>
                  <span>{testimonial}</span>
                </Box>
              ))}
            {/* </Box> */}
          </Box>

        </Grid>
      </Grid>
    </Container>
  )
}
