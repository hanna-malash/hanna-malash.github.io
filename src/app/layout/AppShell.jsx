import React from "react"
import { Outlet } from "react-router-dom"
import { TopBar } from "./TopBar"
import { MobileMenu } from "./MobileMenu"

export function AppShell() {
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)
    return (
        <div className="container">
            <TopBar onOpenMobileMenu={() => setIsMobileOpen(true)} />
            <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
            <Outlet />
            <div style={{ height: 28 }} />
            <div style={{ fontSize: 12, color: "var(--md-on-surface-variant)" }}>
                © {new Date().getFullYear()} Hanna Malash
            </div>
        </div>
    )
}
