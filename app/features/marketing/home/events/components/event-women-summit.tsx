"use client";

// CORE
import { Link } from "react-router";

// UTILS
import { useTranslation } from "react-i18next";
import { useMemo } from "react";

// COMPONENTS
import { Button } from "@/components/ui/button";

// DATA
import { eventSections, highlightedEvents } from "../constants";

export function EventWomanSummit() {
    const { t } = useTranslation();

    const memoizedHighlightedEvents = useMemo(() => highlightedEvents, []);
    const memoizedEventSections = useMemo(() => eventSections, []);

    return (
        <>
            {memoizedHighlightedEvents.map((highlightedEvent) => (
                <section key={highlightedEvent.title} className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
                    <div className="relative rounded-3xl overflow-hidden p-10 text-left w-full min-h-[400px]">
                        <div
                            className="absolute inset-0 rounded-3xl bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${highlightedEvent.image}')` }}
                        />
                        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">{t(highlightedEvent.title)}</h2>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{t(highlightedEvent.subtitle)}</h3>
                                <p className="text-lg mb-4">{t(highlightedEvent.date)}</p>
                                <div className="flex justify-left gap-4">
                                    <Link to="/form-mujer-automotriz" className="inline-block">
                                        <Button variant="black" className="px-8 py-6 text-base group">
                                            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                                {t(highlightedEvent.buttonText)}
                                            </span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}
            <section className="max-w-7xl mx-auto px-4 mb-14">
                <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-yellow-500">
                    {memoizedEventSections.map((eventSection) => (
                        <div
                            key={eventSection.title}
                            className="relative p-10 border-t border-yellow-500 hover:bg-[#8B6508] group min-h-[300px] flex flex-col"
                        >
                            <div
                                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent ${eventSection.borderColors[0] ? `via-${eventSection.borderColors[0]}` : "via-yellow-500"} to-transparent opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-opacity transition-transform duration-300 will-change-[opacity,transform]`}
                            />
                            <div
                                className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent ${eventSection.borderColors[1] ? `via-${eventSection.borderColors[1]}` : "via-yellow-500"} to-transparent opacity-0 group-hover:opacity-100 transform scale-95 group-hover:scale-100 transition-opacity transition-transform duration-300 will-change-[opacity,transform]`}
                            />

                            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                                {t(eventSection.title)}
                            </h2>
                            <p className="mb-6 text-xl font-semibold max-w-4xl group-hover:text-white transition-colors duration-300" style={{ fontFamily: "var(--font-SF-Pro)" }}>
                                {t(eventSection.description)}
                            </p>
                            {eventSection.buttonText && (
                                <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start sm:items-end justify-start sm:justify-end">
                                    <a href="https://www.youtube.com/watch?v=ooScm-v-DCc&t=1s" target="_blank" rel="noopener noreferrer">
                                        <Button
                                            variant="blackTransparent"
                                            className="px-4 py-2 text-xl font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                                        >
                                            {t(eventSection.buttonText)}
                                        </Button>
                                    </a>
                                    <Link to={`/virtual-summit`}>
                                        <Button
                                            variant="blackTransparent"
                                            className="px-4 py-2 text-xl font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                                        >
                                            {t("Learn More")}
                                        </Button>
                                    </Link>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
