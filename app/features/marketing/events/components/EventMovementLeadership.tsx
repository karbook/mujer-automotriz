import { Button } from '@/components/ui/button';
import { eventmovements } from '../components';
import { programHighlights } from '../components';
import { Link } from 'react-router';
export function EventMovementLeadership() {
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
          <h2 className="text-4xl font-bold mb-6">{eventmovements.title}</h2>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{eventmovements.subtitle}</h3>
            <p className="text-lg mb-4">{eventmovements.date}</p>
            <div className="flex justify-left gap-4">
              <Button variant="black" className="px-8 py-6 text-base group">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  {eventmovements.buttonText}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-blue-500">
          {programHighlights.map((programHighlight, index) => (
            // Agregamos flex y flex-col aquí para que el contenido empuje los botones hacia abajo
            <div
              key={index}
              className="relative p-10 border-t border-blue-500 hover:bg-[#043b5f] group min-h-[300px] flex flex-col" // Añadimos flex flex-col
            >
              <div
                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent ${programHighlight.borderColors[0] ? `via-${programHighlight.borderColors[0]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />
              <div className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent ${programHighlight.borderColors[1] ? `via-${programHighlight.borderColors[1]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`} />

              <h2 className="text-4xl font-bold mb-4 text-black dark:text-white group-hover:text-white transition-colors duration-300">
                {programHighlight.title}
              </h2>
              <p className="mb-6 text-lg max-w-4xl group-hover:text-white transition-colors duration-300">
                {programHighlight.description}
              </p>

              {/* Contenedor de botones: solo se renderiza si es el último elemento */}
              {index === programHighlights.length - 1 && (
                <div className="mt-auto flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-start sm:items-end justify-start sm:justify-end">
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform" target="_blank" rel="noopener noreferrer">

                    {programHighlight.buttonText && (

                      <Button
                        variant="blackTransparent"
                        className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                      >
                        Ver Ponencias
                      </Button>

                    )}
                  </a>

                  {/* Nuevo botón */}
                  <Button
                        variant="blackTransparent"
                        className="px-4 py-2 font-bold rounded-3xl text-black border-black group-hover:text-white group-hover:border-gray-400 transition-colors duration-300 w-full sm:w-auto"
                      >
                    Conocer Mas
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};