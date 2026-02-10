export function Chip({ children }) {
    return (
        <span style={{
            display: "inline-flex",
            alignItems: "center",
            padding: "6px 10px",
            borderRadius: 999,
            fontSize: 12,
            lineHeight: "16px",
            color: "var(--md-on-surface)",
            background: "var(--md-surface-container-high)",
            border: "1px solid color-mix(in srgb, var(--md-outline) 24%, transparent)",
        }}>
      {children}
    </span>
    )
}
