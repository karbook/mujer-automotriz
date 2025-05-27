// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/welcome/routes/+types/index'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'


import {EventUpcomingList} from '../components/event-upcoming-list'
import {EventMovementLeadership} from '../components/event-movement-leadership'
import {EventWomanSummit} from '../components/event-women-summit'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('Women in Automotive | Empowering Women in the Automotive Industry - Free Training')
	return { meta: { title } }
}

export default function Index() {
	return (
		<>
			<EventUpcomingList/>
			<EventMovementLeadership/>
			<EventWomanSummit/>
		</>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.meta.title }]
}
