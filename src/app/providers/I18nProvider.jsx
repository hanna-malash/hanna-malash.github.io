import React from "react"
import { translations } from "../../shared/i18n/translations"

const I18nContext = React.createContext(null)

export function I18nProvider({ children }) {
    const [lang, setLang] = React.useState(() => {
        const saved = localStorage.getItem("lang")
        return saved === "ru" || saved === "en" ? saved : "en"
    })
    React.useEffect(() => { localStorage.setItem("lang", lang) }, [lang])
    const t = React.useCallback((key) => {
        const dict = translations[lang] || translations.en
        return dict[key] || key
    }, [lang])
    const value = React.useMemo(() => ({ lang, setLang, t }), [lang, t])
    return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
    const ctx = React.useContext(I18nContext)
    if (!ctx) { throw new Error("useI18n must be used within I18nProvider") }
    return ctx
}
