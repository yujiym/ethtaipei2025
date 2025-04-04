import type { Route } from './+types/home'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'EPO' }, { name: 'description', content: 'Profile Service powered by ENS' }]
}

export function loader({ context }: Route.LoaderArgs) {
  return { message: context.cloudflare.env.VALUE_FROM_CLOUDFLARE }
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <p>test</p>
}
