import { useParams } from 'react-router';
import { ambassadors } from '../constants';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@/components/ui/icon';

export default function AmbassadorInformation() {
  const { slug } = useParams();
  const ambassador = ambassadors.find(a => a.slug === slug);
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
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
    // 'gap-0 lg:gap-12' para asegurar el espacio mínimo en móvil
    <main className="relative min-h-screen flex flex-col lg:flex-row items-stretch gap-0 lg:gap-12 px-0 sm:px-12 lg:px-24 overflow-hidden bg-white dark:bg-black text-black dark:text-white">

      {/* BOTÓN DE RETROCESO */}
      <button
        onClick={handleGoBack}
        className="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8
                   z-50 p-2 rounded-full
                   bg-gray-100 hover:bg-gray-300 text-black
                   dark:bg-[#f28700] dark:hover:bg-orange-600 dark:text-white
                   focus:outline-none focus:ring-2 focus:ring-[#ff6700] transition-all duration-300"
        aria-label="Volver atrás"
      >
        <Icon name="arrow-left" className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* CONTENEDOR IZQUIERDO */}
      {/* Reducimos pb-20 a pb-0 para móvil, y lo mantenemos en desktop */}
      <div className="w-full lg:w-2/3 h-auto lg:min-h-screen flex flex-col items-center justify-start relative space-y-6 lg:space-y-0 pb-0 lg:pb-0">

        {/* Imagen de fondo superior (visible en todas las vistas) */}
        <div className="absolute top-0 left-0 w-full h-[300px] sm:h-[400px] lg:h-full overflow-hidden">
          <div
            className="w-full h-full bg-no-repeat dark:opacity-100 bg-cover lg:bg-contain"
            style={{
              backgroundImage: "url('/images/backgrounds-abstract/background-target.png')",
              backgroundPosition: "top center",
            }}
          ></div>
        </div>

        {/* Icono del embajador - Z-index alto para que esté encima de las imágenes de fondo */}
        <div className="z-10 mt-20 sm:mt-24 lg:mt-32 w-full flex justify-center">
          <img
            src={ambassador.icon}
            alt={`Foto de ${ambassador.title}`}
            loading="lazy"
            className="w-52 h-52 sm:w-64 sm:h-64 lg:w-96 lg:h-96 aspect-square rounded-2xl object-cover ring-4 ring-[#ff6700] shadow-[0_0_12px_#ff6700] hover:scale-105 hover:shadow-[0_0_20px_#ff6700] transition-all duration-500"
          />
        </div>

        {/* Imagen inferior (SOLO visible en pantallas grandes - lg y superiores) */}
        <div className="hidden lg:flex w-full justify-start mt-auto pt-20">
          <img
            src="/images/backgrounds-abstract/background-orange.png"
            alt="Imagen adicional"
            loading="lazy"
            className="w-full h-auto max-w-full rounded-xl opacity-90 object-cover"
          />
        </div>
      </div>

      {/* CONTENEDOR DERECHO */}
      {/* Reducimos el mt del h1, o lo quitamos si queremos que el texto esté aún más cerca.
          Puedes ajustar este 'mt-0' a 'mt-4' o 'mt-8' si necesitas un poco de espacio en móvil.
          También mantén el px-6 para el padding horizontal del contenido en móvil.
      */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center text-left animate-fadeIn space-y-6 mr-auto px-6 sm:px-0">

        {/* CAMBIO AQUÍ: Reducimos 'mt-6' a 'mt-0' para móvil, y lo reintroducimos para desktop */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-wider text-dark dark:text-white bg-clip-text leading-relaxed py-4 mt-0 lg:mt-6 mb-4" style={{ fontFamily: 'var(--font-poppins)' }}>
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