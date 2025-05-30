import type { IconName } from "@/components/ui/icon";
import { t } from '@/localization/utils'

export type Sponsors = {
	title: string;
	logo: string;

}

export const sponsors: Sponsors[] = [
	{ title: "Clauz-sponsor", logo: "images/sponsors-corporate/clauz-sponsor.avif" },
	{ title: "Autex-sponsor", logo: "images/sponsors-corporate/autex-sponsor.avif" },
	{ title: "Arboledas-Sponsors", logo: "images/sponsors-corporate/arboledas-sponsor.avif" },
	{ title: "Automotive-Sponsor", logo: "images/sponsors-corporate/automotive-sponsor.avif" },
	{ title: "Earth", logo: "images/sponsors-corporate/earth-sponsor.avif" },
	{ title: "Endeavor-Sponsor", logo: "images/sponsors-corporate/endeavor-sponsor.avif" },
	{ title: "Rextie-Sponsor", logo: "images/sponsors-corporate/rextie-sponsor.avif" },
	{ title: "Carlota-Sponsor", logo: "images/sponsors-corporate/carlota-sponsor.avif" },
	{ title: "Upaep-Sponsor", logo: "images/sponsors-corporate/upaep-sponsor.avif" },
	{ title: "Upam-Sponsor", logo: "images/sponsors-corporate/upam-sponsor.avif" },
	{ title: "Amexme-Sponsor", logo: "images/sponsors-corporate/amexme-sponsor.avif" },
	{ title: "Majo-Sponsor", logo: "images/sponsors-corporate/majo-sponsor.avif" },
];

