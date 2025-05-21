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
import { benefitsAligned } from "../constants";

export function AlignedBenefits() {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="max-w-7xl mx-auto px-8 py-20">
            <div className="rounded-3xl shadow-xl p-12  ">
                <h2 className="text-5xl font-extrabold text-center mb-6 text-black dark:text-white">
                    Beneficios Alineados a Tus Objetivos
                </h2>
                <p className="text-lg text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-200 mb-12">
                    Explora oportunidades estratégicas para fortalecer tu presencia en la industria automotriz y ser parte del cambio.
                </p>

                <div className="relative mt-12">
                    <Carousel className="w-full" onIndexChange={setCurrentIndex}>
                        <CarouselContent>
                            {benefitsAligned.map((benefit, index) => (
                                <CarouselItem
                                    key={index}
                                    className="basis-full md:basis-1/2 lg:basis-1/3 px-4 h-full"
                                >
                                    <div className="h-full flex flex-col justify-start p-6 rounded-3xl text-center shadow-md bg-white dark:bg-black text-black dark:text-white border dark:border-gray-800">
                                        <Icon name={benefit.icon} size="xxl" className="mx-auto mb-4" />
                                        <h3 className="text-2xl font-bold mb-2">{benefit.title}</h3>
                                        <p className="text-lg mt-auto">{benefit.description}</p>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <div className="flex items-center justify-center mt-6 gap-6">
                        <CarouselPrevious className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-800 text-white text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                        <p className="text-black dark:text-white text-lg font-bold">
                                {currentIndex + 1} / {benefitsAligned.length}
                            </p>
                            <CarouselNext className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-800 text-white text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                        </div>
                    </Carousel>
                </div>

                <div className="mt-12 text-center">
                    <button className="px-6 py-3 rounded-lg bg-black dark:bg-white text-white dark:text-black font-semibold hover:bg-gray-800 dark:hover:bg-gray-300 transition-all">
                        Contáctanos
                    </button>
                </div>
            </div>
        </section>
    );
}
