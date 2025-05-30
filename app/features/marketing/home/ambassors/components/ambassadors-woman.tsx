"use client";

// UTILS
import { useTranslation } from "react-i18next";

// ANIMATION
import { motion } from "framer-motion";

// COMPONENTS
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

// DATA
import { ambassadors } from "../constants";

export function AmbassadorsWoman() {
  const { t } = useTranslation();
  return (
    <>
      <section
        className="relative w-full min-h-[50vh] px-6 sm:px-8 lg:px-10 text-white bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/images/backgrounds-abstract/background-woman.png')",
        }}
      >
        <div className="container mx-auto text-center">
          <div className="flex flex-col items-center gap-6">
            <motion.h1
              className="text-4xl sm:text-8xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              🌟 {t('Ambassadors')} 🌟
            </motion.h1>
            <motion.p
              className="text-lg sm:text-3xl max-w-xl mx-auto leading-relaxed text-gray-300"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              {t('Meet the leaders who are creating a more diverse industry')}
            </motion.p>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">

              <Button
                variant="blackTransparent"
                className="px-6 py-3 font-bold rounded-3xl text-white border-gray-400 border sm:text-xl hover:text-white hover:border-gray-400 transition-colors duration-300"
              >
                {t('Be part of the network and/or apply as an Ambassador')}
              </Button>
            </a>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 items-stretch">
            {ambassadors.map((ambassador) => (
              <Link to={`/information/${ambassador.slug}`} key={ambassador.slug}>
                <motion.div
                  className="bg-black text-white dark:bg-white dark:text-black border border-gray-200 dark:border-gray-700 shadow-xl p-6 rounded-3xl flex flex-col items-center w-full max-w-[360px] min-h-[520px] h-full transition-transform hover:scale-[1.02]"
                >
                  <div className="relative w-full mb-4 rounded-lg overflow-hidden">
                    <img
                      src={ambassador.icon}
                      alt={ambassador.title}
                      className="w-full min-h-[250px] object-cover rounded-xl"
                    />
                    <div className="absolute bottom-2 right-2 w-12 h-12 rounded-full overflow-hidden shadow-md">
                      <img
                        src={ambassador.company_icon}
                        alt={ambassador.company}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3
                    className="text-lg sm:text-3xl font-bold text-center leading-snug mb-2"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {t(ambassador.title)}
                  </h3>
                  <p
                    className="text-sm sm:text-lg text-white dark:text-black text-center mb-2 line-clamp-3"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t(ambassador.description)}
                  </p>
                  <p
                    className="text-sm sm:text-xl font-semibold text-center text-white dark:text-black mb-1"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    {ambassador.company}
                  </p>
                  <p
                    className="text-xs sm:text-lg font-semibold text-white dark:text-black text-center"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {t(ambassador.nationality)}
                  </p>
                </motion.div>
              </Link>
            ))}

          </div>
        </div>
      </section>

      <section className="relative w-full min-h-[50vh] px-6 sm:px-8 lg:px-10 flex flex-col items-center justify-center text-center mt-12 mb-12">
        <div className="w-full max-w-3xl flex justify-center">
          <img
            src="/images/backgrounds-abstract/background-hands.png"
            alt="Impulsando el cambio"
            className="w-full h-auto rounded-lg shadow-xl dark:shadow-gray-800 filter brightness-100 dark:brightness-75"
          />
        </div>
        <div className="container mx-auto mt-6">
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4 text-gray-900 dark:text-white" style={{ fontFamily: "var(--font-poppins)" }}>
            {t('Driving change and developing leaders')}
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-700 dark:text-gray-300" style={{ fontFamily: "var(--font-inter)" }}>
            {t('To train and empower women in the automotive maintenance and repair industry through technology and digitalization training.')}
          </p>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">

            <Button
              variant="blackTransparent"
              className="mt-4 px-6 py-3 font-bold rounded-3xl  text-gray-900 dark:text-white border-gray-300 dark:border-gray-400 sm:text-xl hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700 hover:border-gray-400 transition-colors duration-300"
            >
              {t('Apply to be an Ambassador')}
            </Button>
          </a>

        </div>
      </section>

    </>
  );
}

