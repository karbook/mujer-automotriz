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
    // Mantenemos el 'nav' como flex para control general
    <nav className="sticky top-0 w-full py-8 min-h-[80px] bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-md z-50
                    flex items-center justify-center lg:justify-between px-4 2xl:px-20"> 
      
      {/* Contenedor principal para la versión móvil */}
      <div className="flex items-center justify-between w-full lg:hidden">
        {/* MobileNavigation (botón de menú) a la izquierda */}
        <div className="flex-shrink-0">
          <MobileNavigation />
        </div>

        {/* Logo centrado */}
        <div className="flex-grow flex justify-center"> {/* CAMBIO: El logo ahora está aquí y se centra */}
          <Logo className="h-10 w-auto" variant="long" />
        </div>

        {/* Botones de la derecha (Idioma y Tema) */}
        <div className="flex-shrink-0 flex items-center gap-4">
        
        </div>
      </div>


      {/* Desktop version (sin cambios, solo se oculta en móvil) */}
      <NavigationMenu className="hidden max-w-full w-full items-center justify-between lg:flex">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Logo className="h-12 w-auto" variant="long" />
        </div>
        {/* Menu Items */}
        <div className="flex-1 flex justify-center">
          <NavigationMenuList className="flex gap-8">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    cn(
                      'inline-flex items-center justify-center rounded-md text-lg font-semibold transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus-visible:ring-offset-2',
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    )
                  }
                  style={{ fontFamily: 'var(--font-poppins)' }}>
                  {t(item.label)}
                </NavLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </div>
        {/* Botones a la derecha */}
        <div className="flex gap-4 items-center justify-end">
          <ColorSchemeSwitch />
          <LanguageDropDown />
          <NavigationMenuLink asChild>
            <Link
              to="/login"
              className={cn(
                'flex items-center justify-between rounded-full p-4 text-lg transition-all duration-200 [&_svg]:text-gray-700 [&_svg]:size-5',
                buttonVariants({ variant: 'black' })
              )}
            >
              {t('Register')}
            </Link>
          </NavigationMenuLink>
        </div>
      </NavigationMenu>
    </nav>
  );
}