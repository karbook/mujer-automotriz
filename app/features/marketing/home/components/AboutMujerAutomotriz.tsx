
import { programs } from "../constants";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
export function AboutMujerAutomotriz() {
    return (
        <div className="bg-white dark:bg-black py-12 sm:py-20 px-4 sm:px-6">
            <div className="max-w-5xl mx-auto space-y-10 sm:space-y-16">
                {programs.map((program) => (
                    <section
                        key={program.id}
                        className={`flex flex-col sm:flex-row items-stretch gap-4 sm:gap-6 ${program.reversed ? 'sm:flex-row-reverse' : ''
                            }`}
                    >
                        <div className="sm:w-1/2 rounded-xl overflow-hidden flex-shrink-0">
                            <img
                                src={program.imgSrc}
                                alt={program.imgAlt}
                                className="w-full h-auto object-cover"
                                style={{ aspectRatio: '4 / 3' }}
                            />
                        </div>
                        <div className="sm:w-1/2 text-white text-left bg-[#1d011acc] backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-inner rounded-xl p-4 sm:p-6 flex flex-col justify-between h-full">
                            <div className="flex-grow">
                                <h3 className="text-xl sm:text-3xl font-semibold mb-2 sm:mb-4">{program.title}</h3>
                                <p className="font-semibold text-sm sm:text-lg">{program.description}</p>
                                <Button variant={'blackTransparent'} asChild>
                                    <Link to={program.link} className="mt-4 self-start">
                                        {program.buttonText}
                                    </Link>
                                </Button>
                            </div>

                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

