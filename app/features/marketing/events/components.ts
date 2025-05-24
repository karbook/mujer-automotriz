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
