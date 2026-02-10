import React from "react"
import { routes } from "../routing/routes"
import { useI18n } from "../providers/I18nContext"
import { IconButton } from "../../shared/ui/IconButton"
import { NavLink } from "../../shared/ui/NavLink"

export function MobileMenu({ isOpen, onClose }) {
    const { t } = useI18n()
    if (!isOpen) return null

    return (
        <div
            role="dialog"
            aria-modal="true"
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,.35)",
                display: "flex",
                justifyContent: "flex-end",
                zIndex: 50,
            }}
            onClick={onClose}
        >
            <div
                style={{
                    width: "min(360px, 88vw)",
                    height: "100%",
                    background: "var(--md-surface)",
                    borderLeft: "1px solid color-mix(in srgb, var(--md-outline) 28%, transparent)",
                    boxShadow: "var(--md-elev-3)",
                    padding: 16,
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontWeight: 700 }}>{t("menu")}</div>
                    <IconButton ariaLabel={t("close")} onClick={onClose}>
                        <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                            <path d="M5 5l8 8M13 5l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                        </svg>
                    </IconButton>
                </div>

                <div style={{ height: 12 }} />

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {routes.map((r) => (
                        <NavLink key={r.key} to={r.path} onClick={onClose}>
                            {t(r.labelKey)}
                        </NavLink>
                    ))}
                </div>
            </div>
        </div>
    )
}
