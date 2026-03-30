import React from "react"
import ReactDOM from "react-dom/client"
import { registerSW } from "virtual:pwa-register"
import { App } from "./app/App"
import { ThemeProvider } from "./app/providers/ThemeProvider"
import { I18nProvider } from "./app/providers/I18nProvider"
import "./styles/theme.css"
import "./styles/globals.css"

registerSW({ immediate: true })

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ThemeProvider>
            <I18nProvider>
                <App />
            </I18nProvider>
        </ThemeProvider>
    </React.StrictMode>
)
