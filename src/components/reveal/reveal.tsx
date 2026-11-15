"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number; // milliseconds, used for staggering
    direction?: "up" | "down" | "left" | "right" | "none";
};

// Where the element starts before it appears
const HIDDEN_POSITION = {
    up: "translate-y-8",
    down: "-translate-y-8",
    left: "translate-x-8",
    right: "-translate-x-8",
    none: "",
};

export default function Reveal({
    children,
    className = "",
    delay = 0,
    direction = "up",
}: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // animate once, then stop watching
                }
            },
            { threshold: 0.15 } // fire when 15% of the element is on screen
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            style={{ transitionDelay: `${delay}ms` }}
            className={`transition-all duration-700 ease-out motion-reduce:transition-none ${
                visible
                    ? "opacity-100 translate-x-0 translate-y-0"
                    : `opacity-0 ${HIDDEN_POSITION[direction]}`
            } ${className}`}
        >
            {children}
        </div>
    );
}