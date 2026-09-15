"use client";
import { useEffect, useRef, ReactNode, ElementType } from "react";

type AnimType = "fade-up" | "fade-in" | "fade-left" | "fade-right" | "scale-in";

interface Props {
  children: ReactNode;
  type?: AnimType;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
}

export function AnimateIn({
  children,
  type = "fade-up",
  delay = 0,
  duration = 700,
  className,
  as: Tag = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transitionDuration = `${duration}ms`;
    el.style.transitionDelay = `${delay}ms`;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("in-view");
          observer.disconnect();
        }
      },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration]);

  return (
    <Tag ref={ref} data-animate={type} className={className}>
      {children}
    </Tag>
  );
}
