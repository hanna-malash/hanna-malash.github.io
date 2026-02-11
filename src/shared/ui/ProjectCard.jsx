import React from "react"
import { Chip } from "./Chip"
import { SectionCard } from "./SectionCard"

export function ProjectCard({ title, description, tags, links }) {
    return (
        <SectionCard title={title}>
            <div style={{ display: "grid", gap: 12 }}>
                <div style={{ color: "var(--md-on-surface-variant)", lineHeight: 1.6 }}>
                    {description}
                </div>

                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {(tags || []).map((t) => <Chip key={t}>{t}</Chip>)}
                </div>

                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                    {(links || []).map((l) => {
                        const isExternal = l.href.startsWith("http")
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                                style={{ color: "var(--md-primary)", textDecoration: "none", fontWeight: 700 }}
                            >
                                {l.label}
                            </a>
                        )
                    })}
                </div>
            </div>
        </SectionCard>
    )
}