import { ThemeToggler } from "gatsby-plugin-dark-mode"
import React from "react"

const ThemeContext = React.createContext({})

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => (
        <ThemeContext.Provider
          value={{
            theme,
            toggleTheme,
          }}
        >
          {children}
        </ThemeContext.Provider>
      )}
    </ThemeToggler>
  )
}

export const useTheme = () => React.useContext(ThemeContext)
