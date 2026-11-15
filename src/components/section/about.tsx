import Reveal from "../reveal/reveal";

export default function About() {
    return (
        <section
        className="min-h-screen flex flex-col gap-8 justify-center items-center px-6 md:px-12 lg:px-24 py-16"
        id="about"
        >
        <Reveal className="flex flex-col gap-4 text-center max-w-3xl">
            <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#183765] font-extrabold leading-tight">
            Built around the way Marinduque moves.
            </h3>
            <Reveal delay={150}>
            <p className="text-base md:text-lg text-[#243A5A] leading-relaxed">
                DATUM is a multi-platform transport booking system made for the
                Luzon Datum Transport Service Cooperative, bringing passengers,
                drivers, and administrators together in one seamless digital
                experience.
            </p>
            </Reveal>
        </Reveal>

        <Reveal
            delay={200}
            className="flex flex-col md:flex-row gap-6 w-full max-w-5xl justify-center"
        >
            <Reveal className="flex flex-col gap-4 text-center w-full border border-[#183765] rounded-2xl p-6 md:p-8 shadow-sm">
            <h2 className="self-center rounded-full bg-[#d1e1fa] px-6 py-2 text-lg md:text-xl text-[#183765] font-bold">
                Our Mission
            </h2>
            <h3 className="text-base md:text-lg text-[#183765] font-bold">
                Simplifying Transport Booking and Management
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
                To make travel easier for passengers, drivers, and the cooperative
                through a single digital platform that streamlines trip booking,
                padala (parcel) delivery, van hire, and the handling of schedules,
                driver applications, and member records.
            </p>
            </Reveal>

            <Reveal
            delay={250}
            className="flex flex-col gap-4 text-center w-full border border-[#183765] rounded-2xl p-6 md:p-8 shadow-sm"
            >
            <h2 className="self-center rounded-full bg-[#d1e1fa] px-6 py-2 text-lg md:text-xl text-[#183765] font-bold">
                Our Vision
            </h2>
            <h3 className="text-base md:text-lg text-[#183765] font-bold">
                Moving Communities Forward Together
            </h3>
            <p className="text-base text-gray-600 leading-relaxed">
                To help build a transport service that is dependable, transparent,
                and within reach of every commuter, where journeys between
                Marinduque and mainland Luzon are easier to arrange, operations run
                smoothly, and reliable records support the cooperative's growth.
            </p>
            </Reveal>
        </Reveal>
        </section>
    );
}
