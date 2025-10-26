import { useEffect, useRef } from "react";
import { animate } from "animejs";
import reactLogo from "../assets/dev_logo.svg";
import videoSrc from "../assets/background_video.mp4";
import martinPhoto from "../assets/martin_photo.jpg"

const resumePdf = "/CV_MartinKhyari.pdf";


export default function Home() {
    const videoRef = useRef(null);
    const sectionRef = useRef(null);
    const imageRef = useRef(null);

    useEffect(() => {
        // animation d'entrée de l'image 
        if (imageRef.current) {
            animate(imageRef.current, {
                translateX: [-100, 0],
                opacity: [0, 1],
                rotate: [-10, 0],
                duration: 900,
                easing: "spring(1, 80, 10, 0)"
            });
        }

        // Scroll handler performant : update direct des styles via rAF
        let ticking = false;
        const onScroll = () => {
            const scrollTop = window.scrollY;
            if (!ticking) {
                ticking = true;
                window.requestAnimationFrame(() => {
                    const sectionHeight = sectionRef.current?.clientHeight || window.innerHeight;
                    const progress = Math.min(scrollTop / sectionHeight, 1);

                    if (videoRef.current) {
                        videoRef.current.style.opacity = String(1 - progress);
                    }

                    if (sectionRef.current) {
                        sectionRef.current.style.transform = `translateY(${100 - progress * 100}%)`;
                    }

                    if (imageRef.current) {
                        imageRef.current.style.transform = `translateY(${progress * -30}px) rotate(${progress * -4}deg) scale(${1 - progress * 0.06})`;
                    }

                    ticking = false;
                });
            }
        };

        window.addEventListener("scroll", onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, []);

    return (
        <div className="relative w-full h-[110vh]">
            {/* Section vidéo */}
            <div
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-screen overflow-hidden"
                style={{ willChange: "opacity, transform" }}
            >
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={videoSrc} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo.
                </video>

                <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>
                <div className="relative z-10 flex items-center justify-center h-full px-8 md:px-16 lg:px-24">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16 max-w-7xl w-full">
                        {/* Image à gauche */}
                        <div className="w-full md:w-[40%] ">
                            <img
                                ref={imageRef}
                                src={martinPhoto}
                                alt="Martin"
                                className="w-full h-auto rounded-lg shadow-2xl object-cover"
                                style={{ willChange: "transform, opacity" }}
                            />
                        </div>

                        {/* Texte à droite */}
                        <div className="w-full md:w-[100%] space-y-4">
                            <h1 className="text-white text-5xl md:text-6xl font-bold">
                                Welcome to my Portfolio
                            </h1>
                            <p className="text-white text-lg md:text-xl">
                                As a student developer at Epitech, I want to put my technical skills and curiosity to work for an innovative team.                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section suivante */}
            <div
                ref={sectionRef}
                className="relative z-20 w-full h-[100vh] bg-white flex items-start justify-center"
                style={{ transform: "translateY(100%)", willChange: "transform" }}
            >
                <div className="max-w-3xl w-full px-6 md:px-12 mx-auto text-center space-y-6 pt-24 md:pt-32">
                    <h2 className="text-3xl md:text-4xl font-bold text-black">
                        A little bit about me
                    </h2>

                    <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                        Currently pursuing a Pre-MSc in Software Architecture at Epitech Nantes, I am seeking a work-study position as a web or software developer. With experience in full-stack development, automation and API design, I aim to apply my technical skills and creativity within an innovative company.
                    </p>

                    <p className="text-base md:text-lg text-stone-700 leading-relaxed">
                        If you’re interested in my profile, feel free to get in touch (You can find all my information at the top right) and download my resume !
                    </p>

                    <div className="pt-4">
                        <a
                            href={resumePdf}
                            download
                            className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-lg md:text-xl font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                            aria-label="Download CV"
                        >
                            Télécharger mon CV
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