export type Ambassadors = {
	title: string;
	description: string;
	slug: string;
	icon: string;
	company: string;
	company_icon: string;
	nationality: string;
	legacy: string | string[];

};
export const ambassadors = [
    {
        title: 'Majo Rodríguez',
        slug: 'majo-rodriguez',
        description: t('Professional Driver.'),
        icon: '/images/sponsors-people/majo-rodriguez.avif',
        company: 'Majo Rodriguez',
        company_icon: '/images/sponsors-corporate/majo.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t(`Majo Rodríguez is a 24-year-old racing driver, born in the State of Puebla, who has achieved success in the world of motorsports. Her passion for racing began when she was 8 years old, when she decided to try karting as a hobby. But she soon realized that her true destiny was the track, and at 12 years old she debuted in professional national races, both in karts and touring cars. This determination led her to make a very important leap in her career in 2016 when she debuted in NASCAR and began racing in the world of tractor-trailers.
            Majo has stood out for her impressive achievements, such as being the first woman to reach the podium in the Mercedes-Benz and Mikel's Trucks category. In addition, she is the first driver from Puebla to bring home a national championship, she triumphed four times in the demanding 24 Hours of Mexico in the TS category, she also competed in the World Racing League at Virginia International Raceway where she achieved an impressive performance in her first international race and has been co-driver of the SAFETY CAR in Formula E in the 2020, 2021 and 2022 seasons. However, one of Majo's greatest feats has been breaking paradigms within a discipline that has long been seen as "men only."`),
            t('CHAMPIONSHIPS:'),
            t('• First woman to get on the podium in the Freightliner Tractor-trailer category (since the Super Copa Telcel 2015)'),
            t('• First woman to get on the podium in the Mikel\'s Trucks category'),
            t('• First woman from Puebla to win a National Championship'),
            t('• Three-time champion of the 24 Hours of Mexico in the T5 Category'),
            t('• First woman to win first place in the Mexican Super Touring Championship'),
            t('• First woman to race SuperTrucks V4 and V8 in the PROSPORTS championship'),
            t('• First woman to get on the podium in 1st place at the Hermanos Rodríguez Racetrack (remodeled)'),
            t('• Champion of the Endurance 24 in the E5 Category'),
            '',
            t('Website - majorodriguez.com'),
            t('Instagram - @majorodriguezoficial')
        ]
    },
    {
        title: 'Naomi Fellows',
        slug: 'naomi-fellows',
        description: t('Labor Counselor and Head of the Labor and Competitiveness Unit.'),
        icon: '/images/sponsors-people/naomi-fellows.avif',
        company: 'Embassy of the United States in Mexico',
        company_icon: '/images/sponsors-corporate/usa-departament.png',
        nationality: t('Venezuela 🇻🇪 - USA 🇺🇸'),
        legacy: [
            t('Naomi Fellows is a career senior member of the United States Foreign Service economic officer.'),
            t('Currently, Naomi serves as Labor Counselor and Head of the Labor and Competitiveness Unit in the Economic Section of the U.S. Embassy in Mexico City.'),
            t('Previously, Naomi served as Deputy Economic Counselor in Brasilia, Brazil.'),
            '',
            t('Her most recent position in Washington was as Deputy Director of the Office of Public Affairs and Diplomacy in Africa.'),
            t('Naomi has served in diplomatic positions at U.S. embassies in Conakry, Guinea; Bogota, Colombia; Yaoundé, Cameroon; Managua, Nicaragua; and Moscow, Russia.'),
            t('Naomi was born in Caracas, Venezuela and resided in various Latin American countries until the age of 14.'),
            '',
            t('She holds a bachelor\'s degree from Pomona College in Los Angeles, California, and a master\'s degree in Latin American Politics and Economics from Georgetown University in Washington, DC.'),
            t('Naomi speaks English, Spanish, Portuguese, French, and Russian.')
        ]

    },
    {
        title: 'Lizeth Correa',
        slug: 'lizeth-correa',
        description: t('Director of Sales and Corporate Accounts'),
        icon: '/images/sponsors-people/lizeth-correa.avif',
        company: 'CNW | Courier Network',
        company_icon: '/images/sponsors-corporate/courier.png',
        nationality: t('Mexico 🇲🇽 - USA 🇺🇸'),
        legacy: [
            t('Lizeth Correa is a recognized leader in the business world, standing out for her excellence in commercial operations and sales strategy development.'),
            t('With a clear focus on customer satisfaction and a deep understanding of the Latin American and North American markets, she has managed multimillion-dollar accounts and forged strategic alliances that have led to supply chain optimization.'),
            t('She has worked in key sectors such as semiconductors, automotive, telecommunications, and industrial automation.'),
            '',
            t('Currently, Lizeth serves as Director of Sales and Account Management for the North American Automotive Division at Courier Network, where she leads with power and vision, critical time solution initiatives for global clients.'),
            t('Throughout her career, she has demonstrated skills in creating strategic alliances and acquiring key accounts for her organization.'),
            t('Her ability to build influential relationships and her commitment to excellence have positioned her as a key figure in the industry, where she continues to leave an indelible mark on every project she undertakes.'),
            '',
            t('She is an enthusiastic and genuine leader with the mission to help transform the automotive industry in Mexico and Latin America to forge a more diverse and inclusive industry, which is why she co-founded the Mujer Automotriz leaders community, a 100% social initiative with the mission to promote female leadership in the automotive industry.')
        ]

    },
    {
        title: 'Monica Doger',
        slug: 'monica-doger',
        description: t('Director of the Puebla and Tlaxcala Automotive Cluster at Cluster Automotriz Zona Centro.'),
        icon: '/images/sponsors-people/monica-doger.avif',
        company: 'CLAUZ',
        company_icon: '/images/sponsors-corporate/clauz-icon.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Mónica Doger is a prominent leader in the automotive industry and business development in Mexico.'),
            t('She is currently the General Director of the Puebla and Tlaxcala Automotive Cluster, where she promotes innovation, industry growth, and collaboration among key players in the automotive sector.'),
            t('With a solid career in strategic leadership and a Master\'s degree in International Economics and Politics, she has led multiple projects focused on organizational improvement and regional economic development.'),
            '',
            t('In addition to her role in the cluster, Mónica is the General Director of Legatum Coaching in Financial Security, where she promotes financial empowerment through the recruitment and training of financial product and insurance advisors.'),
            t('Her career includes experience at the National Council of Science and Technology (Conacyt), BUAP University, and the Government of the State of Puebla, standing out for her focus on innovation, inclusive leadership, and the development of new generations of business leaders.'),
            '',
            t('Mónica has demonstrated a unique ability to create strategic alliances and promote growth in key sectors such as automotive and finance.')
        ]

    },
    {
        title: 'Ana Arias',
        slug: 'ana-arias',
        description: t('Director of Marketing and Corporate Communications.'),
        icon: '/images/sponsors-people/ana-arias.avif',
        company: 'Grupo Apymsa',
        company_icon: '/images/sponsors-corporate/apymsa-icon.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Ana is a bilingual executive with over 25 years of experience in the retail, industrial, health, consumer, and technology sectors, contributing to the positioning and profitability of leading brands in the market through the development of marketing, commercial, and communication strategies, including 360 Communications plans (Offline / Digital).'),
            t('She specializes in designing differentiating elements and forging strategic routes to position products, services, and brands based on specific customer needs (B2B and B2C), maximizing sales and profits, optimizing time and resources, and supporting corporate and brand reputation.'),
            '',
            t('In addition, Ana has extensive experience in managing high-performance teams and in creating an organizational culture focused on excellence and innovation.')
        ]

    },
    {
        title: 'Claudia Marquez',
        slug: 'claudia-marquez',
        description: t('COO.'),
        icon: '/images/sponsors-people/claudia-marquez.avif',
        company: 'Genesis Motor North America',
        company_icon: '/images/sponsors-corporate/genesis-motor.png',
        nationality: t('Mexico 🇲🇽 - USA 🇺🇸'),
        legacy: [
            t('Claudia Marquez, COO of Genesis Motor North America, is one of the most recognized women in the automotive industry with over 25 years of experience.'),
            t('Despite the challenges posed by the pandemic in 2020, she successfully launched two new car models while maintaining consumer prices and providing transportation for healthcare personnel.'),
            t('She is an enthusiastic and genuine leader who builds effective teams and is persistent in her pursuit of excellence, consistency, and strength.'),
            t('Her inclusion in Bloomberg Línea\'s "The 500 of Latin America 2022" list is a testament to her influence in Latin American business, economy, and finance.'),
            '',
            t('Additionally, Claudia has demonstrated a solid and successful career as a global executive, with a track record of outstanding results in the automotive industry.'),
            t('In her career, she has learned to overcome great challenges and surround herself with leaders who motivate her to grow both personally and professionally.'),
            t('With her experience and leadership, the Genesis Motor North America board faces the challenge of increasing the brand\'s market share at a time when semiconductor shortages are delaying manufacturers\' plans.')
        ]

    },
    {
        title: 'Katria Oviedo',
        slug: 'katria-oviedo',
        description: t('CEO.'),
        icon: '/images/sponsors-people/katria-oviedo.avif',
        company: 'Jetz',
        company_icon: '/images/sponsors-corporate/jetz.jpeg',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Outstanding entrepreneur and leader in the technology and innovation industry, co-founder and COO of Jetz App, where she has transformed the auto parts supply chain in Latin America through disruptive digital solutions.'),
            t('With vast experience in business negotiations, public relations, and venture capital funds, Katria has consolidated herself as an influential figure in the entrepreneurial ecosystem.'),
            '',
            t('Her visionary leadership has been fundamental for the creation of market strategies and startup growth, demonstrating her ability to lead companies to success in highly competitive markets.'),
            t('In addition, she has dedicated more than 4,500 hours to mentoring over 160 entrepreneurs, strengthening the entrepreneurial community through workshops and incubation programs.'),
            t('Her commitment to excellence and innovation positions her as a benchmark in the business field, highlighting her ability to form strategic alliances and guide new generations of business leaders.'),
            '',
            t('As a professor at the Center for Design, Cinema and Television, and with her trajectory in organizations such as Vetta and Rubik Ventures, Katria has demonstrated her ability to boost the growth of high-impact companies and projects.'),
            t('Her role in the industry is not limited to creating successful companies, but also to training and developing future leaders, reflecting her passion for entrepreneurship and her desire to contribute to economic and social progress.')
        ]

    },
    {
        title: 'Claudia Quintanilla',
        slug: 'claudia-quintanilla',
        description: t('CEO & Co-Funder.'),
        icon: '/images/sponsors-people/claudia-quintanilla.avif',
        company: 'Rextie',
        company_icon: '/images/sponsors-corporate/rextie.png',
        nationality: t('Peru 🇵🇪'),
        legacy: [
            t('Claudia Quintanilla is a recognized co-founder and COO at Rextie Peru, a digital exchange platform where you can exchange soles and dollars with a super exchange rate.'),
            t('Claudia is a computer and systems engineer with studies in eBusiness, Information Technologies, and project management.'),
            t('She has experience in information management and operational risk.'),
            t('She was COO & Co-Founder at Rextie since February 2016 and Vice President of Allies and Guilds at the PERU FINTECH ASSOCIATION since December 2020.'),
            '',
            t('Successful results through leadership, innovation, motivation, and results orientation.'),
            t('Ability for analysis, decision-making, multidisciplinary team management, and easy adaptation to change.')
        ]

    },
    {
        title: 'Lilia Acosta',
        slug: 'lilia-acosta',
        description: t('Founder and Entrepreneur.'),
        icon: '/images/sponsors-people/lilia-acosta.avif',
        company: 'AMEXME Cápitulo Cholula',
        company_icon: '/images/sponsors-corporate/amexme.jpeg',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Lilia Acosta has been the Director of Solak since 2013, a vehicle and truck leasing company.'),
            t('In 2022, she was elected President of the Cholula Chapter of the Mexican Association of Businesswomen (AMEXME), which offers resources and expertise to help women entrepreneurs reach the next level of success.'),
            '',
            t('Lilia holds a Bachelor\'s degree in Clinical Psychology from the Autonomous University of Sinaloa and a Master\'s degree in Family Sciences from the Popular Autonomous University of the State of Puebla (UPAEP).'),
            t('Previously, she worked at the Public Education Secretariat and the General Hospital of Culiacán in psychological care and evaluation.')
        ]

    },
    {
        title: 'Inna Makhniboroda',
        slug: 'inna-makhniboroda',
        description: t('Founder and Partner.'),
        icon: '/images/sponsors-people/inna-makhniboroda.avif',
        company: 'Sigue Derecho / E&M Business Lawyers',
        company_icon: '/images/sponsors-corporate/lawyer.png',
        nationality: t('Russia 🇷🇺'),
        legacy: [
            t('Inna is a results-oriented international lawyer with extensive legal practice in internal legal advisory, external legal consulting, and academic research on modern international law issues and the legal regulation of new technologies. She has served as a legal advisor/counsel for the board of directors of various companies in the process of organizing cross-border operations, international business expansion, and foreign investment protection. With her experience and skills, Inna can help companies navigate complex international legal landscapes and ensure success in their global operations.'),
            '',
            t('In addition to her business activities, Inna and her partner Edgar founded the "Sigue Derecho" program to support exceptional female lawyers who have gone unnoticed in the legal industry due to their gender, origin, place of study, age, among others. The program offers 360° professional support scholarships covering housing, sustenance, and security to allow talented female lawyers from different parts of Mexico to move to Mexico City and improve their professional capabilities in law.')
        ]
    },
    {
        title: 'Daniela Hernández Alvarez',
        slug: 'daniela-hernandez-alvarez',
        description: t('CEO - Co-Founder'),
        icon: '/images/sponsors-people/daniela-hernandez.avif',
        company: 'Earth & Life UNiversity',
        company_icon: '/images/sponsors-corporate/earth.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Daniela Hernández is a renowned entrepreneur and leader in sustainability, environment, and human development.'),
            t('Daniela has stood out as Co-Founder and General Director of Earth & Life University, a university specializing in training leaders and agents of change at undergraduate and postgraduate levels.'),
            '',
            t('With over 7 years of experience in public and private projects, Daniela has implemented strategies in eco-technologies, circular economy, sustainable tourism, creative industries, and learning methodologies.'),
            '',
            t('In addition to her work at Earth & Life University, Daniela founded Maya Bacab, a beekeeping company dedicated to revaluing Mayan culture.'),
            t('For her social and business leadership, the U.S. Embassy selected her as one of the 250 social leaders in Latin America.')
        ]

    },
    {
        title: 'Edgar Espejel',
        slug: 'edgar-espejel',
        description: t('Founding Partner.'),
        icon: '/images/sponsors-people/edgar-espejel.avif',
        company: 'E&M Business Lawyer',
        company_icon: '/images/sponsors-corporate/lawyer.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Edgar Espejel is a lawyer specializing in business law, graduated with an LLM from the University of Cambridge.'),
            t('As a founding partner of the firm E&M Business Lawyers since 2014, he is responsible for providing a comprehensive legal department service by incorporating various areas of expertise, such as corporate law (M&A) and tax law, among others.'),
            '',
            t('With 17 years of experience in both the private and social sectors, Edgar understands the need to meet business objectives as both an in-house and external lawyer.'),
            t('His mission is to provide legal advice to his clients that combines the best of both worlds to achieve commercial results.'),
            t('With an impressive track record in the world of business law, Edgar is an expert in his field and is dedicated to providing high-quality legal services to his clients.'),
            t('With his experience and skills, he can help any company achieve its business objectives and succeed.')
        ]

    },
    {
        title: 'Adriana Carmona',
        slug: 'adriana-carmona',
        description: t('CEO & Co-Founder.'),
        icon: '/images/sponsors-people/adriana-carmona.avif',
        company: 'TEDI / Karbook',
        company_icon: '/images/sponsors-corporate/karbook.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Adriana Carmona is an innovative entrepreneur with over 8 years of experience building technology companies in Mexico and Europe. Her specialty is in business and the automotive industry.'),
            '',
            t('With a social focus in her companies, she is co-founder of Karbook, a company committed to democratizing access to technology in the Automotive Aftermarket industry, which includes auto parts stores, automotive workshops, and fleets.'),
            t('She is also the founder of the Mujer Automotriz leaders community, a 100% social initiative with the mission of promoting female leadership in the automotive industry.'),
            t('In addition, she is an advisor at the United States Center for Advanced Manufacturing and the Karmona Automotive Club, which is dedicated to classic car restoration, automotive maintenance, and services for high-performance cars.'),
            '',
            t('Her focus on the creation and commercialization of innovative products has led her to various recognitions, including the Female Entrepreneurship award by Accenture in the Netherlands, and being selected in 2022 as one of the 250 high-impact entrepreneurs in Latin America by the Young Leaders of the Americas Initiative program.'),
            '',
            t('Adriana is a natural leader and mentor passionate about education and inclusivity, boosting her colleagues\' skills to achieve goals quickly and efficiently.'),
            t('She has lived in six countries, speaks three languages, and has experience working in the private and public sectors.')
        ]

    },
    {
        title: 'Gimena Sanchez',
        slug: 'gimena-sanchez',
        description: t('Entrepreneurship Director.'),
        icon: '/images/sponsors-people/gimena-sanchez.avif',
        company: 'Endeavor México',
        company_icon: '/images/sponsors-corporate/endeavor.jpeg',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Gimena is an experienced leader in promoting the entrepreneurial, social, and cultural environment through high-impact ventures in Mexico.'),
            t('As Entrepreneurship Director at Endeavor Mexico, she has demonstrated her ability to identify and support the country\'s most promising startups, with a focus on driving innovation and change.'),
            '',
            t('Her previous experience in finance and project management has been invaluable in her current work at Endeavor, where she helps companies navigate market challenges and reach their full growth potential.'),
            t('Gimena is a passionate advocate for entrepreneurship as a transformative force for Mexico, and has been key to the success of numerous emerging companies in the country.')
        ]
    },
    {
        title: 'Aaron Koivunen',
        slug: 'aaron-koivunen',
        description: t('CTO & Co-Funder.'),
        icon: '/images/sponsors-people/aaron-koivunen.avif',
        company: 'TEDI / Karbook',
        company_icon: '/images/sponsors-corporate/karbook.png',
        nationality: t('Germany 🇩🇪 - Finland 🇫🇮'),
        legacy: [
            t('Aaron Koivunen is an entrepreneur and leader in the technology field, co-founder of Karbook, a company that seeks to democratize access to technology in the automotive repair industry.'),
            t('His mission is to facilitate digital transformation in workshops, auto parts stores, and fleets, with the aim of generating positive change in the industry and improving the operational efficiency of small and medium-sized enterprises (SMEs) in this sector.'),
            '',
            t('Recognized for his leadership and collaboration skills, Aaron has demonstrated his ability to overcome challenges in various contexts, always identifying and leveraging the strengths of his team.'),
            t('In 2024, he was selected as one of the 50 high-impact entrepreneurs in Europe through the Young Transatlantic Innovation Leaders Initiative (YTILI) program, in recognition of his ability to drive technological innovation and social change.'),
            '',
            t('With over eight years of experience building technology companies in Mexico and Europe, Aaron has focused on promoting technological and social inclusion through his projects.'),
            t('The Mexican government recognized his work with Karbook by granting him a high-impact project, highlighting his contribution to the development of the automotive industry and his commitment to digital transformation.'),
            '',
            t('Aaron is a passionate advocate for empowering new generations, actively participating in programs such as "Jóvenes Construyendo el Futuro" (Youth Building the Future), where he opens the doors of his organization to teach software development skills to young people in vulnerable situations.'),
            t('Likewise, his experience as a consultant for over five years has allowed him to advise companies on digitalization and growth strategies, being a benchmark in the implementation of disruptive technologies such as artificial intelligence (AI).'),
            '',
            t('In addition to his role at Karbook, Aaron is an advisor at the United States Center for Advanced Manufacturing and a member of the Karmona Automotive Club, focused on classic car restoration and high-performance services.'),
            t('With a social focus and a clear vision of innovation, Aaron continues to drive technological transformation and inclusive leadership in various industries.')
        ]

    },
    {
        title: 'Hazel Guerrero Hurtado',
        slug: 'hazel-guerrero-hurtado',
        description: t('General Director.'),
        icon: '/images/sponsors-people/hazel-guerrero.avif',
        company: 'BW Automotive Motor Parts',
        company_icon: '/images/sponsors-corporate/bw.jpeg',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Hazel Guerrero Hurtado is recognized for her outstanding performance as General Director of the family-owned and transnational company BW Comercial Automotive Motor Parts, which specializes in the manufacturing of engine parts and globally in cooling systems.'),
            '',
            t('She holds a Bachelor\'s degree in Business Administration and Finance, graduated with honors from the Monterrey Institute of Technology, and has a Specialization in Marketing from New York University (NYU).'),
            t('With 22 years of experience in marketing, branding, and new product development, she has worked in both transnational consumer product companies and the automotive industry.'),
            t('She has received multiple awards from media and companies for her extensive career in brand development and marketing strategies.')
        ]

    },
    {
        title: 'Mariana Carmona',
        slug: 'mariana-carmona',
        description: t('Head of HR / Sr HRBP.'),
        icon: '/images/sponsors-people/mariana-carmona.avif',
        company: 'Mercado Libre',
        company_icon: '/images/sponsors-corporate/mercado-libre.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Mariana Carmona is the Head of Human Resources / Sr HRBP at Mercado Libre in Mexico City for the past three years, where she manages the operations of 5000 full-time employees.'),
            t('Previously, she worked at Nestlé Mexico for 4 years and 6 months as Human Resources Manager - Project Management, providing support to HRBPs for the implementation of strategies in organizational development, training, and "Nestlé Employer Branding".'),
            '',
            t('Mariana also worked as a Human Resources Business Partner in Mexico City and Human Resources Administrator in Valle de México, ensuring compliance with Human Resources policies and procedures, as well as training, recruitment, and selection through assessment centers.'),
            t('Mariana holds a Bachelor\'s degree in Industrial and Organizational Psychology since 2011.')
        ]

    },
    {
        title: 'Paola Rodriguez',
        slug: 'paola-rodriguez',
        description: t('Engineering Manager'),
        icon: '/images/sponsors-people/paola-rodriguez.avif',
        company: 'Lyft',
        company_icon: '/images/sponsors-corporate/microsoft.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Paola Rodríguez is a successful professional in the field of information technology, with a career spanning over 19 years in sectors such as telecommunications, manufacturing, banking, and IT consulting.'),
            t('Currently, Paola is the Director of Engineering at Lyft and is known for her ability to lead innovative and efficient projects, generating efficiencies through lean methodologies in infrastructure, operations, and software development.'),
            '',
            t('Paola has been recognized for her leadership, negotiation, and high-performing team building skills, as well as her ability to design innovative thinking methodologies under agile methodologies.'),
            t('Paola has also contributed significantly to compliance with local and global regulations, such as ISO and SOX.'),
            t('In 2016, she served as Corporate Systems Manager at GRUPO LUIS HOYO.')
        ]

    },
    {
        title: 'Monica Guerrero',
        slug: 'monica-guerreo',
        description: t('Regional Marketing Director for Mexico and Latin America'),
        icon: '/images/sponsors-people/monica-guerrero.avif',
        company: 'Denso',
        company_icon: '/images/sponsors-corporate/denso.png',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Experienced marketing specialist with a focus on the Mexican and Latin American market.'),
            t('Currently, she serves as Regional Marketing Manager at DENSO, where she leads the coordination of special events and regional marketing strategies.'),
            '',
            t('With over a decade of experience, Mónica has worked in prominent companies such as SAS and Yokogawa, where she also managed event coordination and the implementation of marketing campaigns, demonstrating her ability to connect brands with key audiences in the region.')
        ]

    },
    {
        title: 'Denisse Tiznado ',
        slug: 'denisse-tiznado',
        description: t('Licensed Clinical Psychologist and DEI Consultant'),
        icon: '/images/sponsors-people/denisse-tiznado.avif',
        company: 'University of Washington',
        company_icon: '/images/sponsors-corporate/washington-sponsor.avif',
        nationality: t('Mexico 🇲🇽-USA 🇺🇸'),
        legacy: [
            t('Denisse Tiznado is a successful professional in the field of clinical psychology.'),
            t('She is a Licensed Clinical Psychologist and DEI Consultant in Washington, United States.'),
            t('In 2021, she was appointed Interim Assistant Professor - Clinical and Professor II in the College of Arts & Sciences, Department of Psychology.'),
            t('She also serves as Staff Psychologist at the San Diego VA Health Care System since 2018.'),
            '',
            t('With extensive experience in providing individual and group therapy, Denisse has worked in the Addiction Treatment Schedule, providing support to veterans with various diagnoses, including substance use disorders, dual diagnosis with Major Depressive Disorder, PTSD, OCD, Anxiety Disorders, Adjustment Disorder, Schizophrenia, Bipolar Disorder I and II, Personality Disorders, among others.'),
            t('Denisse obtained her Doctor of Philosophy (Ph.D.) in Clinical Health Psychology from the University of Missouri-Kansas City in 2011.')
        ]
    },
    {
        title: 'Paola Mendoza',
        slug: 'paola-mendoza',
        description: t('CEO & Co-Founder'),
        icon: '/images/sponsors-people/paola-mendoza.avif',
        company: 'Carlota Flower Lab',
        company_icon: '/images/sponsors-corporate/carlota-sponsor.avif',
        nationality: t('Mexico 🇲🇽'),
        legacy: [
            t('Paola Mendoza is an entrepreneur passionate about flowers and floral art.'),
            t('Together with her husband, she founded Carlota Flower Lab in 2016, a company dedicated to spreading their love for flowers and the most innovative techniques in the international scene, breaking traditional rules in Mexico.'),
            t('Paola studied Graphic Design, but soon discovered she didn\'t want to work in an enclosed office.'),
            '',
            t('Instead, her passion for flowers led her to grow from a small flower selling business to a successful entrepreneur dedicated to sharing her experience with other flower arranging enthusiasts.'),
            t('With three years of training in various floristry schools alongside her husband, they decided to create their own recognizable style in the market.'),
            '',
            t('In November 2018, they held their first workshop for training new talents, quickly becoming a benchmark in Mexican floral art.'),
            t('Shortly after, Carlota Flower Lab opened its doors to the U.S. market with its first workshop in Los Angeles in March 2020.'),
            t('Their success knows no bounds and their vision is to take their knowledge to other countries so that more people can join this great way of starting a business.')
        ]
    }, {
        title: 'Alessandra Cagnin Caballero',
        slug: 'alessandra-cagnin',
        description: t('Founder'),
        icon: '/images/sponsors-people/alessandra-cagnin.avif',
        company: 'TBA',
        company_icon: '/images/sponsors-corporate/tba-sponsor.avif',
        nationality: t('Mexico 🇲🇽 - Canada 🇨🇦'),
        legacy: [t('TBA')]
    },
];

export type Benefits = {
	title: string,
	icon: IconName,
	description: string | string[],

}
export const benefits: Benefits[] = [
    {
        title: t('Innovation Exposure'),
        icon: "lightbulb",
        description: t('Showcase cutting-edge advancements led by women and revolutionary technologies developed within the organization. Have a direct impact in a committed community.'),
    },
    {
        title: t("Industry Collaboration"),
        icon: "handshake",
        description: t("Find and leverage collaboration opportunities with innovators in the industry to drive mutual growth and development. It’s not just networking; it’s about forging strategic alliances and enhancing your market presence."),
    },
    {
        title: t("Internship Programs"),
        icon: "graduation-cap",
        description: t("Discover new talent by hosting interns and recent graduates, ensuring a steady flow of skilled professionals. Your sponsorship or participation is not just visibility—it’s a powerful statement of your commitment to inclusive excellence and innovation."),
    },
    {
        title: t("Let's Redefine Leadership in the Industry"),
        icon: "compass",
        description: t("Let’s set the agenda for the future of the industry. Your leadership drives transformative conversations, shaping the new landscape. Become a key player in promoting a more inclusive and innovative industry."),
    },
    {
        title: t("Company Committed to Diversity"),
        icon: "users",
        description: t("Leverage this platform to showcase your commitment to diversity, connect with top talent, and strengthen your strategic recruitment initiatives."),
    },
    {
        title: t("Recognition and Awards"),
        icon: "award",
        description: t("Collaborate on the awards and recognition program to celebrate outstanding achievements and significant contributions for yourself and the industry. Let’s shape a more diverse and dynamic automotive landscape."),
    },
    {
        title: t("Leadership Strengthening"),
        icon: "shield-check",
        description: t("Highlight and support the achievements and contributions of your organization's leaders on our platform to inspire, motivate, and forge new leaders within and beyond your organization."),
    },
    {
        title: t("High-Level Networking Events"),
        icon: "network",
        description: t("Access and be part of high-level events with a unique network of professionals passionate about the future of the automotive industry. Meet decision-makers, executives, and senior leaders for knowledge exchange and collaboration."),
    },
    {
        title: t("Who is it for?"),
        icon: "factory",
        description: [
            t("OEM Automotive Industry Companies"),
            t("OEM Supply Chain Companies"),
            t("Automotive Aftermarket Companies"),
        ],
    },
];


export type Programs = {
	id: number,
	reversed: boolean,
	imgSrc: string,
	imgAlt: string,
	title: string,
	description: string,
	link: string,
	buttonText: string,
}
export const programs: Programs[] = [
    {
        id: 1,
        reversed: true,
        imgSrc: "./images/events-photograph/who-is.avif",
        imgAlt: t("Global Community"),
        title: t("What is it?"),
        description: t("Mujer Automotriz is a platform that highlights female leadership, innovation, and fosters meaningful, high-value relationships in the automotive industry. We create a community of leaders made up of managers, C-level executives, and decision-makers interested in fostering a more diverse industry with inclusive leadership and focused on the continued development of leaders at both personal and professional levels."),
        link: './programs',
        buttonText: t("Join"),
    },
    {
        id: 2,
        reversed: false,
        imgSrc: "./images/events-photograph/profesional.avif",
        imgAlt: t("Professional Development and Empowerment"),
        title: t("Professional Development and Empowerment"),
        description: t("Events, regional and global summits. Workshops, panels, masterclasses, and talks with outstanding leaders from the automotive sector on innovation, diversity, technology, and leadership. Learn from their experiences, challenges, success paths, and interpersonal skills needed for personal and professional growth."),
        link: "./events",
        buttonText: t("Events"),
    },
    {
        id: 3,
        reversed: true,
        imgSrc: "./images/events-photograph/comunity.avif",
        imgAlt: t("Global Community"),
        title: t("Global Community"),
        description: t("Access to our vibrant community of highly successful professionals and women. Connect with a global network of like-minded individuals, receive mentorship and support tailored to the changing demands of the automotive industry. Be part of the members leading the way toward a more diverse and innovative industry."),
        link: "./ambassors",
        buttonText: t("Community"),
    },
    {
        id: 4,
        reversed: false,
        imgSrc: "./images/events-photograph/education.avif",
        imgAlt: t("Promoting Diversity and Education"),
        title: t("Promoting Diversity and Education"),
        description: t("Exclusive access to resources, industry expertise, news, the latest innovations, and continuous education through empowerment events. Learn about DEI (Diversity, Equity, and Inclusion) strategies and best practices companies are implementing."),
        link: "/events#upcoming-events",
        buttonText: t("Summit '23"),
    },
];


export type Logos=string[];


 export const logos:Logos = [
    "./images/sponsors-corporate/irex-icon.png",
    "./images/sponsors-corporate/karbook-icon.png",
    "./images/sponsors-corporate/usa-departament.png",
    "./images/sponsors-corporate/usa-icon.png",
    "./images/sponsors-corporate/tedi-longlight.png",
    "./images/sponsors-corporate/ylai_square.png",

  ];