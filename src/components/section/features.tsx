import { useState } from "react";
import { CircleCheck } from "lucide-react";
import { ROLES, ROLE_KEYS, type RoleKey } from "../../data/features";
import Reveal from "../reveal/reveal";

export default function Features() {
    const [active, setActive] = useState<RoleKey>("passenger");
    const role = ROLES[active];

    return (
        <section
            id="features"
            className="min-h-screen flex items-center overflow-hidden"
            style={{
                backgroundColor: "#ECF4FA",
            }}
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 py-16 grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-12 items-center">
                {/* Left column */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <Reveal>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#183765] font-extrabold leading-tight">
                                Designed around{" "}
                                <span className="text-[#2C7DA0]">your journey.</span>
                            </h3>
                        </Reveal>
                        <Reveal delay={150}>
                            <p className="text-base text-[#243A5A] leading-relaxed tracking-widest">
                                Whether you are catching a ride, managing a route, or
                                running a cooperative, DATUM gives you the tools to move
                                with confidence.
                            </p>
                        </Reveal>
                    </div>

                    {/* Tabs */}
                    <Reveal delay={300}>
                        <div role="tablist" className="flex flex-wrap gap-3">
                            {ROLE_KEYS.map((key) => (
                                <button
                                    key={key}
                                    type="button"
                                    role="tab"
                                    aria-selected={active === key}
                                    onClick={() => setActive(key)}
                                    className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
                                        active === key
                                            ? "bg-[#183765] border-[#183765] text-white"
                                            : "border-gray-400 text-gray-600 hover:border-[#183765] hover:text-[#183765]"
                                    }`}
                                >
                                    {ROLES[key].label}
                                </button>
                            ))}
                        </div>
                    </Reveal>

                    {/* Panel */}
                    <Reveal delay={450}>
                        <div role="tabpanel" className="flex flex-col gap-4">
                            <Reveal key={`${active}-info`} delay={150} className="flex flex-col gap-4">
                                <h4 className="text-2xl font-bold text-[#2C7DA0]">{role.title}</h4>
                                <p className="text-[#111827] max-w-sm">{role.description}</p>
                            </Reveal>
                            <Reveal key={`${active}-features`} delay={300}>
                                <ul className="flex flex-col gap-4">
                                    {role.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 font-medium">
                                            <CircleCheck className="size-6 text-emerald-500 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </Reveal>
                        </div>
                    </Reveal>
                </div>

                {/* Right column: phone mockup */}
                <Reveal direction="left" delay={200} className="flex justify-center min-w-0">
                    <Reveal key={active} direction="up" className="relative isolate w-full flex justify-center">
                        {/* Glow: sized relative to the image, so it moves and scales with it */}
                        <div
                            aria-hidden
                            className="pointer-events-none absolute inset-[-15%] -z-10"
                            style={{
                                background:
                                    "radial-gradient(closest-side, rgba(173, 212, 255, 0.6), transparent)",
                            }}
                        />
                        <img
                            src={role.image}
                            alt={`${role.label} view of the DATUM app`}
                            className="w-full max-w-md lg:max-w-none h-auto lg:scale-110"
                        />
                    </Reveal>
                </Reveal>
            </div>
        </section>
    );
}