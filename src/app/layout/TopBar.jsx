import React from "react"
import { routes } from "../routing/routes"
import { useI18n } from "../providers/I18nContext"
import { useTheme } from "../providers/ThemeContext"
import { Toggle } from "../../shared/ui/Toggle"
import { IconButton } from "../../shared/ui/IconButton"
import { NavIsland } from "../../shared/ui/NavIsland"
import { ThemeSwitch } from "../../shared/ui/ThemeSwitch"

export function TopBar({ onOpenMobileMenu }) {
    const { lang, setLang, t } = useI18n()
    const { theme, setTheme } = useTheme()

    return (
        <div className="topbar" style={{ gap: 16 }}>
            <div className="brand">hanna-malash</div>

            {/* Desktop nav */}
            <div className="nav-desktop" style={{ display: "flex", alignItems: "center" }}>
                <NavIsland
                    items={routes.map((r) => ({ key: r.key, path: r.path, label: t(r.labelKey) }))}
                />
            </div>

            <div className="controls">
                <Toggle
                    label={t("language")}
                    value={lang}
                    options={[{ value: "en", label: "EN" }, { value: "ru", label: "RU" }]}
                    onChange={setLang}
                />

                {/* Theme: classic sun/moon toggle */}
                <ThemeSwitch
                    value={theme}
                    onChange={setTheme}
                    ariaLabel={t("theme")}
                />

                {/* Mobile menu button */}
                <div className="nav-mobile">
                    <IconButton ariaLabel={t("menu")} onClick={onOpenMobileMenu}>
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M3 5h12M3 9h12M3 13h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </IconButton>
                </div>
            </div>
        </div>
    )
}
