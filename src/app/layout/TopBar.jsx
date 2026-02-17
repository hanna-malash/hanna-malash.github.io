import React from "react"
import { routes } from "../routing/routes"
import { useI18n } from "../providers/I18nContext"
import { useTheme } from "../providers/ThemeContext"
import { Toggle } from "../../shared/ui/Toggle"
import { IconButton } from "../../shared/ui/IconButton"
import { NavIsland } from "../../shared/ui/NavIsland"

export function TopBar({ onOpenMobileMenu }) {
    const { lang, setLang, t } = useI18n()
    const { theme, setTheme } = useTheme()

    const items = routes.map((r) => ({
        key: r.key,
        path: r.path,
        label: t(r.labelKey),
    }))

    return (
        <div className="topbar" style={{ gap: 16 }}>
            <div className="brand">hanna-malash</div>

            <div className="nav-desktop" style={{ alignItems: "center" }}>
                <NavIsland items={items} measureKey={lang} />
            </div>

            <div className="controls">
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
