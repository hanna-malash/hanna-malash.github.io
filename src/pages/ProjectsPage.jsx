import React from "react"
import { useI18n } from "../app/providers/I18nContext"
import { projectsData } from "../shared/data/projectsData"
import { ProjectCard } from "../shared/ui/ProjectCard"
import { SectionCard } from "../shared/ui/SectionCard"

export function ProjectsPage() {
    const { lang } = useI18n()
    const items = projectsData[lang] || projectsData.en

    return (
        <div className="page">
            <SectionCard title={lang === "ru" ? "Проекты" : "Projects"}>
                <div className="content-muted">
                    {lang === "ru"
                        ? "Подборка проектов: разработка, аналитика и учебные работы."
                        : "Selected work: development, analytics, and academic projects."}
                </div>
            </SectionCard>

            <div className="projects-grid">
                {items.map((p) => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        description={p.description}
                        tags={p.tags}
                        links={p.links}
                    />
                ))}
            </div>
        </div>
    )
}
