import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://discord.com/invite/uasSwW5U2B');
}
