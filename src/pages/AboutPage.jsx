import { useI18n } from "../app/providers/I18nContext"
import { translations } from "../shared/i18n/translations"
import { Chip } from "../shared/ui/Chip"
import { SectionCard } from "../shared/ui/SectionCard"

function Bullets({ items }) {
    if (!items || items.length === 0) return null
    return (
        <ul className="bullet-list bullet-list--compact">
            {items.map((x) => (
                <li key={x}>{x}</li>
            ))}
        </ul>
    )
}

function TimelineBlock({ item }) {
    return (
        <div className="timeline-item">
            <div className="timeline-item__header">
                <div className="timeline-item__title">{item.title}</div>
                <div className="timeline-item__period">{item.period}</div>
            </div>
            {item.subtitle ? (
                <div className="timeline-item__subtitle">{item.subtitle}</div>
            ) : null}
            <Bullets items={item.bullets} />
        </div>
    )
}

export function AboutPage() {
    const { lang } = useI18n()
    const c = translations[lang]?.about || translations.en.about

    return (
        <div className="page">
            <SectionCard title={c.heroTitle}>
                <p className="content-muted">{c.tagline}</p>
                <div className="chip-row">
                    {c.chips.map((x) => <Chip key={x}>{x}</Chip>)}
                </div>
            </SectionCard>

            <SectionCard title={c.summaryTitle}>
                <Bullets items={c.summaryBullets} />
            </SectionCard>

            <SectionCard title={c.experienceTitle}>
                {c.experienceItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <SectionCard title={c.educationTitle}>
                {c.educationItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <SectionCard title={c.trainingsTitle}>
                {c.trainingsItems.map((item) => (
                    <TimelineBlock key={item.title} item={item} />
                ))}
            </SectionCard>

            <SectionCard title={c.factsTitle}>
                <div className="facts-grid">
                    <div className="fact-block">
                        <div className="fact-block__label">{c.facts.languages}</div>
                        <p className="content-muted">{c.facts.languagesValue}</p>
                    </div>
                    <div className="fact-block">
                        <div className="fact-block__label">{c.facts.tools}</div>
                        <p className="content-muted">{c.facts.toolsValue}</p>
                    </div>
                    <div className="fact-block">
                        <div className="fact-block__label">{c.facts.interests}</div>
                        <p className="content-muted">{c.facts.interestsValue}</p>
                    </div>
                </div>
            </SectionCard>
        </div>
    )
}
