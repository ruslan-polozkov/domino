import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
//
// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */
//
// const Image = () => {
//   const data = useStaticQuery(graphql`
//     query {
//       image: file(relativePath: { eq: "main-bg.jpg" }) {
//         childImageSharp {
//           fixed(width: 400) {
//             ...GatsbyImageSharpFixed
//           }
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//       logo: file(relativePath: { eq: "logo.png" }) {
//         childImageSharp {
//           fixed(width: 400) {
//             ...GatsbyImageSharpFixed
//           }
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `
//   )
//
//
//   console.log('data------------------------------------------------------',data)
//   return <Img fluid={data.logo.childImageSharp.fluid} />
// }
//
// export default Image


