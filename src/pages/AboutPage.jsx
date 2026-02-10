import { useI18n } from "../app/providers/I18nContext"
import { aboutContent } from "./about/aboutContent"
import { Chip } from "../shared/ui/Chip"
import { SectionCard } from "../shared/ui/SectionCard"

function Bullets({ items }) {
    if (!items || items.length === 0) return null
    return (
        <ul style={{ margin: 0, paddingLeft: 18, color: "var(--md-on-surface-variant)" }}>
            {items.map((x) => (
                <li key={x} style={{ marginBottom: 6 }}>{x}</li>
            ))}
        </ul>
    )
}

function TimelineBlock({ item }) {
    return (
        <div style={{ marginBottom: 16 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
                <div style={{ fontWeight: 700 }}>{item.title}</div>
                <div style={{ fontSize: 12, color: "var(--md-on-surface-variant)" }}>{item.period}</div>
            </div>
            {item.subtitle ? (
                <div style={{ marginTop: 4, color: "var(--md-on-surface-variant)" }}>{item.subtitle}</div>
            ) : null}
            <div style={{ height: 8 }} />
            <Bullets items={item.bullets} />
        </div>
    )
}

export function AboutPage() {
    const { lang } = useI18n()
    const c = aboutContent[lang] || aboutContent.en

    return (
        <div style={{ paddingTop: 24 }}>
            {/* CARD 1: ABOUT */}
            <SectionCard title={c.heroTitle}>
                <p style={{ maxWidth: 760, lineHeight: 1.6, margin: 0 }}>{c.tagline}</p>
                <div style={{ height: 12 }} />
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {c.chips.map((x) => <Chip key={x}>{x}</Chip>)}
                </div>
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* CARD 2: WHAT I BRING */}
            <SectionCard title={c.summaryTitle}>
                <Bullets items={c.summaryBullets} />
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* CARD 3: EXPERIENCE (full as before, details will be even deeper on Experience page later) */}
            <SectionCard title={c.experienceTitle}>
                {c.experienceItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* EDUCATION */}
            <SectionCard title={c.educationTitle}>
                {c.educationItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* TRAININGS */}
            <SectionCard title={c.trainingsTitle}>
                {c.trainingsItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <div style={{ height: 16 }} />

            {/* QUICK FACTS */}
            <SectionCard title={c.factsTitle}>
                <div style={{ display: "grid", gap: 12 }}>
                    <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.facts.languages}</div>
                        <p style={{ margin: 0, lineHeight: 1.6 }}>{c.facts.languagesValue}</p>
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.facts.tools}</div>
                        <p style={{ margin: 0, lineHeight: 1.6 }}>{c.facts.toolsValue}</p>
                    </div>
                    <div>
                        <div style={{ fontWeight: 700, marginBottom: 4 }}>{c.facts.interests}</div>
                        <p style={{ margin: 0, lineHeight: 1.6 }}>{c.facts.interestsValue}</p>
                    </div>
                </div>
            </SectionCard>
        </div>
    )
}
