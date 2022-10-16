import * as React from "react"
import { Link } from "gatsby"
import Bio from "../components/bio"
import Seo from "../components/seo"
import * as blogStyles from "../blog.module.css"
import Header from "./header"
import { ThemeProvider } from "../context/ThemeContext"

const BlogLayout = ({ headerTitle, children }) => {
  return (
    <ThemeProvider>
      <main>
        <Seo title="Blog" />
        <Header title={headerTitle} />
        <Bio />
        <section className={blogStyles.articles}>{children}</section>
        <footer>
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </main>
    </ThemeProvider>
  )
}

export default BlogLayout
