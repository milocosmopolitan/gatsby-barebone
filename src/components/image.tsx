import React, { ComponentType, useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components";
import { useScrollContext } from "../shared/scroll/scroll.provider";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const VerticalTranslateContainer: ComponentType<any> = styled.div.attrs<any>(({ translateY }) => ({
  style: { transform: `translateY(${translateY}px)` }
}))`
  transition: transform ease-in,
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

const Image: ComponentType<any> = (props: any) => {

  const { scrollY } = useScrollContext();

  const initialY = window.innerHeight * 0.8;
  const [translateY, setTranslateY] = useState<number>(initialY);

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

  const onScroll = () => updateTranslateY(props.containerRef, setTranslateY)
  useEffect(onScroll, [scrollY]);

  return (
    <VerticalTranslateContainer translateY={translateY}>
      <Img fluid={data.placeholderImage.childImageSharp.fluid} />
    </VerticalTranslateContainer>
  )
}

export default Image
