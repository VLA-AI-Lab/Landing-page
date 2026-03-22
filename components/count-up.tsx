'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface CountUpProps {
  /** The raw stat string, e.g. "15+", "12M+", "4" */
  value: string;
  /** Animation duration in ms */
  duration?: number;
  className?: string;
}

/**
 * Extracts the numeric part from a stat string and preserves the suffix.
 * "15+"  → { num: 15, suffix: "+" }
 * "12M+" → { num: 12, suffix: "M+" }
 * "4"    → { num: 4, suffix: "" }
 */
function parseStat(raw: string): { num: number; suffix: string } {
  const match = raw.match(/^(\d+(?:\.\d+)?)(.*)/);
  if (!match) return { num: 0, suffix: raw };
  return { num: parseFloat(match[1]), suffix: match[2] };
}

export function CountUp({ value, duration = 2000, className }: CountUpProps) {
  const { num: target, suffix } = parseStat(value);
  const [current, setCurrent] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Observe intersection
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasStarted]);

  // Animate count
  const animateCount = useCallback(() => {
    if (!hasStarted) return;
    const startTime = performance.now();
    const isFloat = !Number.isInteger(target);

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;

      setCurrent(isFloat ? parseFloat(val.toFixed(1)) : Math.round(val));

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    }

    requestAnimationFrame(tick);
  }, [hasStarted, target, duration]);

  useEffect(() => {
    animateCount();
  }, [animateCount]);

  return (
    <span ref={ref} className={className}>
      {current}
      {suffix}
    </span>
  );
}
