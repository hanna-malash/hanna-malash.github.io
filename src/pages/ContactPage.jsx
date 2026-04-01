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

    return (
        <div className="page">
            <SectionCard title={t.pageTitle}>
                <div className="content-muted">
                    {t.pageSubtitle}
                </div>
            </SectionCard>

            <div className="contact-grid">
                <SectionCard title={t.emailTitle}>
                    <div className="interactive-card">
                        <div className="section-stack">
                            <div className="section-heading">{email}</div>
                            <div className="content-muted">
                                {t.emailHint}
                            </div>
                        </div>

                        <div>
                            <button
                                type="button"
                                onClick={handleCopyEmail}
                                className="action-link"
                            >
                                {copied ? t.copied : t.copyEmail}
                            </button>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title={t.linkedInTitle}>
                    <div className="interactive-card">
                        <div className="content-muted">
                            {t.linkedInText}
                        </div>

                        <div>
                            <a href={linkedInUrl} target="_blank" rel="noreferrer" className="action-link">
                                {t.linkedInLink}
                            </a>
                        </div>
                    </div>
                </SectionCard>

                <SectionCard title={t.githubTitle}>
                    <div className="interactive-card">
                        <div className="content-muted">
                            {t.githubText}
                        </div>

                        <div>
                            <a href={githubUrl} target="_blank" rel="noreferrer" className="action-link">
                                {t.githubLink}
                            </a>
                        </div>
                    </div>
                </SectionCard>
            </div>
        </div>
    )
}
