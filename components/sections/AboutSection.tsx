"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

function Word({ children, progress, range }: { children: string, progress: MotionValue<number>, range: [number, number] }) {
    const opacity = useTransform(progress, range, [0.3, 1]);
    return (
        <span className="relative">
            <motion.span style={{}} className="text-white">{children}</motion.span>
        </span>
    );
}

function ScrollRevealText({ text }: { text: string }) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.4"]
    });

    const words = text.split(" ");

    return (
        <p ref={ref} className="text-lg mb-8 leading-relaxed font-light flex flex-wrap gap-x-1.5">
            {words.map((word, i) => {
                const start = i / words.length;
                const end = start + (1 / words.length);
                return (
                    <Word key={i} progress={scrollYProgress} range={[start, end]}>{word}</Word>
                )
            })}
        </p>
    )
}

export default function AboutSection() {
    return (
        <section
            className="py-24 bg-black text-white relative overflow-hidden"
            id="about"
        >
            {/* Dot pattern bg */}
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center">
                <AnimateOnScroll className="w-full text-center flex flex-col items-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <motion.span
                            className="w-8 h-[2px] bg-gradient-to-r from-amber-500 to-amber-300 block"
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                        <span className="text-amber-400/80 font-mono text-xs uppercase tracking-[0.25em]">
                            About Us
                        </span>
                        <motion.span
                            className="w-8 h-[2px] bg-gradient-to-l from-amber-500 to-amber-300 block"
                            initial={{ width: 0 }}
                            whileInView={{ width: 32 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                            viewport={{ once: true }}
                        />
                    </div>
                </AnimateOnScroll>

                <AnimateOnScroll delay={0.1}>
                    <h2 className="text-4xl md:text-6xl font-bricolage font-semibold mb-10 leading-tight text-center">
                        About Hack2Future{" "}
                        {/* <span className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 bg-clip-text text-transparent italic ml-2 pr-2">
                            2.0
                        </span> */}
                    </h2>
                </AnimateOnScroll>

                <div className="max-w-4xl text-center mx-auto">
                    <ScrollRevealText text="IIIT Dharwad, established in 2015 as an Institute of National Importance under a Public-Private Partnership between the Ministry of Education, Government of Karnataka, and Keonics, aims to bridge the high-end IT skill gap and support India’s global leadership in the sector. It offers BTech programs in CSE, ECE, and DSAI, emphasizing IT solutions for India’s social challenges. With a semi-modern campus, a stately logo, and a strategic location in the Hubballi-Dharwad education hub with growing connectivity to Bengaluru the institute is poised to make a strong impact on the Indian IT industry, academic research, and the North Karnataka region." />
                </div>

                {/* Image */}
                {/* <AnimateOnScroll
                    delay={0.2}
                    animation="scale"
                    className="relative lg:h-[700px] w-full group h-[400px] md:h-[600px] flex items-center justify-center mt-12"
                >
                    <Image
                        src="/earth.png"
                        alt="Hack2Future Earth Graphic"
                        width={800}
                        height={800}
                        className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                </AnimateOnScroll> */}
            </div>
        </section>
    );
}
