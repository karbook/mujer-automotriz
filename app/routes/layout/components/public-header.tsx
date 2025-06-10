// CORE
import { Link, useLocation } from 'react-router';

// UTILS
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/misc';
import { buttonVariants } from '@/components/ui/button';

// COMPONENTS
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';

import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import Logo from './logo';
import LanguageDropDown from './language-dropdown';
import { MobileNavigation } from './public-mobile-navigation';

export function Header() {
  const { t } = useTranslation();
  const location = useLocation();

  const menuItems = [
    { path: '/', label: t('Home') },
    { path: '/events', label: t('Events') },
    { path: '/programs', label: t('Programs') },
    { path: '/ambassors', label: t('Ambassadors') },
    { path: '/sponsor', label: t('Sponsors') },
  ] as const;

  return (
    <nav className="sticky top-0 w-full py-8 min-h-[80px] bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-md z-50 flex items-center justify-center lg:justify-between px-4 2xl:px-20">
      <div className="flex items-center justify-between w-full lg:hidden">
        <div className="flex-shrink-0">
          <MobileNavigation />
        </div>
        <div className="flex-grow flex justify-center">
          <Logo className="h-10 w-auto" variant="long" />
        </div>
        <div className="flex-shrink-0 flex items-center gap-4">
        </div>
      </div>
      <NavigationMenu className="hidden max-w-full w-full items-center justify-between lg:flex">
        <div className="flex items-center gap-6">
          <Logo className="h-12 w-auto" variant="long" />
        </div>
        <div className="flex-1 flex justify-center">
          <NavigationMenuList className="flex gap-8">
            {menuItems.map((item, index) => {
              const isActive = location.pathname === item.path;

              return (
                <NavigationMenuItem key={index}>
                  <Link
                    to={item.path}
                    className={cn(
                      'relative inline-flex items-center justify-center rounded-md px-4 py-2 text-lg font-semibold tracking-wide transition-all duration-300',
                      'hover:text-black dark:hover:text-white hover:scale-105 hover:underline',
                      isActive ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-800 dark:text-gray-300'
                    )}
                    style={{ fontFamily: 'var(--font-poppins)' }}
                  >
                    {item.label}
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </div>
        <div className="flex gap-4 items-center justify-end">
          <ColorSchemeSwitch />
          <LanguageDropDown />
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'flex items-center text-black justify-between p-4 text-lg [&_svg]:text-gray-700 [&_svg]:size-5',
              buttonVariants({ variant: 'black' })
            )}
          >
            {t('Register')}
          </a>
        </div>
      </NavigationMenu>
    </nav>
  );
}