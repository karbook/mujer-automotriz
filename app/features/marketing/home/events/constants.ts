//EventUpcomingList
export type EventDetails={
    title:string,
    name:string,
    location:string,
    buttonText:string,
    image:string,
}
export const eventDetails:EventDetails[] = [
  {
    title: "Upcoming events",
    name: "Motor Ladies Night",
    location: "CDMX - 14 November 2024",
    buttonText: "Contact",
    image: "/images/backgrounds-colors/background-orange.png",
  },
];

export type FeaturedEvents={
    title:string,
    description:string,
    borderColors:[string,string],
    buttonText?:string,
    link?:string,
}
export const featuredEvents:FeaturedEvents[] = [
  {
    title: "About the event",
    description:
      "Motor Ladies Night is an exclusive evening for leading women in the automotive industry. Beyond networking, you'll enjoy an intimate and sophisticated experience. Enjoy cocktails, snacks, and three short presentations with powerful ideas to drive change.",
    borderColors: ["pink-500", "pink-500"],
  },
  {
    title: "Mujer Automotriz: Community of Leaders",
    description:
      "Drive conversations that transform the industry. Join the launch of the first network focused on inclusive leadership and automotive diversity. Automotive Woman connects, inspires, and empowers leading women in the industry.",
    borderColors: ["pink-500", "pink-500"],
  },
  {
    title: "Your pass includes",
    description:
      "Gourmet cuisine, select beverages, and an atmosphere designed to connect. All for $92 USD per ticket.",
    borderColors: ["pink-500", "pink-500"],
    buttonText: "Be a Sponsor",
  },
];


//EventMovementLeadership
export type Eventmovements = {
    title: string,
    subtitle: string,
    date: string,
    buttonText: string,
    image: string,
}
export const eventmovements: Eventmovements = {
    title: "Leadership in Motion",
    subtitle: "Government of San Luis Potosí and Future Entrepreneurs",
    date: "Virtual Event - September 19-27",
    buttonText: "Contact",
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
        title: "About the event",
        description:
        "Mujer Automotriz, in collaboration with the Government of San Luis Potosí and Futuros Emprendedores, brought together international and national leaders and experts to discuss how to improve gender equality in this sector. Through interactive sessions and panel discussions, participants will explore challenges and opportunities for women in different roles within the industry.",
        borderColors: ["blue-500", "blue-500"],
    },
    {
        title: "Stories that inspire",
        description:
        "Leading women spoke about their successes in the automotive industry, sharing their experiences and advice on overcoming obstacles and advancing their careers.",
        borderColors: ["blue-500", "blue-500"],
    },
    {
        title: "Driving change",
        description:
        "With a focus on collaboration and the exchange of ideas, the summit's goal was to inspire and support women of all ages and backgrounds to pursue and achieve their career goals in the automotive industry.",
        borderColors: ["blue-500", "blue-500"],
        buttonText: "See presentations",
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
        title: "Summit Mujer Automotriz",
        subtitle: "Diversity, Empowerment and Leadership",
        date: "Virtual - May 6, 2024",
        buttonText: "Contact",
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
        title: "About the event",
        description:
        "We brought together international and national leaders and experts to discuss how to improve gender equality in this sector. Through interactive sessions and panel discussions, participants will explore challenges and opportunities for women in different roles within the industry.",
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: "Voices of female leadership",
        description:
        "Leading women spoke about their successes in the automotive industry, sharing their experiences and advice on overcoming obstacles and advancing their careers.",
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: "Inspiración y apoyo colectivo",
        description:
        "With a focus on collaboration and the exchange of ideas, the summit's goal was to inspire and support women of all ages and backgrounds to pursue and achieve their career goals in the automotive industry.",
        borderColors: ["yellow-500", "yellow-500"],
        buttonText: "See presentations",
    },
];

export type ScheduleItem = {
  time: string;
  title: string;
  description?: string;
  speaker?: string;
  location?: string;
  image?: string; 
};

export type DaySchedule = {
  date: string;
  day: string;
  borderColor: string; 
  items: ScheduleItem[];
};

