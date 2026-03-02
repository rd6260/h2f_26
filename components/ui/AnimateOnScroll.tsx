"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
    children: ReactNode;
    /** Extra classes passed to the wrapper */
    className?: string;
    /** Animation delay class, e.g. "delay-100" */
    delay?: string;
    /** Direction animation override */
    animation?: "default" | "slide-left" | "slide-right";
    /** HTML element to render as */
    as?: keyof HTMLElementTagNameMap;
    /** Inline style */
    style?: React.CSSProperties;
}

export default function AnimateOnScroll({
    children,
    className = "",
    delay = "",
    animation = "default",
    as: Tag = "div",
    style,
}: AnimateOnScrollProps) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1, rootMargin: "0px 0px -5% 0px" }
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    const dataAnim =
        animation !== "default" ? { "data-anim": animation } : undefined;

    // We need to use createElement since Tag is dynamic
    const Component = Tag as React.ElementType;

    return (
        <Component
            ref={ref}
            className={`animate-on-scroll ${delay} ${className}`.trim()}
            style={style}
            {...dataAnim}
        >
            {children}
        </Component>
    );
}
