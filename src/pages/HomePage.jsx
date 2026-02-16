import { useI18n } from "../app/providers/I18nContext"

export function HomePage() {
    const { t } = useI18n()

    return (
        <div style={{ paddingTop: 32 }} className="stack stack-24">

            <div className="stack stack-8">
                <h1 className="h1">{t("title")}</h1>
                <p>{t("subtitle")}</p>
            </div>

            <div className="card card--warning stack stack-8">
                <div style={{ fontWeight: 600 }}>
                    {t("warningTitle")}
                </div>
                <p>
                    {t("warningText")}
                </p>
            </div>

            <div className="card stack stack-8">
                <div style={{ fontWeight: 600 }}>
                    What’s next
                </div>
                <p>
                    Projects, CV, contacts and a clean portfolio layout.
                </p>
            </div>

        </div>
    )
}
