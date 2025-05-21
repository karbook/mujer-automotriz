import { Button } from "@/components/ui/button";
import { FaUsers, FaHandshake, FaLightbulb, FaNetworkWired } from "react-icons/fa";

const roles = [
  {
    icon: <FaUsers className="h-12 w-12 mx-auto text-indigo-500 mb-4" />,
    titulo: "Desarrollo de habilidades",
    descripcion: "Mejorar tus capacidades profesionales y personales.",
    bgColor: "bg-indigo-500",
    borderColor: "border-indigo-400",
    hoverEffect: "hover:bg-indigo-600 hover:border-indigo-700",
  },
  {
    icon: <FaNetworkWired className="h-12 w-12 mx-auto text-cyan-500 mb-4" />,
    titulo: "Construcción de redes",
    descripcion: "Conectar con mujeres influyentes y profesionales del sector automotriz.",
    bgColor: "bg-cyan-500",
    borderColor: "border-cyan-400",
    hoverEffect: "hover:bg-cyan-600 hover:border-cyan-700",
  },
  {
    icon: <FaHandshake className="h-12 w-12 mx-auto text-green-500 mb-4" />,
    titulo: "Inspirar confianza",
    descripcion: "Actuar como modelo a seguir, motivando a otras mujeres a superar desafíos.",
    bgColor: "bg-green-500",
    borderColor: "border-green-400",
    hoverEffect: "hover:bg-green-600 hover:border-green-700",
  },
  {
    icon: <FaLightbulb className="h-12 w-12 mx-auto text-yellow-500 mb-4" />,
    titulo: "Inspiración y motivación",
    descripcion: "Recibir apoyo constante para superar desafíos.",
    bgColor: "bg-yellow-500",
    borderColor: "border-yellow-400",
    hoverEffect: "hover:bg-yellow-600 hover:border-yellow-700",
  },
  {
    icon: <FaHandshake className="h-12 w-12 mx-auto text-pink-500 mb-4" />,
    titulo: "Representar el programa",
    descripcion: "Ser la voz y la cara del programa en diferentes plataformas, promoviendo sus valores y objetivos.",
    bgColor: "bg-pink-500",
    borderColor: "border-pink-400",
    hoverEffect: "hover:bg-pink-600 hover:border-pink-700",
  },
  {
    icon: <FaNetworkWired className="h-12 w-12 mx-auto text-purple-500 mb-4" />,
    titulo: "Aprendizaje continuo",
    descripcion: "Participar en talleres, charlas y actividades que impulsan tu crecimiento.",
    bgColor: "bg-purple-500",
    borderColor: "border-purple-400",
    hoverEffect: "hover:bg-purple-600 hover:border-purple-700",
  },
  {
    icon: <FaUsers className="h-12 w-12 mx-auto text-blue-500 mb-4" />,
    titulo: "Perspectivas estratégicas",
    descripcion: "Obtener consejos y estrategias para avanzar en tu carrera.",
    bgColor: "bg-blue-500",
    borderColor: "border-blue-400",
    hoverEffect: "hover:bg-blue-600 hover:border-blue-700",
  },
  {
    icon: <FaLightbulb className="h-12 w-12 mx-auto text-orange-500 mb-4" />,
    titulo: "Participación activa",
    descripcion: "Contribuir con ideas y recibir retroalimentación constructiva.",
    bgColor: "bg-orange-500",
    borderColor: "border-orange-400",
    hoverEffect: "hover:bg-orange-600 hover:border-orange-700",
  },
  {
    icon: <FaHandshake className="h-12 w-12 mx-auto text-teal-500 mb-4" />,
    titulo: "Creación de objetivos claros",
    descripcion: "Establecer metas profesionales concretas y alcanzables.",
    bgColor: "bg-teal-500",
    borderColor: "border-teal-400",
    hoverEffect: "hover:bg-teal-600 hover:border-teal-700",
  },
  {
    icon: <FaUsers className="h-12 w-12 mx-auto text-red-500 mb-4" />,
    titulo: "Crecimiento personal",
    descripcion: "Desarrollar confianza y autoconocimiento en un entorno de apoyo.",
    bgColor: "bg-red-500",
    borderColor: "border-red-400",
    hoverEffect: "hover:bg-red-600 hover:border-red-700",
  },
  {
    icon: <FaNetworkWired className="h-12 w-12 mx-auto text-gray-500 mb-4" />,
    titulo: "Impacto en la industria",
    descripcion: "Ser parte de un movimiento que promueve la diversidad e inclusión en el sector automotriz.",
    bgColor: "bg-gray-500",
    borderColor: "border-gray-400",
    hoverEffect: "hover:bg-gray-600 hover:border-gray-700",
  },
  {
    icon: <FaLightbulb className="h-12 w-12 mx-auto text-emerald-500 mb-4" />,
    titulo: "Acceso a mentoría personalizada",
    descripcion: "Recibir orientación de una líder experimentada en la industria.",
    bgColor: "bg-emerald-500",
    borderColor: "border-emerald-400",
    hoverEffect: "hover:bg-emerald-600 hover:border-emerald-700",
  },
];
export default function Hero() {
  return (
    <>
      <section className="w-full text-white relative">
        {/* Imagen de fondo */}
        <img
          src="/images/images-programs/fondo-programs.png"
          alt="Evento Liderazgo en Movimiento"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay oscuro para mejorar legibilidad */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Contenido */}
        <div className="relative px-8 py-24 max-w-screen-xl mx-auto">
          {/* Título */}
          <h1 className="text-6xl font-extrabold mt-10 mb-20 text-left drop-shadow-lg" style={{ fontFamily: 'var(--font-SF-Pro)' }}>
            Mujer Automotriz
          </h1>
          <h2 className="text-7xl font-extrabold mb-6 text-left drop-shadow-lg" style={{ fontFamily: 'var(--font-poppins)' }}>
            Únete y sé parte de la redkajslkjalkjslk
          </h2>

          {/* Descripción */}
          <p className="text-lg max-w-4xl mb-10 text-left text-justify" style={{ fontFamily: 'var(--font-inter)' }}>
            ¿Te gustaría formar parte de una red de líderes de la industria automotriz comprometidos con tu crecimiento profesional y éxito?
          </p>

          {/* Información adicional sin fondo transparente */}
          <div className="p-4 rounded-xl max-w-5xl text-justify bg-transparent">
            <h3 className="text-3xl font-bold mb-4">Vuélvete una Mujer Automotriz</h3>
            <p className="text-xl leading-relaxed" style={{ fontFamily: 'var(--font-inter)' }}>
              Únete a una red de líderes de la industria comprometidos con tu crecimiento profesional y éxito. Este programa ofrece una oportunidad única para recibir orientación personalizada, adquirir conocimientos clave y desarrollar habilidades críticas que te ayudarán a alcanzar tus metas.
              <br /><br />
              A través de mentorías estratégicas, formarás parte de una comunidad que impulsa el liderazgo inclusivo y fomenta la innovación en la industria automotriz. Maximiza tu impacto y avanza en tu carrera con el apoyo de mentores experimentados y exitosos.
            </p>
          </div>
          {/* Botones de acción con más espacio arriba */}
          <div className="flex flex-wrap gap-6 left:12 mt-5 ">
            <Button variant="blackTransparent" className="bg-white/10 text-white px-6 py-3 hover:bg-black/40 hover:text-white rounded-full transition-all">
              Me interesa ser Embajadora
            </Button>
            <Button variant="blackTransparent" className="bg-black/40 text-white px-6 py-3 hover:bg-white/20 hover:text-black rounded-full transition-all">
              Me interesa ser Aprendiz
            </Button>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20 mt-10 mb-10 text-black dark:text-white relative">
        {/* Contenedor de fondo dinámico según modo */}
        <div className="absolute inset-0 bg-gray-100 dark:bg-[#31021e] rounded-3xl shadow-lg"></div>

        {/* Contenido dentro del fondo */}
        <div className="grid grid-cols-2 items-center gap-16">
          {/* Contenido original en el lado izquierdo con ajustes */}
          <div className="max-w-lg text-left pr-12 z-10">
            <h2 className="text-5xl font-extrabold mb-6">
              Únete y sé parte de la <span className="text-blue-500 dark:text-pink-500">Red</span>
            </h2>
            <p className="text-lg max-w-md mb-6 text-black dark:text-white">
              Ahorra tiempo y dinero automatizando la gestión de tu crecimiento profesional en la industria automotriz.
            </p>
            <p className="text-lg max-w-md text-black dark:text-white">
              Accede a una comunidad de líderes que impulsa el desarrollo profesional con mentorías, recursos estratégicos y oportunidades exclusivas.
            </p>
          </div>

          {/* Sección sobre "Embajadora" en el lado derecho */}
          <div className="max-w-lg p-10 rounded-2xl bg-gradient-to-b dark:from-black/30 dark:to-black/50 dark:border-white/20  transition-all duration-300 text-center relative z-10">
            {/* Imagen más grande */}
            <img
              src="/images/images-programs/woman-program.png"
              alt="Embajadora"
              className="h-76 w-76 mx-auto rounded-full drop-shadow-xl"
            />
            <h3 className="text-4xl font-bold text-black dark:text-white mt-8">Embajadora</h3>
          </div>

        </div>



        {/* Iteración para generar tarjetas dinámicamente */}
        <div className="relative mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {roles.map((rol, index) => (
            <div key={index} className="bg-white dark:bg-black/20 p-6 rounded-lg text-center border border-gray-300 dark:border-white/20 hover:shadow-md transition-all duration-300 
        hover:bg-gray-200 dark:hover:bg-[#590539] hover:border-purple-300">
              {rol.icon}
              <h3 className="text-3xl font-bold">{rol.titulo}</h3>
              <p className="text-lg">{rol.descripcion}</p>
            </div>
          ))}
        </div>
      </section>
    </>

  );
}
