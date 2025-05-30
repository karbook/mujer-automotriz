"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { collaborators } from "../constants";
import { Icon } from '@/components/ui/icon';
import { benefits } from "../constants";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
export function ContributorBenefits() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { t } = useTranslation();

    return (
        <>
            <section className="max-w-6xl mx-auto px-6 py-8 mt-6 text-black dark:text-white relative">
                <div className="absolute inset-0 bg-gray-100 dark:bg-[#1A2E4A] rounded-2xl shadow-lg" />
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
                    <div className="max-w-md md:max-w-lg text-left pr-6 md:pr-12 z-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                            {t("Join and be part of the ")}<span className="text-blue-500 dark:text-blue-500">{t("Network")}</span>
                        </h2>
                        <p className="text-base md:text-xl max-w-xs md:max-w-md text-black dark:text-white" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                            {t("The transformation of an industry is based on continuous development and training. Be part of the community that drives this transformation.")}
                        </p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform" target="_blank" rel="noopener noreferrer">
                            <Button
                                variant="blackTransparent"
                                className="mt-4 ml-0 md:ml-5 dark:border-gray-600 text-black text-md md:text-xl py-2 md:py-4">

                                {t("Register")}
                            </Button>
                        </a>
                    </div>
                    <div className="max-w-md md:max-w-lg p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black/30 dark:to-black/50 dark:border-white/20 transition-all dark:hover:bg-[#053b5e] border dark:hover:border-blue-600 duration-300 text-center relative z-10 shadow-lg max-h-[380px]">
                        <img src="/images/cartoon-people/collaborator.png" alt="Colaboradora" className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full drop-shadow-xl object-cover" />
                        <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mt-3 md:mt-8">{t('Collaborator')}</h3>
                    </div>
                </div>
                <div className="relative mt-6">
                    <Carousel className="block md:hidden" onIndexChange={setCurrentIndex}>
                        <CarouselContent>
                            {collaborators.map((collaborator, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <div className="bg-white dark:bg-black/20 p-6 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md transition-all duration-300 hover:bg-gray-200 dark:hover:bg-[#053b5e] hover:border-purple-300 dark:hover:border-blue-600">
                                        <Icon name={collaborator.icon} size="xxl" className={collaborator.bgColor} />
                                        <h3 className="text-3xl font-bold mt-2 mb-1">{t(collaborator.title)}</h3>
                                        <p className="text-md">{t(collaborator.description)}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="w-full flex flex-col items-center mt-6 gap-3">
                            <div className="flex gap-6">
                                <CarouselPrevious className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 bg-gray-200 dark:bg-transparent hover:bg-gray-300 dark:hover:bg-[#053b5e]" />
                                <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                                    {currentIndex + 1} / {collaborators.length}
                                </p>
                                <CarouselNext className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 bg-gray-200 dark:bg-transparent hover:bg-gray-300 dark:hover:bg-[#053b5e]" />
                            </div>
                        </div>
                    </Carousel>
                    <div className="hidden md:grid grid-cols-2 gap-6">
                        {collaborators.map((collaborator, index) => (
                            <div key={index} className="bg-white dark:bg-black/20 p-6 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md transition-all duration-300 hover:bg-gray-200 dark:hover:bg-[#053b5e] hover:border-blue-300 dark:hover:border-blue-600">
                                <Icon name={collaborator.icon} size="xxl" className={collaborator.bgColor} />
                                <h3 className="text-3xl font-bold">{t(collaborator.title)}</h3>
                                <p className="text-lg">{t(collaborator.description)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-5xl font-bold text-gray-900 dark:text-white">{t('Benefits')}</h2>
                    <p className="text-2xl text-gray-600 dark:text-gray-300 mt-2">
                        {t('Be part of the community and access the following benefits')}
                    </p>
                </div>

                <div className="relative mt-12">
                    <Carousel className="block md:hidden" onIndexChange={setCurrentIndex}>
                        <CarouselContent>
                            {benefits.map((benefit, index) => (
                                <CarouselItem key={index} className="basis-full">
                                    <div className="p-6 rounded-3xl border border-gray-300 dark:border-white/20 hover:shadow-lg hover:border-blue-500 transition-all duration-300 bg-white dark:bg-black/20 text-center">
                                        <Icon name={benefit.icon} size="xxl" className={`${benefit.bgColor}`} />
                                        <h3 className="text-2xl font-bold mt-4 text-gray-900 dark:text-white">{t(benefit.title)}</h3>
                                        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">{t(benefit.description)}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        <div className="w-full flex flex-col items-center mt-6 gap-3">
                            <div className="flex gap-6">
                                <CarouselPrevious className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 bg-gray-200 dark:bg-transparent hover:bg-gray-300 dark:hover:bg-[#053b5e]" />
                                <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                                    {currentIndex + 1} / {benefits.length}
                                </p>
                                <CarouselNext className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-500 bg-gray-200 dark:bg-transparent hover:bg-gray-300 dark:hover:bg-[#053b5e]" />
                            </div>
                        </div>
                    </Carousel>
                    <div className="hidden md:grid grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="p-6 rounded-3xl border border-gray-300 dark:border-white/20 hover:shadow-lg hover:border-blue-500 transition-all duration-300 bg-white dark:bg-black/20 text-center">
                                <Icon name={benefit.icon} size="xxl" className={benefit.bgColor} />
                                <h3 className="text-3xl font-bold mt-4 text-gray-900 dark:text-white">{t(benefit.title)}</h3>
                                <p className="text-xl text-gray-600 dark:text-gray-300 mt-2">{t(benefit.description)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}