import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(302, 'https://fluxer.gg/V6pyrFce', {
        external: true
    });
}