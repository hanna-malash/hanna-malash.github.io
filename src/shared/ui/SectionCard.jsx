export function SectionCard({ title, children, variant = "default" }) {
    const isWarning = variant === "warning"

    const warningStyles = {
        backgroundColor: "rgba(240, 173, 78)",
        border: "rgba(240, 173, 78)",
        color: "#000",
    }

    return (
        <div
            className="card"
            style={isWarning ? warningStyles : undefined}
        >
            {title && (
                <div
                    style={{
                        fontWeight: 700,
                        marginBottom: 10,
                    }}
                >
                    {title}
                </div>
            )}

            {children}
        </div>
    )
}