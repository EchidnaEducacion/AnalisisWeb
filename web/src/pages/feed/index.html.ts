// El mismo RSS en /feed/, la dirección de WordPress. Es una copia y no una redirección porque los
// lectores de RSS no siguen las redirecciones HTML; se genera como feed/index.html para que GitHub
// Pages lo sirva en /feed/
import type { APIRoute } from 'astro';
import { respuestaRss } from '../../lib/rss';

export const GET: APIRoute = ({ site }) => respuestaRss(site!);
