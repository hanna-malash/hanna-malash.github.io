import React from "react"
import { Chip } from "./Chip"
import { SectionCard } from "./SectionCard"

export function ProjectCard({ title, description, tags, links }) {
    return (
        <SectionCard title={title}>
            <div className="section-stack">
                <div className="content-muted">
                    {description}
                </div>

                <div className="chip-row">
                    {(tags || []).map((t) => <Chip key={t}>{t}</Chip>)}
                </div>

                <div className="actions-row">
                    {(links || []).map((l) => {
                        const isExternal = l.href.startsWith("http")
                        return (
                            <a
                                key={l.href}
                                href={l.href}
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noreferrer" : undefined}
                                className="action-link"
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
