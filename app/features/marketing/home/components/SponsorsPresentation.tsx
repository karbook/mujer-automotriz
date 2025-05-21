import { useState } from "react";

import { sponsors } from "../constants";
const glowColors = ["#0c8ef4"];

export function SponsorsPresentation()  {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDiv, setActiveDiv] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveDiv(index);
  };

  const handleMouseLeave = () => {
    setActiveDiv(null);
  };

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white dark:from-[#18181d] dark:to-black py-20 px-6">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white">Patrocinadores</h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          Gracias a nuestros patrocinadores por impulsar la innovación en la industria automotriz.
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-[#18181d] opacity-70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex justify-center items-center border-2 transition-colors duration-500 ease-in-out overflow-hidden`}
              style={{
                borderColor: activeDiv === index ? glowColors[index % glowColors.length] : "#0c8ef4", // Color por defecto más suave
              }}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
            >
           {activeDiv === index && (
                <div
                  className="absolute inset-0 pointer-events-none z-0"
                  style={{
                    filter: "blur(30px)", 
                    background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, 
                      ${glowColors[index % glowColors.length]} 10%, 
                      ${glowColors[(index + 1) % glowColors.length]} 30%, 
                      ${glowColors[(index + 2) % glowColors.length]} 50%, 
                      transparent 80%)`,
                  }}
                ></div>
              )}
              <img src={sponsor.logo} alt={sponsor.title} className="h-20 w-auto object-contain relative z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};