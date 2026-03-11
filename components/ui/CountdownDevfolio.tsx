"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import siteConfig from "@/siteConfig";

/* ── Countdown hook ── */
function useCountdown(targetDate: string) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const target = new Date(targetDate).getTime();

        function calculate() {
            const now = Date.now();
            const diff = Math.max(0, target - now);

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }

        calculate();
        const id = setInterval(calculate, 1000);
        return () => clearInterval(id);
    }, [targetDate]);

    return timeLeft;
}

export default function CountdownDevfolio() {
    const { days, hours, minutes, seconds } = useCountdown(
        siteConfig.countdownTargetDate,
    );

    return (
        <div className="flex flex-col items-center gap-3">
            {/* Countdown */}
            <div className="flex flex-col items-center">
                <span className="text-white font-bold text-sm md:text-base tracking-wide">
                    Final Round In:
                </span>
                <div className="flex gap-5">
                    <div className="flex flex-col items-start">
                        <span className="countdown font-mono text-4xl text-white">
                            <span
                                style={{ "--value": days } as React.CSSProperties}
                                aria-live="polite"
                                aria-label={String(days)}
                            >
                                {String(days).padStart(2, "0")}
                            </span>
                        </span>
                        <span className="text-white/50 text-xs uppercase tracking-wider">days</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="countdown font-mono text-4xl text-white">
                            <span
                                style={{ "--value": hours } as React.CSSProperties}
                                aria-live="polite"
                                aria-label={String(hours)}
                            >
                                {String(hours).padStart(2, "0")}
                            </span>
                        </span>
                        <span className="text-white/50 text-xs uppercase tracking-wider">hours</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="countdown font-mono text-4xl text-white">
                            <span
                                style={{ "--value": minutes } as React.CSSProperties}
                                aria-live="polite"
                                aria-label={String(minutes)}
                            >
                                {String(minutes).padStart(2, "0")}
                            </span>
                        </span>
                        <span className="text-white/50 text-xs uppercase tracking-wider">minutes</span>
                    </div>
                    <div className="flex flex-col items-start">
                        <span className="countdown font-mono text-4xl text-white">
                            <span
                                style={{ "--value": seconds } as React.CSSProperties}
                                aria-live="polite"
                                aria-label={String(seconds)}
                            >
                                {String(seconds).padStart(2, "0")}
                            </span>
                        </span>
                        <span className="text-white/50 text-xs uppercase tracking-wider">sec</span>
                    </div>
                </div>
            </div>

            {/* Go to Devfolio button */}
            <a
                href="https://devfolio.co"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full px-8 py-3 rounded-lg bg-[#3770FF] hover:bg-[#2b5de0] transition-colors duration-200 text-white font-semibold text-base md:text-lg shadow-lg"
            >
                <Image
                    src="https://cdn.jsdelivr.net/gh/rd6260/h2f_26@main/public/logos/d.png"
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                />
                Go to Devfolio
            </a>
        </div>
    );
}
