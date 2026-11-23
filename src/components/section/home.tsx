import phone from "../../assets/datumphoneui.png";
import phone2 from "../../assets/DatumUI2.png";
import { FaAndroid, FaArrowRight } from "react-icons/fa";
import Reveal from "../reveal/reveal";

export default function Home() {
    return (
        <section
            id="home"
            className="relative isolate lg:min-h-screen flex flex-col lg:flex-row lg:justify-between justify-center items-center gap-5 px-4 md:px-12 lg:px-24 pt-28 pb-16 lg:pt-20 lg:pb-20 overflow-hidden"
            style={{
                backgroundColor: "#051D41",
                backgroundImage:
                    "radial-gradient(ellipse 120% 135% at 100% 70%, #26678C 0%, #1D5580 22%, #17386A 48%, #0B2754 75%, #051D41 100%)",
            }}
        >
            {/* Decorative background circles */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -z-10 aspect-square rounded-full bg-[rgba(40,100,180,0.35)] w-[84vw] left-1/2 -top-[20%] lg:w-[36vw] lg:left-[66%] lg:-top-[25%] animate-drift motion-reduce:animate-none"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -z-10 aspect-square rounded-full bg-[rgba(30,130,150,0.30)] w-[47vw] left-[73%] top-[37%] lg:w-[20vw] lg:left-[82%] animate-drift [animation-delay:-3s] motion-reduce:animate-none"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -z-10 aspect-square rounded-full bg-[rgba(80,130,200,0.22)] w-[68vw] -left-[31%] top-[51%] lg:w-[28vw] lg:-left-[8%] lg:top-[55%] animate-drift [animation-delay:-6s] motion-reduce:animate-none"
            />

            {/* Text content */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-4 max-w-xl z-10">
                <Reveal delay={100} className="flex flex-col gap-4">
                    <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight">
                        Your Ride Is Just a Few Taps Away.
                    </h1>
                </Reveal>
                <Reveal delay={150} className="flex flex-col gap-4">
                    <p className="text-white text-base md:text-lg">
                        DATUM connects passengers, drivers, and cooperative staff through one
                        centralized platform for faster, more accessible transport booking.
                    </p>
                </Reveal>

                <Reveal delay={300} className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
                    <a
                        href="https://github.com/JM22510/Datum-Landing_Page/releases/latest/download/Datum.apk"
                        download
                        className="flex items-center gap-3 bg-linear-to-b from-[#2C7DA0] to-[#183765] px-5 py-3 rounded-2xl border-2 border-white/60 text-white font-semibold transition-transform hover:scale-105"
                    >
                        <FaAndroid className="w-5 h-5" />
                        <span>Get the app</span>
                    </a>

                    <a
                        href="#about"
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/40 border-2 border-white/60 text-white font-semibold transition-colors hover:bg-white/50"
                    >
                        <span>Learn more</span>
                        <FaArrowRight />
                    </a>
                </Reveal>
            </div>

            {/* Phone mockups */}
            <Reveal delay={200} className="relative w-full max-w-5xl h-90 sm:h-128 lg:h-175 flex items-center justify-center">
                <img
                    src={phone2}
                    alt=""
                    className="absolute w-100 sm:w-96 lg:w-3xl -translate-x-10 lg:-translate-x-16 translate-y-4 drop-shadow-2xl z-0"
                />
                <img
                    src={phone}
                    alt="DATUM app booking screen"
                    className="absolute w-100 sm:w-96 lg:w-3xl translate-x-10 lg:translate-x-12 -translate-y-4 drop-shadow-2xl z-10"
                />
            </Reveal>
        </section>
    );
}