import { useEffect, useState } from "react";
import githubLogo from "../assets/github-svg.svg";
import linkedinLogo from "../assets/linkedin-svg.svg";
import contactLogo from "../assets/contact-logo.svg";
import resumePdf from "/CV_MartinKhyari.pdf";

export default function Footer() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const checkBottom = () => {
            const atBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 40);
            setVisible(atBottom);
        };
        checkBottom();
        window.addEventListener("scroll", checkBottom, { passive: true });
        window.addEventListener("resize", checkBottom);
        return () => {
            window.removeEventListener("scroll", checkBottom);
            window.removeEventListener("resize", checkBottom);
        };
    }, []);

    return (
        <footer
            className={
                "fixed bottom-4 left-4 right-4 md:left-16 md:right-16 z-50 bg-white/90 backdrop-blur-md border border-stone-300 rounded-3xl shadow-md px-6 py-4 flex items-center justify-between gap-6 text-stone-700 max-w-[1200px] mx-auto " +
                (visible
                    ? "translate-y-0 opacity-100 pointer-events-auto transition-all duration-300 ease-out"
                    : "translate-y-6 opacity-0 pointer-events-none transition-all duration-300 ease-out")
            }
            aria-hidden={!visible}
        >
            <div className="flex items-center gap-4">
                <div className="text-sm">
                    <div className="font-semibold">Martin Khyari</div>
                    <div className="text-xs">© {new Date().getFullYear()} — All rights reserved</div>
                </div>

            </div>


            <div className="flex items-center gap-3">
                <p>martin.khyari@gmail.com</p>
            </div>
        </footer>
    );
}