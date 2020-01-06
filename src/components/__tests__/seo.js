import React from "react"
import renderer from "react-test-renderer"
import { useStaticQuery } from "gatsby"

import SEO from "../seo"

beforeEach(() => {
  useStaticQuery.mockImplementationOnce(() => ({
    site: {
      siteMetadata: {
        title: "Corgi Awesome",
        description: "Corgi Dog Breed Information.",
        author: "corgiawesome",
        siteUrl: "https://corgiawesome.com",
      },
    },
    image: {
      childImageSharp: {
        fixed: {
          src: "/static/a379ede7190febde66f2453a8c9ac9c1/1f491/icon.png",
        },
      },
    },
  }))
})

describe("SEO", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<SEO title="My Title" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
