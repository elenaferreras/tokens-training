import type { Route } from './+types/home';
import HomePage from '../home/home';

export async function loader () {
  const texts = await import('../build/copies/en/texts.json');

  return { texts };
}

export default function Home({ loaderData } : Route.ComponentProps) {
  return <HomePage texts={loaderData.texts} />
}
