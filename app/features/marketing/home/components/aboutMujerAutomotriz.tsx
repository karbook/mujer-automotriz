import React from 'react';

const aboutMujerAutomotriz = () => {
    return (
        <div className="bg-white dark:bg-black py-20 px-6">
            <div className="max-w-5xl mx-auto text-left space-y-24">

                {/* Sección 1 - Solo texto */}
                <section className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
                    <div className="md:w-1/2 rounded-xl ">
                        <img
                            src="./images/targets-images/who-is.avif"
                            alt="Comunidad Global"
                            className="w-[400px] h-auto object-cover mx-auto"
                        />
                    </div>
                    <div className="md:w-1/2 text-white text-left bg-[#1d011acc] backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-inner rounded-xl p-6 max-w-[420px]">
                        <h3 className="text-3xl font-semibold mb-2">¿Qué es?</h3>
                        <p className="mb-4 font-semibold">
                            Mujer Automotriz, es una plataforma que expone y resalta el liderazgo femenino, la innovación y fomenta relaciones
                            significativas y de valor en la industria automotriz. Creamos una comunidad de líderes conformada por directivos,
                            ejecutivos de nivel C y tomadores de decisiones, interesados en fomentar una industria más diversa, con un liderazgo
                            inclusivo y enfocados en el continuo desarrollo de los líderes a nivel personal y profesional.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                                Comunidad
                            </button>
                            <button className="text-pink-500 font-semibold hover:underline text-sm">
                                Más info
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sección 2 - Imagen izquierda, texto derecha */}
                <section className="flex flex-col md:flex-row items-start md:items-center gap-8 p-6">
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="./images/targets-images/profesional.avif"
                            alt="Desarrollo Profesional y Empoderamiento"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-white text-left bg-[#1d011acc] backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-inner rounded-xl p-6 max-w-[420px]">
                    <h3 className="text-3xl font-semibold mb-2">Desarrollo Profesional y Empoderamiento</h3>
                        <p className="mb-4 font-semibold">
                            Eventos, cumbres regionales y globales. Talleres, paneles, clases magistrales y charlas con líderes destacadas del sector automotriz sobre innovación, diversidad, tecnología y liderazgo.
                            Conoce las experiencias de los líderes de la industria, desafíos, caminos al éxito y habilidades interpersonales necesarias para el avance personal y profesional.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                                Eventos
                            </button>
                            <button className="text-pink-500 font-semibold hover:underline text-sm">
                                Más Info
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sección 3 - Imagen derecha, texto izquierda */}
                <section className="flex flex-col md:flex-row-reverse items-start md:items-center gap-8">
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="./images/targets-images/comunity.avif"
                            alt="Comunidad Global"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-white text-left bg-[#1d011acc] backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-inner rounded-xl p-6 max-w-[420px]">
                    <h3 className="text-3xl font-semibold mb-2">Comunidad Global</h3>
                        <p className="mb-4 font-semibold">
                            Acceso a nuestra comunidad vibrante de profesionales y mujeres altamente exitosas.
                            Conecta con una red global de personas con ideas afines, recibe mentoría y apoyo adaptado a las demandas cambiantes de la industria automotriz.
                            Sé parte de los miembros que están liderando el camino hacia una industria más diversa e innovadora.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                                Comunidad
                            </button>
                            <button className="text-pink-500 font-semibold hover:underline text-sm">
                                Más info
                            </button>
                        </div>
                    </div>
                </section>

                {/* Sección 4 - Imagen izquierda, texto derecha */}
                <section className="flex flex-col md:flex-row items-start md:items-center gap-8">
                    <div className="md:w-1/2 rounded-xl overflow-hidden shadow-lg">
                        <img
                            src="./images/targets-images/education.avif"
                            alt="Fomento a la Diversidad y Educación"
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 text-white text-left bg-[#1d011acc] backdrop-blur-md backdrop-saturate-150 border border-white/10 shadow-inner rounded-xl p-6 max-w-[420px]">
                    <h3 className="text-3xl font-semibold mb-2">Fomento a la Diversidad y Educación</h3>
                        <p className="mb-4 font-semibold">
                            Acceso exclusivo a recursos, expertís de la industria, noticias, últimas innovaciones y educación continua a través de eventos de empoderamiento.
                            Conoce las estrategias y mejores prácticas de DEI (Diversidad, Equidad e Inclusión) que las empresas están implementando.
                        </p>
                        <div className="flex gap-4">
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm hover:bg-gray-700 transition">
                                Cumbre'23
                            </button>
                            <button className="text-pink-500 font-semibold hover:underline text-sm">
                                Más info
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default aboutMujerAutomotriz;
