import React from "react"
import { useI18n } from "../app/providers/I18nContext"
import { translations } from "../shared/i18n/translations"
import { SectionCard } from "../shared/ui/SectionCard"

export function ContactPage() {
    const { lang } = useI18n()
    const t = (translations[lang] || translations.en).contact

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

    const linkStyle = { color: "var(--md-primary)", textDecoration: "none", fontWeight: 700 }

    return (
        <div style={{ paddingTop: 24 }}>
            <SectionCard title={t.pageTitle}>
                <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                    {t.pageSubtitle}
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
                <SectionCard title={t.emailTitle}>
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
                                {t.emailHint}
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
                                {copied ? t.copied : t.copyEmail}
                            </button>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title={t.linkedInTitle}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: 140,
                        }}
                    >
                        <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                            {t.linkedInText}
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <a href={linkedInUrl} target="_blank" rel="noreferrer" style={linkStyle}>
                                {t.linkedInLink}
                            </a>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title={t.githubTitle}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: 140,
                        }}
                    >
                        <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                            {t.githubText}
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <a href={githubUrl} target="_blank" rel="noreferrer" style={linkStyle}>
                                {t.githubLink}
                            </a>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    )
}