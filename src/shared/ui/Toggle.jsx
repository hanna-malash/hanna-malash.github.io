export function Toggle({ label, value, options, onChange }) {
    return (
        <label className="toggle">
            <span className="toggle__label">{label}</span>
            <select
                value={value}
                onChange={(e) => onChange(e.target.value)}
            >
                {options.map((o) => (
                    <option key={o.value} value={o.value}>{o.label}</option>
                ))}
            </select>
        </label>
    )
}
