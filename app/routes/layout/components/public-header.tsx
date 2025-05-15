// src/components/Header.tsx
import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/misc'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router'
import { buttonVariants } from '@/components/ui/button'
import { ColorSchemeSwitch } from '@/components/color-scheme-switch'
import Logo from './logo'
import LanguageDropDown from './language-dropdown'
import { NavLink } from 'react-router-dom' // Asegúrate de importar NavLink

const menuItems = [
  { path: '/', label: 'Home' },
  { path: '/events', label: 'Events' },
  { path: '/Programs', label: 'Programs' },
  { path: '/Ambassadors', label: 'Ambassadors' },
  { path: '/Sponsors', label: 'Sponsors' },
] as const // 👈 esto literaliza las claves para que `t(label)` funcione
export function Header() {
  const { t } = useTranslation()

  return (
    <nav className="sticky top-0 w-full items-center justify-center lg:flex py-4 bg-white/70 dark:bg-black/50 backdrop-blur-md shadow-md z-50">
      <NavigationMenu className="hidden px-4 2xl:px-20 max-w-full w-full items-center justify-between lg:flex">
        {/* Logo */}
        <div className="flex items-center gap-6">
          <Logo className="h-10 w-auto" variant="long" />
        </div>

        {/* Menu Items */}
        <div className="flex-1 flex justify-center">
          <NavigationMenuList className="flex gap-8">
            {menuItems.map((item, index) => (
              <NavigationMenuItem key={index}>
                <NavigationMenuLink asChild>
                <NavLink
  to={item.path}
  className={({ isActive }) =>
    cn(
      "text-lg font-semibold px-4 py-2 rounded-2xl transition-colors duration-300",
      isActive ? "text-blue-600 dark:text-pink-500" : "text-gray-900 dark:text-gray-200"
    )
  }
  onClick={(e) => (e.currentTarget as HTMLElement).blur()}
>
  {t(item.label)}
</NavLink>

                </NavigationMenuLink>
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
                'flex items-center justify-between rounded-full p-3 text-lg transition-all duration-200 [&_svg]:text-gray-700 [&_svg]:size-5',
                buttonVariants({ variant: 'black' })
              )}
            >
              {t('Register')}
            </Link>
          </NavigationMenuLink>
        </div>
      </NavigationMenu>

      {/* Mobile version */}
      <div className="relative flex items-center justify-center">
        <Logo className="h-12 w-auto lg:hidden" variant="long" />
      </div>
    </nav>
  )
}
