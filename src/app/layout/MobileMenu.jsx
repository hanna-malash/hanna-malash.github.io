import React from "react"
import { routes } from "../routing/routes"
import { useI18n } from "../providers/I18nContext"
import { useTheme } from "../providers/ThemeContext"
import { IconButton } from "../../shared/ui/IconButton"
import { Toggle } from "../../shared/ui/Toggle"
import { useNavigate } from "react-router-dom"

export function MobileMenu({ isOpen, onClose }) {
    const navigate = useNavigate()
    const { lang, setLang, t } = useI18n()
    const { theme, setTheme } = useTheme()

    // Keep it mounted for CSS transitions; control via className.
    return (
        <div className={`drawer${isOpen ? " is-open" : ""}`} aria-hidden={!isOpen}>
            <div className="drawer__backdrop" onClick={onClose} />
            <div
                className="drawer__panel"
                role="dialog"
                aria-modal="true"
                aria-label={t("menu")}
                onClick={(e) => e.stopPropagation()}
            >
                <div className="drawer__top">
                    <div className="drawer__title">{t("menu")}</div>
                    <IconButton ariaLabel={t("close")} onClick={onClose}>
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M5 5l8 8M13 5l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </IconButton>
                </div>

                <div className="drawer__nav">
                    {routes.map((r) => (
                        <button
                            key={r.key}
                            type="button"
                            className="drawer__link"
                            onClick={() => {
                                navigate(r.path)
                                onClose()
                            }}
                        >
                            {t(r.labelKey)}
                        </button>
                    ))}
                </div>

                <div className="drawer__section">
                    <Toggle
                        label={t("language")}
                        value={lang}
                        options={[{ value: "en", label: "EN" }, { value: "ru", label: "RU" }]}
                        onChange={setLang}
                    />
                    <Toggle
                        label={t("theme")}
                        value={theme}
                        options={[
                            { value: "light", label: t("light") },
                            { value: "dark", label: t("dark") },
                        ]}
                        onChange={setTheme}
                    />
                </div>
            </div>
        </div>
    )
}
