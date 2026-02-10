export function SectionCard({ title, children }) {
    return (
        <div className="card">
            <div style={{ fontWeight: 700, marginBottom: 10 }}>{title}</div>
            {children}
        </div>
    )
}
