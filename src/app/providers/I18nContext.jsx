import React from "react"
import { translations } from "../../shared/i18n/translations"

export const I18nContext = React.createContext(null)

export function useI18n() {
    const ctx = React.useContext(I18nContext)
    if (!ctx) {
        throw new Error("useI18n must be used within I18nProvider")
    }
    return ctx
}

export function createI18nValue(lang, setLang) {
    const t = (key) => {
        const dict = translations[lang] || translations.en
        return dict[key] || key
    }
    return { lang, setLang, t }
}
