import React from "react"
import { useI18n } from "../app/providers/I18nContext"
import { SectionCard } from "../shared/ui/SectionCard"

export function ContactPage() {
    const { lang } = useI18n()

    const email = "malashav200105@gmail.com"
    const linkedInUrl = "https://www.linkedin.com/in/hanna-malash-65aa8b2ba/"
    const githubUrl = "https://github.com/hanna-malash"

    const [copied, setCopied] = React.useState(false)

    async function handleCopyEmail() {
        try {
            await navigator.clipboard.writeText(email)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1500)
        } catch {
            setCopied(false)
        }
    }

    return (
        <div style={{ paddingTop: 24 }}>
            <SectionCard title={lang === "ru" ? "Контакты" : "Contact"}>
                <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                    {lang === "ru"
                        ? "Открыта к стажировкам, junior-позициям и сотрудничеству."
                        : "Open to internships, junior roles and collaboration."}
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 16,
                    alignItems: "stretch",
                }}
            >
                <SectionCard title="Email">
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        <a
                            href={`mailto:${email}`}
                            style={{ textDecoration: "none", fontWeight: 600 }}
                        >
                            {email}
                        </a>

                        <button
                            onClick={handleCopyEmail}
                            style={{
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                                textAlign: "left",
                                color: "var(--md-primary)",
                                fontWeight: 500,
                            }}
                        >
                            {copied
                                ? lang === "ru"
                                    ? "Email скопирован"
                                    : "Email copied"
                                : lang === "ru"
                                    ? "Скопировать email"
                                    : "Copy email"}
                        </button>
                    </div>
                </SectionCard>

                <SectionCard title="LinkedIn">
                    <a
                        href={linkedInUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        {lang === "ru" ? "Открыть профиль" : "Open profile"}
                    </a>
                </SectionCard>

                <SectionCard title="GitHub">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            textDecoration: "none",
                            fontWeight: 600,
                        }}
                    >
                        @hanna-malash
                    </a>
                </SectionCard>
            </div>
        </div>
    )
}