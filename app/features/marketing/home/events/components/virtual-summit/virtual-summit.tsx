import { useState } from "react";
import { allSchedules } from "../../constants";
const glowColorPrimary = "#f97316";
const glowColorSecondary = "#fb923c";

export default function VirtualSummit() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeItemIndex, setActiveItemIndex] = useState<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, index: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setActiveItemIndex(index);
  };
  const handleMouseLeave = () => {
    setActiveItemIndex(null);
  };

  return (
    <section className="bg-white dark:bg-black text-gray-900 dark:text-white py-32 px-10 md:px-24 lg:px-40 min-h-screen flex flex-col font-sans antialiased">
      <h2 className="text-6xl md:text-7xl lg:text-8xl font-semibold text-left mb-24 tracking-tight bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text leading-tight">
        Agenda 2023
      </h2>

      <div className="w-full flex flex-col gap-12">
        {allSchedules.map((daySchedule, dayIndex) => (
          <div key={dayIndex} className={`flex flex-col md:flex-row md:items-start md:gap-8 ${dayIndex > 0 ? 'mt-24' : ''}`}>
            <div className="sticky top-20 z-50 text-left w-full md:w-[200px] md:shrink-0">
              <div className={`bg-white dark:bg-black px-4 py-8 rounded-lg w-full md:w-auto`}>
                <p className="text-xl font-semibold leading-snug bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text">
                  {daySchedule.date}
                </p>
                <h3 className="text-5xl font-semibold leading-snug bg-gradient-to-r from-orange-400 to-orange-200 text-transparent bg-clip-text">
                  {daySchedule.day}
                </h3>
              </div>
            </div>

            <div className="w-full mt-4 md:mt-0 md:flex-1">
              <div className="flex flex-col gap-6 items-start w-full">
                {daySchedule.items.map((schedule, itemIndex) => (
                  <div
                    key={`${dayIndex}-${itemIndex}`}
                    // Applied dark mode for border, background, and hover states
                    className={`relative p-12 border border-gray-300 dark:border-neutral-700 bg-white dark:bg-black hover:bg-orange-100/50 dark:hover:bg-orange-900/20 group min-h-[160px] flex flex-col rounded-xl shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-orange-500 dark:hover:border-orange-300 hover:shadow-orange-300/50 dark:hover:shadow-orange-700/50 hover:shadow-2xl w-full z-10`}
                    onMouseMove={(e) => handleMouseMove(e, itemIndex)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {activeItemIndex === itemIndex && (
                      <div
                        className="absolute rounded-full pointer-events-none z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          left: mousePos.x,
                          top: mousePos.y,
                          transform: "translate(-50%, -50%)",
                          width: "80px",
                          height: "80px",
                          backgroundColor: glowColorPrimary,
                          boxShadow: `0 0 60px 40px ${glowColorPrimary}, 0 0 90px 60px ${glowColorSecondary}`,
                        }}
                      ></div>
                    )}

                    <div className="flex flex-col items-center md:flex-row justify-between mb-8 relative w-full">
                      <div className="flex flex-col items-center md:items-start gap-4 flex-grow">
                        <span className="text-orange-500 dark:text-orange-400 text-4xl group-hover:animate-pulse">💡</span>
                        <h4 className="text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug transition-colors duration-300 group-hover:text-orange-800 dark:group-hover:text-orange-100 text-center md:text-left" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                          {schedule.title}
                        </h4>
                      </div>
                      {schedule.image && (
                        <img
                          src={schedule.image}
                          alt={schedule.speaker || schedule.title}
                          className={`w-28 h-28 rounded-full object-cover ${daySchedule.borderColor} shadow-md mt-8 md:mt-4 md:w-40 md:h-40`}
                        />
                      )}
                    </div>

                    <div className="flex flex-col gap-4 relative">
                      <div className="text-3xl font-medium text-gray-800 dark:text-white group-hover:text-orange-700 dark:group-hover:text-orange-300 transition-colors duration-300">
                        ⏰ {schedule.time}
                      </div>
                      {(schedule.speaker || schedule.location) && (
                        <p className="text-xl text-gray-600 dark:text-neutral-400 font-semibold group-hover:text-gray-800 dark:group-hover:text-neutral-200 transition-colors duration-300" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                          {schedule.speaker && (
                            <span className="text-2xl font-semibold text-gray-900 dark:text-white group-hover:text-orange-700 dark:group-hover:text-orange-200 transition-colors duration-300" style={{ fontFamily: ('var(--font-SF-Pro)') }}>🎤 {schedule.speaker}</span>
                          )}
                          {schedule.speaker && schedule.location && (
                            <span className="mx-2 text-gray-500 dark:text-neutral-500" >•</span>
                          )}
                          {schedule.location && (
                            <span>📍 {schedule.location}</span>
                          )}
                        </p>
                      )}
                      {schedule.description && (
                        <p className="text-2xl text-gray-700 dark:text-neutral-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-neutral-100 transition-colors duration-300" style={{ fontFamily: ('var(--font-SF-Pro)') }}>
                          {schedule.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
