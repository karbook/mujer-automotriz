"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import { useTranslation } from "react-i18next";
export function OrganizersSpotlight(){
  const{t}=useTranslation();
  const emblaApi = useRef<CarouselApi | null>(null);
  const autoScrollOptions: Partial<AutoScrollOptionsType> = {
    speed: 1.2,
    startDelay: 800,
    stopOnInteraction: true,
    direction: "forward",
  };

  const logos = [
    "./images/sponsors-corporate/irex-icon.png",
    "./images/sponsors-corporate/karbook-icon.png",
    "./images/sponsors-corporate/usa-departament.png",
    "./images/sponsors-corporate/usa-icon.png",
    "./images/sponsors-corporate/tedi-longlight.png",
    "./images/sponsors-corporate/ylai_square.png",

  ];

  const numRepetitions = 6;
  const repeatedLogos = Array(numRepetitions).fill([...logos]).flat();

  return (
    <>
      <section
        className="mt-16 sm:mt-24 px-4 sm:px-6 w-full min-h-[400px] sm:min-h-[600px] flex justify-center items-center text-center animate-fadeInUp"
        style={{
          backgroundImage:
            "url('./images/backgrounds-abstract/background-pink-green.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-xl sm:max-w-4xl mx-auto backdrop-blur-md shadow-lg dark:shadow-none rounded-lg p-6 sm:p-10">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6 text-black dark:text-white leading-relaxed"
            style={{ fontFamily: "var(--font-SF-Pro)" }}
          >
            <span className="text-purple-500">{t("Pioneers")}</span>{" "}
            {t("in the creation of the first international network of women in the")}{" "}
            <span className="text-pink-500">{t("automotive industry")}</span>
          </h2>
          <p className="text-sm sm:text-2xl text-gray-700 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed" style={{ fontFamily: "var(--font-SF-Pro)" }}
          >
            {t("We promote inclusive leadership and are the platform that drives innovation and highlights female leadership in Latin America.")}
          </p>
          <Button variant="black" className="px-6 py-4 sm:px-8 sm:py-6 text-sm sm:text-base group">
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
              {t("Promote an event")}
            </span>
          </Button>
        </div>
      </section>

      <div className="mt-8 sm:mt-10  dark:border-gray-700 relative pt-12 sm:pt-16">
        <h1
          className="text-3xl sm:text-6xl font-semibold w-full max-w-3xl mx-auto mb-4 sm:mb-6 text-center leading-relaxed px-4 sm:px-0"
          style={{ fontFamily: "var(--font-SF-Pro)" }}
        >
          <span className="text-black dark:text-white">
            {t("Be part of the organizers who have made")}
          </span>{" "}
          <br className="hidden sm:block" />
          <span className="bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 bg-clip-text text-transparent">
            {t("the formation of this network of leaders possible")}
          </span>
        </h1>

        <div className="overflow-hidden relative py-14 sm:py-28">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#a0d7d6] dark:to-[#0c4247] pointer-events-none z-10 backdrop-blur-lg" />
          <Carousel
            className="w-full relative z-20 animate-fadeIn"
            setApi={(api) => (emblaApi.current = api)}
            opts={{ loop: true }}
            autoScroll={true}
            autoScrollOptions={autoScrollOptions}
          >
            <CarouselContent className="flex whitespace-nowrap relative -ml-8 sm:-ml-18">
              {repeatedLogos.map((logo, index) => (
                <CarouselItem
                  key={index}
                  className="basis-[20%] sm:basis-auto shrink-0 grow-0 px-4 sm:px-8 flex justify-center items-center relative opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <img
                    src={logo}
                    alt={`Logo ${index + 1}`}
                    className="h-8 sm:h-16 w-auto object-contain grayscale dark:filter-none transition-transform duration-300 ease-in-out transform scale-110 hover:scale-125"
                    style={{
                      filter: "brightness(180%) contrast(60%)",
                    }}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  );
};

