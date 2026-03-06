"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView } from "framer-motion";

interface AnimateOnScrollProps {
    children: ReactNode;
    className?: string;
    delay?: number;
    /** Direction animation override */
    animation?: "default" | "slide-left" | "slide-right" | "scale" | "blur";
    /** HTML element to render as */
    as?: "div" | "section" | "a" | "span" | "header" | "article";
    style?: React.CSSProperties;
    /** Stagger children automatically */
    stagger?: boolean;
}

const variants = {
    default: {
        hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
        visible: { opacity: 1, y: 0, filter: "blur(0px)" },
    },
    "slide-left": {
        hidden: { opacity: 0, x: -60 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: 60 },
        visible: { opacity: 1, x: 0 },
    },
    scale: {
        hidden: { opacity: 0, scale: 0.85, filter: "blur(10px)" },
        visible: { opacity: 1, scale: 1, filter: "blur(0px)" },
    },
    blur: {
        hidden: { opacity: 0, filter: "blur(20px)" },
        visible: { opacity: 1, filter: "blur(0px)" },
    },
};

const motionComponents: Record<string, any> = {
    div: motion.div,
    section: motion.section,
    a: motion.a,
    span: motion.span,
    header: motion.header,
    article: motion.article,
};

export default function AnimateOnScroll({
    children,
    className = "",
    delay = 0,
    animation = "default",
    as = "div",
    style,
    stagger = false,
}: AnimateOnScrollProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -8% 0px" });

    const selectedVariant = variants[animation];
    const Component = motionComponents[as] || motion.div;

    return (
        <Component
            ref={ref}
            className={className}
            style={style}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={selectedVariant}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.25, 0.8, 0.25, 1],
                ...(stagger ? { staggerChildren: 0.1 } : {}),
            }}
        >
            {children}
        </Component>
    );
}

/* Wrap individual children to stagger them inside a parent AnimateOnScroll */
export function StaggerChild({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)" },
            }}
            transition={{ duration: 0.6, ease: [0.25, 0.8, 0.25, 1] }}
        >
            {children}
        </motion.div>
    );
}
