import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const TIMELINE_EVENTS = [
    {
        year: "2030",
        shortYear: "30",
        title: "Foundation",
        description:
            "The coalition is formed in the ruins of the old world, uniting fragmented space agencies.",
        titleSide: "right" as const,
    },
    {
        year: "2042",
        shortYear: "42",
        title: "First Light",
        description:
            "The Ares Heavy prototype breaks atmosphere, carrying the first permanent orbital modules.",
        titleSide: "left" as const,
    },
    {
        year: "2055",
        shortYear: "55",
        title: "Mars Colony",
        description:
            "Self-sustaining habitats established in Cydonia. The first off-world generation is born.",
        titleSide: "right" as const,
    },
];

export default function TimelineSection() {
    return (
        <section
            id="timeline"
            className="py-32 bg-neutral-950 relative overflow-hidden border-t border-white/5"
        >
            {/* Dot grid bg */}
            <div
                className="absolute inset-0 z-0 opacity-20"
                style={{
                    backgroundImage:
                        "radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <AnimateOnScroll className="text-center mb-24">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        Chronology
                    </span>
                    <h2 className="text-5xl md:text-7xl font-bricolage text-white mt-4 font-semibold tracking-tight">
                        The Ascent
                    </h2>
                </AnimateOnScroll>

                <div className="relative">
                    {TIMELINE_EVENTS.map((event, i) => (
                        <div
                            key={event.year}
                            className={`flex flex-col md:flex-row items-center justify-between group ${i < TIMELINE_EVENTS.length - 1 ? "mb-24" : ""
                                }`}
                        >
                            {/* Left content area */}
                            <AnimateOnScroll
                                className={`w-full md:w-5/12 ${event.titleSide === "right"
                                        ? "pr-0 md:pr-12 order-2 md:order-1 text-center md:text-right"
                                        : "text-right pr-0 md:pr-12 order-2 md:order-1"
                                    }`}
                                animation="slide-right"
                            >
                                {event.titleSide === "right" ? (
                                    <>
                                        <h3 className="text-3xl text-white font-bricolage">
                                            {event.title}
                                        </h3>
                                        <p className="text-white/40 mt-2 font-light">
                                            {event.description}
                                        </p>
                                    </>
                                ) : (
                                    <span className="text-8xl font-bricolage text-white/5 font-bold absolute right-6 md:right-12 -translate-y-12 select-none pointer-events-none">
                                        {event.year}
                                    </span>
                                )}
                            </AnimateOnScroll>

                            {/* Center dot */}
                            <div className="w-12 h-12 rounded-full bg-neutral-900 border border-white/20 z-10 flex items-center justify-center text-white shadow-[0_0_20px_rgba(255,255,255,0.1)] order-1 md:order-2 mb-6 md:mb-0 relative">
                                <span className="font-mono text-xs">{event.shortYear}</span>
                            </div>

                            {/* Right content area */}
                            <AnimateOnScroll
                                className={`w-full md:w-5/12 pl-0 md:pl-12 order-3 ${event.titleSide === "left"
                                        ? "text-center md:text-left"
                                        : ""
                                    }`}
                                animation="slide-left"
                            >
                                {event.titleSide === "left" ? (
                                    <>
                                        <h3 className="text-3xl text-white font-bricolage">
                                            {event.title}
                                        </h3>
                                        <p className="text-white/40 mt-2 font-light">
                                            {event.description}
                                        </p>
                                    </>
                                ) : (
                                    <span className="text-8xl font-bricolage text-white/5 font-bold absolute -translate-y-12 select-none pointer-events-none">
                                        {event.year}
                                    </span>
                                )}
                            </AnimateOnScroll>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
