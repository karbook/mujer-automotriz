// UTILS
import { useTranslation } from "react-i18next";
import { useState } from "react";

// COMPONENTS
import { Icon } from "@/components/ui/icon";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

// DATA
import { benefits } from "../constants";

export function CorporateSponsorships() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useTranslation();

  return (
    <div className="bg-white dark:bg-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-left space-y-16">
        <h2 className="text-5xl font-bold text-center text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-SF-Pro)" }}>
          {t("Corporate Sponsorships")}
        </h2>
        <p className="text-3xl text-center font-semibold text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-SF-Pro)" }}>
          {t("Benefits aligned with your goals. Let's forge the future of the automotive industry in Mexico and Latin America together.")}
        </p>

        <Carousel className="block md:hidden relative" onIndexChange={setCurrentIndex}>
          <CarouselContent>
            {benefits.map((benefit) => {
              const translatedDescription = Array.isArray(benefit.description)
                ? benefit.description.map((item) => t(item))
                : [t(benefit.description)];

              return (
                <CarouselItem key={benefit.title} className="basis-full">
                  <div className="bg-[#001e22] dark:bg-[#001e22] text-white rounded-xl p-6 shadow-md border border-[#011f22] hover:border-green-400 transition duration-300">
                    <Icon name={benefit.icon} size="xxl" className="text-green-400" />
                    <h3 className="text-xl font-semibold mb-2">{t(benefit.title)}</h3>

                    <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2 font-semibold">
                      {translatedDescription.map((item, idx) => (
                        <li key={`${benefit.title}-${idx}`}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <div className="w-full flex flex-col items-center mt-6 gap-3">
            <div className="flex gap-6">
              <CarouselPrevious className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />
              <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                {currentIndex + 1} / {benefits.length}
              </p>
              <CarouselNext className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />
            </div>
          </div>
        </Carousel>
        <div className="hidden md:grid md:grid-cols-3 gap-10">
          {benefits.map((benefit) => {
            const translatedDescription = Array.isArray(benefit.description)
              ? benefit.description.map((item) => t(item))
              : [t(benefit.description)];
            return (
              <div
                key={benefit.title}
                className="bg-[#001e22] dark:bg-[#001e22] text-white rounded-xl p-6 shadow-md border border-[#011f22] hover:border-green-400 transition duration-300"
              >
                <Icon name={benefit.icon} size="xxl" className="text-green-400" />
                <h3 className="text-2xl font-semibold mb-2 mt-5">{t(benefit.title)}</h3>

                <ul className="list-disc list-inside text-lg text-gray-300 space-y-1 mt-2 font-semibold">
                  {translatedDescription.map((item, idx) => (
                    <li key={`${benefit.title}-${idx}`}>{item}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
