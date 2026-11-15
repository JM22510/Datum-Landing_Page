import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GUIDES, GUIDE_KEYS, type GuideKey } from "../../data/guide";
import Reveal from "../reveal/reveal";

export default function Tutorial() {
    const [activeKey, setActiveKey] = useState<GuideKey>("passenger");
    const [stepIndex, setStepIndex] = useState(0);

    const guide = GUIDES[activeKey];
    const step = guide.steps[stepIndex];
    const isFirst = stepIndex === 0;
    const isLast = stepIndex === guide.steps.length - 1;

    function selectGuide(key: GuideKey) {
        setActiveKey(key);
        setStepIndex(0); // always start a new guide at step 1
    }

    return (
        <section id="guides" className="min-h-screen bg-white flex items-center overflow-hidden">
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-24 py-16 flex flex-col gap-10">
                {/* Heading */}
                <div className="flex flex-col gap-4">
                    <Reveal>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#183765]">
                            Every ride starts <span className="text-[#2C7DA0]">here.</span>
                        </h3>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="text-base text-[#183765] leading-relaxed tracking-widest max-w-xl">
                            Quick guides for passengers booking a trip and cooperative members
                            taking bookings in the DATUM community.
                        </p>
                    </Reveal>
                </div>

                {/* Tabs */}
                <Reveal delay={300}>
                    <div role="tablist" className="flex flex-wrap gap-3">
                        {GUIDE_KEYS.map((key) => (
                            <button
                                key={key}
                                type="button"
                                role="tab"
                                aria-selected={activeKey === key}
                                onClick={() => selectGuide(key)}
                                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                    activeKey === key
                                        ? "bg-[#183765] border-[#183765] text-white"
                                        : "border-gray-400 text-gray-600 hover:border-[#183765] hover:text-[#183765]"
                                }`}
                            >
                                {GUIDES[key].label}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* Step carousel */}
                <Reveal delay={450}>
                    <div className="flex items-center gap-4 lg:gap-8">
                        <button
                            type="button"
                            aria-label="Previous step"
                            disabled={isFirst}
                            onClick={() => setStepIndex((i) => i - 1)}
                            // FIX: relative z-20 lifts the button above the scaled image
                            className="relative z-20 shrink-0 grid place-items-center size-12 lg:size-20 rounded-full bg-slate-300 text-white transition-colors enabled:bg-[#2C7DA0] enabled:hover:bg-[#183765] enabled:active:bg-[#0F2A4F] disabled:cursor-not-allowed"
                        >
                            <ChevronLeft className="size-8 lg:size-12" />
                        </button>

                        {/* key remounts this on every step change, replaying the fade-in */}
                        <Reveal
                            key={`${activeKey}-${stepIndex}`}
                            className="flex-1 grid md:grid-cols-[1fr_1.2fr] gap-6 lg:gap-10 items-center"
                        >
                            <div className="flex flex-col gap-2 md:justify-self-center">
                                <h4 className="text-2xl lg:text-3xl font-bold text-[#2C7DA0] tracking-widest">
                                    {step.title}
                                </h4>
                                <p className="text-[#111827] tracking-wider">{step.description}</p>
                            </div>

                            {/* FIX: pointer-events-none so the scaled image never catches clicks */}
                            <div className="relative justify-self-center pointer-events-none h-[45vh] aspect-[9/19] md:scale-[1.3] lg:scale-[1.4]">
                                <img
                                    src={step.image}
                                    alt={`${step.title} screen of the DATUM app`}
                                    style={{ transform: `scale(${step.imageScale ?? 1})` }}
                                    className="size-full object-cover object-top drop-shadow-2xl"
                                />
                            </div>
                        </Reveal>

                        <button
                            type="button"
                            aria-label="Next step"
                            disabled={isLast}
                            onClick={() => setStepIndex((i) => i + 1)}
                            // FIX: relative z-20 here too
                            className="relative z-20 shrink-0 grid place-items-center size-12 lg:size-20 rounded-full bg-slate-300 text-white transition-colors enabled:bg-[#2C7DA0] enabled:hover:bg-[#183765] enabled:active:bg-[#0F2A4F] disabled:cursor-not-allowed"
                        >
                            <ChevronRight className="size-8 lg:size-12" />
                        </button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}