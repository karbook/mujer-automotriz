// UTILS
import { useTranslation } from "react-i18next";
import { useState } from "react";

// DATA
import { sponsors } from "../constants";

const glowColors = ["#0c8ef4"];
export function SponsorsPresentation() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeDiv, setActiveDiv] = useState<number | null>(null);
  const { t } = useTranslation();

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
        <h2 className="text-6xl font-bold text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-SF-Pro)" }}>{t("Sponsors")}</h2>
        <p className="text-3xl font-semibold text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" style={{ fontFamily: "var(--font-SF-Pro)" }}>
          {t("Thanks to our sponsors for driving innovation in the automotive industry.")}
        </p>

        <div className="grid md:grid-cols-3 gap-10 items-center">
          {sponsors.map((sponsor, index) => (
            <a href={sponsor.link} target="_blank" rel="noopener noreferrer" key={sponsor.title} className="block">
              <div
                className="relative bg-white dark:bg-[#18181d] opacity-70 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 flex justify-center items-center border-2 transition-colors duration-500 ease-in-out overflow-hidden"
                style={{
                  borderColor: activeDiv === index ? glowColors[index % glowColors.length] : "#0c8ef4",
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
                      ${glowColors[index % glowColors.length]} 10%, transparent 80%)`,
                    }}
                  ></div>
                )}
                <img src={sponsor.logo} alt={sponsor.title} className="h-20 w-auto object-contain relative z-10" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};