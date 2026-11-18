import { redirect } from '@sveltejs/kit';

export function load() {
    redirect(302, 'https://discord.com/invite/uasSwW5U2B', {
        external: true
    });
}