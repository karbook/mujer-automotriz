import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { ambassadors } from "../constants";
import { useState } from "react";
import { Icon } from '@/components/ui/icon';
import { useTranslation } from "react-i18next";

export function AmbassadorBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();
  const safeTranslate = (key: string) => {
    return t(key, { defaultValue: key });
  };

  return (
    <>
      <section className="w-full text-white relative">
        <img
          src="/images/backgrounds-abstract/background-box.png"
          alt="Evento Liderazgo en Movimiento"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-6 py-16 md:py-24 max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-8 md:mt-10 mb-12 text-left drop-shadow-lg">
            {t('Mujer Automotriz')}
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-left drop-shadow-lg text-pink-500">
            {t('Join and be part of the network')}
          </h2>
          <p className="text-base md:text-2xl max-w-xl md:max-w-4xl mb-8 text-left text-justify" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
            {t('Would you like to be part of a network of automotive industry leaders committed to your professional growth and success?')}
          </p>
        </div>
      </section>



      <section className="max-w-6xl mx-auto px-6 py-8 mt-6 text-black dark:text-white relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-[#31021e] rounded-2xl shadow-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-6 md:gap-12">
          <div className="max-w-md md:max-w-lg text-left pr-0 md:pr-12 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-3 md:mb-6" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
              {t("Join and be part of the ")}<span className="text-pink-500 dark:text-pink-500">{t("Network")}</span>
            </h2>
            <p className="text-base md:text-xl max-w-xs md:max-w-md text-black dark:text-white" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
              {t("The transformation of an industry requires many key players, be part of the key players that will guide this transformation.")}
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                variant="blackTransparent"
                className="mt-4 ml-0 md:ml-5 text-black text-md md:text-xl py-2 md:py-4"              >
                {t("Register")}
              </Button>
            </a>
          </div>
          <div className="max-w-md md:max-w-lg p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black/30 dark:to-black/50 dark:border-white/20 transition-all dark:hover:bg-[#590539] border dark:hover:border-pink-600 duration-300 text-center relative z-10 shadow-lg max-h-[380px]">
            <img src="/images/cartoon-people/ambassador.png" alt="Colaboradora" className="w-32 h-32 md:w-48 md:h-48 mx-auto rounded-full drop-shadow-xl object-cover" />
            <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mt-3 md:mt-8">{t("Ambassador")}</h3>
          </div>
        </div>
        <div className="relative mt-6">
          <Carousel className="block md:hidden" onIndexChange={setCurrentIndex}>
            <CarouselContent>
              {ambassadors.map((ambassador, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="bg-white dark:bg-black/20 p-5 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md hover:bg-gray-200 dark:hover:bg-[#590539] hover:border-pink-600 transition-all">
                    <Icon name={ambassador.icon} size="xl" className={ambassador.bgColor} />
                    <h3 className="text-2xl font-bold mt-2 mb-1">{safeTranslate(ambassador.title)}</h3>
                    <p className="text-md" style={{ fontFamily: ('var(--font-SF-Pro)') }}>{safeTranslate(ambassador.description)}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="w-full flex flex-col items-center mt-5 gap-2">
              <div className="flex gap-4">
                <CarouselPrevious className="px-2 py-3 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />
                <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                  {currentIndex + 1} / {ambassadors.length}
                </p>
                <CarouselNext className="px-2 py-3 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />
              </div>
            </div>
          </Carousel>

          <div className="hidden md:grid grid-cols-2 gap-6">
            {ambassadors.map((ambassador, index) => (
              <div key={index} className="bg-white dark:bg-black/20 p-6 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md hover:bg-gray-200 dark:hover:bg-[#590539] hover:border-pink-600 transition-all">
                <Icon name={ambassador.icon} size="xxl" className={ambassador.bgColor} />
                <h3 className="text-3xl font-bold">{safeTranslate(ambassador.title)}</h3>
                <p className="text-lg font-semibold" style={{ fontFamily: ('var(--font-SF-Pro)') }}>{safeTranslate(ambassador.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
