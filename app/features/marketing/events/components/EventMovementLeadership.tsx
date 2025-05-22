import { Button } from '@/components/ui/button';

const eventData = {
  title: "Liderazgo en Movimiento",
  subtitle: "Gobierno de San Luís Potosí y Futuros Emprendedores",
  date: "Evento Virtual - 19 al 27 septiembre",
  buttonText: "Contactar",
  image: "/images/backgrounds-colors/background-blue.png",
};
const sections = [
  {
    title: "Sobre el evento",
    description:
      "Mujer Automotriz, en colaboración con el Gobierno de San Luís Potosí y Futuros Emprendedores, reunimos a líderes y expertos internacionales y nacionales para discutir cómo mejorar la igualdad de género en este sector. A través de sesiones interactivas y paneles de discusión, los participantes explorarán desafíos y oportunidades para mujeres en diferentes roles dentro de la industria.",
    borderColors: ["blue-500", "blue-500"],
  },
  {
    title: "Historias que inspiran",
    description:
      "Mujeres líderes que hablaron de sus éxitos en la industria automotriz, compartiendo sus experiencias y consejos para superar obstáculos y avanzar en sus carreras.",
    borderColors: ["blue-500", "blue-500"],
  },
  {
    title: "Impulsando el cambio",
    description:
      "Con un enfoque en la colaboración y el intercambio de ideas, el objetivo de la cumbre fue inspirar y apoyar a mujeres de todas las edades y antecedentes para perseguir y alcanzar sus objetivos profesionales en la industria automotriz.",
    borderColors: ["blue-500", "blue-500"],
    buttonText: "Ver ponencias",
  },
];

export default function EventSection () {
  return (
    <>
      <section className="max-w-7xl mx-auto px-4 py-20 relative min-h-[500px] text-white">
        <div
          className="bg-black/60 rounded-3xl p-10 text-left w-full min-h-[400px]"
          style={{
            backgroundImage: `url('${eventData.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="text-4xl font-bold mb-6">{eventData.title}</h2>
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-2">{eventData.subtitle}</h3>
            <p className="text-lg mb-4">{eventData.date}</p>
            <div className="flex justify-left gap-4">
              <Button variant="black" className="px-8 py-6 top-15 right-16 text-base group">
                <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                  {eventData.buttonText}
                </span>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4">
        <div className="relative shadow-lg overflow-hidden rounded-3xl bg-white dark:bg-black text-black dark:text-white border border-blue-500">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative p-10 border-t border-blue-500 hover:bg-[#043b5f] group min-h-[300px]"
            >
              <div
                className={`absolute inset-x-1/4 top-0 h-[4px] bg-gradient-to-r from-transparent ${section.borderColors[0] ? `via-${section.borderColors[0]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}/>
              <div className={`absolute inset-x-1/4 bottom-0 h-[4px] bg-gradient-to-r from-transparent ${section.borderColors[1] ? `via-${section.borderColors[1]}` : "via-blue-500"} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300`}/>
              
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
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

