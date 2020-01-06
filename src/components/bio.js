/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import Twitter from "react-feather/dist/icons/twitter"
import Github from "react-feather/dist/icons/github"
import Linkedin from "react-feather/dist/icons/linkedin"
import Stackoverflow from "./icons/stackoverflow"
import Exercism from "./icons/exercism"

import { rhythm } from "../utils/typography"

function Bio(props) {
  const data = useStaticQuery(bioQuery)
  const { author, social } = data.site.siteMetadata

  return (
    <div
      style={{
        textAlign: "center",
        marginBottom: rhythm(2.5),
      }}
    >
      <div>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      </div>
      <div style={{ flex: "1 1 auto" }}>
        {props.children}Corgi Dog Breed Information.

      </div>
    </div>
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 150, height: 150) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
          github
          exercism
          linkedin
          stackoverflow
        }
      }
    }
  }
`

export default Bio
