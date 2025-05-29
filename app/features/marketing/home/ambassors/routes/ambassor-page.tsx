// CORE
import type { MetaFunction } from 'react-router'
import type { Route } from '@/rr/features/marketing/home/welcome/routes/+types/welcome-page'

// UTILS
import { remixI18Next } from '@/localization/i18n.server'

// COMPONENTS
import { AmbassadorsWoman } from '../components/ambassadors-woman'
export async function loader({ request }: Route.LoaderArgs) {
    const t = await remixI18Next.getFixedT(request)
    const title = t('TEDI Stack | React Router, Bun, Hono, and much more')
    return { meta: { title } }
}

export default function Index() {
    return (
        <>
            <AmbassadorsWoman/>
        </>
    )
}

export const meta: MetaFunction<typeof loader> = ({ data }) => {
    return [{ title: data?.meta.title }]
}
