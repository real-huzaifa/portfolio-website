import { useEffect, useRef } from "react";

const useP3ScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("p3-revealed");
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const el = ref.current;
    if (el) {
      const els = el.querySelectorAll(
        ".p3-reveal, .p3-reveal-right, .p3-reveal-up, .p3-reveal-scale"
      );
      els.forEach((child) => observer.observe(child));
    }

    return () => observer.disconnect();
  }, []);

  return ref;
};

export default useP3ScrollReveal;
