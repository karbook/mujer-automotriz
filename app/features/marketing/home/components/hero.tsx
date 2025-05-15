import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Container } from '@/components/ui/container'
import { motion } from "framer-motion";

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import { LoadingSpinner } from '@/components/loading-spinner'

const cardData = [
  {
    title: 'Inna Makhniboroda',
    description: 'Fundadora y Partner.',
    icon: './images/content/inna-makhniboroda.avif',
    empresa: 'Sigue Derecho / E&M Business Lawyer',
    nacionalidad: 'Russia 🇷🇺',
  },
  {
    title: 'Majo Rodriguez',
    description: 'Piloto profesional.',
    icon: './images/content/majo-rodriguez.avif',
    empresa: 'Majo Rodriguez',
    nacionalidad: 'México 🇲🇽',
  },
  {
    title: 'Naomi Fellows',
    description: 'Consejera Laboral y Titular de la Unidad Trabajo y Competitividad.',
    icon: './images/content/naomi-fellows.avif',
    empresa: 'Embajada de los Estados Unidos en México',
    nacionalidad: 'Venezuela 🇻🇪 - USA 🇺🇸',
  },
  {
    title: 'Lizeth Correa',
    description: 'DIrectora de Ventas y de Cuentas Corporativas',
    icon: './images/content/lizeth-correa.avif',
    empresa: 'CNW | Courier Network',
    nacionalidad: 'México 🇲🇽 - USA 🇺🇸',
  },
  {
    title: 'Monica Doger',
    description: 'Directora Clúster Automotriz Puebla y Tlaxcala en Cluster Automotriz Zona Centro.',
    icon: './images/content/monica-doger.avif',
    empresa: 'CLAUZ',
    nacionalidad: 'México 🇲🇽',
  },
  {
    title: 'Ana Arias',
    description: 'Directora de Marketing y Comunicaciones Corporativas.',
    icon: './images/content/ana-arias.avif',
    empresa: 'Grupo Apymsa',
    nacionalidad: 'México 🇲🇽',
  },
  {
    title: 'Claudia Marquez',
    description: 'COO.',
    icon: './images/content/claudia-marquez.avif',
    empresa: 'Genesis Motor North America',
    nacionalidad: 'México 🇲🇽 - USA 🇺🇸',
  }, {
    title: 'Katria Oviedo',
    description: 'CEO.',
    icon: './images/content/katria-oviedo.avif',
    empresa: 'Jetz',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Claudia Quintanilla',
    description: 'CEO & Co-Funder.',
    icon: './images/content/claudia-quintanilla.avif',
    empresa: 'Rextie',
    nacionalidad: 'Peru 🇵🇪',
  }, {
    title: 'Lilia Acosta',
    description: 'Fundadora y Empresaria.',
    icon: './images/content/lilia-acosta.avif',
    empresa: 'AMEXME Cápitulo Cholula',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Daniela Hernández Alvarez',
    description: 'CEO - Co-Founder',
    icon: './images/content/daniela-hernandez.avif',
    empresa: 'Earth & Life UNiversity',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Edgar Espejel',
    description: 'Socio Fundador.',
    icon: './images/content/edgar-espejel.avif',
    empresa: 'E&M Business Lawyer',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Adriana Carmona',
    description: 'CEO & Co-Founder.',
    icon: './images/content/adriana-carmona.avif',
    empresa: 'TEDI / Karbook',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Ana Arias',
    description: 'Directora de Marketing y Comunicaciones Corporativas.',
    icon: './images/content/ana-arias.avif',
    empresa: 'Grupo Apymsa',
    nacionalidad: 'México 🇲🇽',
  }, {
    title: 'Gimena Sanchez',
    description: 'Entrepreneurship Director.',
    icon: './images/content/gimena-sanchez.avif',
    empresa: 'Endeavor México',
    nacionalidad: 'México 🇲🇽',
  },
  {
    title: 'Aaron Koivunen',
    description: 'CEO & Co-Funder.',
    icon: './images/content/aaron-koivunen.avif',
    empresa: 'TEDI / Karbook',
    nacionalidad: 'Germany 🇩🇪 - Finland 🇫🇮',
  },
  {
    title: 'Hazel Guerrero Hurtado',
    description: 'Directora General.',
    icon: './images/content/hazel-guerrero.avif',
    empresa: 'BW Automotrive Motor Parts',
    nacionalidad: 'México 🇲🇽',
  },
  {
    title: 'Mariana Carmona',
    description: 'Head of HR / Sr HRBP.',
    icon: './images/content/paola-rodriguez.avif',
    empresa: 'Mercado LIbre',
    nacionalidad: 'México 🇲🇽',
  },

]
const Hero = () => {
  const { t } = useTranslation()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const handleLoad = () => setIsLoaded(true)

    if (document.readyState === 'complete') {
      setIsLoaded(true)
    } else {
      window.addEventListener('load', handleLoad)
    }

    return () => window.removeEventListener('load', handleLoad)
  }, [])

  return (
    <Container className="px-0">
      <main className="grid h-full place-items-center">
        {/* Encabezado */}
        <header className=" top-0 z-10 bg-white dark:bg-black  py-4 w-full">
          <div className="text-center px-4">
            {/* Título con degradado mejorado y animación más fluida */}
            <motion.h1
              className="text-4xl md:text-6xl lg:text-6xl font-semibold leading-snug tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#1d76db] via-[#c33acb] to-[#ea5c35] opacity-90 drop-shadow-xl animate-fadeIn"
              style={{ fontFamily: 'var(--font-inter), var(--font-poppins)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {t('Transforming the Automotive Industry in Mexico and Latin America towards greater diversity')}
            </motion.h1>

            {/* Línea decorativa debajo del título */}
            <div className="h-1 w-24 mx-auto bg-gradient-to-r from-[#2b8bf8] via-[#e14ecf] to-[#f57b4f] animate-pulse mt-2"></div>
          </div>

        </header>

        {/* Carrusel o Spinner */}
        <div className="w-full max-w-7xl mt-12 px-4 overflow-hidden">
          <div className="relative">
            {/* Capas de desvanecimiento izquierda y derecha */}
            <div className="absolute top-0 left-0 z-10 h-full w-10 bg-gradient-to-r from-[#2b8bf8] via-transparent to-transparent animate-pulse" />
            <div className="absolute top-0 right-0 z-10 h-full w-10 bg-gradient-to-l from-[#f57b4f] via-transparent to-transparent animate-pulse" />

            {!isLoaded ? (
              <div className="flex justify-center items-center h-[500px]">
                <LoadingSpinner />
              </div>
            ) : (
              <Swiper
                modules={[Autoplay]}
                loop={true}
                slidesPerView={3}
                spaceBetween={20}
                autoplay={{
                  delay: 1,
                  disableOnInteraction: false,
                }}
                speed={3000}
                allowTouchMove={false}
                breakpoints={{
                  320: { slidesPerView: 1 },
                  640: { slidesPerView: 2 },
                  1024: { slidesPerView: 3 },
                  1280: { slidesPerView: 4 },
                }}
              >
                {cardData.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div className="flex flex-col items-center justify-start p-6  bg-black/70 dark:bg-white/50 backdrop-blur-md text-white dark:text-black shadow-xl ring-1 ring-white/10 dark:ring-black/10  rounded-4xl transition duration-300 ease-in-out transform hover:scale-105 h-[530px]">
                      <img
                        src={card.icon}
                        alt={card.title}
                        className="w-full h-76 rounded-xl mb-4 object-cover"
                      />
                      <h3 className="text-2xl font-semibold text-center" style={{ fontFamily: 'var(--font-poppins)' }}>
                        {card.title}
                      </h3>
                      <p className="mt-3 text-center text-mg text-gray-200 dark:text-gray-900" style={{ fontFamily: 'var(--font-inter)' }}>
                        {card.description}
                      </p>
                      <p
                        className="text-md font-bold text-center mt-1"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        <span
                          className="font-semibold text-white/80 dark:text-black/90"
                        >
                          {card.empresa}
                        </span>
                      </p>
                      <div className="w-full flex justify-end mt-3">
                        <p className="text-sm font-semibold text-gray-200 dark:text-gray-900" style={{ fontFamily: 'var(--font-poppins-light)' }}>
                          {card.nacionalidad}
                        </p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>

      </main>
    </Container>
  )
}

export default Hero