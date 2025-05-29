
import { layout, route, index } from '@react-router/dev/routes'

export const marketingRoutes = [

    layout('routes/layout/layout-public.tsx', [
        index('features/marketing/home/welcome/routes/welcome-page.tsx'),
        route('events', 'features/marketing/home/events/routes/event-page.tsx'),
        route('programs', 'features/marketing/home/programs/routes/program-page.tsx'),
        route('sponsor', 'features/marketing/home/sponsor/routes/sponsor-page.tsx'),
        route('ambassors', 'features/marketing/home/ambassors/routes/ambassor-page.tsx'),
        route('information/:slug', 'features/marketing/home/welcome/routes/information.tsx'),
        route("virtual-summit", "features/marketing/home/events/components/virtual-summit/virtual-summit.tsx"), 
        route('form-mujer-automotriz', "features/marketing/home/welcome/components/form/form-mujer-automotriz.tsx" ),
        route('leadership-in-motion', "features/marketing/home/events/components/leadership-in-motion/leadership-in-motion.tsx")
    ]),

    // SEO
    route('robots.txt', 'features/marketing/seo/routes/robots.ts'),
    route('sitemap.xml', 'features/marketing/seo/routes/sitemap.ts'),
    route('sitemap/:lang.xml', 'features/marketing/seo/routes/sitemap-lang.ts'),
];