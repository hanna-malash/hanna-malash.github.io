import React from "react"
import { useI18n } from "../app/providers/I18nContext"
import { translations } from "../shared/i18n/translations"
import { SectionCard } from "../shared/ui/SectionCard"

export function HomePage() {
    const { lang } = useI18n()
    const dict = translations[lang] || translations.en
    const t = dict.home

    return (
        <div style={{ paddingTop: 24 }}>
            {/* HERO */}
            <SectionCard title="">
                <div style={{ display: "grid", gap: 14, textAlign: "left" }}>
                    <div
                        style={{
                            fontSize: 34,
                            fontWeight: 900,
                            letterSpacing: -0.6,
                            lineHeight: 1.15,
                        }}
                    >
                        {t.heroTitle}
                    </div>

                    <div style={{ fontWeight: 750 }}>
                        {t.heroSubtitle}
                    </div>

                    <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65 }}>
                        {t.heroLead}
                    </div>
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* AUDIT */}
            <SectionCard title={t.auditTitle}>
                <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65 }}>
                        {t.auditLead}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 10 }}>
                        {(t.auditBullets || []).map((item) => (
                            <li key={item} style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65 }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* DATA */}
            <SectionCard title={t.dataTitle}>
                <div style={{ display: "grid", gap: 12 }}>
                    <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65 }}>
                        {t.dataLead}
                    </div>
                    <ul style={{ margin: 0, paddingLeft: 18, display: "grid", gap: 10 }}>
                        {(t.dataBullets || []).map((item) => (
                            <li key={item} style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.65 }}>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            <SectionCard title={t.wipTitle} variant="warning">
                <div style={{ lineHeight: 1.65 }}>
                    {t.wipText}
                </div>
            </SectionCard>
        </div>
    )
}