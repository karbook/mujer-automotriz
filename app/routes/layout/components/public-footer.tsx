import { Button } from '@/components/ui/button'

export function Footer() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url(./images/fondos/fondo-gradient.png)' }}
    >
      <footer className="relative bg-white/0 dark:bg-black/10 text-[#1d156c] dark:text-white py-20 px-6 backdrop-blur-md overflow-hidden">
        
        {/* Gradiente superior para desvanecido */}
        <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white dark:from-black to-transparent z-0" />

        {/* Contenido del footer */}
        <div className="relative z-10 max-w-6xl mx-auto grid gap-12 md:grid-cols-2 items-start">
          {/* Columna izquierda */}
          <div className="space-y-5 text-center md:text-left">
            <h3 className="text-4xl font-extrabold leading-tight">
              Colaboremos
            </h3>
            <p className="text-lg text-gray-700 font-semibold dark:text-gray-300 max-w-md">
              ¿Tienes un proyecto que empodera a las mujeres en esta industria? Háblanos y hagámoslo realidad juntas.
            </p>

            <div>
              <Button variant="black" className="px-8 py-6 text-base group">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
                  Contactar
                </span>
              </Button>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="text-sm text-white dark:text-gray-400 flex flex-col items-center md:items-end">
            <p className="mb-1">
              ©2023 <span className="font-semibold text-[#1d156c] dark:text-white">tedi.club</span>
            </p>
            <p className="italic">Fundado con pasión en un sauna finlandés</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
