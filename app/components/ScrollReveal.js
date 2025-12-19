"use client";

import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // Intersection observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            // stop observing once revealed to avoid toggling
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    // observe elements that haven't been observed yet
    const observeAll = () => {
      const els = Array.from(document.querySelectorAll('.reveal:not([data-reveal-observed])'));
      els.forEach((el) => {
        el.setAttribute('data-reveal-observed', '1');
        observer.observe(el);
      });
    };

    // initial pass
    observeAll();

    // watch for DOM changes (route transitions, lazy-rendered components)
    const mo = new MutationObserver(() => {
      observeAll();
    });
    mo.observe(document.body, { childList: true, subtree: true });

    // also attempt a late check on load/resize in case some children render after mount
    const onWindowEvent = () => observeAll();
    window.addEventListener('resize', onWindowEvent);
    window.addEventListener('load', onWindowEvent);

    return () => {
      observer.disconnect();
      mo.disconnect();
      window.removeEventListener('resize', onWindowEvent);
      window.removeEventListener('load', onWindowEvent);
    };
  }, []);

  return null;
}
