// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'


import EventsPage from '../components/event-page'
import EventSection from '../components/event-page-past'
import EventWoman from '../components/event-woman'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('TEDI Stack | React Router, Bun, Hono, and much more')
	return { meta: { title } }
}

export default function Index() {
	return (
		<>
			<EventsPage/>
			<EventSection/>
			<EventWoman/>
		</>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.meta.title }]
}
