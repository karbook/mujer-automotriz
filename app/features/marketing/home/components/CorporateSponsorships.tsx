import { benefits } from "../constants";
import { Icon } from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { useState } from "react"; 

export  function  CorporateSponsorships(){
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <div className="bg-white dark:bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto text-left space-y-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                    Patrocinios Corporativos
                </h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Beneficios alineados a tus objetivos. Forjemos juntos el futuro de la industria Automotriz en México y América Latina.
                </p>
                <Carousel className="block md:hidden relative" onIndexChange={setCurrentIndex}>
                    <CarouselContent>
                        {benefits.map((benefit, index) => (
                            <CarouselItem key={index} className="basis-full">
                                <div className="bg-[#001e22] dark:bg-[#001e22] text-white rounded-xl p-6 shadow-md border border-[#011f22] hover:border-green-400 transition duration-300">
                                    <Icon name={benefit.icon} size="xxl" className="text-green-400" />
                                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>

                                    {Array.isArray(benefit.description) ? (
                                        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2 font-semibold">
                                            {benefit.description.map((item, idx) => (
                                                <li key={idx}>{item}</li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-sm text-gray-300 font-semibold">{benefit.description}</p>
                                    )}
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="w-full flex flex-col items-center mt-6 gap-3">
                        <div className="flex gap-6">
                            <CarouselPrevious className="bg-transparent text-white px-2 py-4 rounded-full border dark:border-gray-600 focus:border-white active:border-white" />
                            <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                                {currentIndex + 1} / {benefits.length}
                            </p>
                            <CarouselNext className="bg-transparent text-white px-2 py-4 border border-transparent dark:border-gray-600 rounded-full focus:border-white active:border-white" />
                        </div>
                    </div>
                </Carousel>
                <div className="hidden md:grid md:grid-cols-3 gap-10">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="bg-[#001e22] dark:bg-[#001e22] text-white rounded-xl p-6 shadow-md border border-[#011f22] hover:border-green-400 transition duration-300"
                        >
                            <Icon name={benefit.icon} size="xxl" className="text-green-400" />
                            <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>

                            {Array.isArray(benefit.description) ? (
                                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2 font-semibold">
                                    {benefit.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-300 font-semibold">{benefit.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

