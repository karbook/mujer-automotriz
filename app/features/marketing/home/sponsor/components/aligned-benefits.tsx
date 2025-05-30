"use client";

import { useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "@/components/ui/carousel";
import { Icon } from '@/components/ui/icon';
import { benefitsAligneds } from "../constants";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
export function AlignedBenefits() {
    const {t} =useTranslation();
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="max-w-7xl mx-auto px-8 py-20">
            <div className="rounded-3xl shadow-xl p-12  ">
                <h2 className="text-5xl font-extrabold text-center mb-6 text-black dark:text-white">
                    {t('Benefits Aligned with Your Goals')}
                </h2>
                <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-200 mb-12">
                    {t('Explore strategic opportunities to strengthen your presence in the automotive industry and be part of the change.')}
                </p>

                <div className="relative mt-12">
                    <Carousel className="w-full" onIndexChange={setCurrentIndex}>
                        <CarouselContent>
                            {benefitsAligneds.map((benefit, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full md:basis-1/2 lg:basis-1/3 px-4 h-full"
                                >
                                    <div className="h-full flex flex-col justify-start p-6 rounded-3xl text-center shadow-md bg-white dark:bg-black text-black dark:text-white border dark:border-gray-500">
                                        <Icon name={benefit.icon} size="xxl" className="mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">{t(benefit.title)}</h3>
                                        <p className="text-lg mt-auto">{t(benefit.description)}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex items-center justify-center mt-6 gap-6">
                            <CarouselPrevious className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-500 text-white text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                            <p className="text-black dark:text-white text-lg font-bold">
                                {currentIndex + 1} / {benefitsAligneds.length}
                            </p>
                            <CarouselNext className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-500 text-white text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                        </div>
                    </Carousel>
                </div>
                <div className="mt-12 text-center">
                    <Button
                        variant="blackTransparent"
                        className="px-14 py-8 text-lg font-bold rounded-4xl text-black hover:text-black hover:dark:text-black  border-gray-400 hover:bg-gray-200 border hover:border-gray-400 transition-colors duration-300"
                    >
                     {t('Begin')}
                    </Button>
                </div>
            </div>
        </section>
    );
}
