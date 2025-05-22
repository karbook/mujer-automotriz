export type Roles = {
    title: string;
    description: string;
    bgColor: string;
    icon: string;

};
export const roles: Roles[] = [
    {
        title: "Promover la diversidad",
        description: "Defender la inclusión y equidad de género en el sector automotriz.",
        icon: "handshake",
        bgColor: "text-indigo-400",
    },
    {
        title: "Representar el programa",
        description: "Ser la voz y la cara del programa en diferentes plataformas y foros.",
        icon: "presentation",
        bgColor: "text-pink-400",
    },
    {
        title: "Inspirar confianza",
        description: "Actuar como modelo a seguir, motivando a otras mujeres a superar desafíos.",
        icon: "shield-check",
        bgColor: "text-green-400",
    },
    {
        title: "Impulsar la innovación",
        description: "Colaborar en la creación de nuevas ideas y enfoques dentro de la industria.",
        icon: "lightbulb",
        bgColor: "text-yellow-400",
    },
    {
        title: "Impacto en la industria",
        description: "Ser parte de un movimiento que promueve la diversidad e inclusión.",
        icon: "factory",
        bgColor: "text-gray-400",
    },
    {
        title: "Facilitar el aprendizaje continuo",
        description: "Compartir conocimientos y recursos actualizados.",
        icon: "book-open",
        bgColor: "text-purple-400",
    },
    {
        title: "Acompañar en la toma de decisiones",
        description: "Brindar consejos estratégicos basados en la experiencia personal.",
        icon: "brain",
        bgColor: "text-blue-400",
    },
    {
        title: "Comprometerse con el programa",
        description: "Participar activamente en eventos y actividades de la comunidad.",
        icon: "calendar-check",
        bgColor: "text-teal-400",
    },
    {
        title: "Fomentar el crecimiento profesional",
        description: "Ayudar a la comunidad a alcanzar sus metas profesionales.",
        icon: "trending-up",
        bgColor: "text-red-400",
    },
    {
        title: "Construir redes sólidas",
        description: "Conectar a los miembros de la red con una comunidad profesional valiosa.",
        icon: "network",
        bgColor: "text-cyan-400",
    }
];



export type Collaborators = {
    title: string,
    description: string,
    bgColor: string,
    icon: string,

}

export const collaborators: Collaborators[] = [
    {
        title: "Desarrollo de habilidades",
        description: "Mejorar tus capacidades profesionales y personales.",
        bgColor: "text-red-500",
        icon: "brain", // Representa el desarrollo cognitivo y profesional
    },
    {
        title: "Construcción de redes",
        description: "Conectar con mujeres influyentes y profesionales del sector automotriz.",
        bgColor: "text-cyan-500",
        icon: "network", // Conexión y redes profesionales
    },
    {
        title: "Inspiración y motivación",
        description: "Recibir apoyo constante para superar desafíos.",
        bgColor: "text-yellow-500",
        icon: "sun", // Inspiración, motivación y energía positiva
    },
    {
        title: "Aprendizaje continuo",
        description: "Participar en talleres, charlas y actividades que impulsan tu crecimiento.",
        bgColor: "text-purple-500",
        icon: "book-open", // Educación y formación constante
    },
    {
        title: "Perspectivas estratégicas",
        description: "Obtener consejos y estrategias para avanzar en tu carrera.",
        bgColor: "text-blue-500",
        icon: "compass", // Dirección y toma de decisiones estratégicas
    },
    {
        title: "Participación activa",
        description: "Contribuir con ideas y recibir retroalimentación constructiva.",
        bgColor: "text-orange-500",
        icon: "message-circle", // Colaboración, discusión y retroalimentación
    },
    {
        title: "Creación de objetivos claros",
        description: "Establecer metas profesionales concretas y alcanzables.",
        bgColor: "text-teal-500",
        icon: "target", // Establecimiento de metas y objetivos estratégicos
    },
    {
        title: "Crecimiento personal",
        description: "Desarrollar confianza y autoconocimiento en un entorno de apoyo.",
        bgColor: "text-red-500",
        icon: "heart", // Autoconocimiento, crecimiento y bienestar
    },
    {
        title: "Impacto en la industria",
        description: "Ser parte de un movimiento que promueve la diversidad e inclusión en el sector automotriz.",
        bgColor: "text-gray-500",
        icon: "factory", // Representa el sector automotriz
    },
    {
        title: "Acceso a mentoría personalizada",
        description: "Recibir orientación de una líder experimentada en la industria.",
        bgColor: "text-emerald-500",
        icon: "user-check", // Mentoría y guía profesional
    }
];

export type Benefits ={
    icon:string,
    title:string,
    description:string,
    bgColor:string,

}


export const benefits:Benefits[] = [
    {
        icon: "book-open",
        title: "Clases Magistrales",
        description: "Acceso continuo a clases sobre liderazgo, desarrollo personal, digitalización y procesos.",
        bgColor: "text-blue-500",
    },
    {
        icon: "trending-up",
        title: "Desarrollo Profesional",
        description: "Recursos gratuitos y comunidad de empoderamiento mutuo para fortalecer tu carrera.",
        bgColor: "text-green-500",
    },
    {
        icon: "users",
        title: "Comunidad de Apoyo",
        description: "Red de Mujeres Automotrices y expertos para compartir dudas, experiencias y consejos.",
        bgColor: "text-purple-500",
    },
    {
        icon: "graduation-cap",
        title: "Acceso a Becas",
        description: "Descuentos y oportunidades en productos y servicios especializados.",
        bgColor: "text-yellow-500",
    }
];