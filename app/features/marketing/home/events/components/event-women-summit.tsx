import { Button } from '@/components/ui/button';
import { eventSections, highlightedEvents } from '../constants'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router';
export function EventWomanSummit() {
    const { t } = useTranslation();
    const safeTranslate = (key: string) => {
        return t(key, { defaultValue: key });
    };
    return (
        <>
            {highlightedEvents.map((highlightedEvent, index) => (
                <section key={index} className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
                    <div className="relative rounded-3xl overflow-hidden p-10 text-left w-full min-h-[400px]">
                        <div
                            className="absolute inset-0 rounded-3xl bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url('${highlightedEvent.image}')` }}
                        ></div>
                        <div className="absolute inset-0 bg-black/50 rounded-3xl" />
                        <div className="relative z-10">
                            <h2 className="text-4xl font-bold mb-6">{safeTranslate(highlightedEvent.title)}</h2>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{safeTranslate(highlightedEvent.subtitle)}</h3>
                                <p className="text-lg mb-4">{safeTranslate(highlightedEvent.date)}</p>
                                <div className="flex justify-left gap-4">
                                    <Button variant="black" className="px-8 py-6 text-base group">
                                        <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                            {safeTranslate(highlightedEvent.buttonText)}
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            ))}
            <section className="max-w-7xl mx-auto px-4 mb-14">
                <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-yellow-500">
                    {eventSections.map((eventSection, index) => (
                        <div
                            key={index}
                            className="relative p-10 border-t border-yellow-500 hover:bg-[#8B6508] group min-h-[300px] flex flex-col"
                        >
                            <div
                                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent ${eventSection.borderColors[0] ? `via-${eventSection.borderColors[0]}` : "via-yellow-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
                            />
                            <div className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent ${eventSection.borderColors[1] ? `via-${eventSection.borderColors[1]}` : "via-yellow-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />

                            <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                                {safeTranslate(eventSection.title)}
                            </h2>
                            <p className="mb-6 text-xl font-semibold max-w-4xl group-hover:text-white transition-colors duration-300" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                                {safeTranslate(eventSection.description)}
                            </p>
                            {index === eventSections.length - 1 && (
                                <div
                                    className="mt-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start sm:items-end justify-start sm:justify-end"
                                >
                                    <a href="https://www.youtube.com/watch?v=ooScm-v-DCc&t=1s" target="_blank" rel="noopener noreferrer">

                                        {safeTranslate(eventSection.buttonText ?? "") && (
                                            <Button
                                                variant="blackTransparent"
                                                className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                                            >
                                                {safeTranslate(eventSection.buttonText ?? "")}
                                            </Button>
                                        )}
                                    </a>
                                    <Link to={`/virtual-summit`}>
                                        <Button
                                            variant="blackTransparent"
                                            className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                                        >
                                            {safeTranslate('Learn More')}
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
};