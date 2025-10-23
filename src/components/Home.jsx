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

        // Side from the left for the photo
        animate(imageRef.current, {
            translateX: [-100, 0],
            opacity: [0, 1],
            rotate: [-10, 0],
            duration: 1600,
            easing: "spring(1, 80, 10, 0)"
        });

        // Animation au scroll (full anime.js)
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;

            // progression entre 0 et 1
            const progress = Math.min(scrollTop / windowHeight, 1);

            // Anime opacity de la vidéo
            animate(videoRef.current, {
                duration: 800, // ← ralentir / accélérer
                easing: "easeOutQuad"
            });

            // Anime translateY de la section suivante
            animate(sectionRef.current, {
                translateY: `${100 - progress * 100}%`,
                duration: 100, // durée de la transition
                //easing: "easeOutExpo"
            });
        };
            

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div ref={root} className="relative w-full h-[100vh]">
            {/* Section vidéo */}
            <div
                ref={videoRef}
                className="absolute top-0 left-0 w-full h-screen overflow-hidden transition-all duration-300"
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
                            />
                        </div>

                        {/* Texte à droite */}
                        <div className="w-full md:w-[100%] space-y-4">
                            <h1 className="text-white text-5xl md:text-6xl font-bold">
                                Welcome to my Portfolio
                            </h1>
                            <p className="text-white text-lg md:text-xl">
                                As a student developer at Epitech, I want to put my technical skills and curiosity to work for an innovative team as part of a work-study program.                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section suivante */}
            <div
                ref={sectionRef}
                className="relative z-20 w-full h-screen bg-white flex items-center justify-center"
                style={{ transform: "translateY(100%)" }}
            >
                <div className="flex flex-col items-center gap-8">
                    <a
                        href={resumePdf}
                        download
                        className="inline-flex items-center justify-center bg-black text-white px-8 py-4 rounded-full text-xl font-semibold shadow-2xl hover:scale-105 active:scale-95 transition-transform"
                        aria-label="Download CV"
                    >
                        Télécharger mon CV
                    </a>
                </div>
            </div>
        </div>
    );
}
