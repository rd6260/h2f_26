import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

/* ─── Nav-AI Visualization ─── */
function NavAIVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
            <div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000 ease-[cubic-bezier(0.25,1,0.5,1)]">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-emerald-500/30 animate-[spin_10s_linear_infinite]" />
                    <div className="absolute w-40 h-40 rounded-full border border-dashed border-emerald-500/20 animate-[spin_15s_linear_infinite_reverse]" />
                    <div className="absolute w-56 h-56 rounded-full border border-emerald-500/10 border-t-emerald-500/40 animate-[spin_20s_linear_infinite]" />
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse top-1/2 -translate-y-1/2 rotate-45" />
                    <div className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent animate-pulse top-1/2 -translate-y-1/2 -rotate-45" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full shadow-[0_0_15px_rgba(52,211,153,0.8)] animate-ping" />
                </div>
                <div className="absolute top-10 right-20 text-[8px] font-mono text-emerald-500/60 rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Processing...
                </div>
                <div className="absolute bottom-10 left-20 text-[8px] font-mono text-emerald-500/60 -rotate-12 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Target Lock
                </div>
            </div>
        </div>
    );
}

/* ─── Aegis Hull Visualization ─── */
function AegisVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
            <div className="relative w-[260px] h-[260px] group-hover:scale-105 transition-transform duration-1000">
                <svg
                    className="absolute inset-0 w-full h-full text-blue-500 animate-[spin_30s_linear_infinite]"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <path
                        d="M50 5 L89 27.5 V72.5 L50 95 L11 72.5 V27.5 Z"
                        stroke="currentColor"
                        strokeWidth="0.2"
                        strokeDasharray="2 2"
                        className="opacity-30"
                    />
                    <path
                        d="M50 15 L80.3 32.5 V67.5 L50 85 L19.7 67.5 V32.5 Z"
                        stroke="currentColor"
                        strokeWidth="0.3"
                        className="opacity-50"
                    />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 border-[0.5px] border-blue-400/30 rotate-45 animate-[spin_8s_linear_infinite]" />
                    <div className="absolute w-32 h-32 border-[0.5px] border-blue-400/30 -rotate-45 animate-[spin_8s_linear_infinite_reverse]" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/0 via-blue-500/10 to-blue-500/0 animate-[shimmerMove_3s_ease-in-out_infinite] opacity-50 skew-y-12" />
            </div>
        </div>
    );
}

/* ─── Fusion Drive Visualization ─── */
function FusionVis() {
    return (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
            <div className="relative w-[300px] h-[300px] group-hover:scale-110 transition-transform duration-1000">
                <svg
                    className="absolute inset-0 w-full h-full text-purple-500 animate-[spin_10s_linear_infinite]"
                    viewBox="0 0 100 100"
                    fill="none"
                >
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" transform="rotate(60 50 50)" />
                    <ellipse cx="50" cy="50" rx="45" ry="15" stroke="currentColor" strokeWidth="0.3" className="opacity-40" transform="rotate(120 50 50)" />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-purple-500/10 blur-xl animate-pulse" />
                    <div className="w-8 h-8 rounded-full bg-purple-400/20 blur-md animate-ping" />
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_20px_rgb(168,85,247)]" />
                </div>
                <div className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 border border-dashed border-purple-500/20 rounded-full animate-[spin_4s_linear_infinite]" />
            </div>
        </div>
    );
}

interface SystemCardProps {
    icon: string;
    colorName: "emerald" | "blue" | "purple";
    status: string;
    title: string;
    description: string;
    visualization: React.ReactNode;
    delay: string;
}

