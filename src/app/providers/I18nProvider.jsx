import React from "react"
import { I18nContext, createI18nValue } from "./I18nContext"

export function I18nProvider({ children }) {
    const [lang, setLang] = React.useState(() => {
        const saved = localStorage.getItem("lang")
        return saved === "ru" || saved === "en" ? saved : "en"
    })

    React.useEffect(() => {
        localStorage.setItem("lang", lang)
    }, [lang])

    const value = React.useMemo(
        () => createI18nValue(lang, setLang),
        [lang]
    )

    return (
        <I18nContext.Provider value={value}>
            {children}
        </I18nContext.Provider>
    )
}
