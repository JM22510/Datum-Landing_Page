import { TEAM } from "../../data/team";
import Reveal from "../../components/reveal/reveal";

export default function Team() {
    return (
        <section
            id="team"
            className="min-h-screen flex items-center"
            style={{
                backgroundColor: "#ECF4FA",
                backgroundImage:
                    "radial-gradient(ellipse 45% 55% at 50% 50%, rgba(173, 212, 255, 0.6), transparent)",
            }}
        >
            <div className="mx-auto w-full max-w-7xl px-6 lg:px-24 py-24 flex flex-col gap-12">
                {/* Heading */}
                <div className="flex flex-col items-center gap-4">
                    <Reveal>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-[#183765]">
                            The People Behind {" "}
                            <span className="text-[#2C7DA0]">DATUM.</span>
                        </h3>
                    </Reveal>
                    <Reveal delay={150}>
                        <p className="text-base text-[#243A5A] leading-relaxed tracking-widest max-w-xl text-center">
                            A dedicated team working together to build a more accessible, efficient, and reliable door-to-door transport experience.
                        </p>
                    </Reveal>
                </div>

                {/* Cards */}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-9">
                    {TEAM.map((member, index) => (
                        <li key={member.id}>
                            <Reveal delay={index * 120} className="h-full">
                                <article className="h-full flex flex-col rounded-2xl bg-white shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full aspect-square object-cover bg-slate-200"
                                    />
                                    <div className="flex flex-col gap-1 p-5 text-center">
                                        <h4 className="text-lg font-bold text-[#183765]">
                                            {member.name}
                                        </h4>
                                        <p className="text-sm text-[#2C7DA0] font-medium">
                                            {member.role}
                                        </p>
                                    </div>
                                </article>
                            </Reveal>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}