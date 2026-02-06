import { HashRouter, Routes, Route } from "react-router-dom"
import { AppShell } from "./layout/AppShell"
import { HomePage } from "../pages/HomePage"
import { AboutPage } from "../pages/AboutPage"
import { ProjectsPage } from "../pages/ProjectsPage"
import { ExperiencePage } from "../pages/ExperiencePage"
import { ContactPage } from "../pages/ContactPage"

export function App() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<AppShell />}>
                    <Route index element={<HomePage />} />
                    <Route path="about" element={<AboutPage />} />
                    <Route path="projects" element={<ProjectsPage />} />
                    <Route path="experience" element={<ExperiencePage />} />
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}
