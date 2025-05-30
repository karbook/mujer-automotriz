import { t } from '@/localization/utils';

export type EventDetails = {
    title: string,
    name: string,
    location: string,
    buttonText: string,
    image: string,
}
export const eventDetails: EventDetails[] = [
    {
        title: t("Upcoming events"),
        name: t("Motor Ladies Night"),
        location: t("CDMX - 14 November 2024"),
        buttonText: t("Contact"),
        image: "/images/backgrounds-colors/background-orange.png",
    },
];

export type FeaturedEvents = {
    title: string,
    description: string,
    borderColors: [string, string],
    buttonText?: string,
    link?: string,
}
export const featuredEvents: FeaturedEvents[] = [
    {
        title: t("About the event"),
        description: t("Motor Ladies Night is an exclusive evening for leading women in the automotive industry. Beyond networking, you'll enjoy an intimate and sophisticated experience. Enjoy cocktails, snacks, and three short presentations with powerful ideas to drive change."),
        borderColors: ["pink-500", "pink-500"],
    },
    {
        title: t("Mujer Automotriz: Community of Leaders"),
        description: t("Drive conversations that transform the industry. Join the launch of the first network focused on inclusive leadership and automotive diversity. Automotive Woman connects, inspires, and empowers leading women in the industry."),
        borderColors: ["pink-500", "pink-500"],
    },
    {
        title: t("Your pass includes"),
        description: t("Gourmet cuisine, select beverages, and an atmosphere designed to connect. All for $92 USD per ticket."),
        borderColors: ["pink-500", "pink-500"],
        buttonText: t("Be a Sponsor"),
    },
];

export type Eventmovements = {
    title: string,
    subtitle: string,
    date: string,
    buttonText: string,
    image: string,
}
export const eventmovements: Eventmovements = {
    title: t("Leadership in Motion"),
    subtitle: t("Government of San Luis Potosí and Future Entrepreneurs"),
    date: t("Virtual Event - September 19-27"),
    buttonText: t("Contact"),
    image: "/images/backgrounds-colors/background-blue.png",
};

export type ProgramHighlights = {
    title: string,
    description: string,
    borderColors: [string, string],
    buttonText?: string,
}
export const programHighlights: ProgramHighlights[] = [
    {
        title: t("About the event"),
        description: t("Mujer Automotriz, in collaboration with the Government of San Luis Potosí and Futuros Emprendedores, brought together international and national leaders and experts to discuss how to improve gender equality in this sector. Through interactive sessions and panel discussions, participants will explore challenges and opportunities for women in different roles within the industry."),
        borderColors: ["blue-500", "blue-500"],
    },
    {
        title: t("Stories that inspire"),
        description: t("Leading women spoke about their successes in the automotive industry, sharing their experiences and advice on overcoming obstacles and advancing their careers."),
        borderColors: ["blue-500", "blue-500"],
    },
    {
        title: t("Driving change"),
        description: t("With a focus on collaboration and the exchange of ideas, the summit's goal was to inspire and support women of all ages and backgrounds to pursue and achieve their career goals in the automotive industry."),
        borderColors: ["blue-500", "blue-500"],
        buttonText: t("See presentations"),
    },
];

export type HighlightedEvents = {
    title: string,
    subtitle: string,
    date: string,
    buttonText: string,
    image: string,
}
export const highlightedEvents: HighlightedEvents[] = [
    {
        title: t("Summit Mujer Automotriz"),
        subtitle: t("Diversity, Empowerment and Leadership"),
        date: t("Virtual - May 6, 2024"),
        buttonText: t("Contact"),
        image: "/images/backgrounds-colors/background-yellow.png",
    },
];

