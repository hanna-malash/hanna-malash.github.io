import { NavLink as RRNavLink } from "react-router-dom"

export function NavLink({ to, children, onClick }) {
    return (
        <RRNavLink
            to={to}
            onClick={onClick}
            style={({ isActive }) => ({
                textDecoration: "none",
                padding: "10px 12px",
                borderRadius: 12,
                color: "var(--md-on-surface)",
                background: isActive ? "var(--md-surface-container-high)" : "transparent",
                border: isActive ? "1px solid color-mix(in srgb, var(--md-outline) 28%, transparent)" : "1px solid transparent",
            })}
        >
            {children}
        </RRNavLink>
    )
}
