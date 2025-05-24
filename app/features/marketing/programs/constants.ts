import type { IconName } from "@/components/ui/icon";

export type Ambassadors = {
    title: string;
    description: string;
    bgColor: string;
    icon: IconName;

};
export const ambassadors: Ambassadors[] = [
  {
    title: "Promote Diversity",
    description: "Advocate for gender inclusion and equity in the automotive sector.",
    icon: "handshake",
    bgColor: "text-indigo-400",
  },
  {
    title: "Represent the Program",
    description: "Be the voice and face of the program across platforms and forums.",
    icon: "presentation",
    bgColor: "text-pink-400",
  },
  {
    title: "Inspire Confidence",
    description: "Act as a role model, motivating other women to overcome challenges.",
    icon: "shield-check",
    bgColor: "text-green-400",
  },
  {
    title: "Drive Innovation",
    description: "Collaborate in creating new ideas and approaches within the industry.",
    icon: "lightbulb",
    bgColor: "text-yellow-400",
  },
  {
    title: "Industry Impact",
    description: "Be part of a movement that promotes diversity and inclusion.",
    icon: "factory",
    bgColor: "text-gray-400",
  },
  {
    title: "Enable Continuous Learning",
    description: "Share up-to-date knowledge and resources.",
    icon: "book-open",
    bgColor: "text-purple-400",
  },
  {
    title: "Support Decision-Making",
    description: "Provide strategic advice based on personal experience.",
    icon: "brain",
    bgColor: "text-blue-400",
  },
  {
    title: "Commit to the Program",
    description: "Actively participate in community events and activities.",
    icon: "calendar-check",
    bgColor: "text-teal-400",
  },
  {
    title: "Promote Professional Growth",
    description: "Help the community reach its professional goals.",
    icon: "trending-up",
    bgColor: "text-red-400",
  },
  {
    title: "Build Strong Networks",
    description: "Connect network members with a valuable professional community.",
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
    title: "Skill Development",
    description: "Improve your professional and personal capabilities.",
    bgColor: "text-red-500",
    icon: "brain",
  },
  {
    title: "Network Building",
    description: "Connect with influential women and professionals in the automotive sector.",
    bgColor: "text-cyan-500",
    icon: "network",
  },
  {
    title: "Inspiration and Motivation",
    description: "Receive constant support to overcome challenges.",
    bgColor: "text-yellow-500",
    icon: "sun",
  },
  {
    title: "Continuous Learning",
    description: "Participate in workshops, talks, and activities that drive your growth.",
    bgColor: "text-purple-500",
    icon: "book-open",
  },
  {
    title: "Strategic Perspectives",
    description: "Gain advice and strategies to advance your career.",
    bgColor: "text-blue-500",
    icon: "compass",
  },
  {
    title: "Active Participation",
    description: "Contribute ideas and receive constructive feedback.",
    bgColor: "text-orange-500",
    icon: "message-circle",
  },
  {
    title: "Goal Setting",
    description: "Establish clear and achievable professional goals.",
    bgColor: "text-teal-500",
    icon: "target",
  },
  {
    title: "Personal Growth",
    description: "Develop confidence and self-awareness in a supportive environment.",
    bgColor: "text-red-500",
    icon: "heart",
  },
  {
    title: "Industry Impact",
    description: "Be part of a movement that promotes diversity and inclusion in the automotive sector.",
    bgColor: "text-gray-500",
    icon: "factory",
  },
  {
    title: "Access to Personalized Mentorship",
    description: "Receive guidance from an experienced leader in the industry.",
    bgColor: "text-emerald-500",
    icon: "user-check",
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