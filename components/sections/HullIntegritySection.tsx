import Image from "next/image";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface BarSpec {
    height: string;
    duration: string;
    delay: string;
}

interface MaterialSpec {
    name: string;
    subtitle: string;
    icon: string;
    image: string;
    imageAlt: string;
    tier: string;
    specs: { icon: string; label: string; value: string }[];
    barLabel: [string, string];
    bars: BarSpec[];
    animDelay: string;
}

const MATERIALS: MaterialSpec[] = [
    {
        name: "Ceramic Shield",
        subtitle: "Thermal Class A",
        icon: "solar:layers-minimalistic-linear",
        image:
            "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/44d41d4e-32d5-4432-bf2b-95b01b1df21f_320w.webp",
        imageAlt: "Concrete Texture",
        tier: "Tier S",
        specs: [
            { icon: "solar:scale-linear", label: "Weight", value: "2800 kg/m³" },
            { icon: "solar:map-point-linear", label: "Origin", value: "Tuscany" },
            { icon: "solar:shield-check-linear", label: "Rating", value: "Class A1 Fire" },
        ],
        barLabel: ["Acoustic Damping", "Freq. Response"],
        bars: [
            { height: "40%", duration: "2.1s", delay: "-0.5s" },
            { height: "60%", duration: "1.8s", delay: "-1.2s" },
            { height: "80%", duration: "2.5s", delay: "-0.1s" },
            { height: "65%", duration: "1.9s", delay: "-2.3s" },
            { height: "50%", duration: "2.3s", delay: "-1.5s" },
            { height: "45%", duration: "1.6s", delay: "-0.8s" },
            { height: "60%", duration: "2.2s", delay: "-1.9s" },
            { height: "75%", duration: "1.7s", delay: "-0.3s" },
            { height: "90%", duration: "2.6s", delay: "-2.1s" },
            { height: "70%", duration: "2.0s", delay: "-0.9s" },
            { height: "55%", duration: "1.5s", delay: "-1.4s" },
            { height: "40%", duration: "2.4s", delay: "-0.6s" },
        ],
        animDelay: "0.25s",
    },
    {
        name: "Solar Array",
        subtitle: "Efficiency 48%",
        icon: "solar:tree-linear",
        image:
            "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a5122f84-43cb-4170-94c3-aded75f0d3ed_320w.webp",
        imageAlt: "Timber Texture",
        tier: "Tier A",
        specs: [
            { icon: "solar:clock-circle-linear", label: "Life", value: "100+ Years" },
            { icon: "solar:check-circle-linear", label: "Recycled", value: "95% Content" },
            { icon: "solar:umbrella-linear", label: "Coating", value: "Self-Healing" },
        ],
        barLabel: ["Reflectivity Index", "Solar Gain"],
        bars: [
            { height: "50%", duration: "2.2s", delay: "-0.3s" },
            { height: "52%", duration: "1.9s", delay: "-1.5s" },
            { height: "55%", duration: "2.4s", delay: "-0.7s" },
            { height: "58%", duration: "1.7s", delay: "-2.0s" },
            { height: "60%", duration: "2.5s", delay: "-0.4s" },
            { height: "60%", duration: "1.8s", delay: "-1.1s" },
            { height: "60%", duration: "2.1s", delay: "-0.9s" },
            { height: "58%", duration: "2.3s", delay: "-1.8s" },
            { height: "55%", duration: "1.6s", delay: "-0.2s" },
            { height: "52%", duration: "2.0s", delay: "-1.3s" },
            { height: "50%", duration: "1.9s", delay: "-0.6s" },
            { height: "48%", duration: "2.2s", delay: "-1.9s" },
        ],
        animDelay: "0.4s",
    },
    {
        name: "Graphene Weave",
        subtitle: "Tensile Strength S+",
        icon: "solar:atom-linear",
        image:
            "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7de1229a-6a54-423d-a41c-2377d871bf2c_320w.jpg",
        imageAlt: "Graphene Texture",
        tier: "Tier X",
        specs: [
            { icon: "solar:ruler-angular-linear", label: "Width", value: "1 Atom" },
            { icon: "solar:graph-up-linear", label: "Conductivity", value: "Super" },
            { icon: "solar:shield-warning-linear", label: "Grade", value: "Mil-Spec 5" },
        ],
        barLabel: ["Structural Integrity", "Mass Ratio"],
        bars: [
            { height: "90%", duration: "2.0s", delay: "-0.1s" },
            { height: "95%", duration: "2.3s", delay: "-1.2s" },
            { height: "92%", duration: "1.8s", delay: "-0.7s" },
            { height: "98%", duration: "2.5s", delay: "-2.0s" },
            { height: "100%", duration: "2.1s", delay: "-1.5s" },
            { height: "98%", duration: "1.9s", delay: "-0.3s" },
            { height: "96%", duration: "2.4s", delay: "-1.8s" },
            { height: "94%", duration: "1.7s", delay: "-0.9s" },
            { height: "92%", duration: "2.2s", delay: "-2.2s" },
            { height: "95%", duration: "2.0s", delay: "-0.5s" },
            { height: "98%", duration: "1.6s", delay: "-1.1s" },
            { height: "99%", duration: "2.5s", delay: "-1.9s" },
        ],
        animDelay: "0.55s",
    },
];

