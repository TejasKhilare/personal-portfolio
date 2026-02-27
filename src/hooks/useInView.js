import { useEffect, useRef, useState } from "react";

export default function useInView() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setInView(true);
      },
      { threshold: 0.1 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}