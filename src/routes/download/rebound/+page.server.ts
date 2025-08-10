import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(302, 'https://github.com/IviriusCommunity/Rebound/releases/download/v0.0.10-Beta/ReboundHubInstaller.zip');
}