export default function HullIntegritySection() {
    return (
        <section
            className="bg-neutral-950 border-white/5 border-t pt-24 pr-6 pb-24 pl-6 relative"
            id="process"
        >
            {/* Section Number Watermark */}
            <div className="absolute top-12 right-6 md:right-12 z-0 opacity-10 font-bricolage font-bold text-[8rem] md:text-[10rem] leading-none text-white pointer-events-none select-none tracking-tighter">
                VOL. III
            </div>

            <div className="z-10 w-full max-w-5xl mr-auto ml-auto relative">
                {/* Header */}
                <AnimateOnScroll
                    className="text-center mb-16"
                    style={{
                        animation:
                            "fanSlideIn 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0.1s both",
                    }}
                >
                    <h3 className="text-3xl md:text-5xl font-bricolage font-light text-white mb-4 tracking-tight">
                        Hull Integrity
                    </h3>
                    <p className="text-white/50">
                        Composite shielding engineered for vacuum survival.
                    </p>
                </AnimateOnScroll>

                <div className="flex flex-col gap-4">
                    {MATERIALS.map((mat) => (
                        <AnimateOnScroll
                            key={mat.name}
                            className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-center p-4 md:p-6 bg-white/5 hover:bg-white/10 border border-white/5 rounded-2xl transition-all duration-300"
                            style={{
                                animation: `fanSlideIn 0.9s cubic-bezier(0.2, 0.8, 0.2, 1) ${mat.animDelay} both`,
                            }}
                        >
                            {/* Image & Name */}
                            <div className="col-span-1 md:col-span-4 flex items-center gap-6">
                                <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl overflow-hidden shrink-0 relative flex items-center justify-center">
                                    <Image
                                        src={mat.image}
                                        alt={mat.imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon
                                        icon={mat.icon}
                                        width="32"
                                        className="text-white/60 mb-1"
                                    />
                                    <h4 className="text-xl text-white font-bricolage font-light">
                                        {mat.name}
                                    </h4>
                                    <p className="text-xs text-white/40 mt-1 uppercase tracking-wider">
                                        {mat.subtitle}
                                    </p>
                                </div>
                            </div>

                            {/* Tech Specs */}
                            <div className="col-span-1 md:col-span-6 grid gap-y-4 gap-x-2 border-l border-white/10 pl-6 grid-cols-2 sm:grid-cols-3">
                                {mat.specs.map((spec) => (
                                    <div key={spec.label} className="flex flex-col gap-1">
                                        <div className="flex items-center gap-1.5 text-white/50 text-xs uppercase tracking-wide">
                                            {/* @ts-expect-error iconify-icon is a web component */}
                                            <iconify-icon icon={spec.icon} width="14" />
                                            {spec.label}
                                        </div>
                                        <span className="text-white text-sm">{spec.value}</span>
                                    </div>
                                ))}
                                {/* Equalizer bars */}
                                <div className="col-span-3 mt-2">
                                    <div className="flex items-center justify-between text-xs text-white/30 mb-1">
                                        <span>{mat.barLabel[0]}</span>
                                        <span>{mat.barLabel[1]}</span>
                                    </div>
                                    <div className="w-full h-8 flex items-end gap-0.5 opacity-50">
                                        {mat.bars.map((bar, j) => (
                                            <div
                                                key={j}
                                                className="w-1 bg-white rounded-t-sm bar-anim"
                                                style={{
                                                    height: bar.height,
                                                    animationDuration: bar.duration,
                                                    animationDelay: bar.delay,
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Tier & Action */}
                            <div className="col-span-1 md:col-span-2 flex items-center justify-between md:justify-end gap-6">
                                <span className="text-xl font-serif italic text-white">
                                    {mat.tier}
                                </span>
                                <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors group-hover:border-white">
                                    {/* @ts-expect-error iconify-icon is a web component */}
                                    <iconify-icon icon="solar:file-download-linear" width="18" />
                                </button>
                            </div>
                        </AnimateOnScroll>
                    ))}
                </div>
            </div>
        </section>
    );
}
