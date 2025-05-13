import { useTranslation } from 'react-i18next'
import { cn } from '@/utils/misc'

// COMPONENTS
import {
	NavigationMenu,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router'
import Logo from './logo'
import LanguageDropDown from './language-dropdown'
import { buttonVariants } from '@/components/ui/button'

export function Header() {
	const { t } = useTranslation()

	return (
		<nav className="sticky top-0 w-full items-center justify-center lg:flex py-4 bg-gray-900 shadow-lg z-50">
			<NavigationMenu className="hidden px-4 2xl:px-20 max-w-full w-full items-center justify-between lg:flex">
				<Logo className="h-10 w-auto" variant="long" />
				<div className="flex-1 flex justify-center">
					<NavigationMenuList className="flex gap-8">
						{/* Menu Items */}
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									to="/home"
									className="text-lg font-semibold text-gray-300 px-4 py-2 rounded-md transition-colors duration-300"
								>
									{t('Home')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									to="/about"
									className="text-lg font-semibold text-gray-300 hover:text-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
								>
									{t('Events')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									to="/services"
									className="text-lg font-semibold text-gray-300 hover:text-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
								>
									{t('Programs')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									to="/contact"
									className="text-lg font-semibold text-gray-300 hover:text-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
								>
									{t('Ambassadors')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						<NavigationMenuItem>
							<NavigationMenuLink asChild>
								<Link
									to="/contact"
									className="text-lg font-semibold text-gray-300 hover:text-gray-100 px-4 py-2 rounded-md transition-colors duration-300"
								>
									{t('Sponsors')}
								</Link>
							</NavigationMenuLink>
						</NavigationMenuItem>
						{/* New button add */}
						<div className="flex gap-4 items-center">

							<NavigationMenuLink asChild>
								<Link to="/login" className={cn("flex items-center justify-between rounded-lg p-3 text-lg transition-all duration-200 [&_svg]:text-gray-700 [&_svg]:size-5", // Clases de NavigationMenuLink (sin el rounded-lg)
									buttonVariants({ variant: 'black' }))} >
									{t('Register')}
								</Link>
							</NavigationMenuLink>
						</div>
					</NavigationMenuList>
				</div>
			</NavigationMenu>

			{/* Se mantiene la parte para la versión móvil */}
			<div className="relative flex items-center justify-center">
				<Logo className="h-12 w-auto lg:hidden" variant="long" />
			</div>
		</nav>
	)
}
