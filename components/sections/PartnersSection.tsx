import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

const PARTNERS = ["NASA", "SpaceX", "BLUE", "ESA", "AXIOM", "JAXA"];

const STATS = [
    { value: "4.2", suffix: "%", label: "Market Growth" },
    { value: "128", suffix: "", label: "Active Missions" },
    { value: "2.0", suffix: "", label: "Failure Rate" },
    { value: "24", suffix: "/7", label: "Command Support" },
];

export default function PartnersSection() {
    return (
        <section className="bg-neutral-950 border-white/5 border-t pt-20 pb-20">
            <div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
                {/* Title */}
                <div className="text-center mb-12">
                    <span className="text-xs uppercase tracking-[0.2em] text-white/30">
                        Trusted By The Coalition
                    </span>
                </div>

                {/* Partner Logos */}
                <AnimateOnScroll
                    delay="delay-200"
                    className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500"
                >
                    {PARTNERS.map((name) => (
                        <div
                            key={name}
                            className="flex items-center justify-center h-12 text-white font-bricolage font-bold text-xl tracking-tighter"
                        >
                            {name}
                            {name === "NASA" && (
                                <span className="text-xs font-normal align-top ml-1 opacity-50">
                                    Adv
                                </span>
                            )}
                        </div>
                    ))}
                </AnimateOnScroll>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 border-t border-white/5 mt-20 pt-12 gap-x-8 gap-y-8">
                    {STATS.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl md:text-5xl font-bricolage text-white font-light mb-2">
                                <span>{stat.value}</span>
                                {stat.suffix && (
                                    <span className="text-lg text-emerald-500">
                                        {stat.suffix}
                                    </span>
                                )}
                            </div>
                            <div className="text-xs uppercase tracking-widest text-white/40">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
