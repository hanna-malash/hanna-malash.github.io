import React from "react"
import { Outlet } from "react-router-dom"
import { TopBar } from "./TopBar"
import { MobileMenu } from "./MobileMenu"

export function AppShell() {
    const [isMobileOpen, setIsMobileOpen] = React.useState(false)

    return (
        <div className="app-root">
            <div className="app-header">
                <div className="container">
                    <TopBar onOpenMobileMenu={() => setIsMobileOpen(true)} />
                </div>
            </div>
            <MobileMenu isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />

            <main className="app-content">
                <div className="container">
                    <Outlet />
                </div>
            </main>

            <footer className="app-footer">
                © {new Date().getFullYear()} Hanna Malash
            </footer>
        </div>
    )
}
