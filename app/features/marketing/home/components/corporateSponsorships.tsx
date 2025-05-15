import React from 'react';
import { FaLightbulb, FaHandshake, FaUserGraduate, FaAward, FaUsers, FaChartLine, FaNetworkWired, FaIndustry } from 'react-icons/fa';

const cards = [
    {
        title: 'Exposición de Innovación',
        icon: <FaLightbulb className="text-green-400  text-3xl mb-4" />,
        description: 'Destaca los avances de vanguardia liderados por mujeres y tecnologías revolucionarias desarrolladas dentro de la organización. Ten impacto directamente en una comunidad comprometida.',
    },
    {
        title: 'Colaboración de la industria',
        icon: <FaHandshake className="text-green-400 text-3xl mb-4" />,
        description: 'Encuentra y aprovecha oportunidades de colaboración con innovadores dentro de la industria para impulso de crecimiento y desarrollo mutuo. No es solo networking, se trata de forjar alianzas estratégicas y mejorar tu presencia en el mercado.',
    },
    {
        title: 'Programas de practicantes',
        icon: <FaUserGraduate className="text-green-400 text-3xl mb-4" />,
        description: 'Encuentra nuevo talento alojando a practicantes y recién egresados asegurando un flujo constante de profesionales capacitados. Tu patrocinio o participación no es solo visibilidad, es una declaración poderosa de tu compromiso con la excelencia inclusiva y la innovación.',
    },
    {
        title: 'Redefinamos el liderazgo en la industria',
        icon: <FaChartLine className="text-green-400 text-3xl mb-4" />,
        description: 'Establezcamos la agenda para el futuro de la industria. Tu liderazgo impulsa conversaciones transformadoras, moldeando el nuevo panorama. Conviértete en un actor clave en la promoción de una industria más inclusiva e innovadora.',
    },
    {
        title: 'Empresa comprometida con la diversidad',
        icon: <FaUsers className="text-green-400 text-3xl mb-4" />,
        description: 'Aprovecha esta plataforma para mostrar tu compromiso con la diversidad, conectar con talento de alto nivel y potenciar tus iniciativas de reclutamiento estratégico.',
    },
    {
        title: 'Reconocimiento y Premios',
        icon: <FaAward className="text-green-400 text-3xl mb-4" />,
        description: 'Colaboración para el programa de premios y reconocimientos para celebrar logros destacados y contribuciones significativas para ti y para la industria. Moldeemos un panorama automotriz más diverso y dinámico.',
    },
    {
        title: 'Fortalecimiento de Liderazgo',
        icon: <FaChartLine className="text-green-400 text-3xl mb-4" />,
        description: 'Destaca y apoya los logros y contribuciones de los líderes de tu organización en nuestra plataforma para inspirar, motivar y forjar nuevos líderes dentro y fuera de tu organización. ',
    },
    {
        title: 'Eventos de Networking de alta gama',
        icon: <FaNetworkWired className="text-green-400 text-3xl mb-4" />,
        description: 'Accede y forma parte de eventos de alto nivel, con a una red única de profesionales apasionados por el futuro de la industria automotriz. Encuentra tomadores de desiciones, directivos y altos ejecutivos para el intercambio de conocimientos y colaboración.',
    },
    {
        title: '¿Para quién?',
        icon: <FaIndustry className="text-green-400 text-3xl mb-4" />,
        description: ["Empresas de la industria automotriz", "OEMs", "Cadena de suministros de las OEMs", "Empresas del aftermarket automotriz."],
    },
];

const corporateSponsorships = () => {
    return (
        <div className="bg-white dark:bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto text-left space-y-16">
                <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white">
                    Patrocinios Corporativos
                </h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                    Beneficios alineados a tus objetivos. Forjemos juntos el futuro de la industria Automotriz en México y América Latina.
                </p>

                <div className="grid md:grid-cols-3 gap-10">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-[#001e22] dark:bg-[#001e22] text-white rounded-xl p-6 shadow-md border border-[#011f22] hover:border-green-400 transition duration-300"
                        >
                            {card.icon}
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            {Array.isArray(card.description) ? (
                                <ul className="list-disc list-inside text-sm text-gray-300 space-y-1 mt-2 font-semibold">
                                    {card.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="text-sm text-gray-300 font-semibold">{card.description}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default corporateSponsorships;