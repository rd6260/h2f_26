"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScrollProvider({
    children,
}: {
    children: ReactNode;
}) {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.1,
                smoothWheel: true,
                wheelMultiplier: 1,
                touchMultiplier: 1.5,
            }}
        >
            {children}
        </ReactLenis>
    );
}
