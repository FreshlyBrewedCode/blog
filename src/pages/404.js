import * as React from "react"
import { graphql } from "gatsby"

import PostLayout from "../components/post-layout"
import Seo from "../components/seo"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <PostLayout headerTitle={siteTitle} title="404 :(" noComments>
      <Seo title={`404: Not Found | ${siteTitle}`} />
      <p>Nothing to see here (yet)</p>
    </PostLayout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
