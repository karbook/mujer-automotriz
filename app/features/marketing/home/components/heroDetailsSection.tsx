import * as React from 'react'
import {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose
} from '@/components/ui/sheet'

const HeroDetailsSection = () => {
  return (
    <section className="mt-24 px-6 max-w-5xl mx-auto text-center animate-fadeIn">
      <div className="bg-white dark:bg-[#0f0f0f] bg-opacity-70 dark:bg-opacity-80 backdrop-blur-md shadow-lg dark:shadow-none rounded-2xl p-10">
        {/* Imagen arriba del título */}
        <img
          src='./images/content/mujer-automotriz-logo.avif'
          alt="mujer automotriz logo" 
          className="w-full h-auto mb-6 rounded-lg shadow-md"
        />

        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#2b8bf8] via-[#e14ecf] to-[#f57b4f]">
          Pioneros en la primera red internacional de mujeres en la industria automotriz en América Latina
        </h2>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
          Promovemos el liderazgo inclusivo y somos la plataforma que impulsa el liderazgo femenino y la innovación en la región.
        </p>

        <div className="mt-10 border-t pt-8 border-gray-300 dark:border-gray-700">
          <h3 className="text-2xl font-semibold mb-2 text-[#1d156c] dark:text-white">
            ORGANIZADORES
          </h3>
          <p className="text-md text-gray-600 dark:text-gray-400 max-w-xl mx-auto" style={{ fontFamily: 'var(--font-poppins)' }}>
            Sé parte de quienes han hecho posible esta red de líderes que transforman la industria automotriz desde la inclusión y la equidad.
          </p>

          <div className="mt-6 flex justify-center">
            {/* Sheet es el contenedor principal */}
            <Sheet>
              {/* SheetTrigger para abrir el panel */}
              <SheetTrigger asChild>
                <button className="px-6 py-3 text-white bg-gradient-to-r from-[#2b8bf8] via-[#e14ecf] to-[#f57b4f] rounded-full font-semibold shadow-md hover:scale-105 transition-transform">
                  Conviértete en Organizador
                </button>
              </SheetTrigger>

              {/* Panel deslizante (Sheet) */}
              <SheetPortal>
                <SheetOverlay />
                <SheetContent side="right">
                  <SheetHeader>
                    <SheetTitle>Formulario de Organización</SheetTitle>
                    <SheetDescription>
                      Ingresa tus datos para convertirte en organizador.
                    </SheetDescription>
                  </SheetHeader>

                  <div className="mt-4">
                    {/* Aquí puedes poner un formulario o cualquier contenido adicional */}
                    <p className="text-lg">Formulario de inscripción aquí...</p>
                  </div>

                  <SheetFooter>
                    <SheetClose asChild>
                      <button className="px-4 py-2 text-white bg-[#f57b4f] rounded-lg">Cerrar</button>
                    </SheetClose>
                  </SheetFooter>
                </SheetContent>
              </SheetPortal>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroDetailsSection
