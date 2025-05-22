// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'


import EventsPage from '../components/EventUpcomingList'
import EventSection from '../components/EventMovementLeadership'
import EventWoman from '../components/EventWomenSummit'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('Women in Automotive | Empowering Women in the Automotive Industry - Free Training')
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
