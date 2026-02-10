import { useI18n } from "../app/providers/I18nContext"

export function HomePage() {
    const { t } = useI18n()

    return (
        <div style={{ paddingTop: 32 }}>
            {/* Title */}
            <h1>{t("title")}</h1>

            {/* Subtitle */}
            <div style={{ height: 8 }} />
            <p>{t("subtitle")}</p>

            {/* Warning card */}
            <div style={{ height: 20 }} />
            <div className="warning">
                <div style={{ fontWeight: 600, marginBottom: 6 }}>
                    {t("warningTitle")}
                </div>
                <div style={{ opacity: 0.9 }}>
                    {t("warningText")}
                </div>
            </div>

            {/* Spacer */}
            <div style={{ height: 24 }} />

            {/* Next steps card */}
            <div className="card">
                <div style={{ fontWeight: 600 }}>
                    What’s next
                </div>

                <div style={{ height: 6 }} />

                <p style={{ margin: 0 }}>
                    Projects, CV, contacts and a clean portfolio layout.
                </p>
            </div>
        </div>
    )
}
