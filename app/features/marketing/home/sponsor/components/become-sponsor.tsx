"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Icon } from "@/components/ui/icon";
import { sponsorships } from "../constants";
import { useTranslation } from "react-i18next";
export function BecomeSponsor() {
    const {t}=useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="w-full px-4 sm:px-6 py-12 bg-white dark:bg-black">
            <div className="max-w-[90rem] mx-auto mb-8 text-left px-2 sm:px-4">
                <h2 className="inline-block ml-[-18px] sm:ml-[-20px] px-4 py-1 rounded-full text-5xl font-semibold bg-gradient-to-r from-[#06c8b3] via-[#09dfaa] to-[#04c8cc] bg-clip-text text-transparent">
                    {t('Contact us')}
                </h2>
                <h2 className="text-2xl sm:text-6xl font-bold text-dark leading-relaxed" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                    {t('Join Mujer Automotriz and help us build a more inclusive and diverse industry.')}
                </h2>
            </div>
            <div className="max-w-[90rem] mx-auto py-12 rounded-3xl bg-[#011e23] shadow-xl">
                <div className="text-left mb-8 max-w-full sm:max-w-[70%] mx-auto sm:ml-24 px-2 sm:px-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#1abc9c] text-white mb-2">
                        {t('Are you interested in')}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-[#ECF0F7] mb-4 leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {t("Let's forge the future of the automotive industry in Mexico and Latin America together.")}
                    </h2>
                </div>
                <div className="max-w-[90%] mx-auto overflow-hidden min-h-[320px]">
                    <Carousel onIndexChange={setCurrentIndex}>
                        <div className="overflow-hidden py-4">
                            <CarouselContent className="gap-4 sm:gap-0 min-h-[220px]">
                                {sponsorships.map((sponsorship, index) => (
                                    <CarouselItem
                                        key={index}
                                        className="basis-full sm:basis-1/2 md:basis-1/3 min-h-[240px]"
                                    >
                                        <div className="p-4 sm:p-6 rounded-2xl text-left shadow-md bg-gradient-to-br from-[#04352e] to-[#021c18] text-[#ECF0F7] h-[240px] sm:h-[220px] border border-[#089283] flex flex-col justify-start">
                                            <div className="rounded-2xl w-10 h-10 flex items-center justify-center mb-2">
                                                <Icon name={sponsorship.icon} size="xxl" className={sponsorship.bgColor} />
                                            </div>
                                            <h3 className="text-2xl sm:text-3xl font-semibold mb-1">
                                                {t(sponsorship.title)}
                                            </h3>
                                            <p className="text-lg sm:text-xl text-[#D1D5DB]" style={{ fontFamily: 'var(--font-Inter)' }}>
                                                {t(sponsorship.description)}
                                            </p>
                                        </div>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                        </div>

                        <div className="flex items-center justify-center mt-6 gap-4">
                            <CarouselPrevious className="px-3 py-4 sm:px-4 sm:py-6 rounded-full border transition-all duration-300 bg-transparent text-white dark:text-white border-gray-400 dark:border-gray-600 hover:border-green-700 dark:hover:border-green-800 dark:bg-transparent  dark:hover:bg-[#2c3e50]" />
                            <p className="text-[#ECF0F7] text-base sm:text-lg font-bold">
                                {currentIndex + 1} / {sponsorships.length}
                            </p>
                            <CarouselNext className="px-3 py-4 sm:px-4 sm:py-6 rounded-full border transition-all duration-300 bg-transparent text-white dark:text-white border-gray-400 dark:border-gray-600 hover:border-green-700 dark:hover:border-green-800 dark:bg-transparent dark:hover:bg-[#2c3e50]" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </section>
    );
}
