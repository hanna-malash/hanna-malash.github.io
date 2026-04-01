import { Card } from "./Card"

export function SectionCard({ title, children, variant = "default", className = "" }) {
    const sectionClassName = [
        "section-card",
        className,
    ].filter(Boolean).join(" ")

    const cardClassName = variant === "warning"
        ? "card--warning"
        : ""

    return (
        <Card className={cardClassName}>
            <div className={sectionClassName}>
            {title && (
                <div className="section-card__title">
                    {title}
                </div>
            )}

            {children}
            </div>
        </Card>
    )
}
