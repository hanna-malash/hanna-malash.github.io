export function IconButton({ ariaLabel, onClick, children }) {
    return (
        <button
            type="button"
            aria-label={ariaLabel}
            onClick={onClick}
            style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                border: "1px solid color-mix(in srgb, var(--md-outline) 28%, transparent)",
                background: "var(--md-surface)",
                color: "var(--md-on-surface)",
                boxShadow: "var(--md-elev-1)",
                display: "grid",
                placeItems: "center",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    )
}
