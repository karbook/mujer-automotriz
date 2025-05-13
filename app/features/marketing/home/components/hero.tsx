import React from 'react'

// UTILS
import { useTranslation } from 'react-i18next'

// COMPONENTS
import { Container } from '@/components/ui/container'

// Datos de ejemplo para las tarjetas
const cardData = [
  {
    title: 'Innovación en Tecnología',
    description: 'Liderando el camino con soluciones tecnológicas avanzadas para el sector automotriz.',
    icon: '/images/icons/technology.svg',
  },
  {
    title: 'Sostenibilidad',
    description: 'Compromiso con el medio ambiente y la sostenibilidad en la producción y distribución.',
    icon: '/images/icons/sustainability.svg',
  },
  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },
  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },  {
    title: 'Diversidad e Inclusión',
    description: 'Promoviendo una cultura inclusiva que abra oportunidades a todos en la industria.',
    icon: '/images/icons/diversity.svg',
  },
]

const Hero = () => {
  const { t } = useTranslation()

  return (
    <Container className="px-0">
      <main className="grid h-full place-items-center">
        {/* Header fijo en la parte superior */}
        <header className="sticky top-0 z-10 bg-white shadow-md py-4">
          <div className="text-center">
            <h1 className="text-4xl font-semibold text-foreground">
              Transformando la Industria Automotriz en México y Latinoamérica hacia una mayor diversidad
            </h1>
            <p className="text-xl text-muted-foreground mt-4">{t('Welcome')}</p>
          </div>
        </header>

        {/* Contenido principal */}
        <div className="grid place-items-center px-4 py-16 xl:grid-cols-2 xl:gap-24">
          {/* Texto adicional o sección que quieras añadir aquí */}
        </div>

        {/* Tarjetas con información debajo del texto */}
        <div className="mt-16 xl:mt-0 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 px-4">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-6 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105"
            >
              <img src={card.icon} alt={card.title} className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold text-foreground">{card.title}</h3>
              <p className="mt-2 text-muted-foreground text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </main>
    </Container>
  )
}

export default Hero
