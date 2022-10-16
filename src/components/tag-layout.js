import * as React from "react"
import { Link } from "gatsby"
import "../common.css"
import * as blogStyles from "../blog.module.css"
import Seo from "./seo"
import Header from "./header"
import { ThemeProvider } from "../context/ThemeContext"

const TagLayout = ({ headerTitle, title, children }) => {
  return (
    <ThemeProvider>
      <main>
        <Seo title={`Tag: ${title}`} />
        <Header title={headerTitle} />
        <h2>Tag: {title}</h2>
        <section className={blogStyles.articles}>{children}</section>
        <footer>
          <p>&copy; {new Date().getFullYear()}</p>
        </footer>
      </main>
    </ThemeProvider>
  )
}

export default TagLayout
