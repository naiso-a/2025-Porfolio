const technologies = {
  Languages: [
    "JavaScript",
    "TypeScript",
    "Python",
    "Java",
    "PHP",
    "C# / .NET",
    "SQL / PostgreSQL / SQL Server",
    "HTML5 / CSS3 / SCSS",
    "Bash / Linux"
  ],
  Frameworks: [
    "React",
    "Next.js",
    "Vue.js",
    "Flask",
    "Django",
    "Spring Boot",
    "Node.js / Express",
    "Tailwind CSS",
    "Docker",
    "Nginx",
    "PowerShell",
    "SharePoint Online"
  ]
};

const experiences = [
  {
    year: "2024 - 2025",
    title: "Apprentice Full‑Stack Developer",
    company: "Fab’Academy",
    desc: `Contributed to the development, maintenance and optimization of internal applications for administrative and educational management.
• Evolved the Book’Up application (sorting features, GLPI tickets)
• Automation with PowerShell (file transfers to SharePoint Online)
• Python API for automatic email updates
• Brochure generation application (React TypeScript / Flask, Docker, Nginx, SSL)
• Automated user account manager (SILAE / AD / Yparéo)
Technologies: Python, Flask, React (TypeScript), SQL Server, Docker, Nginx, PowerShell, Java Spring Boot`
  },
  {
    year: "2024",
    title: "Web Development Intern",
    company: "Les Clés des Dunes",
    desc: `Developed a WordPress site including integration and customization of the Ultimate Member plugin.`
  },
  {
    year: "2023",
    title: "Intern — Web & Embedded Applications",
    company: "La Tête dans la Toile",
    desc: `Worked on WordPress projects and embedded PHP for the Trou Blanc and Théâtre Vasse projects.`
  },
  {
    year: "2022 - 2023",
    title: "Team Member",
    company: "McDonald’s",
    desc: `Worked in a fast-paced environment focused on teamwork and customer service.`
  }
];

const education = [
  {
    year: "2025 - 2028",
    title: "Pre‑MSc in Software Architecture",
    school: "EPITECH Nantes"
  },
  {
    year: "2022 - 2025",
    title: "Bachelor in DevOps",
    school: "EPSI Nantes"
  },
  {
    year: "2019 - 2022",
    title: "High School Diploma — Mathematics & Social Sciences",
    school: "La Perverie Sacré Coeur"
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#C0B9DD] py-24 md:py-32 px-6 md:px-12">
      <div className="max-w-5xl mx-auto space-y-16">
        <header className="max-w-3xl mx-auto text-center bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <h1 className="text-4xl font-bold text-black">Technologies & Background</h1>
          <p className="text-stone-600 mt-2">Languages, frameworks and professional background</p>
        </header>

        {/* Technologies */}
        <section className="bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Technologies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-stone-500 mb-3">Languages</h3>
              <div className="flex flex-wrap gap-3">
                {technologies.Languages.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white shadow-sm text-sm text-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-stone-500 mb-3">
                Frameworks & tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {technologies.Frameworks.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full bg-white shadow-sm text-sm text-stone-700"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience - timeline */}
        <section className="bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>

          <div className="relative pl-8">
            <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-stone-200" />

            <ul className="space-y-10">
              {experiences.map((exp, idx) => (
                <li key={idx} className="relative">
                  <div className="absolute -left-1.5 top-1 w-3 h-3 rounded-full bg-black" />
                  <div className="pl-6">
                    <div className="text-sm text-stone-500">{exp.year}</div>
                    <div className="flex items-baseline justify-between flex-wrap gap-2">
                      <h3 className="text-lg font-semibold text-black">{exp.title}</h3>
                      <div className="text-sm text-stone-500">{exp.company}</div>
                    </div>
                    <p className="text-stone-700 mt-2 whitespace-pre-line">{exp.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="bg-stone-50 rounded-2xl p-8 md:p-10 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Education</h2>

          <ul className="space-y-6">
            {education.map((edu, idx) => (
              <li key={idx} className="border-l-4 border-black pl-4">
                <div className="text-sm text-stone-500">{edu.year}</div>
                <h3 className="text-lg font-semibold text-black">{edu.title}</h3>
                <p className="text-stone-700">{edu.school}</p>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </div >
  );
}
