export default function Navbar() {
    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 py-4 px-8 rounded-4xl shadow-md border border-stone-500 z-50 backdrop-blur-md w-auto flex items-center gap-8">
            {/* Boîte séparée à gauche */}
            <div className="bg-stone-200 px-4 py-2 rounded-lg">
                <a href="/" className="font-bold text-stone-700 hover:text-stone-900 transition">
                    Martin Khyari
                </a>
            </div>

            {/* Menu centré */}
            <ul className="flex justify-center divide-x divide-stone-300 text-stone-600 font-semibold">
                <li className="px-4">
                    <a href="#" className="hover:text-gray-400 transition">Accueil</a>
                </li>
                <li className="px-4">
                    <a href="#" className="hover:text-gray-400 transition">Services</a>
                </li>
                <li className="px-4">
                    <a href="#" className="hover:text-gray-400 transition">Portfolio</a>
                </li>
                <li className="px-4">
                    <a href="#" className="hover:text-gray-400 transition">Contact</a>
                </li>
            </ul>
        </nav>
    );
}
