"use client";

import * as React from 'react';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from '@/components/ui/carousel';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogTitle,
} from "@/components/ui/dialog";
import { logos } from '../../constants';
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { useTranslation } from 'react-i18next';
import { sessions } from '../../constants';
import type { Sessions } from '../../constants';
import type { AutoScrollOptionsType } from "embla-carousel-auto-scroll";
import type { CarouselApi } from "@/components/ui/carousel";
export default function LeadershipInMotion() {
    const [selectedItem, setSelectedItem] = React.useState<Sessions | null>(null);
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);
    const { t } = useTranslation();
    const handleItemClick = (item: Sessions) => {
        setSelectedItem(item);
        setIsDialogOpen(true);
    };
    const emblaApi = useRef<CarouselApi | null>(null);
    const autoScrollOptions: Partial<AutoScrollOptionsType> = {
        speed: 1.2,
        startDelay: 800,
        stopOnInteraction: true,
        direction: "forward",
    };
    const numRepetitions = 6;
    const repeatedLogos = Array(numRepetitions).fill([...logos]).flat();
    return (
        <>
            <section className="w-full px-4 sm:px-6 py-6 bg-white dark:bg-black">
                <div className="max-w-[90rem] mx-auto mb-8 text-left px-2 sm:px-4">
                    <h2 className="inline-block px-4 py-1 text-4xl sm:text-8xl font-semibold bg-gradient-to-r from-[#ff851b] via-[#ff1e1d] to-[#f101ad] bg-clip-text text-transparent" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                        {t('Leadership in Motion: Innovation and Opportunities in the Automotive Industry')}
                    </h2>
                    <h2 className="text-lg sm:text-4xl mt-6 sm:mt-10 font-bold text-dark leading-relaxed" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                        {t('Join us this September 19th, 20th, 24th, 25th, 26th and 27th at 7pm for this exciting 1-hour interview series and sessions with industry leaders.')}
                    </h2>
                </div>
            </section>

            <div className="relative w-full mx-auto overflow-hidden px-4 md:pl-20 md:pr-8">
                <Carousel
                    opts={{
                        align: 'start',
                        loop: false,
                    }}
                    mousewheel={true}
                >
                    <CarouselContent className="flex w-full gap-x-4 md:gap-x-12 py-4">
                        {sessions.map((session, index) => (
                            <CarouselItem
                                key={index}
                                className={`flex-shrink-0 cursor-pointer
                                        basis-full md:basis-1/5 flex flex-col relative overflow-hidden
                                        ${session.backgroundColor} ${session.textColor} h-[600px] md:h-[950px] rounded-4xl`}
                                onClick={() => handleItemClick(session)}
                            >
                                {session.itemBgImage && (
                                    <img
                                        src={session.itemBgImage}
                                        alt={`${session.name} background`}
                                        className="absolute left-0 right-0 bottom-[-110px] rounded-2xl w-full h-full object-cover"
                                        style={{ zIndex: 0 }}
                                    />
                                )}
                                {session.itemBgImage && (
                                    <div className="absolute left-0 right-0 bottom-[-50px] w-full h-full bg-gradient-to-t from-black/70 to-transparent" style={{ zIndex: 1 }} />
                                )}
                                <div className={`p-6 z-10 w-full`}>
                                    <h1 className='text-4xl md:text-2xl font-semibold mb-1 leading-tight' style={{ fontFamily: ('var(--font-SF-Pro)') }}>{t('Session')} {session.numberSession}</h1>
                                    <h2 className="text-4xl md:text-6xl font-semibold mb-1 leading-tight" style={{ fontFamily: ('var(--font-SF-Pro)') }}>{t(session.name)}</h2>
                                    <h3
                                        className="text-xl sm:text-4xl md:text-5xl lg:text-4xl font-semibold"
                                        style={{ fontFamily: ('var(--font-SF-Pro)') }}
                                    >
                                        {t(session.position)}
                                    </h3>
                                </div>

                                <div className="flex-grow" />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-center gap-x-4 mt-4 md:hidden">
                        <CarouselPrevious className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-500 text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                        <CarouselNext className="px-4 py-6 rounded-full border border-gray-800 bg-white dark:bg-black dark:text-white dark:border border-gray-500 text-black hover:bg-gray-300 dark:hover:bg-gray-900" />
                    </div>
                </Carousel>

                {selectedItem && (
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent
                            className="w-full max-w-screen-md h-[85vh] overflow-hidden p-0 rounded-3xl bg-white dark:bg-black flex flex-col shadow-xl transition-opacity animate-fadeIn"
                            style={{
                                backgroundImage: selectedItem.imageBackground ? `url(${selectedItem.imageBackground})` : 'none',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat',
                            }}
                        >
                            {selectedItem.imageBackground && (
                                <div className="absolute inset-0 bg-black/50 dark:bg-black/70 z-10" />
                            )}

                            <div className="relative z-20 pt-8 px-6 pb-3 text-left">
                                <p className="text-gray-300 text-xl md:text-2xl mb-1 font-semibold" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                                    {t('Session')} {selectedItem.numberSession}
                                </p>
                                <DialogTitle className="text-white text-5xl md:text-6xl font-bold leading-tight" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                                    {t(selectedItem.name)}
                                </DialogTitle>
                            </div>
                            <div className="relative z-20 flex-grow overflow-y-auto px-10 pb-10 pt-6 flex flex-col items-center">
                                <div className="bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left w-full max-w-3xl mx-auto shadow-lg">
                                    <DialogDescription className="text-xl md:text-2xl text-white leading-relaxed font-semibold" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                                        {t(selectedItem.fullText)}
                                    </DialogDescription>
                                </div>
                                {selectedItem.imageUrl && (
                                    <div className="relative z-20 mb-6 flex justify-center w-full max-w-2xl">
                                        <img
                                            src={selectedItem.imageUrl}
                                            alt={t(selectedItem.name)}
                                            className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-300 hover:scale-105"
                                        />
                                    </div>
                                )}
                                {selectedItem.youtubeLink && (
                                    <Button asChild variant="blackTransparent" className="relative z-20 mt-8 py-6 text-lg text-white" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                                        <a href={selectedItem.youtubeLink} target="_blank" rel="noopener noreferrer">
                                            {t('Relive the presentation')}
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                )}
            </div>
            <div className="mt-8 sm:mt-10  dark:border-gray-700 relative pt-12 sm:pt-16">
                <h1
                    className="text-3xl sm:text-6xl font-semibold w-full max-w-3xl mx-auto mb-4 sm:mb-6 text-center leading-relaxed px-4 sm:px-0"
                    style={{ fontFamily: "var(--font-SF-Pro)" }}
                >
                    <span className="text-black dark:text-white">
                        {t("Organizers")}
                    </span>{" "}
                    <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-red-400 via-orange-500 to-pink-500 bg-clip-text text-transparent">
                        {t("Thanks to them it is possible to create this series of presentations that boost the industry")}
                    </span>
                </h1>
                <div className="overflow-hidden relative py-14 sm:py-28">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#a20a72] dark:to-[#a20a72] pointer-events-none z-10 backdrop-blur-lg" />
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
}