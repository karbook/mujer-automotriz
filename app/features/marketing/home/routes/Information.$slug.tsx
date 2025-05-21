import { useParams } from 'react-router';
import { ambassadors } from '../constants';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { Icon } from '@/components/ui/icon';
export default function AmbassadorInformation() {
  const { slug } = useParams();
  const ambassador = ambassadors.find(a => a.slug === slug);
  const navigate = useNavigate(); // Inicializa useNavigate para poder navegar

  // Función para manejar el clic del botón de retroceso
  const handleGoBack = () => {
    navigate(-1); // Navega a la página anterior en el historial
  };

  if (!ambassador) {
    return (
      <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex justify-center items-center">
        <p className="text-center text-xl font-semibold text-red-600 dark:text-red-500">
          No se encontró el embajador con slug: <span className="font-mono">{slug}</span>
        </p>
      </section>
    );
  }

  return (
    <main className="relative min-h-screen flex flex-col lg:flex-row items-stretch gap-12 px-6 sm:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black text-black dark:text-white">

      {/* BOTÓN DE RETROCESO */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8
                   z-50 p-2 rounded-full
                   bg-gray-100 hover:bg-gray-300 text-black // Estilos para modo Light
                   dark:bg-[#f28700] dark:hover:bg-orange-600 dark:text-white // Estilos para modo Dark
                   focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition-all duration-300"
        aria-label="Volver atrás"
      >
        <Icon name="arrow-left" className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* CONTENEDOR IZQUIERDO */}
      <div className="w-full lg:w-2/3 h-[250px] lg:min-h-screen flex flex-col items-center justify-center relative space-y-6">

        {/* Imagen de fondo superior */}
        <div className="relative w-full h-full overflow-hidden flex items-start justify-center">
          <div
            className="w-full h-full bg-no-repeat dark:opacity-100 bg-cover lg:bg-contain"
            style={{
              backgroundImage: "url('/images/backgrounds-abstract/background-target.png')",
              backgroundPosition: "top center",
            }}
          ></div>

        </div>

        {/* Icono del embajador */}
        <div className="absolute top-10 w-full flex justify-center">
          <img
            src={ambassador.icon}
            alt={`Foto de ${ambassador.title}`}
            loading="lazy"
            className="w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 aspect-square rounded-2xl object-cover ring-4 ring-[#ff6700] shadow-[0_0_12px_#ff6700] hover:scale-105 hover:shadow-[0_0_20px_#ff6700] transition-all duration-500"
          />
        </div>

        {/* Imagen inferior - solo visible en pantallas grandes */}
        <div className="hidden lg:absolute lg:bottom-0 lg:left-0 lg:w-full lg:flex lg:justify-start">
          <img
            src="/images/backgrounds-abstract/background-orange.png"
            alt="Imagen adicional"
            loading="lazy"
            className="w-64 h-44 sm:w-[90%] sm:h-auto lg:w-full lg:h-auto max-w-full rounded-xl opacity-90"
          />
        </div>
      </div>

      {/* CONTENEDOR DERECHO */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center text-left animate-fadeIn space-y-6 mr-auto">

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-dark dark:text-white bg-clip-text leading-relaxed py-4 mt-6 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
          {ambassador.title}
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl text-gray-800 dark:text-gray-300 font-semibold leading-snug sm:max-w-lg lg:max-w-xl" style={{ fontFamily: 'var(--font-poppins)' }}>
          {ambassador.description}
        </p>

        <div className="mt-4 space-y-4 text-gray-800 dark:text-gray-300 text-lg sm:text-xl lg:text-2xl">
          <div className="flex items-center gap-2 font-semibold" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
            {ambassador.nationality}
          </div>

          <div className="flex items-center gap-3">
            {ambassador.company_icon && (
              <img
                src={ambassador.company_icon}
                alt={`Logo de ${ambassador.company}`}
                className="w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 rounded-2xl object-contain"
              />
            )}
            <span className='font-semibold' style={{ fontFamily: 'var(--font-SF-Pro)' }}>
              {ambassador.company}
            </span>
          </div>

          <div className="mt-6 space-y-6 text-gray-700 dark:text-gray-100 text-xl sm:text-2xl font-semibold leading-relaxed rounded-lg bg-gray-100 dark:bg-gray-800 p-6 shadow-lg" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
            {Array.isArray(ambassador.legacy) ? (
              <ul className="list-disc list-inside space-y-3 border-l-4 border-orange-500 pl-6 shadow-md">
                {ambassador.legacy.map((line, i) =>
                  line.startsWith("•") ? (
                    <li key={i} className="text-dark dark:text-white font-semibold" style={{ fontFamily: 'var(--font-SF-Pro)' }}>{line.replace("• ", "")}</li>
                  ) : (
                    <p key={i} className="mt-2">{line}</p>
                  )
                )}
              </ul>
            ) : (
              <p>{ambassador.legacy}</p>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}