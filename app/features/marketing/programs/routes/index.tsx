// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/routes/+types/index'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

export async function loader({ request }: Route.LoaderArgs) {
    const t = await remixI18Next.getFixedT(request)
    const title = t('TEDI Stack | React Router, Bun, Hono, and much more')
    return { meta: { title } }
}
import {AmbassadorBenefits} from '../components/AmbassadorBenefits'
import {ContributorBenefits} from '../components/ContributorBenefits'
export default function Index() {
    return (
        <>
        <AmbassadorBenefits/>
        <ContributorBenefits/>
         
        </>
    )
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [{ title: data?.meta.title }]
}
