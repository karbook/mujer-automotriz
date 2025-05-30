// CORE
import type { ComponentProps } from 'react'

// UTILS
import { cva } from 'class-variance-authority'
import { cn } from '@/utils/misc'

// COMPONENTS
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu'
import { Icon } from '@/components/ui/icon'

function NavigationMenu({
	className,
	children,
	viewport = true,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Root> & {
	viewport?: boolean
}) {
	return (
		<NavigationMenuPrimitive.Root
			data-slot="navigation-menu"
			data-viewport={viewport}
			className={cn(
				'group/navigation-menu relative z-10 flex max-w-max flex-1 items-center justify-center',
				className
			)}
			{...props}
		>
			{children}
			{viewport && <NavigationMenuViewport />}
		</NavigationMenuPrimitive.Root>
	)
}

function NavigationMenuList({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.List>) {
	return (
		<NavigationMenuPrimitive.List
			data-slot="navigation-menu-list"
			className={cn('group flex flex-1 list-none items-center justify-center space-x-1', className)}
			{...props}
		/>
	)
}

function NavigationMenuItem({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Item>) {
	return (
		<NavigationMenuPrimitive.Item
			data-slot="navigation-menu-item"
			className={cn('relative', className)}
			{...props}
		/>
	)
}
const navigationMenuTriggerStyle = cva(
	'group inline-flex h-10 w-max items-center justify-center rounded-full bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-hidden disabled:pointer-events-none disabled:opacity-50 data-active:bg-accent/50 data-[state=open]:bg-accent/50'
)

function NavigationMenuTrigger({
	className,
	children,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Trigger>) {
	return (
		<NavigationMenuPrimitive.Trigger
			data-slot="navigation-menu-trigger"
			className={cn(navigationMenuTriggerStyle(), 'group', className)}
			{...props}
		>
			{children}
			<Icon
				name="chevron-down"
				className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
			/>
		</NavigationMenuPrimitive.Trigger>
	)
}

function NavigationMenuContent({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Content>) {
	return (
		<NavigationMenuPrimitive.Content
			data-slot="navigation-menu-content"
			className={cn(
				'w left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
				className
			)}
			{...props}
		/>
	)
}

function NavigationMenuViewport({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Viewport>) {
	return (
		<div className={cn('absolute left-0 top-full flex justify-center')}>
			<NavigationMenuPrimitive.Viewport
				data-slot="navigation-menu-viewport"
				className={cn(
					'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
					className
				)}
				{...props}
			/>
		</div>
	)
}

function NavigationMenuLink({
	className,
	...props
  }: React.ComponentProps<typeof NavigationMenuPrimitive.Link>) {
	return (
	  <NavigationMenuPrimitive.Link
		data-slot="navigation-menu-link"
		className={cn(
		  "hover:bg-[#282929] hover:text-gray-100 focus:bg-[#282929] focus:text-gray-100 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400",
	
		  "flex items-center justify-between rounded-full p-3 text-lg transition-all duration-200",
	
		  "[&_svg]:text-gray-700 [&_svg]:size-5",
		  className
		)}
		{...props}
	  />
	);
  }
  
  
function NavigationMenuIndicator({
	className,
	...props
}: ComponentProps<typeof NavigationMenuPrimitive.Indicator>) {
	return (
		<NavigationMenuPrimitive.Indicator
			data-slot="navigation-menu-indicator"
			className={cn(
				'top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
				className
			)}
			{...props}
		>
			<div className="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" />
		</NavigationMenuPrimitive.Indicator>
	)
}

export {
	NavigationMenu,
	NavigationMenuList,
	NavigationMenuItem,
	NavigationMenuContent,
	NavigationMenuTrigger,
	NavigationMenuLink,
	NavigationMenuIndicator,
	NavigationMenuViewport,
	navigationMenuTriggerStyle,
}
