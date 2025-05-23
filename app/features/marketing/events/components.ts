//EventMovementLeadership
export type Eventmovements = {
    title: string,
    subtitle: string,
    date: string,
    buttonText: string,
    image: string,
}
export const eventmovements: Eventmovements = {
    title: "Liderazgo en Movimiento",
    subtitle: "Gobierno de San Luís Potosí y Futuros Emprendedores",
    date: "Evento Virtual - 19 al 27 septiembre",
    buttonText: "Contactar",
    image: "/images/backgrounds-colors/background-blue.png",
};

export type ProgramHighlights = {
    title: string,
    description: string,
    borderColors: [string, string];
    buttonText?: string;

}
export const programHighlights: ProgramHighlights[] = [
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
//EventWomanSummit Constants

export type HighlightedEvents={
    title:string,
    subtitle:string,
    date:string,
    buttonText:string,
    image:string,
}
export const highlightedEvents:HighlightedEvents[]= [
    {
        title: "Cumbre Mujer Automotriz",
        subtitle: "Diversidad, Empoderamiento y Liderazgo",
        date: "Virtual - 06 Mayo 2024",
        buttonText: "Contactar",
        image: "/images/backgrounds-colors/background-yellow.png",
    },
];

export type EventSections={
    title:string,
    description:string,
    borderColors:[string,string],
    buttonText?:string,
}
export const eventSections:EventSections[] = [
    {
        title: "Sobre el evento",
        description:
            "Mujer Automotriz, en colaboración con el Gobierno de San Luís Potosí y Futuros Emprendedores, reunimos a líderes y expertos internacionales y nacionales para discutir cómo mejorar la igualdad de género en este sector. A través de sesiones interactivas y paneles de discusión, los participantes explorarán desafíos y oportunidades para mujeres en diferentes roles dentro de la industria.",
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: "Voces de liderazgo femenino",
        description:
            "Con un enfoque en la colaboración y el intercambio de ideas, el objetivo de la cumbre fue inspirar y apoyar a mujeres de todas las edades y antecedentes para perseguir y alcanzar sus objetivos profesionales en la industria automotriz.",
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: "Inspiración y apoyo colectivo",
        description:
            "El evento reunió líderes que compartieron consejos y estrategias para que más mujeres puedan desarrollarse profesionalmente en la industria.",
        borderColors: ["yellow-500", "yellow-500"],
        buttonText: "Ver ponencias",
    },
];
//EventUpcomingList
export type EventDetails={
    title:string,
    name:string,
    location:string,
    buttonText?:string,
    image:string,
}
export const eventDetails:EventDetails[] = [
  {
    title: "Eventos Próximos",
    name: "Motor Ladies Night",
    location: "CDMX - 14 Noviembre 2024",
    buttonText: "Contactar",
    image: "/images/backgrounds-colors/background-orange.png",
  },
];

export type FeaturedEvents={
    title:string,
    description:string,
    borderColors:[string,string],
    ticketPrice?:string,
    buttonText?:string,
    link?:string,
}
export const featuredEvents:FeaturedEvents[] = [
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
    buttonText: "Ser Sponsor",
    

  },
];

