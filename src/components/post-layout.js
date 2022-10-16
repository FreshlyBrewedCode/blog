import * as React from "react"
import { Link } from "gatsby"
import * as postStyles from "../post.module.css"
import "../styles/code.css"
import Seo from "../components/seo"
import Header from "./header"
import Giscus from "@giscus/react"
import { useTheme } from "../context/ThemeContext"

const PostLayout = ({
  headerTitle,
  title,
  description,
  date,
  tags,
  children,
}) => {
  const { theme } = useTheme()

  return (
    <main>
      <Seo title={title} description={description} />
      <Header title={headerTitle} />
      <section className={postStyles.article}>
        <div className={postStyles.articleHeader}>
          <h2 className={postStyles.articleTitle}>{title}</h2>
          <small className={postStyles.date}>{date}</small>
          <div className={postStyles.tags}>
            {tags?.map((tag, i) => (
              <Link key={i} to={`/tags/${tag}`} className={postStyles.tag}>
                {tag}
              </Link>
            ))}
          </div>
        </div>
        {children}
      </section>
      <section>
        <Giscus
          id="comments"
          repo="freshlybrewedcode/blog"
          repoId="R_kgDOIOffwA"
          category="Comments"
          categoryId="DIC_kwDOIOffwM4CSAL8"
          mapping="og:title"
          strict="0"
          reactionsEnabled="1"
          emit-metadata="0"
          inputPosition="top"
          theme={theme === "dark" ? "dark_dimmed" : "light"}
          lang="en"
          loading="lazy"
          crossorigin="anonymous"
          async
        />
      </section>
      <footer>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </main>
  )
}

export default PostLayout
