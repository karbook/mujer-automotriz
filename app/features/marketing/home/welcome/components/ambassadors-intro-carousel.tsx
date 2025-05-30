"use client";

import { useRef, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { ambassadors } from "../constants";
import type { CarouselApi } from "@/components/ui/carousel";
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export function AmbassadorsIntroCarousel() {
  const { t } = useTranslation();
  const emblaApi = useRef<CarouselApi | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [disabledLinks, setDisabledLinks] = useState<{ [key: string]: boolean }>({});

  const autoScrollOptions: Partial<AutoScrollOptionsType> = {
    speed: 1.5,
    stopOnInteraction: false,
    direction: "forward",
  };

  const handleClick = (slug: string) => {
    setDisabledLinks((prev) => ({ ...prev, [slug]: true }));
    setTimeout(() => {
      setDisabledLinks((prev) => ({ ...prev, [slug]: false }));
    }, 3000);
  };

  return (
    <section className="w-full pt-6 sm:pt-10 pb-0 px-4 sm:px-6 lg:px-10 bg-white dark:bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto text-left relative">
        <header className="top-0 z-10 bg-white dark:bg-black py-2 sm:py-0 w-full">
          <div className="text-center px-4">
            <h1
              className="text-xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1d76db] via-[#c33acb] to-[#ea5c35] opacity-90 drop-shadow-xl animate-fadeIn"
              style={{ fontFamily: "var(--font-inter), var(--font-poppins)" }}
            >
              {t("Transforming the Automotive Industry in Mexico and Latin America towards greater diversity")}
            </h1>
            <div className="h-0.5 sm:h-1 w-16 sm:w-24 mx-auto bg-gradient-to-r from-[#2b8bf8] via-[#e14ecf] to-[#f57b4f] animate-pulse mt-1 sm:mt-2" />
          </div>
        </header>
        <div className="relative w-full max-w-8xl mx-auto mt-4 sm:mt-8">
          <Carousel
            className="w-full relative"
            setApi={(api) => {
              emblaApi.current = api;
              if (!isReady) setIsReady(true);
            }}
            opts={{ loop: true }}
            autoScroll={true} 
            autoScrollOptions={autoScrollOptions}
          >
            <CarouselContent className="-ml-2 sm:-ml-4 opacity-0 transition-opacity duration-500" 
              style={{ opacity: isReady ? 1 : 0 }}
            >
              {ambassadors.map((ambassador, index) => (
                <CarouselItem key={index} className="basis-[55%] sm:basis-1/3 md:basis-1/4 p-2 sm:p-4">
                  <Link
                    to={`/information/${ambassador.slug}`}
                    onClick={() => handleClick(ambassador.slug)}
                    style={{ pointerEvents: disabledLinks[ambassador.slug] ? "none" : "auto" }}
                  >
                    <div className="flex flex-col bg-black dark:bg-white text-white dark:text-black rounded-xl sm:rounded-2xl overflow-hidden shadow-md h-[300px] sm:h-160 mx-auto max-w-[170px] sm:max-w-none">
                      <div className="relative w-full aspect-[3/4] overflow-hidden sm:aspect-[3/4]">
                        <img
                          src={ambassador.icon}
                          alt={t(ambassador.title)}
                          className="w-full h-full rounded-lg object-cover mx-auto"
                        />
                        <div className="absolute bottom-2 right-2 bg-white rounded-full w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center overflow-hidden">
                          <img
                            src={ambassador.company_icon}
                            alt="company"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="p-2 sm:p-4 flex flex-col gap-1">
                        <h3 className="text-sm sm:text-3xl font-bold leading-tight" style={{ fontFamily: "var(--font-poppins)" }}>
                          {t(ambassador.title)}
                        </h3>
                        <p className="text-xs sm:text-lg" style={{ fontFamily: "var(--font-inter)" }}>
                          {t(ambassador.description)}
                        </p>
                        <p className="text-xs sm:text-xl font-semibold" style={{ fontFamily: "var(--font-poppins)" }}>
                          {t(ambassador.company)}
                        </p>
                        <div className="flex-grow"/>
                        <div className="flex justify-end text-xs sm:text-xl font-semibold dark:text-black font-semibold text-white/80">
                          {t(ambassador.nationality)}
                        </div>
                      </div>
                    </div>
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
