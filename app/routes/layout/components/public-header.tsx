// Header.tsx
import { useTranslation } from 'react-i18next';
import { cn } from '@/utils/misc';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu';
import { Link, NavLink } from 'react-router-dom';
import { buttonVariants } from '@/components/ui/button';
import { ColorSchemeSwitch } from '@/components/color-scheme-switch';
import Logo from './logo';
import LanguageDropDown from './language-dropdown';
import { MobileNavigation } from './public-mobile-navigation';

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/programs', label: 'Programs' },
  { path: '/ambassors', label: 'Ambassadors' },
  { path: '/sponsor', label: 'Sponsors' },
] as const;

export function Header() {
  const { t } = useTranslation();

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
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'relative inline-flex items-center justify-center rounded-md px-4 py-2 text-lg font-semibold tracking-wide transition-all duration-300',
                      'hover:text-black dark:hover:text-white hover:scale-105 hover:underline',
                      isActive ? 'text-black dark:text-white border-b-2 border-black dark:border-white' : 'text-gray-800 dark:text-gray-300'
                    )
                  }
                  style={{ fontFamily: 'var(--font-poppins)' }}>
                  {t(item.label)}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>

        </div>
        <div className="flex gap-4 items-center justify-end">
          <ColorSchemeSwitch />
          <LanguageDropDown />
          <NavigationMenuLink asChild>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScRo7-7qlgtJqNqj5T7wfS6htJ7LGjKNstdOsaVir1g3Me17w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex items-center justify-between rounded-full p-4 text-lg transition-all duration-200 [&_svg]:text-gray-700 [&_svg]:size-5',
                buttonVariants({ variant: 'black' })
              )}
            >
              {t('Register')}
            </a>

          </NavigationMenuLink>
        </div>
      </NavigationMenu>
    </nav>
  );
}