import { HomePage } from "../pages/HomePage"
import { Toggle } from "../shared/ui/Toggle"
import { useTheme } from "./providers/ThemeProvider"
import { useI18n } from "./providers/I18nProvider"

export function App() {
    const { theme, setTheme } = useTheme()
    const { lang, setLang, t } = useI18n()
    return (
        <div className="container">
            <div className="topbar">
                <div style={{ fontWeight: 700 }}>hanna-malash</div>
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
                </div>
            </div>
            <HomePage />
            <div style={{ height: 28 }} />
            <div style={{ fontSize: 12, color: "var(--muted)" }}>
                © {new Date().getFullYear()} Hanna Malash
            </div>
        </div>
    )
}
