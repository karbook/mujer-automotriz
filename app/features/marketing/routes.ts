import { layout, route, index } from '@react-router/dev/routes'

export const marketingRoutes = [
	// RUTAS CON LAYOUT PÚBLICO (HEADER PERSISTENTE)
	layout('routes/layout/layout-public.tsx', [
		index('features/marketing/home/routes/index.tsx'),
		route('events', 'features/marketing/events/routes/index.tsx'), // ✅ Ahora está dentro del layout
		route('programs', 'features/marketing/programs/routes/index.tsx'), // ✅ Ahora está dentro del layout
		// aquí puedes agregar más rutas como programs, ambassadors, sponsors, etc.
	]),

	// RUTAS SEO (SIN LAYOUT)
	route('robots.txt', 'features/marketing/seo/routes/robots.ts'),
	route('sitemap.xml', 'features/marketing/seo/routes/sitemap.ts'),
	route('sitemap/:lang.xml', 'features/marketing/seo/routes/sitemap-lang.ts'),
]

