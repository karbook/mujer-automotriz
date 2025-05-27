import type { IconName } from "@/components/ui/icon";

export type Sponsorships ={
    icon:IconName,
    title:string,
    description:string,
    bgColor:string,

}
export const sponsorships: Sponsorships[] = [
    {
        icon: "megaphone",
        title: "Visibilidad y Posicionamiento",
        description: "Aumenta la presencia de tu marca en la industria automotriz.",
        bgColor: "text-green-400",
    },
    {
        icon: "users",
        title: "Promoción de la Diversidad",
        description: "Apoya activamente la inclusión y la equidad de género en el sector.",
        bgColor: "text-green-400",
    },
    {
        icon: "briefcase",
        title: "Acceso a Talento",
        description: "Conéctate con líderes y profesionales emergentes del sector.",
        bgColor: "text-green-400",
    },
    {
        icon: "handshake",
        title: "Networking Estratégico",
        description: "Participa en eventos exclusivos y crea alianzas de alto impacto.",
        bgColor: "text-green-400",
    },
    {
        icon: "lightbulb",
        title: "Contribución al Cambio",
        description: "Influye en la agenda de la industria hacia un futuro más inclusivo.",
        bgColor: "text-green-400",
    },
    {
        icon: "book-open",
        title: "Acceso a Recursos Especializados",
        description: "Benefíciate de información y conocimientos compartidos por expertos en DEI.",
        bgColor: "text-green-400",
    },
    {
        icon: "handshake",
        title: "Oportunidades de Colaboración",
        description: "Colabora en iniciativas que impulsan la innovación y el liderazgo inclusivo.",
        bgColor: "text-green-400",
    },
    {
        icon: "heart",
        title: "Impacto en la Comunidad",
        description: "Apoya el desarrollo profesional de mujeres líderes en la industria.",
        bgColor: "text-green-400",
    },
    {
        icon: "flag",
        title: "Construcción de Legado",
        description: "Deja una huella positiva y duradera en la evolución de la industria automotriz.",
        bgColor: "text-green-400",
    }
];

export type BenefitsAligneds={
    icon:string,
    title:string,
    description:string,
    bgColor:string

}
export const benefitsAligneds:BenefitsAligneds[] = [
    {
        icon: "lightbulb",
        title: "Exposición de Innovación",
        description: "Destaca los avances liderados por mujeres y tecnologías revolucionarias en tu organización.",
        bgColor: "text-black",
    },
    {
        icon: "handshake",
        title: "Colaboración de la Industria",
        description: "Encuentra oportunidades de colaboración con innovadores del sector para impulsar el crecimiento.",
        bgColor: "text-black",
    },
    {
        icon: "briefcase",
        title: "Programas de Practicantes",
        description: "Conéctate con talento emergente y fortalece la inclusión en la industria.",
        bgColor: "text-black",
    },
    {
        icon: "users",
        title: "Redefinamos el Liderazgo",
        description: "Impulsa conversaciones transformadoras y ayuda a moldear el futuro de la industria.",
        bgColor: "text-black",
    },
    {
        icon: "award",
        title: "Reconocimiento y Premios",
        description: "Colabora en programas de reconocimiento para destacar logros y contribuciones.",
        bgColor: "text-white",
    },
    {
        icon: "network",
        title: "Networking de Alta Gama",
        description: "Forma parte de eventos exclusivos con tomadores de decisiones y directivos de la industria.",
        bgColor: "text-white",
    }
];
