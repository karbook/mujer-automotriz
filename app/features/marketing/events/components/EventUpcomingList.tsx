import { Button } from '@/components/ui/button';

const events = [
  {
    title: "Eventos Próximos",
    name: "Motor Ladies Night",
    location: "CDMX - 14 Noviembre 2024",
    buttonText: "Contactar",
    image: "/images/backgrounds-colors/background-orange.png",
  },
];

const sections = [
  {
    title: "Sobre el evento",
    description:
      "Motor Ladies Night es una velada exclusiva para mujeres líderes de la industria automotriz. Más allá del networking, vivirás una experiencia íntima y sofisticada. Disfruta de cócteles, bocadillos y tres ponencias breves con ideas poderosas para impulsar el cambio.",
    borderColors: ["pink-500", "pink-500"],
  },
  {
    title: "Mujer Automotriz: Comunidad de Líderes",
    description:
      "Impulsa conversaciones que transformen la industria. Únete a la presentación de la primera red enfocada en liderazgo inclusivo y diversidad automotriz. Mujer Automotriz conecta, inspira e impulsa a mujeres líderes en el sector.",
    borderColors: ["pink-500", "pink-500"],
  },
  {
    title: "Tu pase incluye",
    description:
      "Gastronomía gourmet, bebidas selectas y un ambiente diseñado para conectar. Todo por $92 USD por ticket.",
    borderColors: ["pink-500", "pink-500"],
    ticketPrice: "$92 USD por ticket",
    buttonText: "Comprar Tickets",

  },
];

export default function EventUpcomingList() {
  return (
    <>
      <section
        className="relative px-4 sm:px-6 py-20 sm:py-32 lg:py-40 text-white"
        style={{
          backgroundImage: 'url(/images/events-photograph/comunity.avif)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-full sm:max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">

          {/* Contenedor de Texto */}
          <div className="max-w-lg text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 sm:mb-6">Descubre, Conecta, Destaca</h1>
            <p className="text-lg sm:text-xl">
              Sé parte de la comunidad de Mujer Automotriz donde cada evento es más que una simple reunión, es un hito en tu trayectoria profesional.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-6 sm:mt-0">
            <Button
              variant="blackTransparent"
              className="px-6 py-3 text-lg font-bold rounded-3xl text-white border-gray-400 border hover:text-white hover:border-gray-400 transition-colors duration-300"
            >
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                Empezar
              </span>
            </Button>

            <Button
              variant="blackTransparent"
              className="px-6 py-3 text-lg font-bold rounded-3xl text-white border-gray-400 border hover:text-white hover:border-gray-400 transition-colors duration-300"
            >
              Leer más
            </Button>
          </div>

        </div>
      </section>


      {events.map((event, index) => (
        <section key={index} className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
          <div
            className="bg-black/60 rounded-3xl p-10 text-left w-full min-h-[400px]"
            style={{
              backgroundImage: `url('${event.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-4xl font-bold mb-6">{event.title}</h2>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{event.name}</h3>
              <p className="text-lg mb-4">{event.location}</p>
              <div className="flex justify-left gap-4">
                <Button variant="black" className="px-8 py-6 text-base group">
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    {event.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-7xl mx-auto px-4">
        <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-pink-500">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative p-10 border-t border-pink-500 hover:bg-[#2d0a1f] group min-h-[300px]"
            >
              <div
                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent via-${section.borderColors[0]} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
              ></div>

              <div
                className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-${section.borderColors[1]} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
              ></div>

              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                {section.title}
              </h2>
              <p className="mb-6 text-lg max-w-4xl group-hover:text-white transition-colors duration-300">
                {section.description}
              </p>
              {section.buttonText && (
                <Button
                  variant="blackTransparent"
                  className="absolute top-4 right-4 px-4 py-2 top-15 right-16 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300"
                >
                  {section.buttonText}
                </Button>
              )}

              {section.ticketPrice && (
                <p className="mt-4 text-lg font-bold text-pink-500 group-hover:text-white transition-colors duration-300">
                  {section.ticketPrice}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