function SystemCard({
    icon,
    colorName,
    status,
    title,
    description,
    visualization,
    delay,
}: SystemCardProps) {
    const colorMap = {
        emerald: {
            gradientFrom: "from-emerald-500/5",
            iconHoverBg: "group-hover:bg-emerald-500/10",
            iconHoverBorder: "group-hover:border-emerald-500/20",
            textColor: "text-emerald-400",
            dotColor: "bg-emerald-500",
            dotShadow: "shadow-[0_0_10px_rgb(16,185,129)]",
            barColor: "bg-emerald-500",
            hoverText: "group-hover:text-emerald-50",
        },
        blue: {
            gradientFrom: "from-blue-500/5",
            iconHoverBg: "group-hover:bg-blue-500/10",
            iconHoverBorder: "group-hover:border-blue-500/20",
            textColor: "text-blue-400",
            dotColor: "bg-blue-500",
            dotShadow: "shadow-[0_0_10px_rgb(59,130,246)]",
            barColor: "bg-blue-500",
            hoverText: "group-hover:text-blue-50",
        },
        purple: {
            gradientFrom: "from-purple-500/5",
            iconHoverBg: "group-hover:bg-purple-500/10",
            iconHoverBorder: "group-hover:border-purple-500/20",
            textColor: "text-purple-400",
            dotColor: "bg-purple-500",
            dotShadow: "shadow-[0_0_10px_rgb(168,85,247)]",
            barColor: "bg-purple-500",
            hoverText: "group-hover:text-purple-50",
        },
    };

    const c = colorMap[colorName];

    return (
        <AnimateOnScroll
            delay={delay}
            className="group relative h-[500px] bg-neutral-900/40 border border-white/10 rounded-3xl p-8 overflow-hidden hover:bg-neutral-900/60 transition-all duration-500 hover:border-white/20 backdrop-blur-sm"
        >
            {/* Background Gradient */}
            <div
                className={`absolute inset-0 bg-gradient-to-b ${c.gradientFrom} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
            />

            {/* Icon */}
            <div
                className={`relative z-10 w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto ${c.textColor} group-hover:scale-110 ${c.iconHoverBg} ${c.iconHoverBorder} transition-all duration-500`}
            >
                {/* @ts-expect-error iconify-icon is a web component */}
                <iconify-icon icon={icon} className="text-2xl" />
            </div>

            {/* Visualization */}
            {visualization}

            {/* Content */}
            <div className="relative z-10 mt-auto pt-32">
                <div className="flex items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                    <span
                        className={`w-1.5 h-1.5 rounded-full ${c.dotColor} ${c.dotShadow} animate-pulse`}
                    />
                    <span
                        className={`text-[10px] font-mono uppercase tracking-widest ${c.textColor}`}
                    >
                        {status}
                    </span>
                </div>
                <h3
                    className={`text-3xl text-white font-bricolage mb-3 tracking-tight ${c.hoverText} transition-colors`}
                >
                    {title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed group-hover:text-white/60 transition-colors">
                    {description}
                </p>

                {/* Progress Line */}
                <div className="w-full bg-white/5 h-[2px] mt-6 relative overflow-hidden rounded-full">
                    <div
                        className={`absolute inset-0 ${c.barColor} w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 ease-out`}
                    />
                </div>
            </div>
        </AnimateOnScroll>
    );
}

export default function CoreSystemsSection() {
    return (
        <section
            id="systems"
            className="py-32 bg-black relative overflow-hidden border-t border-white/5"
        >
            <div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
                {/* Header */}
                <AnimateOnScroll className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-[1px] bg-white/20" />
                            <span className="text-xs font-mono uppercase tracking-widest text-white/50">
                                System Architecture
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bricolage text-white mb-6 tracking-tighter leading-none">
                            Core Systems
                        </h2>
                        <p className="text-lg text-white/50 font-light leading-relaxed max-w-lg">
                            Proprietary technology engineered for zero-tolerance environments.
                            The infrastructure that powers the void.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="group flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:bg-neutral-200 transition-all mt-8 md:mt-0"
                    >
                        <span>View Schematics</span>
                        {/* @ts-expect-error iconify-icon is a web component */}
                        <iconify-icon
                            icon="solar:arrow-right-linear"
                            className="group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                </AnimateOnScroll>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
                    <SystemCard
                        icon="solar:cpu-bolt-linear"
                        colorName="emerald"
                        status="Online"
                        title="Nav-AI Core"
                        description="Quantum probabilistic navigation calculating FTL-adjacent travel vectors in real-time."
                        visualization={<NavAIVis />}
                        delay="delay-100"
                    />
                    <SystemCard
                        icon="solar:shield-star-linear"
                        colorName="blue"
                        status="Integrity 100%"
                        title="Aegis Hull"
                        description="Self-healing nanomaterial composite with active radiation dampening fields."
                        visualization={<AegisVis />}
                        delay="delay-200"
                    />
                    <SystemCard
                        icon="solar:atom-linear"
                        colorName="purple"
                        status="Stable"
                        title="Fusion Drive"
                        description="Compact magnetic confinement fusion delivering continuous 3.5g thrust."
                        visualization={<FusionVis />}
                        delay="delay-300"
                    />
                </div>
            </div>
        </section>
    );
}
