// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

// COMPONENTS
import {AmbassadorsIntroCarousel} from '../components/AmbassadorsIntroCarousel'
import {OrganizersSpotlight} from '../components/OrganizersSpotlight'
import {AboutMujerAutomotriz} from '../components/AboutMujerAutomotriz'
import {CorporateSponsorships} from '../components/CorporateSponsorships'
import {SponsorsPresentation} from '../components/SponsorsPresentation'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('TEDI Stack | React Router, Bun, Hono, and much more')
	return { meta: { title } }
}

export default function Index() {
	return (
		<>
			<AmbassadorsIntroCarousel />
			<OrganizersSpotlight />
			<AboutMujerAutomotriz/>
			<CorporateSponsorships/>
			<SponsorsPresentation/>
		</>
	)
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
	return [{ title: data?.meta.title }]
}
