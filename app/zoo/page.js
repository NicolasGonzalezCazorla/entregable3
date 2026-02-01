"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import Header from "../Header";

export default function HomePage() {
  const trackRef = useRef(null);
  const itemRefs = useRef([]);
  const rafRef = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const animals = useMemo(
    () => [
      { src: "/Leopardos.png", alt: "Leopardos" },
      { src: "/hipopotamo.jpg", alt: "Hipopotamo" },
      { src: "/panda.jpg", alt: "Panda" },
      { src: "/leon.jpg", alt: "León" },
    ],
    []
  );

  const updateActiveFromScroll = () => {
    const el = trackRef.current;
    if (!el) return;

    const centerX = el.scrollLeft + el.clientWidth / 2;

    let bestIdx = 0;
    let bestDist = Infinity;

    itemRefs.current.forEach((node, idx) => {
      if (!node) return;
      const itemCenter = node.offsetLeft + node.clientWidth / 2;
      const dist = Math.abs(centerX - itemCenter);
      if (dist < bestDist) {
        bestDist = dist;
        bestIdx = idx;
      }
    });

    setActiveIndex(bestIdx);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    updateActiveFromScroll();

    const onScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(updateActiveFromScroll);
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      el.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToIndex = (idx) => {
    const el = trackRef.current;
    const node = itemRefs.current[idx];
    if (!el || !node) return;

    const left =
      node.offsetLeft - (el.clientWidth / 2 - node.clientWidth / 2);

    el.scrollTo({ left, behavior: "smooth" });
  };

  const goPrev = () => scrollToIndex(Math.max(0, activeIndex - 1));
  const goNext = () => scrollToIndex(Math.min(animals.length - 1, activeIndex + 1));

  return (
    <div className="min-h-screen bg-[#EEF2EA]">
      <Header />

      <section className="relative w-full pt-20">
        <div className="relative w-full h-[280px] sm:h-[380px] md:h-[440px] overflow-hidden">
          <video
            src="/GirafaLanding.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 sm:px-6 py-10 space-y-14">
        <section className="bg-[#EEF2EA]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-sm font-extrabold tracking-wide text-gray-800 uppercase">
                Mapa
              </h2>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed max-w-prose">
                Explora cada rincón de nuestro parque: desde la sabana africana
                hasta la selva tropical. ¡Encuentra fácilmente tus animales
                favoritos!
              </p>
            </div>

            <div className="w-full flex md:justify-end">
              <div className="w-full md:w-[360px] rounded-md overflow-hidden border border-black/10 bg-white">
                <img
                  src="/mapa.png"
                  alt="Mapa del zoo"
                  className="w-full h-[150px] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-md bg-[#E8EEDF] border border-black/10 py-10">
          <div className="text-center px-4">
            <h2 className="text-sm font-extrabold tracking-wide text-gray-800">
              Conoce a nuestros animales
            </h2>
            <p className="mt-2 text-[12px] text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Explora las increíbles especies que viven con nosotros y descubre
              datos fascinantes sobre su vida y conservación.
            </p>
          </div>

          <div className="relative mt-8 px-4 sm:px-6">
            <button
              onClick={goPrev}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white border border-black/10 shadow"
              aria-label="Anterior"
              type="button"
            >
              {"<"}
            </button>

            <div
              ref={trackRef}
              className="flex items-center gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-6
                         [scrollbar-width:none] [-ms-overflow-style:none]"
            >
              {animals.map((a, idx) => {
                const isCenter = idx === activeIndex;

                return (
                  <article
                    key={idx}
                    ref={(node) => (itemRefs.current[idx] = node)}
                    className={[
                      "snap-center shrink-0 transition-all duration-300",
                      isCenter
                        ? "w-[300px] sm:w-[380px] md:w-[460px] -mt-6 z-10"
                        : "w-[220px] sm:w-[260px] md:w-[320px] opacity-80",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "rounded-md overflow-hidden border border-black/10 bg-white transition-shadow duration-300",
                        isCenter ? "shadow-2xl" : "shadow",
                      ].join(" ")}
                    >
                      <img
                        src={a.src}
                        alt={a.alt}
                        className={[
                          "w-full object-cover transition-all duration-300",
                          isCenter
                            ? "h-[200px] sm:h-[230px] md:h-[260px]"
                            : "h-[160px] sm:h-[180px] md:h-[200px]",
                        ].join(" ")}
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            <button
              onClick={goNext}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-white border border-black/10 shadow"
              aria-label="Siguiente"
              type="button"
            >
              {">"}
            </button>
          </div>
        </section>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-full">
              <div className="rounded-md overflow-hidden border border-black/10 bg-white">
                <img
                  src="/actividades.png"
                  alt="Actividades"
                  className="w-full h-[180px] object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-sm font-extrabold tracking-wide text-gray-800 uppercase">
                Actividades
              </h2>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed">
                Talleres educativos, alimentación de animales, recorridos guiados
                y más. ¡Vive una aventura salvaje!
              </p>

              <div className="mt-6 h-px w-full bg-black/20" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
