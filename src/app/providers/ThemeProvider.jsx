import React from "react"
import { ThemeContext } from "./ThemeContext"

export function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(() => {
        const saved = localStorage.getItem("theme")
        return saved === "dark" || saved === "light" ? saved : "dark"
    })

    React.useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])

    const value = React.useMemo(
        () => ({ theme, setTheme }),
        [theme]
    )

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
