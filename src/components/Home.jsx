import { useRef, useState } from "react";
import videoSrc from "../assets/131976-751915258.mp4";


export default function Home() {
    return (
        <>
            <div className="relative w-full h-screen overflow-hidden">
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

                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-white text-4xl font-bold">Bienvenue sur mon site</h1>
                </div>
            </div>
        </>
    );
}
