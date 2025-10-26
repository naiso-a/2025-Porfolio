import { useState, useRef, useEffect } from "react";

import githubLogo from "../assets/github-svg.svg";
import linkedinLogo from "../assets/linkedin-svg.svg";
import contactLogo from "../assets/contact-logo.svg"

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [copied, setCopied] = useState(false);

    const closeBtnRef = useRef(null);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        if (open) {
            document.addEventListener("keydown", onKey);
            setTimeout(() => closeBtnRef.current?.focus(), 0);
        } else {
            document.removeEventListener("keydown", onKey);
        }
        return () => document.removeEventListener("keydown", onKey);
    }, [open]);
    return (
        <>

            {/* Navbar centrée */}
            <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-white/80 py-4 px-8 rounded-4xl shadow-md border border-stone-500 z-50 backdrop-blur-md w-auto flex items-center gap-8">
                <ul className="flex justify-center divide-x divide-stone-300 text-stone-600 font-semibold">
                    <li className="px-4">
                        <a href="/" className="hover:text-gray-400 transition">Home</a>
                    </li>
                    <li className="px-4">
                        <a href="/Projects" className="hover:text-gray-400 transition">Projects</a>
                    </li>
                    <li className="px-4">
                        <a href="/About" className="hover:text-gray-400 transition">About</a>
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
                    <button
                        type="button"
                        onClick={() => setOpen(true)}
                        aria-haspopup="dialog"
                        aria-expanded={open}
                        className="w-9 h-9 flex items-center justify-center hover:opacity-80 transition-opacity drop-shadow-lg cursor-pointer"
                    >
                        <img src={contactLogo} alt="Contact" />
                    </button>
                </div>
            </div>
            {open && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center"
                    role="dialog"
                    aria-modal="true"
                >
                    {/* backdrop */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    {/* panel */}
                    <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 z-10">
                        <button
                            ref={closeBtnRef}
                            onClick={() => setOpen(false)}
                            aria-label="Close contact"
                            className="absolute top-3 right-3 text-stone-500 hover:text-stone-700"
                        >
                            ✕
                        </button>

                        <h3 className="text-lg font-semibold text-black mb-2">Contact</h3>
                        <p className="text-sm text-stone-600 mb-4">
                            You can join me at :
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between bg-stone-50 rounded-md p-3">
                                <div>
                                    <div className="text-xs text-stone-500">Email</div>
                                    <div className="text-sm font-medium">martin.khyari@gmail.com</div>
                                </div>
                                <button
                                    className="text-sm text-black bg-black/5 px-2 py-1 rounded cursor-pointer transition"
                                    onClick={() => {
                                        navigator.clipboard?.writeText("martin.khyari@gmail.com")
                                            .then(() => {
                                                setCopied(true);
                                                setTimeout(() => setCopied(false), 2000);
                                            })
                                            .catch(() => {
                                            });
                                    }}
                                    aria-live="polite"
                                >
                                    {copied ? "Copied ✓" : "Copy"}
                                </button>
                            </div>

                            <div className="flex items-center justify-between bg-stone-50 rounded-md p-3">
                                <div>
                                    <div className="text-xs text-stone-500">Phone number</div>
                                    <div className="text-sm font-medium">+33 6 50 57 87 32</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
