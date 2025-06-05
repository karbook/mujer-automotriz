// CORE
import { Link } from 'react-router';

// UTILS
import { useTranslation } from 'react-i18next';

// COMPONENTS
import { Button } from '@/components/ui/button';

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
          <h3 className="text-4xl font-extrabold leading-tight" style={{fontFamily:'var(--font-SF-Pro)'}}>
            {t("Let's collaborate")}
          </h3>
          <p className="text-2xl text-gray-700 font-semibold dark:text-gray-300 max-w-md" style={{fontFamily:'var(--font-SF-Pro)'}}>
            {t("Do you have a project that empowers women in this industry?")}
          </p>
          <p className="text-2xl text-gray-700 font-semibold dark:text-gray-300 max-w-md" style={{fontFamily:'var(--font-SF-Pro)'}}>
            {t("Write to us")}
          </p>
          <div>
            <Link to="/form-mujer-automotriz" className="inline-block"> 
              <Button variant="blackTransparent" className="px-8 py-6 text-base group">
                <span className="text-xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-500 group-hover:to-red-500">
                  {t("Contact")}
                </span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="text-sm text-white dark:text-white flex flex-col items-center md:items-end">
          <p className="mb-1 text-lg">
            ©2025 <span className="font-semibold text-[#1d156c] dark:text-white">Mujer Automotriz</span>
          </p>
        </div>
      </div>
    </footer>
  );
}