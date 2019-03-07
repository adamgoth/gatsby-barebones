import React from "react"
import Img from "gatsby-image"
import { StaticQuery, graphql } from "gatsby"

import "./landing.scss"

export default () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          header: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
              fixed(width: 300) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      `}
      render={data => (
        <div>
          <Img fixed={data.header.childImageSharp.fixed} />
        </div>
      )}
    />
  )
}
