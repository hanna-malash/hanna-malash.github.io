import { useI18n } from "../app/providers/I18nContext"
import { SectionCard } from "../shared/ui/SectionCard"

export function ExperiencePage() {
    const { lang } = useI18n()

    return (
        <div className="page">
            <SectionCard title={lang === "ru" ? "Опыт" : "Experience"}>
                <div className="content-muted">
                    {lang === "ru"
                        ? "Эта страница станет более подробным продолжением раздела About. В следующем PR сюда можно вынести роли, задачи, инструменты и достижения по каждому этапу."
                        : "This page will become a more detailed extension of the About section. In the next PR we can move each role into a clearer timeline with responsibilities, tools, and outcomes."}
                </div>
            </SectionCard>
        </div>
    )
}
