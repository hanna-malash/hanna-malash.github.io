import React from "react"
import { useI18n } from "../app/providers/I18nContext"
import { translations } from "../shared/i18n/translations"
import { SectionCard } from "../shared/ui/SectionCard"

export function HomePage() {
    const { lang } = useI18n()
    const base = translations.en || {}
    const dict = translations[lang] || base
    const t = dict.home || base.home || {
        heroTitle: "Hanna Malash",
        heroSubtitle: "Audit Intern at EY · 🎓 SGH student (Quantitative Methods)",
        heroLead: "Transitioning from enterprise financial audit and structured data validation into data analytics and technical roles.",
        auditTitle: "Audit mindset",
        auditLead: "",
        auditBullets: [],
        dataTitle: "Data transition",
        dataLead: "",
        dataBullets: [],
        wipTitle: "Work in progress",
        wipText: "This website is evolving step by step alongside my professional development.",
    }

    return (
        <div className="page">
            <SectionCard title="">
                <div className="page__hero">
                    <h1 className="page__title">{t.heroTitle}</h1>
                    <p className="page__subtitle">{t.heroSubtitle}</p>
                    <div className="page__lead">
                        {t.heroLead}
                    </div>
                </div>
            </SectionCard>

            <SectionCard title={t.auditTitle}>
                <div className="section-stack">
                    <div className="content-muted">
                        {t.auditLead}
                    </div>
                    <ul className="bullet-list">
                        {(t.auditBullets || []).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </SectionCard>

            <SectionCard title={t.dataTitle}>
                <div className="section-stack">
                    <div className="content-muted">
                        {t.dataLead}
                    </div>
                    <ul className="bullet-list">
                        {(t.dataBullets || []).map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </div>
            </SectionCard>

            <SectionCard title={t.wipTitle} variant="warning">
                <div className="content-muted">
                    {t.wipText}
                </div>
            </SectionCard>
        </div>
    )
}
