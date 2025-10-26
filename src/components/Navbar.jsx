import { useState, useRef, useEffect } from "react";

import githubLogo from "../assets/github-svg.svg";
import linkedinLogo from "../assets/linkedin-svg.svg";
import contactLogo from "../assets/contact-logo.svg";

export default function Navbar() {
  const [openContact, setOpenContact] = useState(false);
  const [copied, setCopied] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeBtnRef = useRef(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpenContact(false);
        setMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    if (openContact) setTimeout(() => closeBtnRef.current?.focus(), 0);
  }, [openContact]);

  return (
    <>
      {/* wrapper full-width to center nav reliably */}
      <div className="fixed inset-x-0 top-4 z-50 flex items-start justify-center pointer-events-none">
        <nav className="pointer-events-auto bg-white/90 py-3 px-4 md:px-8 rounded-4xl shadow-md border border-stone-300 backdrop-blur-sm flex items-center gap-4 md:gap-8">
          {/* hamburger for mobile */}
          <button
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg hover:bg-black/5 transition"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((s) => !s)}
          >
            <svg className="w-6 h-6 text-stone-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* links (desktop) */}
          <ul className="hidden md:flex justify-center divide-x divide-stone-200 text-stone-600 font-semibold">
            <li className="px-4">
              <a href="/" className="hover:text-stone-400 transition">Home</a>
            </li>
            <li className="px-4">
              <a href="/Projects" className="hover:text-stone-400 transition">Projects</a>
            </li>
            <li className="px-4">
              <a href="/About" className="hover:text-stone-400 transition">About</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* right icons (keeps fixed on top-right) */}
      <div className="fixed top-4 right-4 flex items-center gap-3 z-50 px-2 py-1 pointer-events-auto">
        <a href="https://github.com/naiso-a" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-black/5 transition">
          <img src={githubLogo} alt="GitHub" className="w-7 h-7" />
        </a>

        <a href="https://linkedin.com/in/martin-khyari" target="_blank" rel="noopener noreferrer" className="w-9 h-9 flex items-center justify-center rounded-md hover:bg-black/5 transition">
          <img src={linkedinLogo} alt="LinkedIn" className="w-7 h-7" />
        </a>

        <button
          type="button"
          onClick={() => setOpenContact(true)}
          aria-haspopup="dialog"
          aria-expanded={openContact}
          className="w-9 h-9 flex items-center justify-center rounded-md bg-white/70 hover:bg-white transition"
        >
          <img src={contactLogo} alt="Contact" className="w-6 h-6" />
        </button>
      </div>

      {/* mobile menu panel */}
      {menuOpen && (
        <div className="fixed top-20 inset-x-4 z-40 flex justify-center">
          <div className="w-full max-w-sm bg-white/95 rounded-xl shadow-lg border border-stone-200 p-4">
            <ul className="flex flex-col gap-3 text-center">
              <li>
                <a
                  href="/"
                  className="block py-2 rounded hover:bg-stone-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/Projects"
                  className="block py-2 rounded hover:bg-stone-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="/About"
                  className="block py-2 rounded hover:bg-stone-50 transition"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* contact modal */}
      {openContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpenContact(false)} />

          <div className="relative bg-white rounded-xl shadow-2xl w-full max-w-md mx-4 p-6 z-10">
            <button
              ref={closeBtnRef}
              onClick={() => setOpenContact(false)}
              aria-label="Close contact"
              className="absolute top-3 right-3 text-stone-500 hover:text-stone-700"
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold text-black mb-2">Contact</h3>
            <p className="text-sm text-stone-600 mb-4">You can join me at :</p>

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
                      .catch(() => {});
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
