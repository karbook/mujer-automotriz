import { useFetcher } from 'react-router'

// UTILS
import { useTranslation } from 'react-i18next'
import { useForm } from '@conform-to/react'
import { parseWithZod } from '@conform-to/zod'
import {
	ColorSchemeSchema,
	useColorScheme,
	useOptimisticColorScheme,
} from '@/routes/resource/color-scheme'
import { z } from 'zod'

// COMPONENTS
import { Icon, type IconName } from './ui/icon'
import { Button } from './ui/button'

export function ColorSchemeSwitch() {
	const fetcher = useFetcher()
	const { t } = useTranslation()

	const colorScheme = useColorScheme()
	const optimisticMode = useOptimisticColorScheme()

	const [_form, fields] = useForm({
		id: 'color-scheme-form',
		onValidate({ formData }) {
			return parseWithZod(formData, {
				schema: z.object({
					colorScheme: ColorSchemeSchema,
				}),
			})
		},
		defaultValue: {
			colorScheme,
		},
	})

	const COLOR_SCHEME_OPTIONS = [
		{
			value: 'light',
			name: t('Light'),
			icon: 'sun',
			bgColor: 'bg-white text-black', // Fondo blanco y texto negro para el tema claro
			hoverColor: 'hover:bg-gray-200', // Fondo gris claro en hover para el tema claro
			iconColor: 'text-black', // Icono negro para el tema claro
		},
		{
			value: 'dark',
			name: t('Dark'),
			icon: 'moon',
			bgColor: 'bg-black text-black', // Fondo negro y texto blanco para el tema oscuro
			hoverColor: 'hover:bg-gray-300 text black', // Fondo gris oscuro en hover para el tema oscuro
			iconColor: 'text-white', // Icono blanco para el tema oscuro
		},
	]


	const mode = optimisticMode ?? colorScheme

	const currentOption = COLOR_SCHEME_OPTIONS.find(option => option.value === mode)
	const otherOption = COLOR_SCHEME_OPTIONS.find(option => option.value !== mode)

	return (
		<fetcher.Form method="POST" action="/r/color-scheme">
			<Button
				name={fields.colorScheme.name}
				value={otherOption?.value}
				variant="ghost"
				type="submit"
				size="icon"
				aria-label={`Alternar tema a ${otherOption?.name}`}
				title={`Alternar tema a ${otherOption?.name}`}
				className={`${currentOption?.bgColor} ${currentOption?.hoverColor} p-3 rounded-full transition-colors duration-200`} // Aplica el fondo de hover
			>
				<Icon
					name={currentOption?.icon as IconName}
					className={`${currentOption?.iconColor
						} ${mode === 'dark' ? 'hover:text-black' : 'hover:text-black'}`} // Aplica hover:text-black tanto para el tema oscuro como el claro
				/>
			</Button>
		</fetcher.Form>

	)
}
