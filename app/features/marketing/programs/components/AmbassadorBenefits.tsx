import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { roles } from "../constants";
import { useState } from "react";
import { Icon } from '@/components/ui/icon';

export function AmbassadorBenefits() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      {/* Sección de introducción */}
      <section className="w-full text-white relative">
        <img
          src="/images/backgrounds-abstract/background-box.png"
          alt="Evento Liderazgo en Movimiento"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative px-6 py-16 md:py-24 max-w-screen-xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mt-8 md:mt-10 mb-12 text-left drop-shadow-lg">
            Mujer Automotriz
          </h1>
          <h2 className="text-5xl md:text-7xl font-extrabold mb-4 text-left drop-shadow-lg text-pink-500">
            Únete y sé parte de la red
          </h2>
          <p className="text-base md:text-2xl max-w-xl md:max-w-4xl mb-8 text-left text-justify" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
            ¿Te gustaría formar parte de una red de líderes de la industria automotriz comprometidos con tu crecimiento profesional y éxito?
          </p>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-6 py-16 mt-10 md:mt-10  text-black dark:text-white relative">
        <div className="absolute inset-0 bg-gray-100 dark:bg-[#31021e] rounded-2xl shadow-lg"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          <div className="max-w-md md:max-w-lg text-left pr-6 md:pr-12 z-10">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 md:mb-6">
              Únete y sé parte de la <span className="text-pink-500 dark:text-pink-500">Red</span>
            </h2>
            <p className="text-base md:text-xl max-w-xs md:max-w-md text-black dark:text-white">
              La transformación de una industria es a base de continuo desarrollo y capacitación. Forma parte de la comunidad que impulsa esta transformación.
            </p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform" target="_blank" rel="noopener noreferrer">
              <Button
                variant="blackTransparent"
                className="mt-10 ml-0 md:ml-5 text-black text-xl py-6"
              >
                Registrate
              </Button>
            </a>

          </div>
          <div className="max-w-md md:max-w-lg p-4 md:p-6 rounded-2xl bg-gradient-to-b from-gray-100 to-gray-300 dark:from-black/30 dark:to-black/50 dark:border-white/20 transition-all dark:hover:bg-[#590539] border dark:hover:border-pink-600 duration-300 text-center relative z-10 shadow-lg max-h-[380px] md:max-h-[450px]">
            <img src="/images/cartoon-people/ambassador.png" alt="Colaboradora" className="w-40 h-40 md:w-48 md:h-48 mx-auto rounded-full drop-shadow-xl object-cover" />
            <h3 className="text-2xl md:text-4xl font-bold text-black dark:text-white mt-4 md:mt-8">Embajadora</h3>
          </div>
        </div>
        <div className="relative mt-12">
          <Carousel className="block md:hidden" onIndexChange={setCurrentIndex}>
            <CarouselContent>
              {roles.map((rol, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="bg-white dark:bg-black/20 p-6 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md hover:bg-gray-200 dark:hover:bg-[#590539] hover:border-pink-600 transition-all">
                    <Icon name={rol.icon} size="xxl" className={rol.bgColor} />
                    <h3 className="text-3xl font-bold mt-2 mb-2">{rol.title}</h3>
                    <p className="text-md">{rol.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Botones de navegación */}
            <div className="w-full flex flex-col items-center mt-6 gap-3">
              <div className="flex gap-6">
                <CarouselPrevious className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />

                <p className="text-sm font-bold text-gray-700 dark:text-white mt-2">
                  {currentIndex + 1} / {roles.length}
                </p>
                <CarouselNext className="px-2 py-4 rounded-full border transition-all duration-300 text-gray-900 dark:text-white border-gray-400 dark:border-gray-600 bg-gray-200 dark:bg-transparent" />
              </div>
            </div>
          </Carousel>

          {/* Vista en grilla para escritorio */}
          <div className="hidden md:grid grid-cols-2 gap-6">
            {roles.map((rol, index) => (
              <div key={index} className="bg-white dark:bg-black/20 p-6 rounded-3xl text-left border border-gray-300 dark:border-white/20 hover:shadow-md hover:bg-gray-200 dark:hover:bg-[#590539] hover:border-pink-600 transition-all">
                <Icon name={rol.icon} size="xxl" className={rol.bgColor} />
                <h3 className="text-3xl font-bold">{rol.title}</h3>
                <p className="text-lg">{rol.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
