// RSS del blog en /rss.xml
import type { APIRoute } from 'astro';
import { respuestaRss } from '../lib/rss';

export const GET: APIRoute = ({ site }) => respuestaRss(site!);