export type EventSections = {
    title: string,
    description: string,
    borderColors: [string, string],
    buttonText?: string,
}
export const eventSections: EventSections[] = [
    {
        title: t("About the event"),
        description: t("We brought together international and national leaders and experts to discuss how to improve gender equality in this sector. Through interactive sessions and panel discussions, participants will explore challenges and opportunities for women in different roles within the industry."),
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: t("Voices of female leadership"),
        description: t("Leading women spoke about their successes in the automotive industry, sharing their experiences and advice on overcoming obstacles and advancing their careers."),
        borderColors: ["yellow-500", "yellow-500"],
    },
    {
        title: t("Inspiración y apoyo colectivo"),
        description: t("With a focus on collaboration and the exchange of ideas, the summit's goal was to inspire and support women of all ages and backgrounds to pursue and achieve their career goals in the automotive industry."),
        borderColors: ["yellow-500", "yellow-500"],
        buttonText: t("See presentations"),
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
    date: t("May 24, 2025"), 
    day: t("Day 1"), 
    borderColor: "border-orange-500",

    items: [
      {
        time: "09:00 - 09:15 AM",
        title: t("Welcome and Program Opening"),
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif",
      },
      {
        time: "09:15 - 09:45 AM",
        title: t("EU Embassy in Mexico - Welcome with Naomi C. Fellows"),
        speaker: "Naomi Fellows",
        location: "TBA",
        image: "/images/sponsors-people/naomi-fellows.avif",
      },
      {
        time: "09:45 - 10:00 AM",
        title: t("Program Guidelines and Agenda"),
        speaker: "Aaron Koivunen",
        location: "TBA",
        image: "/images/sponsors-people/aaron-koivunen.avif",
      },
      {
        time: "10:00 - 11:00 AM",
        title: t("Panel Discussion | A Gladiator in a World of Gladiators: The Path to the Top"),
        description: t("In her presentation, Claudia Marquez will share her experience as one of the most influential women in the automotive industry. Through her journey to the top, she will demonstrate how perseverance and excellence are key to overcoming challenges and becoming successful leaders in any field. This discussion will be a unique opportunity to hear firsthand the advice and strategies she has used to achieve her success in a highly competitive world."),
        speaker: "Claudia Marquez",
        location: "TBA",
        image: "/images/sponsors-people/claudia-marquez.avif",
      },
      {
        time: "11:00 - 12:00 AM",
        title: t("Behind the Helmet There Is No Gender"),
        description: t("Majo Rodríguez, at just 24 years old, is a prominent professional race car and truck driver. In her presentation, she shares her journey in sports and academics, discussing the obstacles she has faced along the way and sharing tips for and against them. Majo is an inspiring example of how one can break paradigms and make a mark in a male-dominated industry, and her motto 'behind the helmet there is no gender' is a call for gender equality in the world of sports and society in general."),
        speaker: "Majo Rodríguez",
        location: "TBA",
        image: "/images/sponsors-people/majo-rodriguez.avif",
      },
      {
        time: "12:00 - 1:00 PM",
        title: t("Breaking the Shell and Challenging Stereotypes"),
        description: t("The path to success for a woman in a man's world. This presentation focuses on the importance of diversity and inclusion in the automotive industry. Through her presentation, Adriana demonstrates how these qualities are key to fostering innovation and success in the industry, challenging stereotypes and breaking barriers. This inspiring talk is a call to action for companies to adopt inclusive policies and diversify their teams to achieve better performance and greater creativity."),
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif",
      },
      {
        time: "1:00 - 2:00 PM",
        title: t("3 Tools for My Self-Empowerment as a Woman"),
        description: t("In her presentation, Daniela shares her experience and knowledge on how women can empower themselves and take control of their own lives. With her practical and empathetic approach, Daniela offers concrete advice and strategies to help women overcome barriers and achieve their goals. As an advocate for gender equality and social justice, Daniela is an inspiring example of how women can empower themselves and lead change in their communities and around the world."),
        speaker: "Daniela Hernández Álvarez",
        location: "TBA",
        image: "/images/sponsors-people/daniela-hernandez.avif",
      },
      {
        time: "2:00 - 2:45 PM",
        title: t("Building the “Automotive Woman” Community"),
        description: t("In this session, we invite the ambassadors of 'Automotive Woman' to meet and take the first step in forging a strong and inclusive community."),
        location: "TBA",
        image: "./images/sponsors-people/sponsor-people.avif"
      },
      {
        time: "2:45 - 3:00 PM",
        title: t("Day 1 Closing"),
        location: "TBA",
      },
    ],
  },
  {
    date: t("May 25, 2025"), 
    day: t("Day 2"), 
    borderColor: "border-pink-500",
    items: [
      {
        time: "09:00 - 09:30 AM",
        title: t("Welcome and Summary"),
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif",
      },
      {
        time: "09:30 - 10:30 AM",
        title: t("You Set the Limit! Overcoming Challenges and Breaking Down Barriers"),
        description: t("In her presentation, Paola shares valuable tools and strategies to overcome challenges and break down barriers, inspiring her audience to achieve their goals. Her experience and knowledge make her an excellent guide for those seeking to empower themselves and lead their lives successfully."),
        speaker: "Paola Mendoza",
        location: "TBA",
        image: "/images/sponsors-people/paola-mendoza.avif",
      },
      {
        time: "10:30 - 11:30 AM",
        title: t("The Potential of Artificial Intelligence: How to Empower Your Work and Personal Life"),
        description: t("We will explore how artificial intelligence (AI) can empower you in both your work and personal life. I will teach you how you can use AI to personalize your goals and achieve them more efficiently, making more informed decisions and better planning your tasks and goals. In addition, we will discuss how AI can help you improve your skills and performance at work, including how it can help you identify your strengths and weaknesses, and how it can provide you with information about opportunities for improvement. We will explore different tools like ChatGPT, MidJourney, and more. In summary, this virtual presentation will provide you with practical tools and strategies to start using AI for your own benefit."),
        speaker: "Aaron Koivunen",
        location: "TBA",
        image: "/images/sponsors-people/aaron-koivunen.avif",
      },
      {
        time: "11:30 - 12:30 PM",
        title: t("Winners vs. Losers: The Infallible Legal Strategy to Increase Your Collection by up to 80%"),
        description: t("In this webinar, I will give advice to achieve greater profitability through the formalization of commercial agreements. Many companies use purchase orders, invoices, and contracts interchangeably for their sales processes, but when collection arrives, the indiscriminate use of these instruments creates real headaches. If you want to know how and when to correctly use invoices, purchase orders, and contracts in your company, don't miss this presentation."),
        speaker: "Edgar Espejel",
        location: "TBA",
        image: "/images/sponsors-people/edgar-espejel.avif",
      },
      {
        time: "12:30 - 1:30 PM",
        title: t("Panel Discussion | Deconstructing Machismo in the Automotive Industry"),
        description: t("An enriching debate on the deconstruction of machismo in the automotive industry, in which moderator Adriana and the panel composed of Esteban, Aaron, Brenda, Ana, and Kathia, offer both female and male perspectives on this topic. Through their experience in the sector, they discuss how to break gender stereotypes and move towards a more inclusive and equitable industry."),
        speaker: "Adriana Carmona, Esteban Carmona, Brenda Garcia, Ana Arias y Kathia Rodriguez",
        location: "TBA",
        image: "/images/sponsors-people/sponsor-people.avif",
      },
      {
        time: "1:30 - 2:30 PM",
        title: t("The Current Businesswoman, Challenging Barriers: When Giving Up is Not an Option"),
        description: t("Lilia, a prominent member of the Mexican Association of Businesswomen (AMEXME), will share her personal experience as a businesswoman today, discussing the obstacles and barriers she faces on the path to success, and how she has managed to overcome them with perseverance and determination. An inspiring talk on the importance of not giving up and challenging limits to achieve professional and personal goals."),
        speaker: "Lilia Carmina Acosta Quintero",
        location: "TBA",
        image: "/images/sponsors-people/lilia-acosta.avif",
      },
      {
        time: "2:30 - 2:50 PM",
        title: t("Networking “Automotive Woman” Community"),
        description: t("In this session, we invite the ambassadors of 'Automotive Woman' to meet and forge a strong and inclusive community."),
        location: "TBA",
      },
      {
        time: "2:50 - 3:00 PM",
        title: t("Day 2 Closing"),
        location: "TBA",
      },
    ],
  },
  {
    date: t("May 26, 2025"), 
    day: t("Day 3"), 
    borderColor: "border-red-500",
    items: [
      {
        time: "09:00 - 09:30 AM",
        title: t("Welcome and Reflection"),
        speaker: "Adriana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/adriana-carmona.avif",
      },
      {
        time: "09:30 - 10:30 AM",
        title: t("Prevention and Identification of Sexual Harassment at Work"),
        description: t("Join gender expert Denisse Tiznado in a workshop that encourages reflection on the prevention of sexual harassment in the workplace. Through a series of exercises, participants will explore the problems and opportunities for women, including overcoming gender discrimination and promoting inclusive leadership. This workshop will provide a safe space for attendees to share their diverse perspectives and experiences, and work together to build business models that protect and advance women. Don't miss this formative experience with Denisse, a leader in gender advocacy and an advocate for women's rights."),
        speaker: "Denisse Tiznado",
        location: "TBA",
        image: "/images/sponsors-people/denisse-tiznado.avif",
      },
      {
        time: "10:30 - 11:30 AM",
        title: t("Recipe for Failure - Lessons from Successful Women"),
        description: t("Paola is a successful woman in the technology and transportation industry as part of the Lyft team. In her presentation, she will share the valuable lessons she has learned throughout her career, focusing on how failure is an integral part of success and how learning from your mistakes is fundamental to achieving your goals. As a woman in a predominantly male work environment, Paola has faced challenges and found ways to overcome them, which makes her an inspiration for those looking to grow in their professional careers."),
        speaker: "Paola Rodriguez",
        location: "TBA",
        image: "/images/sponsors-people/paola-rodriguez.avif",
      },
      {
        time: "11:30 - 12:30 PM",
        title: t("Boost Your Talent: Breaking the Routine"),
        description: t("Mariana, from Mercado Libre, presents 'Boost Your Talent: Breaking the Routine,' a presentation that aims to inspire and motivate attendees to find new ways to develop their skills and knowledge. With more than 10 years of experience in Human Resources and Talent Management, Mariana shares her vision of how change and innovation are key to achieving professional and personal success."),
        speaker: "Mariana Carmona",
        location: "TBA",
        image: "/images/sponsors-people/mariana-carmona.avif",
      },
      {
        time: "12:30 - 1:30 PM",
        title: t("Swimming Against the Current"),
        description: t("Claudia is an entrepreneur who has swum against the current to achieve success in her business. In her presentation, she will share her personal and professional story, including the challenges she has faced as a woman in the business world and how she has managed to overcome them. Her inspiring experiences and practical advice will be of great value to those looking to pursue their dreams despite difficulties."),
        speaker: "Claudia Quintanilla",
        location: "TBA",
        image: "/images/sponsors-people/claudia-quintanilla.avif",
      },
      {
        time: "1:30 - 2:30 PM",
        title: t("Panel Discussion | Leadership as a Catalyst for Empowering Your Environment: Reaching Your Maximum Professional and Family Potential"),
        description: t("In this roundtable, leadership and empowerment experts will share their experience in seeking balance between professional and family life, and how leadership can catalyze empowerment in both areas. With Inna, Gimena, Maria de la Luz, and Isabel on the panel, strategies and tools will be discussed to reach maximum potential and achieve success in all areas of life."),
        speaker: "Adriana Carmona, Inna Makhniboroda, Gimena Sánchez, Isabel Osorio, Maria de la Luz",
        location: "TBA",
        image: "/images/sponsors-people/sponsor-woman.avif",
      },
      {
        time: "2:30 - 3:30 PM",
        title: t("Brands with DNA & Digital Footprint"),
        description: t("Hazel's presentation addresses the importance of strengthening a brand's image and identity through positive thoughts, training, reading, exercise, nutrition, and personal reflection. In her presentation, she highlights the ten necessary elements to build a strong brand, including name, logo, colors, purpose, communication tone, personality, slogan, product sense, audio branding, and experience. Hazel provides valuable tools and advice to help companies create a strong and authentic brand in today's digital world."),
        speaker: "Hazel Guerrero Hurtado",
        location: "TBA",
        image: "/images/sponsors-people/hazel-guerrero.avif",
      },
      {
        time: "3:30 - 3:45 PM",
        title: t("Day Closing"),
        location: "TBA",
      },
    ],
  },
];
export type Sessions = {
  name: string;
  fullText: string;
  imageUrl?: string;
  itemBgImage?: string; 
  backgroundColor: string;
  imageBackground:string,
  textColor: string;
  contentPosition: 'top' | 'bottom';
  numberSession: number;
  position: string; 
  youtubeLink?: string; 
};
export const sessions: Sessions[] = [
  {
    name: 'Mónica Doger',
    fullText: t('In this talk, we dive into essential topics through a dialogue with an industry leader and expert, such as the current state, technology, challenges, and possibilities in the automotive field. Joining us is Mónica Doger, a prominent leader in the automotive sector and business growth in Mexico, who serves as General Director of the Automotive Cluster of Puebla and Tlaxcala, fostering innovation, industry expansion, and interaction among key players in the automotive sector. Don’t miss it!'),
    imageUrl: '/images/leadership/doger.avif',
    itemBgImage: '/images/conferents-people/monica-doger.png',
    imageBackground: '/images/backgrounds-abstract/form-abstract-small.png',
    backgroundColor: 'bg-gray-200',
    textColor: 'text-black',
    contentPosition: 'top',
    numberSession: 1,
    position: t('General Director of CLAUZ'),
    youtubeLink: 'https://www.youtube.com/live/np3vOjCqUOg',
  },
  {
    name: 'Katria Oviedo',
    fullText: t('Join us in this inspiring session with Katria Oviedo, an outstanding entrepreneur and leader in the tech and automotive sectors. As co-founder of Jetz App, Katria has revolutionized the auto parts supply chain in Latin America through disruptive digital solutions. During this talk, she will share her path to success, the challenges she has overcome, and how women are making their mark and leading with passion in an industry traditionally dominated by men.'),
    imageUrl: '/images/leadership/katria.avif',
    itemBgImage: '/images/conferents-people/katria-oviedo.png',
    imageBackground: '/images/backgrounds-abstract/form-abstract-pink-form.png',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    contentPosition: 'top',
    numberSession: 2,
    position: t('Co-founder of Jetz'),
    youtubeLink: 'https://www.youtube.com/live/11Xf7zX6gyM',
  },
  {
    name: 'Paola Rodríguez',
    fullText: t('In this exciting session, Paola Rodríguez, a leader in the tech industry, will share her inspiring professional journey. From her entry into the world of technology and the automotive sector to her success in holding leadership positions at international companies, Paola will reveal how women are transforming industries traditionally dominated by men.'),
    imageUrl: '/images/leadership/paola.avif',
    itemBgImage: '/images/conferents-people/paola-rodriguez.png',
    backgroundColor: 'bg-gray-200',
    imageBackground: '/images/backgrounds-abstract/form-abstract-pink.png',
    textColor: 'text-black',
    contentPosition: 'top',
    numberSession: 3,
    position: t('IT Director, Microsoft'),
    youtubeLink: 'https://www.youtube.com/live/RJAUg5Z62lY',
  },
  {
    name: 'Aaron Koivunen',
    fullText: t('In this interactive session, we will explore key technologies and resources for innovation in the automotive industry. Aaron will share fundamental strategies for business growth and digitization, including the use of artificial intelligence and advanced tools to optimize processes and make strategic decisions.'),
    imageUrl: '/images/leadership/aaron.avif',
    itemBgImage: '/images/conferents-people/aaron-koivunen.png',
    backgroundColor: 'bg-black',
    textColor: 'text-white',
    imageBackground: '/images/backgrounds-abstract/form-abstract-small.png',
    contentPosition: 'top',
    numberSession: 4,
    position: t('Co-founder of IT, Karbook'),
    youtubeLink: 'https://www.youtube.com/live/FeHAyk2mGOs',
  },
  {
    name: 'Mónica Guerrero',
    fullText: t('In this discussion, we will introduce Mónica Guerrero and her remarkable career in marketing. She will share her experience and how she has persisted in this field, which is largely controlled by men, as well as strategies she has implemented at Denso for international market expansion, focusing on the Latin American sector.'),
    imageUrl: '/images/leadership/monica.avif',
    itemBgImage: '/images/conferents-people/monica-guerrero.png',
    backgroundColor: 'bg-gray-200',
    textColor: 'text-black',
    imageBackground: '/images/backgrounds-abstract/form-abstract-pink.png',
    contentPosition: 'top',
    numberSession: 5,
    position: t('Marketing Director, Denso'),
    youtubeLink: 'https://www.youtube.com/live/gvkFWTJ_Z3k?si=Ma_mQpgrnw7Oiv3E',
  },
  {
    name: 'Lizeth Correa',
    fullText: t('In this session titled “Connection and Empowerment: Keys to Effective Communication,” Lizeth Correa will share key communication techniques and skills in the automotive and tech sector. With her experience at Courier Network, she will teach us how persuasion, leadership, and clarity are essential in negotiations and client management.'),
    imageUrl: '/images/leadership/lizeth.avif',
    itemBgImage: '/images/conferents-people/lizeth-correa.png',
    backgroundColor: 'bg-black',
    imageBackground: '/images/backgrounds-abstract/form-abstract-pink-form.png',
    textColor: 'text-white',
    contentPosition: 'top',
    numberSession: 6,
    position: t('Sales Director, CNW'),
    youtubeLink: 'https://www.youtube.com/watch?v=Tc5ATq0kNTI',
  },
];

export type Logos = string[];

export const logos: Logos = [
  "./images/sponsors-corporate/irex-icon.png",
  "./images/sponsors-corporate/karbook-icon.png",
  "./images/sponsors-corporate/usa-departament.png",
  "./images/sponsors-corporate/usa-icon.png",
  "./images/sponsors-corporate/tedi-longlight.png",
  "./images/sponsors-corporate/san-luis-sponsor.avif",
  "./images/sponsors-corporate/technical-secretary.avif",
  "./images/sponsors-corporate/future-entrepreneurs.avif",
];
