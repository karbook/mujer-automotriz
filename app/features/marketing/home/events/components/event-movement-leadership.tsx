import { Button } from '@/components/ui/button';
import { eventmovements, programHighlights } from '../constants';
import { useTranslation } from 'react-i18next';

export function EventMovementLeadership() {
  const { t } = useTranslation();

  return (
    <>
      <section id="upcoming-events" className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
        <div
          className="bg-black/60 rounded-3xl p-10 text-left w-full min-h-[400px]"
          style={{
            backgroundImage: `url('${eventmovements.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-4xl font-bold mb-6">{t(eventmovements.title)}</h2>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{t(eventmovements.subtitle)}</h3>
            <p className="text-lg mb-4">{t(eventmovements.date)}</p>
            <div className="flex justify-left gap-4">
              <Button variant="black" className="px-8 py-6 text-base group">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  {t(eventmovements.buttonText)}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-blue-500">
          {programHighlights.map((programHighlight, index) => (
            <div
              key={index}
              className="relative p-10 border-t border-blue-500 hover:bg-[#043b5f] group min-h-[300px] flex flex-col"
            >
              <div
                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent ${programHighlight.borderColors?.[0] ? `via-${programHighlight.borderColors[0]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />
              <div className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent ${programHighlight.borderColors?.[1] ? `via-${programHighlight.borderColors[1]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />

              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                {t(programHighlight.title)}
              </h2>
              <p className="mb-6 text-xl font-semibold max-w-4xl group-hover:text-white transition-colors duration-300" style={{fontFamily:('var(--font-SF-Pro)')}}>
                {t(programHighlight.description)}
              </p>
              {index === programHighlights.length - 1 && (
                <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start sm:items-end justify-start sm:justify-end">
                  {t(programHighlight.buttonText) && (
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform" target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="blackTransparent"
                        className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                      >
                        {t('See presentations')}
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="blackTransparent"
                    className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                  >
                    {t('Learn More')}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}