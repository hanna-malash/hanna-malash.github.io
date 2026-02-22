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

    const linkStyle = {
        color: "var(--md-primary)",
        textDecoration: "none",
        fontWeight: 700,
    }

    return (
        <div style={{ paddingTop: 24 }}>
            {/* Top card */}
            <SectionCard title={lang === "ru" ? "Контакты" : "Contact"}>
                <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                    {lang === "ru"
                        ? "Открыта к стажировкам, junior-позициям и сотрудничеству."
                        : "Open to internships, junior roles and collaboration."}
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* Grid */}
            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: 16,
                    alignItems: "stretch",
                }}
            >
                {/* Email card */}
                <SectionCard title="Email">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: 140,
                        }}
                    >
                        <div style={{ display: "grid", gap: 8 }}>
                            <div style={{ fontWeight: 700 }}>{email}</div>
                            <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                                {lang === "ru"
                                    ? "Используй кнопку ниже, чтобы скопировать email."
                                    : "Use the button below to copy the email."}
                            </div>
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                style={{
                                    all: "unset",
                                    ...linkStyle,
                                    cursor: "pointer",
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
                    </div>
                </SectionCard>

                {/* LinkedIn card */}
                <SectionCard title="LinkedIn">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: 140,
                        }}
                    >
                        <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                            {lang === "ru"
                                ? "Профиль с опытом, образованием и контактами."
                                : "Profile with experience, education and details."}
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <a
                                href={linkedInUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={linkStyle}
                            >
                                {lang === "ru" ? "Открыть профиль" : "Open profile"}
                            </a>
                        </div>
                    </div>
                </SectionCard>

                {/* GitHub card */}
                <SectionCard title="GitHub">
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: 140,
                        }}
                    >
                        <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                            {lang === "ru"
                                ? "Репозитории, проекты и код."
                                : "Repositories, projects and code."}
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <a
                                href={githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={linkStyle}
                            >
                                {lang === "ru" ? "Открыть GitHub" : "Open GitHub"}
                            </a>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    )
}