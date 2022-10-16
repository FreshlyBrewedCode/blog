import * as React from "react"
import { graphql } from "gatsby"
import PostLayout from "../components/post-layout"
import * as postStyles from "../post.module.css"
import { ThemeProvider } from "../context/ThemeContext"
import { PageProvider } from "../context/PageContext"
import { MDXProvider } from "@mdx-js/react"
import TableOfContents from "../components/TableOfContents"

const BlogPostTemplate = ({ data, location, children }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`

  const shortCodes = {
    TOC: props => (
      <TableOfContents {...props} items={post.tableOfContents.items} />
    ),
  }

  return (
    <ThemeProvider>
      <PageProvider value={post}>
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
            <MDXProvider components={shortCodes}>{children}</MDXProvider>
          </div>
        </PostLayout>
      </PageProvider>
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
      tableOfContents
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
