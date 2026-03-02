"use client";

import { useRef, useEffect, useState } from "react";
import { useInView, motion, useSpring, useTransform, type MotionValue } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    suffix?: string;
    prefix?: string;
    decimals?: number;
    className?: string;
    suffixClassName?: string;
    duration?: number;
}

function AnimatedDigit({ motionValue, decimals }: { motionValue: MotionValue<number>; decimals: number }) {
    const [displayVal, setDisplayVal] = useState(0);

    useEffect(() => {
        const unsubscribe = motionValue.on("change", (v) => {
            setDisplayVal(parseFloat(v.toFixed(decimals)));
        });
        return unsubscribe;
    }, [motionValue, decimals]);

    return <>{displayVal}</>;
}

export default function AnimatedCounter({
    value,
    suffix = "",
    prefix = "",
    decimals = 0,
    className = "",
    suffixClassName = "",
    duration = 2,
}: AnimatedCounterProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });

    const springValue = useSpring(0, {
        duration: duration * 1000,
        bounce: 0,
    });

    const display = useTransform(springValue, (v) => v);

    useEffect(() => {
        if (isInView) {
            springValue.set(value);
        }
    }, [isInView, value, springValue]);

    return (
        <motion.span ref={ref} className={className}>
            {prefix}
            <AnimatedDigit motionValue={display} decimals={decimals} />
            {suffix && <span className={suffixClassName}>{suffix}</span>}
        </motion.span>
    );
}
