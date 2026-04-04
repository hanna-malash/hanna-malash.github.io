import React from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { routes } from "../routing/routes"
import { useI18n } from "../providers/I18nContext"
import { useTheme } from "../providers/ThemeContext"
import { IconButton } from "../../shared/ui/IconButton"
import { Toggle } from "../../shared/ui/Toggle"
import { ThemeSwitch } from "../../shared/ui/ThemeSwitch"

export function MobileMenu({ isOpen, onClose, returnFocusRef }) {
    const { lang, setLang, t } = useI18n()
    const { theme, setTheme } = useTheme()
    const navigate = useNavigate()
    const location = useLocation()
    const closeButtonRef = React.useRef(null)
    const previousIsOpenRef = React.useRef(isOpen)

    function go(path) {
        navigate(path)
        onClose()
    }

    React.useEffect(() => {
        if (!isOpen) return undefined

        const previousBodyOverflow = document.body.style.overflow
        const previousHtmlOverflow = document.documentElement.style.overflow

        document.body.style.overflow = "hidden"
        document.documentElement.style.overflow = "hidden"

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                onClose()
            }
        }

        document.addEventListener("keydown", handleKeyDown)

        const focusTimer = window.setTimeout(() => {
            closeButtonRef.current?.focus()
        }, 40)

        return () => {
            window.clearTimeout(focusTimer)
            document.removeEventListener("keydown", handleKeyDown)
            document.body.style.overflow = previousBodyOverflow
            document.documentElement.style.overflow = previousHtmlOverflow
        }
    }, [isOpen, onClose])

    React.useEffect(() => {
        if (previousIsOpenRef.current && !isOpen) {
            returnFocusRef?.current?.focus()
        }

        previousIsOpenRef.current = isOpen
    }, [isOpen, returnFocusRef])

    return (
        <div
            className={"drawer" + (isOpen ? " is-open" : "")}
            role="dialog"
            aria-modal="true"
            aria-hidden={!isOpen}
            aria-labelledby="mobile-menu-title"
        >
            <div className="drawer__backdrop" onClick={onClose} />
            <div className="drawer__panel" onClick={(e) => e.stopPropagation()}>
                <div className="drawer__top">
                    <div className="drawer__title" id="mobile-menu-title">{t("menu")}</div>
                    <IconButton
                        ariaLabel={t("close")}
                        onClick={onClose}
                        buttonRef={closeButtonRef}
                        className="drawer__close-button"
                    >
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
                            className={"drawer__link" + (location.pathname === r.path ? " is-active" : "")}
                            onClick={() => go(r.path)}
                            aria-current={location.pathname === r.path ? "page" : undefined}
                        >
                            {t(r.labelKey)}
                        </button>
                    ))}
                </div>

                <div className="drawer__section">
                    <Toggle
                        className="drawer__preference"
                        label={t("language")}
                        value={lang}
                        options={[{ value: "en", label: "EN" }, { value: "ru", label: "RU" }]}
                        onChange={setLang}
                    />

                    <div className="drawer__preference">
                        <div className="toggle__label">
                            {t("theme")}
                        </div>
                        <ThemeSwitch value={theme} onChange={setTheme} ariaLabel={t("theme")} />
                    </div>
                </div>
            </div>
        </div>
    )
}
