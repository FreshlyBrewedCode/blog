import React from "react"
import { Link } from "gatsby"
import * as postStyles from "../post.module.css"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import DarkToggleButton from "./DarkToggleButton"
import { useTheme } from "../context/ThemeContext"

const Header = ({ title }) => {
  const { theme, toggleTheme } = useTheme()

  return (
    <header>
      <Link to="/">
        <img className={postStyles.siteIcon} src="/favicon.ico" />
        <h1 className={postStyles.siteTitle}>{title}</h1>
      </Link>
      <div className="dark-toggle-container">
        <DarkToggleButton
          onClick={() => toggleTheme(theme === "dark" ? "light" : "dark")}
        />
      </div>
    </header>
  )
}

export default Header
