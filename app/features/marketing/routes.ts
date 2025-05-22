import { layout, route, index } from '@react-router/dev/routes'

export const marketingRoutes = [
	
	layout('routes/layout/layout-public.tsx', [
		index('features/marketing/home/routes/index.tsx'),
		route('events', 'features/marketing/events/routes/index.tsx'), 
		route('programs', 'features/marketing/programs/routes/index.tsx'), 
		route('sponsor', 'features/marketing/sponsor/routes/index.tsx'), 
		route('ambassors', 'features/marketing/ambassors/routes/index.tsx'), 
		route('information/:slug', 'features/marketing/home/routes/Information.$slug.tsx'),
	]),

	// SEO
	route('robots.txt', 'features/marketing/seo/routes/robots.ts'),
	route('sitemap.xml', 'features/marketing/seo/routes/sitemap.ts'),
	route('sitemap/:lang.xml', 'features/marketing/seo/routes/sitemap-lang.ts'),
]

