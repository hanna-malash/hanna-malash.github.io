export function Toggle({ label, value, options, onChange, className = "" }) {
    return (
        <label className={["toggle", className].filter(Boolean).join(" ")}>
            <span className="toggle__label">{label}</span>
            <span className="toggle__field">
                <select
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                >
                    {options.map((o) => (
                        <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                </select>
                <span className="toggle__caret" aria-hidden="true">
                    <svg width="12" height="12" viewBox="0 0 12 12">
                        <path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </span>
            </span>
        </label>
    )
}
