export function Avatar({ initials = "HM" }) {
    return (
        <div style={{
            width: 72,
            height: 72,
            borderRadius: 20,
            display: "grid",
            placeItems: "center",
            fontWeight: 800,
            letterSpacing: "0.04em",
            background: "var(--md-surface)",
            color: "var(--md-on-surface)",
            border: "1px solid color-mix(in srgb, var(--md-outline) 28%, transparent)",
            boxShadow: "var(--md-elev-2)",
            userSelect: "none",
        }}>
            {initials}
        </div>
    )
}
