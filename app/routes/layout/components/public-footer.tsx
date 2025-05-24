import { Button } from '@/components/ui/button'
import { useTranslation } from 'react-i18next'
export function Footer() {

  const { t } = useTranslation();
  return (
    <footer
      className="relative bg-cover bg-center bg-no-repeat text-[#1d156c] dark:text-white py-20 px-6 backdrop-blur-md overflow-hidden"
      style={{ backgroundImage: 'url(/images/backgrounds-abstract/background-gradient.png)' }}
    >
      <div className="absolute top-0 left-0 w-full h-10 bg-gradient-to-b from-white dark:from-black to-transparent z-0" />

      <div className="relative z-10 max-w-6xl mx-auto grid gap-10 md:grid-cols-2 items-start">
        <div className="space-y-5 text-center md:text-left">
          <h3 className="text-4xl font-extrabold leading-tight">
            {t("Let's collaborate")}
          </h3>
          <p className="text-lg text-gray-700 font-semibold dark:text-gray-300 max-w-md">
            {t("Do you have a project that empowers women in this industry?")}
          </p>
          <p className="text-lg text-gray-700 font-semibold dark:text-gray-300 max-w-md">
            {t("Write to us")}
          </p>
          <div>
            <Button variant="black" className="px-8 py-6 text-base group">
              <span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
                {t("Contact")}
              </span>
            </Button>
          </div>
        </div>
        <div className="text-sm text-white dark:text-white flex flex-col items-center md:items-end">
          <p className="mb-1">
            ©2023 <span className="font-semibold text-[#1d156c] dark:text-white">tedi.club</span>
          </p>
          <p className="italic">{t("Founded with passion in a Finnish sauna")}</p>
        </div>
      </div>
    </footer>
  )
}
