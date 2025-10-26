import React from "react";

const projects = [
    {
        id: 1,
        title: "MSPR",
        description:
            "Capstone project to build a scalable, secure AI API that predicts potential pandemic evolutions from historical cleaned and structured data. Includes an interactive front‑end with data visualizations and OpenAPI documentation. Deliverables: AI model, FastAPI backend, frontend dashboards, tests and full project documentation.",
        tech: [
            "Python",
            "PyTorch",
            "scikit-learn",
            "FastAPI",
            "Vue 3",
            "D3.js / Chart.js",
            "Docker",
            "OpenAPI / Swagger"
        ],
    },
    {
        id: 2,
        title: "Burrowork — Job board ",
        description:
            "Small job-board application (school project). Full stack app with Flask backend, Vue 3 frontend (Vite) and a MySQL database. Includes demo accounts, SQL schema/data and role-based JWT auth (creator/admin).",
        tech: [
            "Flask",
            "Python",
            "Vue 3",
            "Vite",
            "MySQL",
            "JWT",
            "Tailwind CSS"
        ],
    }
];

export default function Projects() {
    return (
        <div className="min-h-screen bg-[#C0B9DD] py-24 md:py-32 px-6 md:px-12">
            <div className="max-w-6xl mx-auto space-y-12">
                <header className="max-w-xl mx-auto text-center bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
                    <h1 className="text-4xl font-bold text-black">Projects</h1>
                    <p className="text-stone-600 mt-2">Selected projects — description and tech stack</p>
                </header>

                <section className="grid gap-8">
                    {projects.map((p) => (
                        <article
                            key={p.id}
                            className="bg-stone-50 rounded-2xl p-6 shadow-sm"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-black">{p.title}</h3>
                                    <p className="text-stone-700 mt-3">{p.description}</p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {p.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="text-sm bg-white px-3 py-1 rounded-full shadow-sm text-stone-700"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </section>
            </div>
        </div>
    );
}