export const allSchedules: DaySchedule[] = [
  {
    date: "24 de Mayo 2025",
    day: "Día 1",
    borderColor: "border-orange-500", 
    
    items: [
      {
        time: "09:00 - 09:15 AM",
        title: "Bienvenida y Apertura del Programa",
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif", 
      },
      {
        time: "09:15 - 09:45 AM",
        title: "Embajada de UE en México - Bienvenida con Naomi C. Fellows",
        speaker: "Naomi Fellows",
        location: "TBA",
        image: "/images/sponsors-people/naomi-fellows.avif", 
      },
      {
        time: "09:45 - 10:00 AM",
        title: "Lineamientos del Programa y Agenda",
        speaker: "Aaron Koivunen",
        location: "TBA",
        image: "/images/sponsors-people/aaron-koivunen.avif", 
      },
      {
        time: "10:00 - 11:00 AM",
        title: "Conversatorio | Una Gladiadora en un mundo de Gladiadores: El Camino hacia la Cima",
        description: "En su ponencia Claudia Marquez compartirá su experiencia como una de las mujeres más influyentes en la industria automotriz. A través de su camino hacia la cima, demostrará cómo la perseverancia y la excelencia son la clave para superar los desafíos y convertirse en líderes exitosos en cualquier campo. Este conversatorio será una oportunidad única para escuchar de primera mano los consejos y estrategias que ha utilizado para lograr su éxito en un mundo altamente competitivo.",
        speaker: "Claudia Marquez",
        location: "TBA",
        image: "/images/sponsors-people/claudia-marquez.avif", 
      },
      {
        time: "11:00 - 12:00 AM",
        title: "Detrás Del Casco No Existe Género",
        description: "Majo Rodríguez, con tan solo 24 años de edad, es una destacada piloto profesional de autos de carreras y tractocamiones. En su ponencia comparte su trayectoria en el deporte y el estudio, hablando de los obstáculos que ha enfrentado en el camino y compartiendo tips en contra y a favor. Majo es un ejemplo inspirador de cómo se puede romper paradigmas y dejar huella en una industria dominada por hombres, y su lema 'detrás del casco no existe género' es un llamado a la igualdad de género en el mundo del deporte y en la sociedad en general.",
        speaker: "Majo Rodríguez",
        location: "TBA",
        image: "/images/sponsors-people/majo-rodriguez.avif",
      },
      {
        time: "12:00 - 1:00 PM",
        title: "Rompiendo el Cascaron y Desafiando Estereotipos",
        description: "El camino hacia el éxito de una mujer en un mundo de hombres. Esta ponencia se enfoca en la importancia de la diversidad y la inclusión en la industria automotriz. A través de su presentación, Adriana demuestra cómo estas cualidades son clave para fomentar la innovación y el éxito en la industria, desafiando estereotipos y rompiendo barreras. Esta charla inspiradora es una llamada a la acción para que las empresas adopten políticas inclusivas y diversifiquen sus equipos para lograr un mejor rendimiento y una mayor creatividad.",
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif", 
      },
      {
        time: "1:00 - 2:00 PM",
        title: "3 Herramientas para mi Auto-Empoderamiento como Mujer",
        description: "En su ponencia Daniela comparte su experiencia y conocimientos sobre cómo las mujeres pueden fortalecerse y tomar el control de sus propias vidas. Con su enfoque práctico y empático, Daniela ofrece consejos y estrategias concretas para ayudar a las mujeres a superar barreras y alcanzar sus objetivos. Como defensora de la igualdad de género y la justicia social, Daniela es un ejemplo inspirador de cómo las mujeres pueden empoderarse y liderar el cambio en sus comunidades y en todo el mundo.",
        speaker: "Daniela Hernández Álvarez",
        location: "TBA",
        image: "/images/sponsors-people/daniela-hernandez.avif", 
      },
      {
        time: "2:00 - 2:45 PM",
        title: "Construyendo la Comunidad “Mujer Automotriz”",
        description:'En esta sesión invitamos a las embajadoras de "Mujer Automotriz" a conocerse y dar el primer paso a forjar una comunidad fuerte y inclusiva.',
        location: "TBA",
        image:"./images/sponsors-people/sponsor-people.avif"
      },
      {
        time: "2:45 - 3:00 PM",
        title: "Cierre del Día 1",
        location: "TBA",
      },
    ],
  },
  {
    date: "25 de Mayo 2025",
    day: "Día 2",
    borderColor: "border-pink-500",
    items: [
      {
        time: "09:00 - 09:30 AM",
        title: "Bienvenida y Resumen",
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif", 
      },
      {
        time: "09:30 - 10:30 AM",
        title: "¡El Límite lo Pones Tú! Superando Desafíos y Derribando Barreras",
        description: "En su ponencia Paola comparte valiosas herramientas y estrategias para superar desafíos y derribar barreras, inspirando a su audiencia a alcanzar sus objetivos. Su experiencia y conocimientos la convierten en una excelente guía para aquellos que buscan empoderarse y liderar sus vidas con éxito.",
        speaker: "Paola Mendoza",
        location: "TBA",
        image: "/images/sponsors-people/paola-mendoza.avif", 
      },
      {
        time: "10:30 - 11:30 AM",
        title: "El Potencial de la Inteligencia Artificial: Cómo empoderar tu vida laboral y personal",
        description: "Exploraremos cómo la inteligencia artificial (IA) puede empoderarte tanto en tu vida laboral como personal. Te enseñaré cómo puedes utilizar la IA para personalizar tus objetivos y alcanzarlos de manera más eficiente, tomando decisiones más informadas y planificando mejor tus tareas y metas. Además, discutiremos cómo la IA puede ayudarte a mejorar tus habilidades y desempeño en el trabajo, incluyendo cómo puede ayudarte a identificar tus fortalezas y debilidades, y cómo puede proporcionarte información sobre oportunidades de mejora. Exploraremos diferentes herramientas como ChatGPT, MidJourney, y más. En resumen, esta ponencia virtual te proporcionará herramientas y estrategias prácticas para comenzar a utilizar la IA en tu propio beneficio.",
        speaker: "Aaron Koivunen",
        location: "TBA",
        image: "/images/sponsors-people/aaron-koivunen.avif", 
      },
      {
        time: "11:30 - 12:30 PM",
        title: "Ganadores vs Perdedores: La estrategia Legal Infalible para Incrementar tu Cobranza hasta un 80%",
        description: "En este webinar daré consejos para lograr una mayor rentabilidad a través de la formalización de acuerdos comerciales. Muchas empresas usan de manera indistinta órdenes de compra, facturas y contratos para sus procesos de venta, pero cuando llega la cobranza, el uso indistinto de estos instrumentos crea verdaderos dolores de cabeza. Si quieres saber cómo y cuando usar de manera correcta las facturas, órdenes de compra y contratos en tu empresa, no te pierdas esta ponencia.",
        speaker: "Edgar Espejel",
        location: "TBA",
        image: "/images/sponsors-people/edgar-espejel.avif", 
      },
      {
        time: "12:30 - 1:30 PM",
        title: "Panel de Discusión | Deconstruyendo el Machismo en la Industria Automotriz",
        description: "Un debate enriquecedor sobre la deconstrucción del machismo en la industria automotriz, en el que la moderadora Adriana y el panel compuesto por Esteban, Aaron, Brenda, Ana y Kathia, ofrecen perspectivas tanto femeninas como masculinas en relación a este tema. A través de su experiencia en el sector, discuten cómo romper estereotipos de género y avanzar hacia una industria más inclusiva y equitativa.",
        speaker: "Adriana Carmona, Esteban Carmona, Brenda Garcia, Ana Arias y Kathia Rodriguez",
        location: "TBA",
        image: "/images/sponsors-people/sponsor-people.avif", 
      },
      {
        time: "1:30 - 2:30 PM",
        title: "La Mujer Empresaria Actual, Desafiando Barreras: Cuando Desistir no es una Opción",
        description: "Lilia, miembro destacado de la Asociación Mexicana de Mujeres Empresarias (AMEXME), compartirá su experiencia personal como mujer empresaria en la actualidad, discutiendo los obstáculos y barreras a los que se enfrenta en el camino del éxito, y cómo ha logrado superarlos con perseverancia y determinación. Una charla inspiradora sobre la importancia de no rendirse y desafiar los límites para alcanzar los objetivos profesionales y personales.",
        speaker: "Lilia Carmina Acosta Quintero",
        location: "TBA",
        image: "/images/sponsors-people/lilia-acosta.avif", 
      },
      {
        time: "2:30 - 2:50 PM",
        title: "Networking Comunidad “Mujer Automotriz\"",
        description: "En esta sesión invitamos a las embajadoras de 'Mujer Automotriz' a conocerse y forjar una comunidad fuerte e inclusiva.",
        location: "TBA",
      },
      {
        time: "2:50 - 3:00 PM",
        title: "Cierre del Día 2",
        location: "TBA",
      },
    ],
  },
  {
    date: "26 de Mayo 2025",
    day: "Día 3",
    borderColor: "border-red-500",
    items: [
      {
        time: "09:00 - 09:30 AM",
        title: "Bienvenida y Reflexión",
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif", 
      },
      {
        time: "09:30 - 10:30 AM",
        title: "Prevención e Identificación del Acoso Sexual en el Trabajo",
        description: "Únete a la experta en género Denisse Tiznado en un taller que invita a la reflexión sobre la prevención del acoso sexual en el lugar de trabajo. A través de una serie de ejercicios, los participantes explorarán los problemas y oportunidades de las mujeres, incluyendo la superación de la discriminación de género y la promoción del liderazgo inclusivo. Este taller proporcionará un espacio seguro para que los asistentes compartan sus diversas perspectivas y experiencias, y trabajen juntos para construir modelos empresariales que protejan y avancen a las mujeres. No te pierdas esta experiencia formativa con Denisse, una líder en defensa de género y una defensora de los derechos de las mujeres.",
        speaker: "Denisse Tiznado",
        location: "TBA",
        image: "/images/sponsors-people/denisse-tiznado.avif", 
      },
      {
        time: "10:30 - 11:30 AM",
        title: "Receta de Fracaso - Lecciones de Mujeres Exitosas",
        description: "Paola es una mujer exitosa en la industria de tecnología y transporte como parte del equipo de Lyft. En su ponencia, compartirá las lecciones valiosas que ha aprendido a lo largo de su carrera, enfocándose en cómo el fracaso es una parte integral del éxito y cómo aprender de tus errores es fundamental para alcanzar tus metas. Como mujer en un ambiente de trabajo predominantemente masculino, Paola ha enfrentado desafíos y ha encontrado formas de superarlos, lo que la convierte en una inspiración para aquellos que buscan crecer en su carrera profesional.",
        speaker: "Paola Rodriguez",
        location: "TBA",
        image: "/images/sponsors-people/paola-rodriguez.avif", 
      },
      {
        time: "11:30 - 12:30 PM",
        title: "Boost Your Talent: Rompiendo la Rutina",
        description: "Mariana, de Mercado Libre, presenta 'Boost Your Talent: Rompiendo la Rutina', una ponencia que tiene como objetivo inspirar y motivar a los asistentes a encontrar nuevas formas de desarrollar sus habilidades y conocimientos. Con más de 10 años de experiencia en Recursos Humanos y Gestión de Talentos, Mariana comparte su visión de cómo el cambio y la innovación son claves para alcanzar el éxito profesional y personal.",
        speaker: "Mariana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/mariana-carmona.avif", 
      },
      {
        time: "12:30 - 1:30 PM",
        title: "Nadando Contra Corriente",
        description: "Claudia es una emprendedora que ha nadado contra corriente para lograr el éxito en su negocio. En su ponencia, compartirá su historia personal y profesional, incluyendo los desafíos que ha enfrentado como mujer en el mundo empresarial y cómo ha logrado superarlos. Sus experiencias inspiradoras y sus consejos prácticos serán de gran valor para aquellos que buscan perseguir sus sueños a pesar de las dificultades.",
        speaker: "Claudia Quintanilla",
        location: "TBA",
        image: "/images/sponsors-people/claudia-quintanilla.avif", 
      },
      {
        time: "1:30 - 2:30 PM",
        title: "Panel de Discusión | El liderazgo como catalizador para el empoderamiento de tu entorno: Alcanzando tu Máximo Potencial Profesional y Familiar",
        description: "En esta mesa redonda, expertas en liderazgo y empoderamiento compartirán su experiencia en la búsqueda del equilibrio entre la vida profesional y familiar, y cómo el liderazgo puede catalizar el empoderamiento en ambos ámbitos. Con Inna, Gimena, Maria de la Luz e Isabel en el panel, se discutirán estrategias y herramientas para alcanzar el máximo potencial y lograr el éxito en todas las áreas de la vida.",
        speaker: "Adriana Carmona, Inna Makhniboroda, Gimena Sánchez, Isabel Osorio, Maria de la Luz",
        location: "TBA",
        image: "/images/sponsors-people/sponsor-woman.avif", 
      },
      {
        time: "2:30 - 3:30 PM",
        title: "Marcas con ADN & Huella Digital",
        description: "La ponencia de Hazel aborda la importancia de fortalecer la imagen e identidad de una marca a través de pensamientos positivos, entrenamiento, lectura, ejercicio, nutrición y reflexión personal. En su presentación, destaca los diez elementos necesarios para construir una marca sólida, incluyendo el nombre, logo, colores, propósito, tono de comunicación, personalidad, eslogan, sentido del producto, audiobranding y experiencia. Hazel proporciona valiosas herramientas y consejos para ayudar a las empresas a crear una marca fuerte y auténtica en el mundo digital actual.",
        speaker: "Hazel Guerrero Hurtado",
        location: "TBA",
        image: "/images/sponsors-people/hazel-guerrero.avif", 
      },
      {
        time: "3:30 - 3:45 PM",
        title: "Cierre del Día",
        location: "TBA",
      },
    ],
  },
];