import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import BrandLogo from "../brandlogo/brandlogo";
import { sections, lastUpdated } from "../../data/privacypolicy";
import Reveal from "../reveal/reveal";

export default function PrivacyPolicy() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 px-4 md:px-12 lg:px-32 py-4 flex items-center justify-between transition-all duration-300 ${
                    scrolled
                        ? "bg-white/80 backdrop-blur-md shadow-md"
                        : "bg-transparent"
                }`}
            >
                {/* The Link owns the color; BrandLogo just draws the shape with bg-current */}
                <Link
                    to="/"
                    aria-label="Datum home"
                    className={`flex items-center transition-colors duration-300 hover:text-[#5479b1] ${
                        scrolled ? "text-[#183765]" : "text-white"
                    }`}
                >
                    <BrandLogo className="w-40 h-10 md:w-40 md:h-12" />
                </Link>

                <Link
                    to="/"
                    className="group relative overflow-hidden flex items-center gap-2 px-4 py-2 md:px-5 md:py-3 rounded-2xl bg-white/30 border-2 border-white/60 text-white font-semibold transition-all duration-300 hover:bg-white/40 hover:border-white hover:-translate-y-0.5 hover:shadow-lg"
                >
                    <span
                        className={`absolute inset-0 bg-linear-to-b from-[#2C7DA0] to-[#183765] transition-all duration-300 group-hover:brightness-125 ${
                            scrolled ? "opacity-100" : "opacity-0"
                        }`}
                    />
                    <FaArrowLeft className="relative transition-transform duration-300 group-hover:-translate-x-1" />
                    <span className="relative">Back to home</span>
                </Link>
            </header>

            <section className="min-h-screen bg-gray-50">
                <div
                    className="px-4 md:px-12 lg:px-32 pt-28 pb-16 lg:pt-32 lg:pb-20 text-center"
                    style={{
                        backgroundColor: "#051D41",
                        backgroundImage:
                            "radial-gradient(ellipse 70% 150% at 50% 50%, #26678C 0%, #1D5580 22%, #17386A 48%, #0B2754 75%, #051D41 100%)",
                    }}
                >
                    <Reveal>
                        <h1 className="text-[#ffffff] text-4xl md:text-5xl font-extrabold leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-[#ffffff]/80 text-base md:text-lg mt-3">
                            This policy describes what personal information Datum collects, how we
                            use and protect it, and the rights you hold under Republic Act No.
                            10173, the Data Privacy Act of 2012.
                        </p>
                    </Reveal>
                </div>

                <div className="px-4 md:px-12 lg:px-32 py-10 lg:py-14">
                    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col gap-8">
                        <Reveal>
                            <h2 className="text-[#051D41] text-2xl md:text-3xl font-bold">
                                Luzon Datum Privacy Policy
                            </h2>
                            <p className="text-[#26678C] font-semibold">Last Updated: {lastUpdated}</p>
                        </Reveal>

                        {sections.map((section) => (
                            <Reveal key={section.title} className="flex flex-col gap-3">
                                <h3 className="text-[#26678C] text-xl font-bold">
                                    {section.title}
                                </h3>

                                {section.body?.map((paragraph) => (
                                    <p key={paragraph} className="text-gray-700 text-base leading-relaxed">
                                        {paragraph}
                                    </p>
                                ))}

                                {section.list && (
                                    <ul className="list-disc pl-6 flex flex-col gap-2 text-gray-700 text-base leading-relaxed">
                                        {section.list.map((item) => (
                                            <li key={item}>{item}</li>
                                        ))}
                                    </ul>
                                )}
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}