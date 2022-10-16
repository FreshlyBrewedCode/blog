import * as React from "react"
import { graphql } from "gatsby"
import PostLayout from "../components/post-layout"
import * as postStyles from "../post.module.css"
import { ThemeProvider } from "../context/ThemeContext"

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <ThemeProvider>
      <PostLayout
        location={location}
        headerTitle={siteTitle}
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
      >
        <div
          className={postStyles.content}
          id="md-content"
          // dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        >
          {children}
        </div>
      </PostLayout>
    </ThemeProvider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tags
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
