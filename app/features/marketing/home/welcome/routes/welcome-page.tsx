// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/welcome/routes/+types/welcome-page'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

// COMPONENTS
import {AmbassadorsIntroCarousel} from '../components/ambassadors-intro-carousel'
import {OrganizersSpotlight} from '../components/organizers-spotlight'
import {AboutMujerAutomotriz} from '../components/about-mujer-automotriz'
import {CorporateSponsorships} from '../components/corporate-sponsorships'
import {SponsorsPresentation} from '../components/sponsors-presentation'
export async function loader({ request }: Route.LoaderArgs) {
	const t = await remixI18Next.getFixedT(request)
	const title = t('Mujer Automotriz')
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
