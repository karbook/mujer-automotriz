import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerDescription,
  // DrawerFooter // You imported this but aren't using it, can remove if not needed
} from '@/components/ui/drawer';
import { Link } from "react-router"; // Assuming this is react-router-dom Link

import { eventDetails, featuredEvents } from '../components';

export function EventUpcomingList() {
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
          <div className="max-w-lg text-center sm:text-left">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 sm:mb-6">Descubre, Conecta, Destaca</h1>
            <p className="text-lg sm:text-xl">
              Sé parte de la comunidad de Mujer Automotriz donde cada evento es más que una simple reunión, es un hito en tu trayectoria profesional.
            </p>
          </div>
        </div>
      </section>

      {eventDetails.map((eventDetail, index) => (
        <section key={index} className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
          <div
            className="bg-black/60 rounded-3xl p-10 text-left w-full min-h-[400px]"
            style={{
              backgroundImage: `url('${eventDetail.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2 className="text-4xl font-bold mb-6">{eventDetail.title}</h2>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">{eventDetail.name}</h3>
              <p className="text-lg mb-4">{eventDetail.location}</p>
              <div className="flex justify-left gap-4">
                <Button variant="black" className="px-8 py-6 text-base group">
                  <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    {eventDetail.buttonText}
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="max-w-7xl mx-auto px-4">
        <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-pink-500">
          {featuredEvents.map((featuredEvent, index) => (
            <div
              key={index}
              className="relative p-10 border-t border-pink-500 hover:bg-[#2d0a1f] group min-h-[300px]"
            >
              <div
                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent via-${featuredEvent.borderColors[0]} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
              ></div>

              <div
                className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent via-${featuredEvent.borderColors[1]} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}
              ></div>

              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                {featuredEvent.title}
              </h2>
              <p className="mb-6 text-lg max-w-4xl group-hover:text-white transition-colors duration-300">
                {featuredEvent.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-6 sm:mt-0 sm:absolute sm:bottom-10 sm:right-10 w-full sm:w-auto items-start sm:items-center sm:justify-end">

                {featuredEvent.buttonText && (
                  // Always link to /sponsor if buttonText exists
                  <Link to='/sponsor' className="w-full sm:w-auto">
                    <Button
                      variant="blackTransparent"
                      className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full"
                    >
                      {featuredEvent.buttonText}
                    </Button>
                  </Link>
                )}

                {featuredEvent.ticketPrice && (
                  <Drawer>
                    <DrawerTrigger asChild>
                     <Button
                        variant="blackTransparent"
                        className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                      >
                        Comprar Tickets
                      </Button>
                    </DrawerTrigger>

                    <DrawerContent className="flex flex-col dark:bg-[#08090a] items-center justify-center text-center py-14 px-8">
                      <DrawerHeader>
                        <DrawerTitle className="text-4xl font-semibold text-black-500 dark:text-white" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                          Este evento ha finalizado
                        </DrawerTitle>
                        <DrawerDescription className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                          Detalles e información sobre este evento concluido.
                        </DrawerDescription>
                      </DrawerHeader>
                      <p className="text-2xl text-gray-600 dark:text-gray-300 mt-6 max-w-lg" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                        Este evento ya no está disponible. Fue una experiencia única donde expertos discutieron innovación, tecnología y liderazgo en la industria automotriz.
                      </p>
                      <p className="text-2xl text-gray-600 dark:text-gray-300 mt-6 max-w-lg" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
                        ¡No te preocupes! Pronto habrá más eventos similares. Mantente atento a nuestras próximas fechas.
                      </p>
                      <DrawerClose asChild>
                        <Button variant="blackTransparent" className="mt-8 text-xl text-black px-6 py-3 dark:hover:bg-gray-800">
                          Cerrar
                        </Button>
                      </DrawerClose>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}