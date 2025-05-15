import * as React from 'react';
import { Button } from '@/components/ui/button'

const HeroDetailsSection = () => {
  const logos = [
    './images/icon-carrusel/irex-icon.png',
    './images/icon-carrusel/karbook-icon.png',
    './images/icon-carrusel/usa-departament.png',
    './images/icon-carrusel/usa-icon.png',
    './images/icon-carrusel/tedi-longlight.png',
  ];

  const numRepetitions = 6;
  const repeatedLogos = Array(numRepetitions).fill([...logos]).flat();

  return (
    <>
      <section
        className="mt-24 px-6 w-full min-h-[600px] flex justify-center items-center text-center animate-fadeInUp"
        style={{
          backgroundImage: "url('./images/fondos/fondo-pink-green.png')",
          backgroundSize: "100% auto",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-3xl mx-auto backdrop-blur-md shadow-lg dark:shadow-none rounded-lg p-10">

          {/* Nuevo contenido del título */}
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-black dark:text-white leading-relaxed" style={{ fontFamily: 'var(--font-poppins)' }}>
            <span style={{ color: '#884af4' }}>Pioneros</span> en la creación de la primera red internacional de mujeres en la industria <span style={{ color: '#fe5baa' }}>automotriz</span>
          </h2>
          {/* Nuevo contenido del párrafo */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            Promovemos el liderazgo inclusivo y somos la plataforma que impulsa la innovación y visibiliza el liderazgo femenino en América Latina.
          </p>
          <Button variant="black" className="px-8 py-6 text-base group">
            <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
              Promover un evento
            </span>
          </Button>
        </div>
      </section>
      {/* Sección del carrusel fuera del contenedor con ancho máximo */}
      <div className="mt-10 border-t pt-16  border-gray-300 dark:border-gray-700 relative">
        <h1
          className="text-5xl font-semibold w-full max-w-4xl mx-auto ml-100 mb-6 text-left leading-relaxed"
          style={{ fontFamily: 'var(--font-SF-Pro)' }}
        >
          <span className="text-black dark:text-white">
            Sé parte de los organizadores que han hecho
          </span>{' '}
          <br />
          <span className="text-pink-500">
            posible la formación de esta red de líderes
          </span>
        </h1>

        <div className="overflow-hidden relative py-16">
          <div className="flex animate-marquee-logos whitespace-nowrap" style={{ paddingBottom: '96px' }}>
            {repeatedLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Logo ${index + 1}`}
                className="h-20 w-auto object-contain mx-8 filter-none dark:grayscale"
              />
            ))}
          </div>
          {/* Gradiente inferior */}
          <div className="absolute bottom-0 left-0 w-full h-72 bg-gradient-to-b from-transparent to-pink-500 pointer-events-none z-10"></div>
        </div>
      </div>
    </>
  );
};

export default HeroDetailsSection;