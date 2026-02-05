import React from "react"

const ThemeContext = React.createContext(null)

export function ThemeProvider({ children }) {
    const [theme, setTheme] = React.useState(() => {
        const saved = localStorage.getItem("theme")
        return saved === "dark" || saved === "light" ? saved : "light"
    })
    React.useEffect(() => {
        localStorage.setItem("theme", theme)
        document.documentElement.setAttribute("data-theme", theme)
    }, [theme])
    const value = React.useMemo(() => ({ theme, setTheme }), [theme])
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const ctx = React.useContext(ThemeContext)
    if (!ctx) { throw new Error("useTheme must be used within ThemeProvider") }
    return ctx
}
