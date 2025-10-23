import githubLogo from "../assets/github-svg.svg";
import linkedinLogo from "../assets/linkedin-svg.svg";
import contactLogo from "../assets/contact-logo.svg"

export default function Navbar() {
    return (
        <>

            {/* Navbar centrée */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 py-4 px-8 rounded-4xl shadow-md border border-stone-500 z-50 backdrop-blur-md w-auto flex items-center gap-8">
                <ul className="flex justify-center divide-x divide-stone-300 text-stone-600 font-semibold">
                    <li className="px-4">
                        <a href="#" className="hover:text-gray-400 transition">Home</a>
                    </li>
                    <li className="px-4">
                        <a href="#" className="hover:text-gray-400 transition">Projects</a>
                    </li>
                    <li className="px-4">
                        <a href="#" className="hover:text-gray-400 transition">About</a>
                    </li>
                    <li className="px-4">
                        <a href="#" className="hover:text-gray-400 transition">Contact</a>
                    </li>
                </ul>
            </nav>

            {/* Section à droite avec tes SVG */}
            <div className="fixed top-4 right-4 flex flex-col items-center gap-2 z-50 px-8 py-3">
                <div className="flex gap-4">
                    <a href="https://github.com/naiso-a" target="_blank" rel="noopener noreferrer">
                        <img src={githubLogo} alt="GitHub" className="w-8 h-8 hover:opacity-80 transition-opacity drop-shadow-lg" />
                    </a>
                    <a href="https://linkedin.com/in/martin-khyari" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinLogo} alt="LinkedIn" className="w-8 h-8 hover:opacity-80 transition-opacity drop-shadow-lg" />
                    </a>
                    <a href="https://linkedin.com/in/martin-khyari" target="_blank" rel="noopener noreferrer">
                        <img src={contactLogo} alt="LinkedIn" className="w-9 h-9 hover:opacity-80 transition-opacity drop-shadow-lg" />
                    </a>
                </div>
            </div>
        </>
    );
}
