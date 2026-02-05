export function Toggle({ label, value, options, onChange }) {
    return (
        <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span style={{ fontSize: 12, color: "var(--muted)" }}>{label}</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
                style={{
                    height: 36,
                    padding: "0 10px",
                    borderRadius: 12,
                    border: "1px solid var(--border)",
                    background: "var(--surface)",
                    color: "var(--text)",
                    boxShadow: "none",
                }}
            >
                {options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </label>
    )
}
